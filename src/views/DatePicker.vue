<template>
    <DatePickerAndSelect v-model:date="date" v-model:year="year" v-model:showElDatePicker="showElDatePicker" />
    <el-divider />
    <el-date-picker popper-class="mdd-el-date-picker-popper" v-model="value2" type="daterange" unlink-panels
        range-separator="To" start-placeholder="Start month" end-placeholder="End month" :shortcuts="shortcuts" />
</template>

<script setup>
import { ref, watch } from 'vue'

const date = ref(new Date())
const year = ref(50)
const showElDatePicker = ref(true)

//监听数据改变
watch([date, year, showElDatePicker], ([newDate, newYear, newShowElDatePicker], [oldDate, oldYear, oldShowElDatePicker]) => {
    if (newDate !== oldDate) {
        console.log('date changed', newDate)
    }
    if (newYear !== oldYear) {
        console.log('year changed', newYear)
    }
    if (newShowElDatePicker !== oldShowElDatePicker) {
        console.log('showElDatePicker changed', newShowElDatePicker)
    }
})

const value2 = ref('')
const shortcuts = [
    {
        text: '今天',
        value: [new Date(), new Date()],
    },
    {
        text: '今年',
        value: () => {
            const end = new Date()
            const start = new Date(new Date().getFullYear(), 0)
            return [start, end]
        },
    },
    {
        text: '最近6个月',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setMonth(start.getMonth() - 6)
            return [start, end]
        },
    },
]
</script>
<style lang="less">
.mdd-el-date-picker-popper {
    .el-picker-panel__body-wrapper {
        .el-picker-panel__sidebar {
            width: 100%;
            position: relative;
            order: 2;
            display: flex;
            padding: 0 20px;
            .el-picker-panel__shortcut{
                width: fit-content;
                padding: 0 0 8px;
                margin-right: 24px;
            }
        }

        .el-picker-panel__body {
            margin-left: 0;
        }
    }
}
</style>