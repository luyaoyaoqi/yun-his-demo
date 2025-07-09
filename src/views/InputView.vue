<template>
    <el-input v-model="input" style="width: 240px" placeholder="Please input" disabled />
    <br />
    <el-select v-model="value" disabled placeholder="Select" style="width: 240px">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('Option1')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

const input = ref('1111')
</script>
<style lang="scss" scoped>
.el-input, .el-select, .el-time-picker, .el-date-picker {
    --el-disabled-text-color: var(--el-text-color-regular);
}
</style>