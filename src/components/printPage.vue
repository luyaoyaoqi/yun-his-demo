<template>
  <div class="print-view" ref="printViewElement">
    <!-- 初始页面容器（作为模板） -->
    <div class="print-container" :class="paperSize">
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
import { ref, onMounted, nextTick, defineProps } from 'vue';

// 定义组件属性
const props = defineProps({
  // 纸张大小：a4 或 a5
  paperSize: {
    type: String,
    default: 'a4',
    validator: (value: string) => {
      return ['a4', 'a5'].includes(value);
    }
  }
});

const printViewElement = ref<HTMLElement | null>(null);

// 判断是否需要分页（保持原有判断逻辑）
const isPaginationNeeded = (element: HTMLElement, offsetTop: number): boolean => {
  if (!element) return false;
  return element.offsetTop + element.offsetHeight > offsetTop;
};

onMounted(() => {
  nextTick(() => {
    // 获取打印视图的默认第一页 
    const printContainerFirstPage = printViewElement.value?.firstElementChild;
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

    // 保存所有需要分页的子元素
    const allElements = Array.from(mainElement.children);
    // 清空第一页的主内容区，准备重新分配内容
    mainElement.innerHTML = '';

    // 创建页面模板（克隆原始容器）
    const printContainerTemplate = printContainerFirstPage.cloneNode(true) as HTMLElement;
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
});
</script>

<style lang="less" scoped>
.print-view {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;
  justify-content: center;
  align-items: center;
  background-color: var(--el-fill-color-lighter);
  padding-top: 16px;
}

.print-container {
  font-size: 12pt;
  position: relative;
  margin-bottom: 16px;
  padding: 16pt;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.12);

  &.a5 {
    width: 148mm;
    height: 210mm;
  }

  &.a4 {
    width: 210mm;
    height: 297mm;
  }

  display: flex;
  flex-direction: column;

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