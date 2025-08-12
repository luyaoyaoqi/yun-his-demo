<template>
    <PrintContainer :paperSize="props.paperSize" :orientation="props.orientation" :containerPaddingStyle="props.containerPaddingStyle">
        <!-- 页眉内容 -->
        <template #header>
            <div class="header">
                <h1>工作室病历单</h1>
                <div class="line"></div>
            </div>

        </template>

        <!-- 主内容 -->
        <template #main>
            <div class="patient-info">
                <p><span class="lable">姓名: </span>张三</p>
                <p><span class="lable">年龄: </span>32岁</p>
                <p><span class="lable">性别: </span>女</p>
                <p><span class="lable">病历号:</span>123456</p>
            </div>
            <div class="line"></div>
            <div class="content-info">
                <p><span class="lable">主诉: </span>下腹痛，便血，结肠炎</p>
            </div>
            <div class="content-info">
                <p><span class="lable">现病史: </span>便溏，左下腹疼，屁多，下腹胀，易饿，溃疡性结肠炎</p>
            </div>
            <div class="content-info">
                <p><span class="lable">体格检查: </span>面色明亮，有神，浓眉，双眼皮，舌色淡白，舌苔白，舌质胖，舌苔润，舌质齿痕</p>
            </div>
            <div class="content-info">
                <p><span class="lable">辅助检查: </span></p>
            </div>
            <div class="content-info">
                <p><span class="lable">中医诊断: </span></p>
            </div>
            <div class="content-info">
                <p><span class="lable">证型: </span></p>
            </div>
            <div class="content-info">
                <p><span class="lable">治法: </span></p>
            </div>
            <div class="content-info">
                <p><span class="lable">西医诊断: </span></p>
            </div>
            <div class="content-info">
                <p><span class="lable">中药1: </span>炙甘草 6克，姜半夏 15克，大枣 20克，干姜9克，桂枝 10克，厚 朴 10克，黄连 6克，人参15克 ，枳壳
                    6克。7剂(每剂分2次服用 )。使用方法：内服</p>
            </div>
            <div class="content-info">
                <p><span class="lable">成药1: </span>桔贝合剂 X 1用法用量: 舌下含服，每周三次，每次1.1粒，3天</p>
            </div>
            <div class="content-info">
                <p><span class="lable">注意事项1: </span></p>
            </div>
            <div class="content-info">
                <p><span class="lable">复诊时间1: </span></p>
            </div>
            <div class="content-info">
                <p><span class="lable">中药2: </span>炙甘草 6克，姜半夏 15克，大枣 20克，干姜9克，桂枝 10克，厚 朴 10克，黄连 6克，人参15克 ，枳壳
                    6克。7剂(每剂分2次服用 )。使用方法：内服</p>
            </div>
            <div class="content-info">
                <p><span class="lable">成药2: </span>桔贝合剂 X 1用法用量: 舌下含服，每周三次，每次1.1粒，3天</p>
            </div>
            <div class="content-info">
                <p><span class="lable">注意事项2: </span></p>
            </div>
            <div class="content-info">
                <p><span class="lable">复诊时间2: </span></p>
            </div>
            <div class="content-info">
                <p><span class="lable">中药3: </span>炙甘草 6克，姜半夏 15克，大枣 20克，干姜9克，桂枝 10克，厚 朴 10克，黄连 6克，人参15克 ，枳壳 6克。7剂(每剂分2次服用
                    )。使用方法：内服</p>
            </div>
            <div class="content-info">
                <p><span class="lable">成药3:</span> 桔贝合剂 X 1用法用量: 舌下含服，每周三次，每次1.1粒，3天</p>
            </div>
            <div class="content-info">
                <p><span class="lable">注意事项3: </span></p>
            </div>
            <div class="content-info">
                <p><span class="lable">复诊时间3: </span></p>
            </div>
        </template>

        <!-- 页脚内容 -->
        <template #footer>
            <div class="line"></div>
            <div class="print-footer">
                <p><span class="lable"></span>医生签名: 张医生</p>
                <p><span class="lable"></span>门诊日期: 2024-03-21</p>
            </div>
        </template>
    </PrintContainer>
</template>

<script lang="ts" setup>

// 定义 props
const props = defineProps({
    paperSize: {
        type: String
    },
    orientation: {
        type: String
    },
    containerPaddingStyle: { 
        type: String
    }
});

</script>

<style lang="less" scoped>
.print-editor-box {
    display: flex;
    justify-content: center;
    margin-bottom: 18pt;
}

.line {
    width: 100%;
    height: 1pt;
    background-color: black;
    margin: 12pt 0;
}

.header {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 15pt;
        font-weight: bold;
    }


}

.patient-info {
    display: flex;
    // flex-direction: column;
    flex-wrap: wrap;
    font-size: 11pt;
    margin-bottom: -12pt;

    p {
        flex: 0 0 33.33%;
        margin-bottom: 16pt;
    }
}

.content-info {
    display: flex;
    // flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 12pt;
    font-size: 11pt;

    p {
        flex: 0 0 100%
    }
}

.print-footer {
    display: flex;
    justify-content: space-between;
    font-size: 11pt;
}
</style>