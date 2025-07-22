<template>
    <el-calendar v-model="value" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(new Date())
</script>
<style lang="scss" scoped>
:deep(.el-calendar__body) {
    padding-top: 0;
    padding-bottom: 0;

    .el-calendar-table {
        font-size: 14px;

        thead th {
            padding: 8px 0;
        }

        td {
            --el-calendar-border: none;
        }

        .el-calendar-day {
            --el-calendar-cell-width: 40px;
            text-align: center;
        }
    }
}
</style>