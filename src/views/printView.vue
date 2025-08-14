<template>
    <div class="print-container">
        <div class="print-content">
            <component :is="printTemplateComponent" ref="printRef" :paperSize="printSetting.paperSize"
                :orientation="printSetting.orientation" :containerPaddingStyle="printSetting.containerPaddingStyle" />
        </div>
        <div class="iframe-content" ref="iframeContent" v-if="printPages.length > 0">
            <iframe v-for="(page, index) in printPages" :key="index" :srcdoc="page" class="single-iframe" />
        </div>
        <div class="print-editor-box">
            <el-form>
                <el-form-item label="打印模板" label-width="80px" label-position="left">
                    <el-select v-model="selectedTemplate" placeholder="选择模板" @change="handlePaperSizeChange">
                        <el-option label="示例模板1" value="PrintMedicalTemplate2" />
                    </el-select>
                </el-form-item>
                <el-form-item label="纸张大小" label-width="80px" label-position="left">
                    <el-select v-model="printSetting.paperSize" placeholder="选择纸张大小" @change="handlePaperSizeChange">
                        <el-option label="A4" value="a4" />
                        <el-option label="A5" value="a5" />
                        <el-option label="B6" value="b6" />
                        <el-option label="Letter" value="letter" />
                    </el-select>
                </el-form-item>

                <el-form-item label="方向" label-width="80px" label-position="left">
                    <el-radio-group v-model="printSetting.orientation" @change="handleOrientationChange">
                        <el-radio-button label="纵向" value="portrait" />
                        <el-radio-button label="横向" value="landscape" />
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="边距" label-width="80px" label-position="left">
                    <el-input-number v-model="paddingValue" :min="5" :max="50" :step="1" @change="updatePaddingStyle" />
                </el-form-item>

                <el-form-item label="打印机" label-width="80px" label-position="left">
                    <el-select v-model="selectedPrinter" placeholder="选择打印机">
                        <el-option v-for="printer in printerList" :key="printer.name" :label="printer.name"
                            :value="printer.name">
                            <span>{{ printer.name }}</span>
                            <el-tag v-if="printer.isPhysical" size="small" type="warning"
                                style="margin-left: 10px;">打印机</el-tag>
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="打印控制" label-width="80px" label-position="left">
                    <el-switch v-model="isPreview" active-text="预览" inactive-text="打印" />
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="print">打印任务</el-button>
                    <el-button @click="resetSettings">重置</el-button>
                    <el-button @click="exportHTML">导出HTML</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, nextTick, onMounted, computed, onUnmounted, watchEffect } from 'vue';
import PrintMedicalTemplate2 from '@/components/print/PrintMedicalTemplate2.vue';

// 类型定义
interface PaperSize {
    width: number;
    height: number;
    name: string;
}

interface BleedArea {
    top: number;
    right: number;
    bottom: number;
    left: number;
}

interface PrinterInfo {
    name: string;
    isPhysical: boolean; // 是否是真实打印机
    defaultPaperSize?: string; // 默认纸张大小
    bleedArea?: BleedArea; // 不可打印区域（出血区域）
}

// 引用
const printRef = ref<HTMLDivElement>();
const iframeContent = ref<HTMLElement | null>(null);
const printPages = ref<string[]>([]);

// 常量
const paddingDefault = 5;
const printDefaultSetting = {
    paperSize: 'a4',
    orientation: 'portrait',
    containerPaddingStyle: `padding: 0mm;`
};

const paperSizeMap: Record<string, PaperSize> = {
    'a4': { width: 210, height: 297, name: 'A4' },
    'a5': { width: 148, height: 210, name: 'A5' },
    'b6': { width: 125, height: 176, name: 'B6' },
    'letter': { width: 216, height: 279, name: 'Letter' }
};

// 打印设置
const printSetting = reactive({
    paperSize: printDefaultSetting.paperSize,
    orientation: printDefaultSetting.orientation,
    containerPaddingStyle: printDefaultSetting.containerPaddingStyle,
});

// 边距值（用于滑块）
const paddingValue = ref(paddingDefault);

// 当前选中的模板
const selectedTemplate = ref('PrintMedicalTemplate2');

// 打印机选择相关
const selectedPrinter = ref('');
const printerList = ref<PrinterInfo[]>([]);
const isPreview = ref(true);

// 动态组件计算属性
const printTemplateComponent = computed(() => {
    const components: Record<string, any> = {
        PrintMedicalTemplate2
    };
    return components[selectedTemplate.value] || null;
});

// 更新边距样式
const updatePaddingStyle = (value: number | null) => {
    if (value === null) return;
    printSetting.containerPaddingStyle = `padding: ${value - paddingDefault}mm;`;
    setTimeout(createPrintPage, 100);
};

