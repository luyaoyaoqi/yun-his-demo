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
                <el-form-item label="纸张大小" label-width="80px" label-position="left">
                    <el-select v-model="printSetting.paperSize" placeholder="选择纸张大小" size="small"
                        @change="handlePaperSizeChange">
                        <el-option label="A4" value="a4" />
                        <el-option label="A5" value="a5" />
                        <el-option label="B6" value="b6" />
                        <el-option label="Letter" value="letter" />
                    </el-select>
                </el-form-item>

                <el-form-item label="方向" label-width="80px" label-position="left">
                    <el-radio-group v-model="printSetting.orientation" size="small" @change="handleOrientationChange">
                        <el-radio-button label="portrait">纵向</el-radio-button>
                        <el-radio-button label="landscape">横向</el-radio-button>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="边距" label-width="80px" label-position="left">
                    <el-input-number v-model="paddingValue" :min="5" :max="50" :step="1" size="small"
                        @change="updatePaddingStyle" />
                </el-form-item>

                <el-form-item label="打印机" label-width="80px" label-position="left">
                    <el-select v-model="selectedPrinter" placeholder="选择打印机" size="small">
                        <el-option v-for="printer in printerList" :key="printer.name" :label="printer.name"
                            :value="printer.name" />
                    </el-select>
                </el-form-item>

                <el-form-item label="打印控制" label-width="80px" label-position="left">
                   <el-switch v-model="isPreview" active-text="预览" inactive-text="打印" />
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="print" size="small">确定</el-button>
                    <el-button @click="resetSettings" size="small">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, nextTick, onMounted, computed } from 'vue';
import PrintMedicalTemplate2 from '@/components/print/PrintMedicalTemplate2.vue';
import { el } from 'element-plus/es/locales.mjs';

const printRef = ref<HTMLDivElement>();

