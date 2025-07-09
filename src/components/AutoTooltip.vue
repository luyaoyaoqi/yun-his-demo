<!-- AutoTooltip.vue -->
<template>
    <template v-if="isOverflow">
        <el-tooltip :content="content" v-bind="tooltipOptions">
            <span :style="textStyle">{{ content }}</span>
        </el-tooltip>
    </template>
    <template v-else>
        <span :style="textStyle" ref="textRef">{{ content }}</span>
    </template>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch, nextTick, defineExpose } from 'vue'

const props = defineProps<{
    content: string
    placement?: string
    effect?: string
    textStyle?: Record<string, any>
    tooltipOptions?: Record<string, any>
}>()

const textRef = ref<HTMLSpanElement | null>(null)
const isOverflow = ref(false)

// 设置默认值
const tooltipOptions = computed(() => ({
    placement: 'top',
    effect: 'dark',
    showAfter: 400,
    ...props.tooltipOptions
}))

const textStyle = computed(() => ({
    display: 'inline-block',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%',
    ...props.textStyle
}))

// 检查方法（暴露给外部）
const checkOverflow = () => {
    nextTick(() => {
        if (textRef.value) {
            isOverflow.value = textRef.value.scrollWidth > textRef.value.clientWidth
        }
    })
    // console.log('checkOverflow called', isOverflow.value, textRef.value?.scrollWidth, textRef.value?.clientWidth)
}

onMounted(checkOverflow)
watch(() => props.content, checkOverflow)

// 暴露 checkOverflow 方法供父组件调用
defineExpose({ checkOverflow })
</script>