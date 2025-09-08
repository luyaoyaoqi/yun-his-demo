import type { EChartsOption } from 'echarts';
// 图表配置
export const chartOption: EChartsOption = {
    // 颜色设置，对应轻压、中压、重压

    color: ['#2ada9b'],

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

    dataZoom: [
        {
            type: 'inside',
            start: 0,
            end: 10, // 显示前30个数据点（总共144个）
            throttle: 10
        }
    ],



    xAxis: {
        type: 'category',
        data: Array.from({ length: 12 * 12 }, (_, i) => (i + 1) * 5), // 生成 5 到 60 步长 5 的 x 轴数据
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
    },

    series: [
        {
            name: '轻压',
            data: [
                // 初始化3组数据
                ...Array.from({ length: 12 * 4 }, () => Math.floor(Math.random() * 100 + 100)),
                ...Array.from({ length: 12 * 4 }, () => Math.floor(Math.random() * 200 + 50)),
                ...Array.from({ length: 12 * 4 }, () => Math.floor(Math.random() * 300))
            ],
            type: 'line',
            lineStyle: {
                width: 2,
            },
            smooth: true,
            symbol: 'circle',
            symbolSize: 4,
            animation: true,
            animationDuration: 1000, // 60秒动画
            animationEasing: 'linear',
        }
    ]
}