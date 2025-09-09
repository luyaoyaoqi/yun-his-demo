<template>
    <DatePickerAndSelect v-model:date="date" v-model:year="year" v-model:showElDatePicker="showElDatePicker" />
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
</script>