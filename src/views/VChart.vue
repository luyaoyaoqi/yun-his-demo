<template>
    <div class="v-chart-container">
        <h1 class="text-2xl font-bold mb-6 text-center">销售数据柱状图</h1>
        <el-button class="mb-6" type="primary" @click="getSvgContent">获取 SVG 内容</el-button>
        <div ref="chartContainer" class="chart-wrapper"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import VChart from '@visactor/vchart'
import { convertVChartToSvg } from '@visactor/vchart-svg-plugin'
import type { IBarChartSpec } from '@visactor/vchart'
import { ElMessage } from 'element-plus'

// 图表容器引用
const chartContainer = ref<HTMLDivElement | null>(null)
// 图表实例
let chartInstance: VChart | null = null

// 图表配置
const chartSpec: IBarChartSpec = {
    type: 'bar',
    width: 800,
    height: 500,
    data: [
        {
            id: 'barData',
            values: [
                { type: '一月', sales: 2000 },
                { type: '二月', sales: 3000 },
                { type: '三月', sales: 4500 },
                { type: '四月', sales: 3200 },
                { type: '五月', sales: 5100 },
                { type: '六月', sales: 6200 }
            ]
        }
    ],
    xField: 'type',
    yField: 'sales',
    seriesField: 'type',
    axes: [
        {
            orient: 'bottom',
            title: {
                visible: true,
                text: '月份'
            }
        },
        {
            orient: 'left',
            title: {
                visible: true,
                text: '销售额'
            }
        }
    ],
    label: {
        visible: true
    },
    title: {
        visible: true,
        text: '2024年上半年销售数据'
    },
    tooltip: {
        mark: {
            content: [
                {
                    key: (datum: any) => datum['type'],
                    value: (datum: any) => datum['sales']
                }
            ]
        }
    },
    legends: [
        {
            visible: true,
            orient: 'bottom'
        }
    ]
}

// 初始化图表
const initChart = () => {
    if (chartContainer.value) {
        chartInstance = new VChart(chartSpec, {
            dom: chartContainer.value,
            mode: 'desktop-browser'
            // 删除了错误的 renderMode 参数，因为该参数不属于 VChart 初始化选项
        })
        chartInstance.renderSync()
    }
}

// 获取SVG内容
const getSvgContent = async () => {
    if (chartInstance) {
        // convertVChartToSvg 函数用于将渲染好的图表转换为 SVG 格式
        const svgContent = convertVChartToSvg(chartInstance)
        await copySvgContent(svgContent)
    }
    return null
}

// 复制SVG内容到剪贴板
const copySvgContent = async (svgContent: string) => {
    if (!svgContent) return

    try {
        await navigator.clipboard.writeText(svgContent)
        ElMessage.success('SVG内容已复制到剪贴板')
    } catch (error) {
        ElMessage.error('复制失败')
    }
}

// 组件挂载时初始化图表
onMounted(() => {
    initChart()
})

// 组件卸载前销毁图表
onBeforeUnmount(() => {
    if (chartInstance) {
        chartInstance.release()
        chartInstance = null
    }
})
</script>


<style scoped>
.v-chart-container {
    padding: 20px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>