<template>
    <div class="print-view" ref="printViewElement">
        <!-- 初始页面容器（作为模板） -->
        <div class="mj-print-page" :class="[paperSize, orientation]" :style="containerPaddingStyle">
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
import { ref, onMounted, nextTick, defineProps, watch, useSlots, watchEffect } from 'vue';

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
        default: 'padding: 0mm;'
    }
});

const printViewElement = ref<HTMLElement | null>(null);
// 保存原始内容用于重新分页
const originalHeaderContent = ref<Node[]>([]);
const originalMainContent = ref<Node[]>([]);
const originalFooterContent = ref<Node[]>([]);

// 判断是否需要分页
const isPaginationNeeded = (element: HTMLElement, offsetTop: number): boolean => {
    // 添加一些安全边距，避免刚好临界的情况
    const safetyMargin = 2; // 2px的安全边距
    if (!element) return false;192
    return element.offsetTop + element.offsetHeight > offsetTop + safetyMargin;
};

// 提取分页逻辑为独立函数
const handlePagination = () => {
    nextTick(() => {
        if (!printViewElement.value) return;

        // 清除现有分页（只保留第一个原始页面）
        const allPages = Array.from(printViewElement.value.children);
        allPages.slice(1).forEach(page => page.remove());

        // 获取打印视图的默认第一页 
        const printContainerFirstPage = printViewElement.value.firstElementChild;
        if (!printContainerFirstPage) {
            console.warn('未找到打印容器元素');
            return;
        }

        // 获取主要内容和页脚元素
        const headerElement = printContainerFirstPage.querySelector('.print-header') as HTMLElement | null;
        const mainElement = printContainerFirstPage.querySelector('.print-main') as HTMLElement | null;
        const footerElement = printContainerFirstPage.querySelector('.print-footer') as HTMLElement | null;
        const footerElementOffsetTop = footerElement?.offsetTop;

        if (!mainElement || !footerElement || footerElementOffsetTop === undefined) {
            console.warn('未找到必要的元素');
            return;
        }

        // 保存原始内容（每次执行时都更新）
        originalHeaderContent.value = headerElement ? Array.from(headerElement.childNodes) : [];
        originalMainContent.value = Array.from(mainElement.childNodes);
        originalFooterContent.value = footerElement ? Array.from(footerElement.childNodes) : [];

        // 创建页面模板（克隆原始容器）
        const printContainerTemplate = printContainerFirstPage.cloneNode(true) as HTMLElement;
        // 确保克隆的模板包含正确的类名（纸张大小和方向）
        printContainerTemplate.className = `mj-print-page ${props.paperSize} ${props.orientation}`;
        const templateMain = printContainerTemplate.querySelector('.print-main');
        const templateHeader = printContainerTemplate.querySelector('.print-header');
        const templateFooter = printContainerTemplate.querySelector('.print-footer');

        if (templateMain) templateMain.innerHTML = '';
        if (templateHeader) templateHeader.innerHTML = '';
        if (templateFooter) templateFooter.innerHTML = '';

        // 保存所有需要分页的子元素
        const allElements = Array.from(originalMainContent.value)
            .filter(node => node instanceof HTMLElement)
            .map(node => (node as HTMLElement).cloneNode(true));

        // 当前处理的页面和主内容区（从新创建的页面开始）
        let currentPage: HTMLElement | null = null;
        let currentMain: HTMLElement | null = null;

        // 遍历所有元素，分配到各个页面
        for (const element of allElements) {
            if (!(element instanceof HTMLElement)) continue;

            // 如果还没有页面，创建第一个分页页面
            if (!currentPage) {
                currentPage = printContainerTemplate.cloneNode(true) as HTMLElement;
                currentMain = currentPage.querySelector('.print-main') as HTMLElement;

                // 填充页眉和页脚内容
                const currentHeader = currentPage.querySelector('.print-header') as HTMLElement;
                const currentFooter = currentPage.querySelector('.print-footer') as HTMLElement;

                if (currentHeader) {
                    originalHeaderContent.value.forEach(node => {
                        currentHeader.appendChild(node.cloneNode(true));
                    });
                }

                if (currentFooter) {
                    originalFooterContent.value.forEach(node => {
                        currentFooter.appendChild(node.cloneNode(true));
                    });
                }

                printViewElement.value?.appendChild(currentPage);
            }

            // 添加元素到当前页面
            currentMain!.appendChild(element);

            // 检查是否需要分页
            if (isPaginationNeeded(element, footerElementOffsetTop)) {
                // 需要分页，将最后一个元素从当前页移除
                if (currentMain!.children.length > 1) {
                    currentMain!.removeChild(element);

                    // 创建新页面
                    currentPage = printContainerTemplate.cloneNode(true) as HTMLElement;
                    currentMain = currentPage.querySelector('.print-main') as HTMLElement;

                    // 填充页眉和页脚内容
                    const currentHeader = currentPage.querySelector('.print-header') as HTMLElement;
                    const currentFooter = currentPage.querySelector('.print-footer') as HTMLElement;

                    if (currentHeader) {
                        originalHeaderContent.value.forEach(node => {
                            currentHeader.appendChild(node.cloneNode(true));
                        });
                    }

                    if (currentFooter) {
                        originalFooterContent.value.forEach(node => {
                            currentFooter.appendChild(node.cloneNode(true));
                        });
                    }

                    // 将元素添加到新页面
                    currentMain!.appendChild(element);
                    // 将新页面添加到打印视图
                    printViewElement.value?.appendChild(currentPage);
                } else {
                    // 如果当前页只有一个元素，但仍然超出范围，则需要创建新页面
                    // 创建新页面
                    currentPage = printContainerTemplate.cloneNode(true) as HTMLElement;
                    currentMain = currentPage.querySelector('.print-main') as HTMLElement;

                    // 填充页眉和页脚内容
                    const currentHeader = currentPage.querySelector('.print-header') as HTMLElement;
                    const currentFooter = currentPage.querySelector('.print-footer') as HTMLElement;

                    if (currentHeader) {
                        originalHeaderContent.value.forEach(node => {
                            currentHeader.appendChild(node.cloneNode(true));
                        });
                    }

                    if (currentFooter) {
                        originalFooterContent.value.forEach(node => {
                            currentFooter.appendChild(node.cloneNode(true));
                        });
                    }

                    // 将元素添加到新页面
                    currentMain!.appendChild(element);
                    // 将新页面添加到打印视图
                    printViewElement.value?.appendChild(currentPage);
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
        slots.header ? slots.header() : null,
        slots.main ? slots.main() : null,
        slots.footer ? slots.footer() : null
    ],
    () => {
        handlePagination();
    },
    { flush: 'post', deep: true } // 在 DOM 更新后执行，并深度监听
);

watchEffect((onCleanup) => {

    // 创建MutationObserver监测style元素的变化
    const observer = new MutationObserver((mutations) => {
        // 监测到变化时执行分页逻辑
        // 过滤掉来自node_modules的style元素变化
        const hasRelevantChange = mutations.some(mutation => {
            // 检查被修改的节点是否是目标style元素
            if (mutation.target instanceof HTMLStyleElement) {
                return !mutation.target.dataset.viteDevId?.includes('node_modules');
            }
            // 检查新增/删除的节点中是否有目标style元素
            return Array.from(mutation.addedNodes).some(node =>
                node instanceof HTMLStyleElement && !node.dataset.viteDevId?.includes('node_modules')
            ) || Array.from(mutation.removedNodes).some(node =>
                node instanceof HTMLStyleElement && !node.dataset.viteDevId?.includes('node_modules')
            );
        });

        if (hasRelevantChange) {
            handlePagination();
        }
    });

    // 监听整个文档中style元素的变化（包括添加/删除/内容修改）
    observer.observe(document.head, {
        childList: true, // 监测子节点变化（添加/删除style元素）
        subtree: true,   // 监测所有子树（包括嵌套在其他元素中的style）
        characterData: true, // 监测文本内容变化
        attributes: true,    // 监测属性变化（如data-vite-dev-id）
        attributeFilter: ['data-vite-dev-id'] // 只监测指定属性
    });

    // 组件卸载时停止监听
    onCleanup(() => {
        observer.disconnect();
    });
});

onMounted(() => {
    // 第一次加载时执行分页
    handlePagination();
});
</script>

<!-- 此样式不进入打印模板 -->
<style lang="less" scoped>
.print-view {
    all: initial;
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: fit-content;
    // visibility: hidden;
}
</style>

<style lang="less" scoped>
body {
    margin: 0;
    overflow: hidden;
    font-family: Microsoft YaHei, 微软雅黑;
}

.mj-hidden {
    display: none !important;
}

// 模板大小不包含不可打印区域5mm,预览补充相应边距,配置边距显示最小为5mm
.mj-print-page {
    position: relative;
    background-color: white;
    display: flex;
    flex-direction: column;
    //默认尺寸
    // width: 138mm;
    // height: 200mm;
    box-sizing: border-box;

    // 纵向尺寸
    &.a5.portrait {
        width: 138mm;
        height: 200mm;
    }

    &.a4.portrait {
        width: 200mm;
        height: 287mm;
    }

    &.b6.portrait {
        width: 115mm;
        height: 166mm;

        .patient-basic-info,
        .patient-detail-info {

            .info-item {

                &.row-three {
                    flex-basis: 100%;
                }

                &.row-two {
                    flex-basis: calc(66.67% - 6pt);
                }
            }
        }
    }

    &.letter.portrait {
        width: 206mm;
        height: 269mm;
    }

    // 横向尺寸（宽高互换）
    &.a5.landscape {
        width: 190mm;
        height: 128mm;
    }

    &.a4.landscape {
        width: 287mm;
        height: 200mm;
    }

    &.b6.landscape {
        width: 166mm;
        height: 115mm;
    }

    &.letter.landscape {
        width: 269mm;
        height: 206mm;
    }

    //热敏小票相关样式
    &.thermal80 {
        width: 80mm;
        height: auto;
    }

    &.thermal58 {
        width: 58mm;
        height: auto;
    }

    &.thermal100 {
        width: 100mm;
        height: auto;
    }

    .print-header {
        flex: 0 0 auto;
    }

    .print-main {
        flex: 1 1 auto;
        overflow: hidden;

        &:deep(>div:first-child) {
            padding-top: 0;
            border-top: none;
        }
    }

    .print-footer {
        flex: 0 0 auto;
    }
}
</style>