const paddingDefault = 5;
const printDefaultSetting = {
    paperSize: 'a5',
    orientation: 'portrait',
    containerPaddingStyle: `padding: 0mm;`
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
const selectedTemplate = ref('');

// 打印机选择相关
const selectedPrinter = ref('');
const printerList = ref<{ name: string }[]>([]);

// 动态组件计算属性
const printTemplateComponent = computed(() => {
    // 可以根据需要添加更多模板组件
    const components: Record<string, any> = {
        PrintMedicalTemplate2
    };
    return components[selectedTemplate.value] || null;
});

// 更新边距样式
const updatePaddingStyle = (value: number) => {
    printSetting.containerPaddingStyle = `padding: ${value - paddingDefault}mm;`;
    setTimeout(() => {
        createPrintPage()
    }, 100)
};

// 重置设置
const resetSettings = () => {
    printSetting.paperSize = printDefaultSetting.paperSize;
    printSetting.orientation = printDefaultSetting.orientation;
    printSetting.containerPaddingStyle = printDefaultSetting.containerPaddingStyle;
    paddingValue.value = 5;
    // 更新打印页面
    setTimeout(() => {
        createPrintPage()
    }, 100)
};

// 打印模板处理
const iframeContent = ref<HTMLElement | null>(null);
const printPages = ref<string[]>([])
const createPrintPage = () => {
    //@ts-ignore
    const printElement = printRef.value.$el;

    // 获取所有子元素（即所有页面）
    const pageElements = Array.from(printElement.children) as HTMLElement[];

    //@ts-ignore
    const printStyle1 = document.querySelector('style[data-vite-dev-id*="PrintContainer.vue"]')?.outerHTML || '';
    //@ts-ignore
    const printStyle2 = document.querySelector(`style[data-vite-dev-id*="${selectedTemplate.value}.vue"]`)?.outerHTML || '';

    // 清空之前的页面
    printPages.value = [];

    // 为每个子页面创建独立的内容
    pageElements.forEach((pageElement, index) => {
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
                ${printStyle1}
                ${printStyle2}
            </head>
            <body>
                ${pageElement.outerHTML}
              
            </body>
            </html>
        `;
        printPages.value.push(singlePageContent);
    });


    // dialogIframeVisible.value = true

    nextTick(() => {
        document.querySelectorAll('iframe').forEach(iframe => {
            iframe.onload = () => {
                //对iframeContent进行显示缩放
                //恢复默认缩放
                iframeContent.value!.style.zoom = '1'

                //设置ifrmae的宽高
                //设置ifrmae的宽高
                const containerElement = iframe.contentWindow?.document.body.querySelector('.print-container');
                const iframeHeight = (containerElement as HTMLElement)?.offsetHeight || 0;
                const iframeWidth = (containerElement as HTMLElement)?.offsetWidth || 0;

                // 计算高度和宽度的缩放比例，20、60是临时调整，根据实际需求调整
                iframe.style.height = `${iframeHeight}px`
                iframe.style.width = `${iframeWidth}px`
                const containerWidth = iframeContent.value!.offsetWidth;
                const containerHeight = iframeContent.value!.offsetHeight;
                const heightRatio = containerHeight > 0 ? (containerHeight - 20) / iframeHeight : 1;
                const widthRatio = containerWidth > 0 ? (containerWidth - 80) / iframeWidth : 1;

                // 取两者的最小值作为最终缩放比例
                const finalRatio = Math.min(heightRatio, widthRatio);

                if (finalRatio < 1) {
                    iframeContent.value!.style.zoom = finalRatio.toFixed(2).toString()
                }

            }
        })
    })
};

// 获取打印机列表
const getPrinterList = () => {
    // 检查是否已引入C-Lodop
    if (!(window as any).getCLodop) {
        // 动态引入C-Lodop
        loadCLodop(() => {
            loadPrinters();
        });
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
    script.onload = () => {
        callback();
    };
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

        // 遍历获取所有打印机名称
        for (let i = 0; i < printerCount; i++) {
            const printerName = LODOP.GET_PRINTER_NAME(i);
            printerList.value.push({ name: printerName });
        }

        // 设置默认打印机
        if (printerList.value.length > 0 && !selectedPrinter.value) {
            // 使用第一个打印机作为默认打印机
            selectedPrinter.value = printerList.value[0].name;
        }
    } catch (error) {
        console.error('获取打印机列表失败:', error);
    }
};

onMounted(() => {
    selectedTemplate.value = 'PrintMedicalTemplate2'

    // 获取打印机列表
    getPrinterList();

    // 创建打印页面
    nextTick(() => {
        setTimeout(() => {
            createPrintPage()
        }, 100)
    })
});

const handlePaperSizeChange = () => {
    // 更新打印页面
    setTimeout(() => {
        createPrintPage()
    }, 100)
}
const handleOrientationChange = () => {
    // 更新打印页面
    setTimeout(() => {
        createPrintPage()
    }, 100)
}

const isPreview = ref(true)
//打印
const print = () => {
    // 检查是否已引入C-Lodop
    if (!(window as any).getCLodop) {
        // 动态引入C-Lodop
        loadCLodop(() => {
            setupAndPrint();
        });
    } else {
        setupAndPrint();
    }
}

// 设置并执行打印
const setupAndPrint = () => {
    const LODOP = (window as any).getCLodop();
    if (!LODOP) {
        console.error('未能获取C-Lodop对象');
        return;
    }

    // 根据当前设置配置纸张
    const paperSizeMap: Record<string, { width: number; height: number; name: string }> = {
        'a4': { width: 210, height: 297, name: 'A4' },
        'a5': { width: 148, height: 210, name: 'A5' },
        'b6': { width: 125, height: 176, name: 'B6' },
        'letter': { width: 216, height: 279, name: 'Letter' }
    };
    const paper = paperSizeMap[printSetting.paperSize];

    // 初始化打印任务
    LODOP.PRINT_INITA(0, 0, `${paper.width}mm`, `${paper.height}mm`, "打印预览");

    // 设置打印机
    if (selectedPrinter.value) {
        LODOP.SET_PRINTER_INDEX(selectedPrinter.value);
    }

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

    // 打印预览
    if (isPreview.value) {
        LODOP.PREVIEW();

    } else {
        LODOP.PRINT();
    }
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