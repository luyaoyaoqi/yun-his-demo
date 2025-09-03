
import type { EChartsOption } from 'echarts'
// 图表配置
export const chartOption: EChartsOption | { customWidth: number; customHeight: number } = {

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
