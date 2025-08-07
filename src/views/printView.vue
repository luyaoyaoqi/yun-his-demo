<template>
    <div class="print-editor-box">
        <el-button @click="handlePrint">打印</el-button>
    </div>
    <PrintMedicalTemplate />
</template>

<script lang="ts" setup>
import PrintMedicalTemplate from '@/components/print/PrintMedicalTemplate.vue';

const handlePrint = () => {
    window.print();
};
</script>
<style lang="less" scoped>
.print-editor-box {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
}
</style>
