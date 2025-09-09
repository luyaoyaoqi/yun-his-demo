<template>
    <div class="w-[220px]">
        <el-date-picker v-if="showElDatePicker" ref="datePickerRef" popper-class="mdd-el-date-picker-popper"
            v-model="dateValue" type="date" placeholder="Pick a day" @focus="handleDatePickerFocus" />
        <el-select v-if="!showElDatePicker" ref="selectRef" popper-class="mdd-el-select-popper" v-model="yearValue"
            placeholder="Pick a year" placement="bottom">
            <template #header>
                <el-button @click="showDate" text type="info">末次月经日期</el-button>
                <el-button text type="primary" disabled>绝经年龄</el-button>
            </template>
            <div class="el-select-dropdown__wrap">
                <el-option v-for="year in years" :key="year" :label="year" :value="year" />
            </div>
        </el-select>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, h, render, computed } from 'vue'
import { ElButton } from 'element-plus'

const props = defineProps<{
    date: Date | null,
    year: number,
    showElDatePicker: boolean
}>()

const emit = defineEmits<{
    (e: 'update:date', value: Date | null): void
    (e: 'update:year', value: number): void
    (e: 'update:showElDatePicker', value: boolean): void
}>()

const dateValue = computed({
    get: () => props.date,
    set: (value) => emit('update:date', value)
})

const yearValue = computed({
    get: () => props.year,
    set: (value) => emit('update:year', value)
})

const datePickerRef = ref<InstanceType<typeof import('element-plus').ElDatePicker> | null>(null)
const selectRef = ref<InstanceType<typeof import('element-plus').ElSelect> | null>(null)

const years = ref<number[]>([])
for (let i: number = 40; i <= 60; i++) {
    years.value.push(i)
}


let dateAddTabButtonIsAdded = false
const showDate = () => {
    console.log('Confirmed')
    emit('update:showElDatePicker', true)
    nextTick(() => {
        // 使用 nextTick 确保 DOM 更新完成后再操作
        if (datePickerRef.value) {
            // 调用 Element Plus 的 focus 方法来打开下拉菜单
            // @ts-ignore
            datePickerRef.value.handleOpen()
            dateAddTabButtonIsAdded = false
            dateAddTabButton()
        }
    })
}

const showYear = () => {
    console.log('Cancelled')
    emit('update:showElDatePicker', false)
    nextTick(() => {
        // 使用 nextTick 确保 DOM 更新完成后再操作
        if (selectRef.value) {
            // 调用 Element Plus 的 focus 方法来打开下拉菜单
            selectRef.value.inputRef?.click()
        }
    })
}

const dateAddTabButton = () => {
    if (dateAddTabButtonIsAdded) {
        return
    }
    // @ts-ignore
    const elDatePickerPopper = document.querySelector('.mdd-el-date-picker-popper') as HTMLElement | null
    const elDatePickerPanel = document.querySelector('.mdd-el-date-picker-popper .el-picker-panel') as HTMLElement | null
    // setTimeout(() => {
    //     !!elDatePickerPopper && (elDatePickerPopper.style.display = 'block')
    // }, 2000)

    if (elDatePickerPopper) {

        // 挂载包含 ElButton 组件的虚拟节点
        const buttonWrapper = h('div', {
            style: {
                display: 'flex',
                justifyContent: 'center',
                margin: '4px 0 0 0'
            }
        }, [
            h(ElButton, {
                text: true,
                type: 'primary',
                disabled: true
            }, { default: () => '末次月经日期' }),
            h(ElButton, {
                onClick: showYear,
                text: true,
                type: 'info',
                disabled: false
            }, { default: () => '绝经年龄' })
        ])

        // 创建一个容器元素来渲染虚拟节点
        const container = document.createElement('div')
        render(buttonWrapper, container)

        // 将按钮组添加到末次月经日期选择器弹出框中
        elDatePickerPopper?.insertBefore(container.firstChild!, elDatePickerPanel)
        dateAddTabButtonIsAdded = true
    }
}

const handleDatePickerFocus = () => {
    dateAddTabButton()
}

onMounted(() => {
    console.log('DatePicker focused')
})
</script>

<style lang="less">
.mdd-el-date-picker-popper {

    .el-button.is-text.is-disabled {
        color: var(--el-text-color-primary) !important;
        cursor: text;
    }
}

.mdd-el-select-popper {
    .el-select-dropdown__header {
        display: flex;
        justify-content: center;
        border: none;
        padding: 4px 0 0 0;

        .el-button.is-text.is-disabled {
            color: var(--el-text-color-primary) !important;
            cursor: text;
        }
    }

    .el-select-dropdown__list {
        padding: 6px;

        .el-select-dropdown__wrap {
            width: 311px;
            display: flex;
            flex-wrap: wrap;

            .el-select-dropdown__item {
                flex: 0 0 12.5%;
                padding: 0;
                text-align: center;
            }
        }
    }

}
</style>