// 重置设置
const resetSettings = () => {
    printSetting.paperSize = printDefaultSetting.paperSize;
    printSetting.orientation = printDefaultSetting.orientation;
    printSetting.containerPaddingStyle = printDefaultSetting.containerPaddingStyle;
    paddingValue.value = paddingDefault;

    // 更新打印页面
    setTimeout(createPrintPage, 100);
};

// 打印模板处理
const createPrintPage = () => {
    if (!printRef.value) return;

    // @ts-ignore
    const printElement = printRef.value.$el as HTMLElement;

    // 获取所有子元素（即所有页面）
    const pageElements = Array.from(printElement.children) as HTMLElement[];

    // @ts-ignore
    const printStyle1 = document.querySelector('style[data-vite-dev-id*="PrintContainer.vue"]')?.outerHTML || '';
    // @ts-ignore
    const printStyle2 = document.querySelector(`style[data-vite-dev-id*="${selectedTemplate.value}.vue"]`)?.outerHTML || '';

    // 清空之前的页面
    printPages.value = [];

    // 为每个子页面创建独立的内容
    pageElements.forEach((pageElement, index) => {
        // 创建一个清理后的元素副本
        const cleanPageElement = pageElement.cloneNode(true) as HTMLElement;

        // 移除所有 data-v- 开头的属性
        const allElements = [cleanPageElement, ...Array.from(cleanPageElement.querySelectorAll('*'))];
        allElements.forEach(element => {
            if (element instanceof HTMLElement) {
                // 获取元素的所有属性
                const attributes = Array.from(element.attributes);
                attributes.forEach(attr => {
                    // 如果属性名以 data-v- 开头，则移除
                    if (attr.name.startsWith('data-v-')) {
                        element.removeAttribute(attr.name);
                    }
                });

                // 根据内容是否不为空，是否包含class ="item" ，来添加data-field属性
                const elementClasses = Array.from(element.classList);
                const hasItemClass = elementClasses.includes('item');

                // 检查元素内容是否不为空（包括文本内容和子元素）
                const hasContent = element.children.length == 0 && (element.textContent && element.textContent.trim() !== '');

                // 如果元素包含'item'类或者内容不为空，则添加data-field属性
                if (hasItemClass || hasContent) {
                    element.setAttribute('data-field', ' ');
                }
            }
        });

        // 清理样式中的 data-v- 标识
        let cleanPrintStyle1 = printStyle1;
        let cleanPrintStyle2 = printStyle2;

        // 移除样式中的 scoped 标识选择器
        if (cleanPrintStyle1) {
            cleanPrintStyle1 = cleanPrintStyle1.replace(/\[data-v-[a-f0-9]+\]/g, '');
            // 移除 data-vite-dev-id 属性
            cleanPrintStyle1 = cleanPrintStyle1.replace(/data-vite-dev-id="[^"]*"/g, '');
        }
        if (cleanPrintStyle2) {
            cleanPrintStyle2 = cleanPrintStyle2.replace(/\[data-v-[a-f0-9]+\]/g, '');
            // 移除 data-vite-dev-id 属性
            cleanPrintStyle2 = cleanPrintStyle2.replace(/data-vite-dev-id="[^"]*"/g, '');
        }

        const singlePageContent = `
            <!DOCTYPE html>
            <html lang="zh-CN">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">                
                <title>打印预览 - 第${index + 1}页</title>
                <style>
                    *, *::before, *::after {
                        box-sizing: border-box;
                        margin: 0;
                    }
                    body {
                        padding: 0;
                        overflow: hidden;
                    }
                    .print-container{
                        margin-left: auto;
                        margin-right: auto;
                    }
                </style>
                ${cleanPrintStyle1}
                ${cleanPrintStyle2}
            </head>
            <body>
                ${cleanPageElement.outerHTML}
            </body>
            </html>
        `;
        printPages.value.push(singlePageContent);
    });

    nextTick(() => {
        document.querySelectorAll('iframe').forEach(iframe => {
            iframe.onload = () => {
                // 对iframeContent进行显示缩放
                if (!iframeContent.value) return;

                // 恢复默认缩放
                iframeContent.value.style.zoom = '1';

                // 设置iframe的宽高
                const containerElement = iframe.contentWindow?.document.body.querySelector('.print-container') as HTMLElement;
                const iframeHeight = containerElement?.offsetHeight || 0;
                const iframeWidth = containerElement?.offsetWidth || 0;

                // 设置iframe尺寸
                iframe.style.height = `${iframeHeight}px`;
                iframe.style.width = `${iframeWidth}px`;

                // 计算缩放比例
                const containerWidth = iframeContent.value.offsetWidth;
                const containerHeight = iframeContent.value.offsetHeight;
                const heightRatio = containerHeight > 0 ? (containerHeight - 20) / iframeHeight : 1;
                const widthRatio = containerWidth > 0 ? (containerWidth - 80) / iframeWidth : 1;

                // 取两者的最小值作为最终缩放比例
                const finalRatio = Math.min(heightRatio, widthRatio);
                if (finalRatio < 1) {
                    iframeContent.value.style.zoom = finalRatio.toFixed(2).toString();
                }
            };
        });
    });
};

