<template>
    <div class="print-view" ref="printViewElement">
        <!-- 初始页面容器（作为模板） -->
        <div class="print-container" :class="[paperSize, orientation]" :style="containerPaddingStyle">
            <!-- 页眉插槽 -->
            <div class="print-header">
                <slot name="header"></slot>
            </div>

            <!-- 主内容插槽 -->
            <div class="print-main">
                <slot name="main"></slot>
            </div>

            <!-- 页脚插槽 -->
            <div class="print-footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick, defineProps, watch, useSlots } from 'vue';

const slots = useSlots();

// 定义组件属性
const props = defineProps({
    // 纸张大小：a4 或 a5
    paperSize: {
        type: String,
        default: 'a4',
        validator: (value: string) => {
            return ['a4', 'a5', 'b6', 'letter'].includes(value);
        }
    },
    // 纸张方向：横向或纵向
    orientation: {
        type: String,
        default: 'portrait',
        validator: (value: string) => {
            return ['portrait', 'landscape'].includes(value);
        }
    }
    // 页面边距，打印设置中设置无边距，通过内部控制边距
    , containerPaddingStyle: {
        type: String,
        default: 'padding: 5mm;'
    }
});

const printViewElement = ref<HTMLElement | null>(null);
// 保存原始内容用于重新分页
const originalMainContent = ref<Node[]>([]);

// 判断是否需要分页
const isPaginationNeeded = (element: HTMLElement, offsetTop: number): boolean => {
    if (!element) return false;
    return element.offsetTop + element.offsetHeight > offsetTop;
};

// 提取分页逻辑为独立函数
const handlePagination = () => {
    nextTick(() => {
        if (!printViewElement.value) return;

        // 清除现有分页（保留第一个页面作为基础）
        const allPages = Array.from(printViewElement.value.children);
        allPages.slice(1).forEach(page => page.remove());

        // 获取打印视图的默认第一页 
        const printContainerFirstPage = printViewElement.value.firstElementChild;
        if (!printContainerFirstPage) {
            console.warn('未找到打印容器元素');
            return;
        }

        // 获取主要内容和页脚元素
        const mainElement = printContainerFirstPage.querySelector('.print-main') as HTMLElement | null;
        const footerElement = printContainerFirstPage.querySelector('.print-footer') as HTMLElement | null;
        const footerElementOffsetTop = footerElement?.offsetTop;

        if (!mainElement || !footerElement || footerElementOffsetTop === undefined) {
            console.warn('未找到必要的元素');
            return;
        }

        // 保存原始内容（第一次执行时）
        if (originalMainContent.value.length === 0) {
            originalMainContent.value = Array.from(mainElement.childNodes);
        } else {
            // 不是第一次执行，恢复原始内容
            mainElement.innerHTML = '';
            originalMainContent.value.forEach(node => {
                mainElement!.appendChild(node.cloneNode(true));
            });
        }

        // 保存所有需要分页的子元素
        const allElements = Array.from(mainElement.children);
        // 清空第一页的主内容区，准备重新分配内容
        mainElement.innerHTML = '';

        // 创建页面模板（克隆原始容器）
        const printContainerTemplate = printContainerFirstPage.cloneNode(true) as HTMLElement;
        // 确保克隆的模板包含正确的类名（纸张大小和方向）
        printContainerTemplate.className = `print-container ${props.paperSize} ${props.orientation}`;
        printContainerTemplate.querySelector('.print-main')!.innerHTML = '';

        // 当前处理的页面和主内容区
        let currentPage = printContainerFirstPage;
        let currentMain = mainElement;

        // 遍历所有元素，分配到各个页面
        for (const element of allElements) {
            if (!(element instanceof HTMLElement)) continue;

            // 先尝试添加到当前页
            currentMain.appendChild(element);

            // 检查是否需要分页
            if (isPaginationNeeded(element, footerElementOffsetTop)) {
                // 需要分页，将最后一个元素从当前页移除
                currentMain.removeChild(element);

                // 创建新页面
                const newPage = printContainerTemplate.cloneNode(true) as HTMLElement;
                const newMain = newPage.querySelector('.print-main') as HTMLElement | null;

                if (newMain) {
                    // 将元素添加到新页面
                    newMain.appendChild(element);
                    // 将新页面添加到打印视图
                    printViewElement.value?.appendChild(newPage);
                    // 更新当前页面和主内容区引用
                    currentPage = newPage;
                    currentMain = newMain;
                }
            }
        }
    });
};

// 监听纸张大小和方向变化，重新分页
watch(
    () => [props.paperSize, props.orientation, props.containerPaddingStyle],
    () => {
        handlePagination();
    },
    { deep: true }
);

// 监听插槽内容变化
watch(
    () => [
        slots.main ? slots.main().length : 0,
    ],
    () => {
        handlePagination();
    },
    { flush: 'post' } // 在 DOM 更新后执行
);

onMounted(() => {
    // 第一次加载时执行分页
    handlePagination();
});
</script>

<style lang="less" scoped>
.print-view {
    all: initial;
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: fit-content;
    visibility: hidden;
}

.print-container {
    position: relative;
    // padding: 10mm 10mm;
    background-color: white;
    display: flex;
    flex-direction: column;
    //默认尺寸
    width: 148mm;
    height: 210mm;
    line-height: 1.2;

    // 纵向尺寸
    &.a5.portrait {
        width: 148mm;
        height: 210mm;
    }

    &.a4.portrait {
        width: 210mm;
        height: 297mm;
    }

    &.b6.portrait {
        width: 125mm;
        height: 176mm;
    }

    &.letter.portrait {
        width: 216mm;
        height: 279mm;
    }

    // 横向尺寸（宽高互换）
    &.a5.landscape {
        width: 210mm;
        height: 148mm;
    }

    &.a4.landscape {
        width: 297mm;
        height: 210mm;
    }

    &.b6.landscape {
        width: 176mm;
        height: 125mm;
    }

    &.letter.landscape {
        width: 279mm;
        height: 216mm;
    }

    .print-header {
        flex: 0 0 auto;
    }

    .print-main {
        flex: 1 1 auto;
        overflow: hidden;
    }

    .print-footer {
        flex: 0 0 auto;
    }
}
</style>
