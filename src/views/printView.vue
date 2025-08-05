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

// 判断是否需要分页
const isPaginationNeeded = (element: HTMLElement, offsetTop: number): boolean => {
    if (!element) return false;
    return element.offsetTop + element.offsetHeight > offsetTop - 10;
};

onMounted(() => {
    nextTick(() => {

        // 获取打印视图的默认第一页 
        const printContainerFirstPage = printViewElement.value?.firstElementChild;
        if (!printContainerFirstPage) {
            console.warn('未找到打印容器元素');
            return;
        }
        // 创建一个模板元素，用于生成分页后的打印内容
        const printContainerTemplate = printContainerFirstPage.cloneNode(true) as HTMLElement;
        printContainerTemplate.querySelector('.print-main')!.innerHTML = '';
        console.log(printContainerTemplate);

        // 获取主要内容和页脚元素
        const mainElement = printContainerFirstPage.querySelector('.print-main') as HTMLElement | null;
        const footerElement = printContainerFirstPage.querySelector('.print-footer') as HTMLElement | null;
        const footerElementOffsetTop = footerElement?.offsetTop;

        const mainElementChildren = mainElement?.children;
        if (mainElementChildren) {
            // 修复 isPaginationNeeded 函数参数类型问题
            Array.from(mainElementChildren).forEach(element => {
                if (element instanceof HTMLElement && footerElementOffsetTop !== undefined) {
                    if (isPaginationNeeded(element, footerElementOffsetTop)) {
                        printContainerTemplate.querySelector('.print-main')!.appendChild(element);
                    }
                }
            });
        }
        printViewElement.value?.appendChild(printContainerTemplate);

        // console.log(mainElementChildren, footerElementOffsetTop);
    });
});


</script>
<style lang="less" scoped>
.print-container {
    font-size: 12pt;
    position: relative;
    margin-bottom: 24pt;
    padding: 24pt;

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
