<template>
    <div class="page-container">
        <el-splitter>
            <el-splitter-panel size="70%">
                <div class="chart-container">
                    <div ref="chartContainer" class="chart-wrapper"></div>
                </div>
            </el-splitter-panel>
            <el-splitter-panel size="30%" :min="200">
                <div class="editor-container">
                    <el-button class="mb-6" type="primary" @click="getSvgContent">获取 SVG 内容</el-button>

                </div>
            </el-splitter-panel>
        </el-splitter>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'
import type { ECharts, EChartsOption } from 'echarts'
import { ElMessage } from 'element-plus'

// 图表容器引用
const chartContainer = ref<HTMLDivElement | null>(null)
// 图表实例
let chartInstance: ECharts | null = null

// 图表配置
const chartOption: EChartsOption = {
    // 添加动画效果
    animation: true,
    animationDuration: 1000,
    animationEasing: 'cubicOut',
    // 颜色设置
    color: [
        '#c23531',
        '#2f4554',
        '#61a0a8',
        '#d48265',
        '#91c7ae',
        '#749f83',
        '#ca8622',
        '#bda29a',
        '#6e7074',
        '#546570',
        '#c4ccd3'
    ],

    title: {
        text: '2024年上半年销售数据',
        show: true,
        left: 'center',
        textStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333'
        },
        subtext: '单位：万元',
        subtextStyle: {
            color: '#666',
            fontSize: 12
        },
        padding: [10, 0, 20, 0]
    },

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderColor: '#ccc',
        borderWidth: 1,
        textStyle: {
            color: '#333'
        },
        // formatter: (params: any) => {
        //     const item = params[0];
        //     return `${item.name}<br/>销售额: ${item.value}万元`;
        // }
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '20%',
        containLabel: true
    },

    xAxis: {
        type: 'category',
        data: ['一月', '二月', '三月', '四月', '五月', '六月'],
        axisLabel: {
            color: '#666',
            fontSize: 12
        },
        axisLine: {
            lineStyle: {
                color: '#ddd'
            }
        },
        axisTick: {
            show: false
        }
    },

    yAxis: {
        type: 'value',
        name: '销售额（万元）',
        nameTextStyle: {
            color: '#666',
            fontSize: 12,
            padding: [0, 0, 10, 0]
        },
        axisLabel: {
            color: '#666',
            fontSize: 12,
            formatter: '{value}'
        },
        axisLine: {
            lineStyle: {
                color: '#ddd'
            }
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#eee'
            }
        }
    },

    series: [{
        data: [2000, 3000, 4500, 3200, 5100, 6200],
        type: 'bar',
        barWidth: '50%', // 设置柱子宽度
        label: {
            show: true,
            position: 'top',
            color: '#333',
            fontSize: 12,
            fontWeight: 'bold'
        },
        itemStyle: {
            color: {
                type: 'linear',
                x: 0, y: 0, x2: 0, y2: 1,
                colorStops: [
                    { offset: 0, color: '#83bff6' },
                    { offset: 0.5, color: '#188df0' },
                    { offset: 1, color: '#188df0' }
                ]
            },
            borderRadius: [4, 4, 0, 0] // 柱子顶部圆角
        },
        emphasis: {
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0, y: 0, x2: 0, y2: 1,
                    colorStops: [
                        { offset: 0, color: '#a3cfff' },
                        { offset: 0.5, color: '#2396f0' },
                        { offset: 1, color: '#2396f0' }
                    ]
                }
            }
        }
    }]
}

// 初始化图表
const initChart = () => {
    if (chartContainer.value) {
        // 使用 SVG 渲染器
        chartInstance = echarts.init(chartContainer.value, null, {
            renderer: 'svg',
            width: 600,
            height: 400
        })
        chartInstance.setOption(chartOption)
    }
}

// 获取SVG内容
const getSvgContent = async () => {
    if (chartInstance) {
        try {
            // 获取图表的 SVG 内容
            const svgDom = chartInstance.getDom().querySelector('svg')
            if (svgDom) {
                const svgContent = new XMLSerializer().serializeToString(svgDom)
                await copySvgContent(svgContent)
            } else {
                ElMessage.error('未找到 SVG 元素')
            }
        } catch (error) {
            ElMessage.error('获取 SVG 内容失败')
        }
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
        chartInstance.dispose()
        chartInstance = null
    }
})


</script>

<style scoped>
.page-container {
    height: calc(100vh - 120px);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fff;
}

.chart-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 24px;

    .chart-wrapper {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        background: #fff;
    }
}


.editor-container {
    padding: 20px;
    width: 100%;
    height: 100%;
    overflow: auto;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>