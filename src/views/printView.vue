<template>
    <div class="print-container">
        <div class="print-content">
            <PrintMedicalTemplate2 ref="printRef" :paperSize="printSetting.paperSize"
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
                    <el-input-number v-model="paddingValue" :min="0" :max="50" :step="1" size="small"
                        @change="updatePaddingStyle" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="createPrintPage" size="small">打印弹窗</el-button>
                    <el-button @click="resetSettings" size="small">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, nextTick, onMounted } from 'vue';
const printRef = ref<HTMLDivElement>();

const paddingDefault = 5;
const printDefaultSetting = {
    paperSize: 'a5',
    orientation: 'portrait',
    containerPaddingStyle: `padding: ${paddingDefault}mm;`
};

// 打印设置
const printSetting = reactive({
    paperSize: printDefaultSetting.paperSize,
    orientation: printDefaultSetting.orientation,
    containerPaddingStyle: printDefaultSetting.containerPaddingStyle,
});

// 边距值（用于滑块）
const paddingValue = ref(paddingDefault);

// 更新边距样式
const updatePaddingStyle = (value: number) => {
    printSetting.containerPaddingStyle = `padding: ${value}mm;`;
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
    const printStyle2 = document.querySelector('style[data-vite-dev-id*="PrintMedicalTemplate2.vue"]')?.outerHTML || '';

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
                        display: flex;
                        justify-content: center;
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
    let iframeHeight: number = 0;

    // dialogIframeVisible.value = true

    nextTick(() => {

        document.querySelectorAll('iframe').forEach(iframe => {
            iframe.onload = () => {
                iframeHeight = iframe.contentWindow?.document.body.scrollHeight || 0
                iframe.style.height = `${iframeHeight}px`

                //对iframeContent进行显示缩放
                iframeContent.value!.style.zoom = '1'
                if (iframeHeight > iframeContent.value!.offsetHeight) {
                    const ratio = (iframeContent.value!.offsetHeight - 20) / iframeHeight;
                    iframeContent.value!.style.zoom = ratio.toFixed(2).toString()
                }

            }
        })
    })
};
onMounted(() => {
    // 创建打印页面
    nextTick(() => {
        createPrintPage()
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
        width: 100%;
        height: auto;
        margin-bottom: 20px;
        box-sizing: content-box;
        flex: 0 0 auto;
    }

}
</style>