import type { EChartsOption } from 'echarts'
// 图表配置
export const chartOption: EChartsOption= {

    // 添加动画效果
    animation: true,
    animationDuration: 1000,
    animationEasing: 'cubicOut',
    // 颜色设置，对应轻压、中压、重压
    color: ['#2ada9b', '#f7ba1e', '#fc726d'],

    title: {
        show: true,
        left: 'center',
        textStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333'
        },
        // subtext: '单位：万元',
        subtextStyle: {
            color: '#666',
            fontSize: 12
        },
        padding: [10, 0, 20, 0]
    },

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderColor: '#ccc',
        borderWidth: 1,
        textStyle: {
            color: '#333'
        }
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '36px',
        containLabel: true
    },

    xAxis: {
        type: 'category',
        data: Array.from({ length: 12 }, (_, i) => (i + 1) * 60), // 生成 1 到 600 步长 60 的 x 轴数据
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
            show: true,
            alignWithLabel: true, // 关键设置：使刻度线与标签对齐
            length: 5,
            lineStyle: {
                color: '#ddd'
            }
        },
        splitLine: {
            show: false,
        }
    },

    yAxis: {
        type: 'value',
        name: '',
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
        // 横向网格线
        axisLine: {
            show: true,
            lineStyle: {
                color: '#ddd',
                width: 1,
            }
        },
        // 去除 y 轴的刻度
        axisTick: {
            show: true
        },
        // 纵向网格线
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#eee'
            }
        },
    },

    legend: {
        data: ['轻压', '中压', '重压'],
        left: 'center',
        top: '10px',
        textStyle: {
            color: '#666',
            fontSize: 12
        }
    },

    series: [
        {
            name: '轻压',
            data: [800, 700, 900, 600, 850, 750, 950, 800, 700, 850, 900, 800],
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 6,
        },
        {
            name: '中压',
            data: [500, 400, 550, 350, 500, 450, 580, 500, 400, 500, 550, 450],
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 6,
        },
        {
            name: '重压',
            data: [1000, 2100, 200, 2200, 2100, 300, 2000, 500, 1500, 1200, 1800, 800],
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 6,
        }
    ]
}