// 获取打印机列表
const getPrinterList = () => {
    // 检查是否已引入C-Lodop
    if (!(window as any).getCLodop) {
        // 动态引入C-Lodop
        loadCLodop(loadPrinters);
    } else {
        loadPrinters();
    }
};

// 加载CLodop
const loadCLodop = (callback: () => void) => {
    // 检查是否已经添加了脚本
    if (document.querySelector('script[src="http://localhost:8000/CLodopfuncs.js?priority=1"]')) {
        // 如果已经添加了脚本，等待其加载完成
        const checkCLodop = setInterval(() => {
            if ((window as any).getCLodop) {
                clearInterval(checkCLodop);
                callback();
            }
        }, 100);
        return;
    }

    // 动态引入C-Lodop
    const script = document.createElement('script');
    script.src = 'http://localhost:8000/CLodopfuncs.js?priority=1';
    script.onload = callback;
    document.head.appendChild(script);
};

// 加载打印机列表
const loadPrinters = () => {
    try {
        const LODOP = (window as any).getCLodop();
        if (!LODOP) {
            console.warn('未能获取C-Lodop对象');
            return;
        }

        // 清空打印机列表
        printerList.value = [];

        // 获取打印机数量
        const printerCount = LODOP.GET_PRINTER_COUNT();

        // 遍历获取所有打印机名称及相关信息
        for (let i = 0; i < printerCount; i++) {
            const printerName = LODOP.GET_PRINTER_NAME(i);


            // 判断是否是真实打印机（基于名称特征）
            // 这里只是一个示例判断逻辑，实际应用中可能需要更复杂的判断
            const isPhysical = !(
                printerName.includes('PDF') ||
                printerName.includes('XPS') ||
                printerName.includes('Fax') ||
                printerName.includes('虚拟') ||
                printerName.includes('Virtual') ||
                printerName.includes('Microsoft Print to PDF') ||
                printerName.includes('Adobe') ||
                printerName.includes('Send to')
            );

            // 构造打印机信息对象
            const printerInfo: PrinterInfo = {
                name: printerName,
                isPhysical: isPhysical,
                // 实际应用中可以从LODOP获取更多打印机详细信息
                defaultPaperSize: undefined,
                bleedArea: undefined
            };

            printerList.value.push(printerInfo);
        }

        // 设置默认打印机
        if (printerList.value.length > 0 && !selectedPrinter.value) {
            selectedPrinter.value = printerList.value.filter(item => item.isPhysical)[0].name || printerList.value[0].name;
        }
    } catch (error) {
        console.error('获取打印机列表失败:', error);
    }
};

// 使用 watchEffect 监听 printRef 和其内容的变化
let observer: MutationObserver | null = null;
let styleObservers: MutationObserver[] = [];

onMounted(() => {
    selectedTemplate.value = 'PrintMedicalTemplate2';

    // 获取打印机列表
    getPrinterList();

    // 创建打印页面
    nextTick(() => {
        setTimeout(createPrintPage, 100);
    });
});

watchEffect(() => {
    if (printRef.value) {
        // 断开之前的监听器
        if (observer) {
            observer.disconnect();
        }

        // 断开所有样式观察器
        if (styleObservers) {
            styleObservers.forEach(obs => obs.disconnect());
            styleObservers = [];
        }

        nextTick(() => {
            // @ts-ignore
            const printElement = printRef.value.$el as HTMLElement;
            if (printElement) {
                observer = new MutationObserver(() => {
                    // 组件内容发生变化时重新生成打印页面
                    setTimeout(createPrintPage, 100);
                });

                // 监听组件DOM变化
                observer.observe(printElement, {
                    childList: true,
                    subtree: true,
                    attributes: true,
                    attributeFilter: ['style', 'class'],
                    attributeOldValue: true,
                    characterData: true,
                    characterDataOldValue: true
                });

                // 监听所有相关的组件样式标签变化
                try {
                    const styleElements = document.querySelectorAll(`style[data-vite-dev-id*="${selectedTemplate.value}"]`);
                    if (styleElements.length > 0) {
                        styleObservers = [];

                        styleElements.forEach(styleElement => {
                            try {
                                const styleObserver = new MutationObserver(() => {
                                    setTimeout(createPrintPage, 100);
                                });

                                styleObserver.observe(styleElement, {
                                    childList: true,
                                    subtree: true,
                                    characterData: true,
                                    characterDataOldValue: true
                                });


                                styleObservers.push(styleObserver);
                            } catch (observeError) {
                                console.warn('Failed to observe style element:', observeError);
                            }
                        });
                    }
                } catch (queryError) {
                    console.warn('Failed to query style elements:', queryError);
                }
            }
        });
    }
});

