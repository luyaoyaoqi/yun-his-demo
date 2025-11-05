import type { EChartsOption } from "echarts";

// 图表配置
export const chartOption: EChartsOption = {
  color: [
    "#409EFF",
    "#FF8904",
    "#00D492",
    "#FF6467",
    "#9AE600",
    "#00BCFF",
    "#A684FF",
    "#79BBFF",
    "#FFB86A",
    "#5EE9B5",
    "#FFA2A2",
    "#BBF451",
    "#74D4FF",
    "#C4B4FF",
    "#C0C4CC",
  ],
  //   title: {
  //     text: "收入分布",
  //     left: "left",
  //   },
  tooltip: {
    trigger: "item",
    // formatter: "{a} <br/>{b} : {d}%",
      formatter: (params: any) => {
      
      const name = params.name;
      const percentage = params.percent;
      const value = params.value;
      
      return `${name} : ${percentage}%`;
    },
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderWidth: 1,
    padding: [8,16],
    textStyle: {
      color: "#303133",
      fontSize: 14,
    },
    extraCssText: "box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);"
  },
  legend: {
    type: 'scroll',
    orient: 'vertical',
    left: "55%",
    top: "middle", 
    textStyle: {
      color: "#606266",
      fontSize: 13,
    },
    pageIcons: {
     vertical: [
       'path://M6,22 L15,10 L24,22 Z',
        'path://M6,10 L15,22 L24,10 Z'
      ]
    },
    pageIconSize: 15,
    pageIconColor: '#409eff',
    pageIconInactiveColor: '#ccc',
    pageTextStyle: {
      color: '#606266',
      fontSize: 14
    }
  },
  series: [
    {
      type: "pie",
      name: "收入分布",
      radius: ["35%", "70%"],
      right: "40%",
      itemStyle: {
        borderRadius: 4,
        borderColor: "#fff",
        borderWidth: 3,
      },
      label: {
        show: false,
        position: "center",
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 500, name: "现金 (¥500.00)" },
        { value: 400, name: "支付宝 (¥400.00)" },
        { value: 300, name: "微信 (¥300.00)" },
        { value: 150, name: "银行卡 (¥150.00)" },
        { value: 100, name: "欠费 (¥100.00)" },
        { value: 80, name: "在线支付 (¥80.00)" },
      ],
       emphasis: {
        itemStyle: {
          shadowBlur: 1,
          shadowColor: 'rgba(0, 0, 0, 0.15)'
        }
      },
      animation: true,
      animationDuration: 500,
      animationEasing: "cubicOut",
    },
  ],
};
