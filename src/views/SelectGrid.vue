<template>
    <el-select ref="selectRef" v-model="value" placeholder="Select" style="width: 400px"
        popper-class="select-option-grid">
        <el-option :style="`--rowCount: ${rowCount}`" v-for="item in options" :key="item.value" :label="item.label"
            :value="item.value" />
    </el-select>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const value = ref('')
const selectRef = ref<InstanceType<any> | null>(null)

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
    {
        value: 'Option6',
        label: 'Option6',
    },
    {
        value: 'Option7',
        label: 'Option7',
    },
    {
        value: 'Option8',
        label: 'Option8',
    },
    {
        value: 'Option9',
        label: 'Option9',
    },
]

let inputElement: HTMLInputElement | null = null

const rowCount = ref(4)

onMounted(() => {
    // 获取select的input元素
    if (selectRef.value && selectRef.value.$el) {
        inputElement = selectRef.value.inputRef
        if (inputElement) {
            // 添加键盘事件监听器
            inputElement.addEventListener('keydown', handleKeyDowning)
        }
    }
})

onBeforeUnmount(() => {
    // 清理事件监听器
    if (inputElement) {
        inputElement.removeEventListener('keydown', handleKeyDowning)
    }
})

const handleKeyDowning = (event: KeyboardEvent) => {
    switch (event.key) {
        case 'ArrowUp':
            event.preventDefault()
            event.stopPropagation()
            handleKeyUp()
            break
        case 'ArrowDown':
            event.preventDefault()
            event.stopPropagation()
            handleKeyDown()
            break
        case 'ArrowLeft':
            event.preventDefault()
            event.stopPropagation()
            handleKeyLeft()
            break
        case 'ArrowRight':
            event.preventDefault()
            event.stopPropagation()
            handleKeyRight()
            break
    }
}

const handleKeyLeft = () => {
    selectRef.value?.navigateOptions('prev')
}

const handleKeyRight = () => {
    selectRef.value?.navigateOptions('next')
}

const handleKeyUp = () => {
    // 向上移动4个位置（上一行）
    if (selectRef.value?.states.hoveringIndex < options.length - 1) {
        for (let i = 0; i < rowCount.value - 1; i++) {
            if (selectRef.value?.states.hoveringIndex > 0) {
                selectRef.value?.navigateOptions('prev')
            }
        }
    }
}

const handleKeyDown = () => {
    // 向下移动4个位置（下一行）
    if (selectRef.value?.states.hoveringIndex > 0) {
        for (let i = 0; i < rowCount.value - 1; i++) {
            if (selectRef.value?.states.hoveringIndex < options.length - 1) {
                selectRef.value?.navigateOptions('next')
            }
        }
    }
}
</script>

<style lang="less">
.select-option-grid {
    width: 500px;
    overflow: hidden;

    .el-select-dropdown__list {
        display: flex;
        flex-wrap: wrap;
        padding: 0;

        .el-select-dropdown__item {
            flex: 0 1 calc(100% / var(--rowCount));
            text-align: center;
            border: 1px solid var(--el-border-color-light);
            border-left: none;
            border-top: none;
        }
    }
}
</style>

<style lang="less" scoped></style>