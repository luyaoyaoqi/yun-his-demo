<template>
    <PrintContainer :paperSize="props.paperSize" :orientation="props.orientation"
        :containerPaddingStyle="props.containerPaddingStyle">
        <!-- 页眉内容 -->
        <template #header>
            <div class="header">
                <h1>工作室病历单2</h1>
            </div>
            <div class="line"></div>
        </template>

        <!-- 主内容 -->
        <template #main>
            <div class="patient-info">
                <p class="item">姓名: 张三</p>
                <p class="item">年龄: 32岁</p>
                <p class="item">性别: 女</p>
                <p class="item">病历号:123456</p>
            </div>
            <div class="line"></div>
            <div class="content-info">
                主诉: 下腹痛，便血，结肠炎
            </div>
            <div class="content-info">
                现病史: 便溏，左下腹疼，屁多，下腹胀，易饿，溃疡性结肠炎
            </div>
            <div class="content-info">
                体格检查: 面色明亮，有神，浓眉，双眼皮，舌色淡白，舌苔白，舌质胖，舌苔润，舌质齿痕
            </div>
            <div class="content-info">
                辅助检查:
            </div>
            <div class="content-info">
                中医诊断:
            </div>
            <div class="content-info">
                证型:
            </div>
            <div class="content-info">
                治法:
            </div>
            <div class="content-info">
                西医诊断:
            </div>
            <div class="content-info">
                中药1: 炙甘草 6克，姜半夏 15克，大枣 20克，干姜9克，桂枝 10克，厚 朴 10克，黄连 6克，人参15克 ，枳壳
                6克。7剂(每剂分2次服用 )。使用方法：内服
            </div>
            <div class="content-info">
                成药1: 桔贝合剂 X 1用法用量: 舌下含服，每周三次，每次1.1粒，3天
            </div>
            <div class="content-info">
                注意事项1:
            </div>
            <div class="content-info">
                复诊时间1:
            </div>
            <div class="content-info">
                中药2: 炙甘草 6克，姜半夏 15克，大枣 20克，干姜9克，桂枝 10克，厚 朴 10克，黄连 6克，人参15克 ，枳壳
                6克。7剂(每剂分2次服用 )。使用方法：内服
            </div>
            <div class="content-info">
                成药2: 桔贝合剂 X 1用法用量: 舌下含服，每周三次，每次1.1粒，3天
            </div>
            <div class="content-info">
                注意事项2:
            </div>
            <div class="content-info">
                复诊时间2:
            </div>
            <div class="content-info">
                中药3: 炙甘草 6克，姜半夏 15克，大枣 20克，干姜9克，桂枝 10克，厚 朴 10克，黄连 6克，人参15克 ，枳壳 6克。7剂(每剂分2次服用
                )。使用方法：内服
            </div>
            <div class="content-info">
                成药3: 桔贝合剂 X 1用法用量: 舌下含服，每周三次，每次1.1粒，3天
            </div>
            <div class="content-info">
                注意事项3:
            </div>
            <div class="content-info">
                复诊时间3:
            </div>
        </template>

        <!-- 页脚内容 -->
        <template #footer>
            <div class="line"></div>
            <div class="footer">
                <p>医生签名: 张医生</p>
                <p>门诊日期: 2024-03-21</p>
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
@import './print.less';


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

    .item {
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
}

.footer {
    display: flex;
    justify-content: space-between;
    font-size: 11pt;
}
</style>