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
                    <el-form :model="chartConfig" label-position="top">
                        <el-form-item label="选择图表配置">
                            <el-select v-model="selectedChart" @change="handleChartChange">
                                <el-option v-for="chart in chartOptions" :key="chart.value" :label="chart.label"
                                    :value="chart.value" />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="图表宽度">
                            <el-input-number v-model="chartConfig.width" :min="200" :max="2000" step="10" />
                        </el-form-item>
                        <el-form-item label="图表高度">
                            <el-input-number v-model="chartConfig.height" :min="200" :max="2000" step="10" />
                        </el-form-item>
                    </el-form>
                    <el-button class="mb-6" type="primary" @click="getSvgContent">获取 SVG 内容</el-button>
                </div>
            </el-splitter-panel>
        </el-splitter>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, reactive, watch } from 'vue'
import * as echarts from 'echarts'
import type { ECharts } from 'echarts'
import { ElMessage } from 'element-plus'

// 图表配置选项
const chartOptions = [
    { label: 'demo', value: 'demo' },
    { label: '脉象图', value: '脉象图' },
    { label: '加载动态图', value: '加载动态图' },
    { label: '加载动态图2', value: '加载动态图2' }
]

// 动态导入图表配置
const loadChartOption = async (chartName: string) => {
    try {
        const module = await import(`@/components/echart/${chartName}.ts`)
        return module.chartOption
    } catch (error) {
        console.error(`Failed to load chart option: ${chartName}`, error)
        return null
    }
}

// 图表容器引用
const chartContainer = ref<HTMLDivElement | null>(null)
// 图表实例
let chartInstance: ECharts | null = null

// 从 localStorage 获取保存的配置或使用默认配置
const getInitialChartSelection = () => {
    const savedSelection = localStorage.getItem('vchart-selection')
    if (savedSelection) {
        try {
            return savedSelection
        } catch (e) {
            console.error('解析保存的图表选择失败:', e)
        }
    }
    return 'demo'
}

// 当前选中的图表配置
const selectedChart = ref(getInitialChartSelection())

// 从 localStorage 获取保存的尺寸配置或使用默认配置
const getInitialChartConfig = () => {
    const savedConfig = localStorage.getItem('vchart-config')
    if (savedConfig) {
        try {
            return JSON.parse(savedConfig)
        } catch (e) {
            console.error('解析保存的图表配置失败:', e)
        }
    }
    return {
        width: 600,
        height: 400
    }
}

// 图表配置
const chartConfig = reactive(getInitialChartConfig())

// 初始化图表
const initChart = async () => {
    if (chartContainer.value) {
        // 销毁现有图表实例
        if (chartInstance) {
            chartInstance.dispose()
        }

        // 加载对应的图表配置
        const chartOption = await loadChartOption(selectedChart.value)
        if (!chartOption) {
            ElMessage.error('加载图表配置失败')
            return
        }

        // 使用 SVG 渲染器
        chartInstance = echarts.init(chartContainer.value, null, {
            renderer: 'svg',
            width: chartConfig.width,
            height: chartConfig.height
        })
        chartInstance.setOption(chartOption)
    }
}

// 处理图表配置切换
const handleChartChange = () => {
    // 保存选择到 localStorage
    localStorage.setItem('vchart-selection', selectedChart.value)
    initChart()
}

// 更新图表尺寸
const updateChartSize = () => {
    if (chartInstance) {
        chartInstance.resize({
            width: chartConfig.width,
            height: chartConfig.height
        })
        // 保存尺寸配置到 localStorage
        localStorage.setItem('vchart-config', JSON.stringify({
            width: chartConfig.width,
            height: chartConfig.height
        }))
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

// 监听配置变化
watch(() => chartConfig, () => {
    updateChartSize()
}, { deep: true })

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