// 在组件卸载时断开监听
onUnmounted(() => {
    if (observer) {
        observer.disconnect();
        observer = null;
    }
    // 断开所有样式观察器的连接
    styleObservers.forEach(styleObserver => {
        styleObserver.disconnect();
    });
    styleObservers = [];
});

// 纸张大小变更处理
const handlePaperSizeChange = () => {
    setTimeout(createPrintPage, 100);
};

// 方向变更处理
const handleOrientationChange = () => {
    setTimeout(createPrintPage, 100);
};

// 打印处理
const print = () => {
    // 检查是否已引入C-Lodop
    if (!(window as any).getCLodop) {
        // 动态引入C-Lodop
        loadCLodop(setupAndPrint);
    } else {
        setupAndPrint();
    }
};

// 设置并执行打印
const setupAndPrint = () => {
    const LODOP = (window as any).getCLodop();
    if (!LODOP) {
        console.error('未能获取C-Lodop对象');
        return;
    }

    const paper = paperSizeMap[printSetting.paperSize];

    // 初始化打印任务
    LODOP.PRINT_INITA(0, 0, `${paper.width}mm`, `${paper.height}mm`, "打印任务");

    // 设置打印机
    if (selectedPrinter.value) {
        LODOP.SET_PRINTER_INDEX(selectedPrinter.value);
    }

    // 设置纸张和方向
    if (paper) {
        if (printSetting.orientation === 'landscape') {
            // 横向
            LODOP.SET_PRINT_PAGESIZE(2, `${paper.width}mm`, `${paper.height}mm`, paper.name);
        } else {
            // 纵向
            LODOP.SET_PRINT_PAGESIZE(1, `${paper.width}mm`, `${paper.height}mm`, paper.name);
        }
    }

    // 核心：开启整宽适配
    LODOP.SET_PRINT_MODE("FULL_PAGE", true);

    // 添加打印内容 - 从 iframe 中获取
    const iframes = document.querySelectorAll('iframe');

    iframes.forEach((iframe, index) => {
        if (index > 0) {
            LODOP.NewPage();
        }

        // 从 iframe 中获取内容
        const iframeDocument = iframe.contentDocument || iframe.contentWindow?.document;
        if (iframeDocument) {
            // 获取整个 iframe 的 HTML 内容
            const htmlContent = iframeDocument.documentElement.outerHTML;
            // 添加HTML内容
            LODOP.ADD_PRINT_HTM(0, 0, "100%", "100%", htmlContent);
        }
    });

    // 开启全页缩放
    LODOP.SET_PRINT_MODE("KEEP_ASPECT_RATIO", true);

    // 根据开关决定是预览还是直接打印
    if (isPreview.value) {
        LODOP.PREVIEW();
    } else {
        LODOP.PRINT();
    }
};

// 导出HTML功能
const exportHTML = () => {
    if (printPages.value.length === 0) {
        console.warn('没有可导出的内容');
        return;
    }

    // 创建一个包含所有页面的HTML文件
    const allPagesHTML = printPages.value
    allPagesHTML.forEach(pageHTML => {
        // 创建下载链接
        const blob = new Blob([pageHTML], { type: 'text/html;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `打印内容_${new Date().getTime()}.html`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    })
};
</script>

<style lang="less" scoped>
.print-container {
    display: flex;
    width: 100%;
    height: calc(100vh - 100px);

    .print-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;
        visibility: hidden;
        width: 0;
    }

    .print-editor-box {
        padding: 20px;
        background-color: #f5f5f5;
        border-radius: 4px;
        margin-bottom: 24px;
        width: 320px;
        flex: 0 0 320px;
        display: flex;
        flex-direction: column;
    }
}

.iframe-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;

    .single-iframe {
        width: auto;
        height: auto;
        margin-bottom: 20px;
        box-sizing: content-box;
        flex: 0 0 auto;
        padding: 5mm;
        background: white;
    }
}
</style>