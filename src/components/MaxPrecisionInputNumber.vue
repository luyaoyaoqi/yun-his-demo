<template>
    <el-input-number v-model="currentValue" v-bind="inputNumberOptions" @change="handleComponentChange"
        @blur="handleBlur" @focus="handleFocus">
        <template #prefix>
            <slot name="prefix" />
        </template>
        <template #suffix>
            <slot name="suffix" />
        </template>
        <template #decrease-icon>
            <slot name="decrease-icon" />
        </template>
        <template #increase-icon>
            <slot name="increase-icon" />
        </template>
    </el-input-number>
</template>

<script lang="ts" setup>
import { ref, computed, watch, defineProps, defineEmits } from 'vue'

const props = defineProps({
    modelValue: {
        type: Number,
        required: true
    },
    maxPrecision: {
        type: Number,
        default: 2
    },
    // 其他配置
    inputNumberOptions: {
        type: Object,
        default: () => ({})
    },
})

const emits = defineEmits([
    'update:modelValue',
    'change',
    'blur',
    'focus'
])

const currentValue = ref(props.modelValue)

// 计算属性，合并输入框的配置
// 这里可以添加更多的默认配置
const inputNumberOptions = computed(() => ({
    min: 0,
    max: 10,
    controls: false,
    ...props.inputNumberOptions
}))

// 处理精度限制
const handleMaxPrecisionChange = (value: number | undefined) => {
    if (typeof value !== 'number') return value

    const valueStr = value.toString()
    const decimalPart = valueStr.split('.')[1]

    if (decimalPart && decimalPart.length > props.maxPrecision) {
        return Number(value.toFixed(props.maxPrecision))
    }

    return value
}

// 组件值变化处理
const handleComponentChange = (value: number | undefined) => {
    const precisionValue = handleMaxPrecisionChange(value)
    currentValue.value = precisionValue ?? inputNumberOptions.value.min
    emits('update:modelValue', precisionValue)
    emits('change', precisionValue)
}

// 失焦事件
const handleBlur = (event: FocusEvent) => {
    emits('blur', event)
}

// 聚焦事件
const handleFocus = (event: FocusEvent) => {
    emits('focus', event)
}

// 监听外部值变化
watch(() => props.modelValue, (newVal) => {
    currentValue.value = newVal
})
</script>