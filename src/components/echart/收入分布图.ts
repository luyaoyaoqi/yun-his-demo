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
      // 为不同项目添加详细解释
      const explanations: Record<string, string> = {
        "西药 (¥500.00)": "👉 本地药房所有已收费单据中的西药实收金额（剔除退费和退单）",
        "中成药 (¥400.00)": "👉 本地药房所有已收费单据中的中成药实收金额（剔除退费和退单）",
        "中药饮片 (¥300.00)": "👉 本地药房所有已收费单据中的中药饮片实收金额（剔除退费和退单）",
        "中药颗粒 (¥150.00)": "👉 中药颗粒是采用现代制药工艺制成的单味中药颗粒剂",
        "诊疗项目 (¥100.00)": "",
        "挂号费 (¥80.00)": "",
        "云药房 (¥70.00)": "",
        "加工费 (¥60.00)": "",
        "包装费 (¥50.00)": "",
        "运费 (¥40.00)": "",
        "医疗器械 (¥30.00)": "",
        "自制成品 (¥20.00)": "",
        "保健药品 (¥10.00)": "",
        "保健食品 (¥5.00)": "",
        "其他商品 (¥1.00)": ""
      };
      
      const name = params.name;
      const percentage = params.percent;
      const value = params.value;
      
      return `${name} : ${percentage}%<div style="font-size:12px; white-space:normal; max-width:240px; line-height:1.2; color:#606266;margin-top:2px">${explanations[name]}</div>`;
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
    left: "60%",
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
        { value: 500, name: "西药 (¥500.00)" },
        { value: 400, name: "中成药 (¥400.00)" },
        { value: 300, name: "中药饮片 (¥300.00)" },
        { value: 150, name: "中药颗粒 (¥150.00)" },
        { value: 100, name: "诊疗项目 (¥100.00)" },
        { value: 80, name: "挂号费 (¥80.00)" },
        { value: 70, name: "云药房 (¥70.00)" },
        { value: 60, name: "加工费 (¥60.00)" },
        { value: 50, name: "包装费 (¥50.00)" },
        { value: 40, name: "运费 (¥40.00)" },
        { value: 30, name: "医疗器械 (¥30.00)" },
        { value: 20, name: "自制成品 (¥20.00)" },
        { value: 10, name: "保健药品 (¥10.00)" },
        { value: 5, name: "保健食品 (¥5.00)" },
        { value: 1, name: "其他商品 (¥1.00)" },
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
