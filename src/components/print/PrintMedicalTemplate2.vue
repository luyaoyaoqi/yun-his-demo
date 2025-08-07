<template>
    <PrintContainer :paperSize="paperSize" :orientation="orientation" :containerPaddingStyle="containerPaddingStyle">
        <!-- 页眉内容 -->
        <template #header>
            <div class="flex justify-between items-center mb-4">
                <div>01</div>
                <div>02</div>
                <div>03</div>
            </div>
        </template>

        <!-- 主内容 -->
        <template #main>
            <h3>商品列表</h3>
            <div v-for="item in data.items" :key="item.name">
                <span>{{ item.name }} </span> - <span>{{ item.price }}元</span>
            </div>
        </template>

        <!-- 页脚内容 -->
        <template #footer>
            <hr />
            <h1>底部内容</h1>
        </template>
    </PrintContainer>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

// 定义 props
const props = defineProps({
    paperSize: {
        type: String,
        default: 'a4'
    },
    orientation: {
        type: String,
        default: 'portrait'
    },
    containerPaddingStyle: {
        type: String,
        default: 'padding: 12mm;'
    }
});

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
        { name: '商品30', price: 3000 },
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
</script>

<style lang="less" scoped>
.print-editor-box {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
}
</style>