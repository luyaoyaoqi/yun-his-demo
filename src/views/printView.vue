<template>
    <div class="print-container">
        <div class="print-content">
            <PrintMedicalTemplate2 :paperSize="printSetting.paperSize" :orientation="printSetting.orientation"
                :containerPaddingStyle="printSetting.containerPaddingStyle" />
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
                    <el-button type="primary" @click="handlePrint" size="small">打印</el-button>
                    <el-button @click="resetSettings" size="small">重置</el-button>
                </el-form-item>
            </el-form>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

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

// 打印处理
const handlePrint = () => {
    // window.print();
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
</style>