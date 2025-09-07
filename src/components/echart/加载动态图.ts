import type { EChartsOption } from 'echarts';
// 图表配置
export const chartOption: EChartsOption = {
    // 颜色设置，对应轻压、中压、重压
    color: ['#2ada9b', '#f7ba1e', '#fc726d'],

    title: {
        text: '动态加载图表',
        show: false,
    },

    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        top: '3%',
        containLabel: false
    },

    xAxis: {
        type: 'category',
        data: Array.from({ length: 12 }, (_, i) => (i + 1) * 5), // 生成 5 到 60 步长 5 的 x 轴数据
        show: false,
    },

    yAxis: {
        type: 'value',
        name: '数值',
        show: false,
        // 设置y轴范围，使随机数据更美观
        min: 0,
        max: 300
    },

    series: [
        {
            name: '轻压',
            data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)), // 随机数据 0-100
            type: 'line',
            lineStyle: {
                width: 2,
            },
            smooth: true,
            symbol: 'circle',
            symbolSize: 4,
            animation: true,
            animationDuration: 15000, // 20秒动画
            animationEasing: 'linear',
            animationDelay: 0 // 第一条线立即开始
        },
        {
            name: '中压',
            data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 200)), // 随机数据 0-200
            type: 'line',
            lineStyle: {
                width: 2,
            },
            smooth: true,
            symbol: 'circle',
            symbolSize: 4,
            animation: true,
            animationDuration: 15000, // 20秒动画
            animationEasing: 'linear',
            animationDelay: 15000 // 第二条线在第一条完成后开始（20秒后）
        },
        {
            name: '重压',
            data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 300)), // 随机数据 0-300
            type: 'line',
            lineStyle: {
                width: 2,
            },
            smooth: true,
            symbol: 'circle',
            symbolSize: 4,
            animation: true,
            animationDuration: 15000, // 20秒动画
            animationEasing: 'linear',
            animationDelay: 30000 // 第三条线在第二条完成后开始（40秒后）
        }
    ]
}