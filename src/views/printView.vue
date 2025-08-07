<template>
    <div class="print-editor-box">
        <el-form>
            <el-row :gutter="20" align="middle">
                <el-col :span="4">
                    <el-button type="primary" @click="handlePrint" :icon="Printer">打印</el-button>
                </el-col>

                <el-col :span="5">
                    <el-form-item label="纸张大小">
                        <el-select v-model="printSetting.paperSize" placeholder="选择纸张大小" size="small">
                            <el-option label="A4" value="a4" />
                            <el-option label="A5" value="a5" />
                            <el-option label="B6" value="b6" />
                            <el-option label="Letter" value="letter" />
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="5">
                    <el-form-item label="方向">
                        <el-radio-group v-model="printSetting.orientation" size="small">
                            <el-radio-button label="portrait">纵向</el-radio-button>
                            <el-radio-button label="landscape">横向</el-radio-button>
                        </el-radio-group>
                    </el-form-item>
                </el-col>

                <el-col :span="8">
                    <el-form-item label="边距">
                        <el-slider v-model="paddingValue" :min="0" :max="50" :step="1" show-input size="small"
                            @change="updatePaddingStyle" />
                    </el-form-item>
                </el-col>

                <el-col :span="2">
                    <el-button @click="resetSettings" size="small">重置</el-button>
                </el-col>
            </el-row>
        </el-form>
    </div>

    <PrintMedicalTemplate2 :paperSize="printSetting.paperSize" :orientation="printSetting.orientation"
        :containerPaddingStyle="printSetting.containerPaddingStyle" />
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { Printer } from '@element-plus/icons-vue';

const paddingDefault = 5;
const printDefaultSetting = {
    paperSize: 'a5',
    orientation: 'portrait',
    containerPaddingStyle: `padding: ${paddingDefault}mm;`
};

// 打印设置
const printSetting = reactive(printDefaultSetting);

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
    window.print();
};
</script>

<style lang="less" scoped>
.print-editor-box {
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 4px;
    margin-bottom: 24px;
    width: 100%;

    :deep(.el-form-item) {
        margin-bottom: 0;
    }

    :deep(.el-form-item__label) {
        font-size: 12px;
    }

    :deep(.el-slider) {
        width: 90%;
    }
}
</style>