<template>
    <div class="print-container">
        <div class="print-content">
            <PrintMedicalTemplate2 ref="printRef" :paperSize="printSetting.paperSize"
                :orientation="printSetting.orientation" :containerPaddingStyle="printSetting.containerPaddingStyle" />
        </div>
        <div class="print-editor-box">
            <el-form>
                <el-form-item label="纸张大小" label-width="80px" label-position="left">
                    <el-select v-model="printSetting.paperSize" placeholder="选择纸张大小" size="small">
                        <el-option label="A4" value="a4" />
                        <el-option label="A5" value="a5" />
                        <el-option label="B6" value="b6" />
                        <el-option label="Letter" value="letter" />
                    </el-select>
                </el-form-item>

                <el-form-item label="方向" label-width="80px" label-position="left">
                    <el-radio-group v-model="printSetting.orientation" size="small">
                        <el-radio-button label="portrait">纵向</el-radio-button>
                        <el-radio-button label="landscape">横向</el-radio-button>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="边距" label-width="80px" label-position="left">
                    <el-input-number v-model="paddingValue" :min="0" :max="50" :step="1" size="small"
                        @change="updatePaddingStyle" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="createPrintPage" size="small">生成打印页</el-button>
                    <el-button @click="resetSettings" size="small">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-dialog v-model="dialogIframeVisible" title="打印预览" width="80%" align-center>
            <iframe class="iframe-container" :srcdoc="printPage" />
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
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
};

// 重置设置
const resetSettings = () => {
    printSetting.paperSize = printDefaultSetting.paperSize;
    printSetting.orientation = printDefaultSetting.orientation;
    printSetting.containerPaddingStyle = printDefaultSetting.containerPaddingStyle;
    paddingValue.value = 5;
};

// 打印模板处理
const dialogIframeVisible = ref(false)
const printPage = ref('')
const createPrintPage = () => {
    //@ts-ignore
    // console.log(printRef.value.$el.outerHTML)
    const printDom = printRef.value.$el.outerHTML
    //@ts-ignore
    const printStyle1 = document.querySelector('style[data-vite-dev-id*="PrintContainer.vue"]').outerHTML
    // console.log(document.querySelector('style[data-vite-dev-id*="PrintContainer.vue"]').outerHTML)
    //@ts-ignore
    const printStyle2 = document.querySelector('style[data-vite-dev-id*="PrintMedicalTemplate2.vue"]').outerHTML
    // console.log(document.querySelector('style[data-vite-dev-id*="PrintMedicalTemplate2.vue"]').outerHTML)
    printPage.value = `
        <!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">                
            <title>打印预览</title>
            <style>
                *, *::before, *::after {
                    box-sizing: border-box;
                    margin: 0;
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
            ${printDom}
        </body>
        </html>
    `
    console.log(printPage.value)
    dialogIframeVisible.value = true
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
        justify-content: center;
        padding: 16px;
        overflow: auto;

        >::after {
            content: '';
            display: block;
            height: 16px;
        }
    }

    .print-editor-box {
        padding: 20px;
        background-color: #f5f5f5;
        border-radius: 4px;
        margin-bottom: 24px;
        width: 240px;
        display: flex;
        flex-direction: column;

    }
}

.iframe-container {
    width: 100%;
    height: calc(100vh - 200px);
}
</style>