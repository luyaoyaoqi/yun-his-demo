<template>
  <MaxPrecisionInputNumber v-model="value" :min="0" :max="1000" :step="10" :maxPrecision="4" @change="onChange">
    <template #prefix>
      <span>￥</span>
    </template>
  </MaxPrecisionInputNumber>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import MaxPrecisionInputNumber from '@/components/MaxPrecisionInputNumber.vue'

const value = ref(0)

const onChange = (val: any) => {
  console.log('值变化:', val)
}
</script>