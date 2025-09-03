import type { EChartsOption } from 'echarts'
// 图表配置
export const chartOption: EChartsOption | { customWidth: number; customHeight: number } = {

    // 添加动画效果
    animation: true,
    animationDuration: 1000,
    animationEasing: 'cubicOut',
    // 颜色设置，对应轻压、中压、重压
    color: ['#91c7ae', '#ca8622', '#c23531'],

    title: {
        text: '压力类型销售额趋势',
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
        top: '20%',
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

    legend: {
        data: ['轻压', '中压', '重压'],
        left: 'center',
        bottom: '10%',
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
            itemStyle: {
                color: '#91c7ae'
            },
            lineStyle: {
                color: '#91c7ae'
            }
        },
        {
            name: '中压',
            data: [500, 400, 550, 350, 500, 450, 580, 500, 400, 500, 550, 450],
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 6,
            itemStyle: {
                color: '#ca8622'
            },
            lineStyle: {
                color: '#ca8622'
            }
        },
        {
            name: '重压',
            data: [1000, 2100, 200, 2200, 2100, 300, 2000, 500, 1500, 1200, 1800, 800],
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 6,
            itemStyle: {
                color: '#c23531'
            },
            lineStyle: {
                color: '#c23531'
            }
        }
    ]
}