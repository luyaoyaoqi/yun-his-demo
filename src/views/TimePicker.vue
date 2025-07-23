<template>
    <div class="demo-range">
        <el-time-picker format="HH:mm" v-model="value1" is-range 
             range-separator="-" start-placeholder="Start time"
            end-placeholder="End time" popper-class="custom-time-picker"/>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref<[Date, Date]>([
    new Date(2016, 9, 10, 8, 40),
    new Date(2016, 9, 10, 9, 40),
])

</script>

<style>
.demo-range .el-date-editor {
    margin: 8px;
}

.demo-range .el-range-separator {
    box-sizing: content-box;
}

</style>