<template>
    <div class="print-view" ref="printViewElement">
        <div class="print-container a5">
            <div class="print-header">
                <h1>{{ data.title }}</h1>
                <hr />
            </div>
            <div class="print-main">
                <h3>商品列表</h3>
                <div v-for="item in data.items" :key="item.name">
                    <span>{{ item.name }} </span> - <span>{{ item.price }}元</span>
                </div>
            </div>
            <div class="print-footer">
                <hr />
                <h1>底部内容</h1>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, nextTick } from 'vue';

const data = reactive({
    title: '打印标题',
    items: [
        { name: '商品1', price: 100 },
        { name: '商品2', price: 200 },
        { name: '商品3', price: 300 },
        { name: '商品4', price: 400 },
        { name: '商品5', price: 500 },
        { name: '商品6', price: 600 },
        { name: '商品7', price: 700 },
        { name: '商品8', price: 800 },
        { name: '商品9', price: 900 },
        { name: '商品10', price: 1000 },
        { name: '商品11', price: 1100 },
        { name: '商品12', price: 1200 },
        { name: '商品13', price: 1300 },
        { name: '商品14', price: 1400 },
        { name: '商品15', price: 1500 },
        { name: '商品16', price: 1600 },
        { name: '商品17', price: 1700 },
        { name: '商品18', price: 1800 },
        { name: '商品19', price: 1900 },
        { name: '商品20', price: 2000 },
        { name: '商品21', price: 2100 },
        { name: '商品22', price: 2200 },
        { name: '商品23', price: 2300 },
        { name: '商品24', price: 2400 },
        { name: '商品25', price: 2500 },
        { name: '商品26', price: 2600 },
        { name: '商品27', price: 2700 },
        { name: '商品28', price: 2800 },
        { name: '商品29', price: 2900 },
        { name: '商品30', price: 3000 }
    ]
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
        
        // 创建页面模板
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
.print-container {
    font-size: 12pt;
    position: relative;
    margin-bottom: 24pt;
    padding: 24pt;
    border: 1px solid #eee; /* 增加边框以便于区分页面 */

    &.a5 {
        width: 148mm;
        height: 210mm;
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
