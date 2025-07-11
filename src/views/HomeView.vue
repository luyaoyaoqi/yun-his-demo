<template>
  <el-input-number v-model="num" :min="0" :max="10" @change="handleChange" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)

// 处理最大精度变化
// 如果传入的值超过了最大精度，则将其四舍五入到指定的精度
const handleMaxPrecisionChange = (value: number, maxPrecision: number) => {
  if (typeof maxPrecision === 'undefined') {
    return value;
  }
  const valueStr = value.toString();
  const decimalPart = valueStr.split('.')[1];
  const newValue = Number(decimalPart && decimalPart.length > maxPrecision ? value.toFixed(maxPrecision) : value);
  console.log('handleMaxPrecisionChange', newValue);
  return newValue;
}

const handleChange = (value: number | undefined) => {
  if (typeof value === 'number') {
    num.value = handleMaxPrecisionChange(value, 4);
  }
}
</script>