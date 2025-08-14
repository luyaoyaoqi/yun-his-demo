<template>
    <PrintContainer :paperSize="props.paperSize" :orientation="props.orientation"
        :containerPaddingStyle="props.containerPaddingStyle">
        <!-- 页眉内容 -->
        <template #header>
            <div class="header">
                <div class="left-qr-box">
                    <img src="./image/qr1.png" alt="条码"></img>
                </div>
                <div class="middle-box">
                    <div class="h1">上海脉景工作室</div>
                    <div class="h2">门诊病历</div>
                </div>
                <div class="right-qr-box">
                    <img src="./image/qr2.png" alt="二维码"></img>
                </div>
            </div>
            <div class="patient-info">
                <div class="des item">姓名: 张三 32岁 女</div>
                <div class="des item">诊号: 0009292 初诊</div>
                <div class="des item">日期: 2021-12-15</div>
            </div>
            <div class="line"></div>
            <div class="patient-info">
                <div class="des item">科室: 内科</div>
                <div class="des item">费别: 市医保(普通)职工</div>
                <div class="des item">手机: 13900000000</div>
                <div class="des item">身份证: 50000000000000000X</div>
                <div class="des item">个人编号: TK1203163</div>
                <div class="des item">医保号: SG4348591</div>
                <div class="des item">档案号: 000881</div>
                <div class="des item">出生日期: 1999-12-15</div>
                <div class="des item">体重: 45kg</div>
                <div class="des item">婚否: 未婚</div>
                <div class="des item">民族: 汉族</div>
                <div class="des item">职业: 职员</div>
                <div class="des item">地址: 四川省成都市高新区交子大道</div>
            </div>
            <div class="line"></div>
        </template>

        <!-- 主内容 -->
        <template #main>
            <div class="clinic-info item">
                <div class="label">主 诉</div>
                <div>:&nbsp;</div>
                <div class="des">咳嗽，夜咳，咽痛，咽干</div>
            </div>
            <div class="clinic-info item">
                <div class="label">现 病 史</div>
                <div>:&nbsp;</div>
                <div class="des">无</div>
            </div>
            <div class="clinic-info item">
                <div class="label">既 往 史</div>
                <div>:&nbsp;</div>
                <div class="des">既往体健</div>
            </div>
            <div class="clinic-info item">
                <div class="label">体 格 检 查</div>
                <div>:&nbsp;</div>
                <div class="des"></div>
            </div>
            <div class="drug-info item">
                <div class="des">超敏C反应蛋白测定</div>
                <div class="right-des">共一次</div>
            </div>
            <div class="line dashed"></div>
            <div class="drug-info item">
                <div class="des">三位一体单次</div>
                <div class="right-des">每天1次，1天，共1次</div>
            </div>
            <div class="line dashed"></div>
            <div class="drug-info item">
                <div class="des">四季抗病毒合剂(120ml/瓶)</div>
                <div class="right-des">×1瓶每次5ml每天1次口服1天</div>
            </div>
            <div class="drug-info item">
                <div class="des">小柴胡颗粒(10g*10包/盒)</div>
                <div class="right-des">×1瓶每次5ml每天1次口服1天</div>
            </div>
            <div class="line dashed"></div>
            <div class="drug-info item">
                <div class="des">小柴胡颗粒(10g*10包/盒)</div>
                <div class="right-des">×1瓶每次5ml每天1次口服1天</div>
            </div>
            <div class="drug-info">
                <div class="des">小柴胡颗粒(10g*10包/盒)</div>
                <div class="right-des">×1瓶每次5ml每天1次口服1天</div>
            </div>
            <div class="line dashed"></div>
            <div class="drug-info item">
                <div class="des">小柴胡颗粒(10g*10包/盒)</div>
                <div class="right-des">×1瓶每次5ml每天1次口服1天</div>
            </div>
            <div class="drug-info">
                <div class="des">小柴胡颗粒(10g*10包/盒)</div>
                <div class="right-des">×1瓶每次5ml每天1次口服1天</div>
            </div>
            <div class="line dashed"></div>
            <div class="drug-info item">
                <div class="des">小柴胡颗粒(10g*10包/盒)</div>
                <div class="right-des">×1瓶每次5ml每天1次口服1天</div>
            </div>
            <div class="drug-info">
                <div class="des">小柴胡颗粒(10g*10包/盒)</div>
                <div class="right-des">×1瓶每次5ml每天1次口服1天</div>
            </div>
            <div class="line dashed"></div>
            <div class="drug-info item">
                <div class="des">小柴胡颗粒(10g*10包/盒)</div>
                <div class="right-des">×1瓶每次5ml每天1次口服1天</div>
            </div>
            <div class="drug-info">
                <div class="des">小柴胡颗粒(10g*10包/盒)</div>
                <div class="right-des">×1瓶每次5ml每天1次口服1天</div>
            </div>
            <div class="drug-info">
                <div class="des">小柴胡颗粒(10g*10包/盒)</div>
                <div class="right-des">×1瓶每次5ml每天1次口服1天</div>
            </div>

        </template>

        <!-- 页脚内容 -->
        <template #footer>
            <div class="line"></div>
            <div class="footer">
                <div>医生签名: 张医生</div>
                <div>门诊日期: 2024-03-21</div>
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
@import './style/print.less';


.header {
    display: flex;
    font-size: 10pt;
    font-weight: 300;

    .left-qr-box {

        img {
            width: 100pt;
            height: auto;
        }
    }

    .right-qr-box {

        img {
            width: 64pt;
            height: 64pt;
        }
    }

    .middle-box {
        flex: 1 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .h1 {
            font-size: 15pt;
            font-weight: 400;
        }

        .h2 {
            font-size: 14pt;
            margin-top: 8pt;
        }
    }

}

.patient-info {
    display: flex;
    flex-wrap: wrap;
    margin-top: 8pt;
    margin-bottom: -8pt;
    margin-right: -8pt;
    font-size: 10pt;
    font-weight: 300;

    .des {
        flex: 1 auto;
        margin-right: 8pt;
        margin-bottom: 8px;
        word-break: break-all;


        &:nth-child(3n+1) {
            flex-basis: calc(40% - 12pt);
        }

        &:nth-child(3n+2) {
            flex-basis: calc(32% - 12pt);

        }

        &:nth-child(3n) {
            flex-basis: calc(28% - 12pt);
            margin-right: 0;
        }
    }
}

.clinic-info {
    display: flex;
    margin-bottom: 8pt;
    font-size: 10pt;
    font-weight: 300;

    .label {
        font-weight: 600;
        width: 50pt;
        display: inline-block;
        text-align: justify;
        text-align-last: justify;
    }

    .des {
        flex: 1 auto;
    }

    .right-des {
        flex: 0 0 auto;
    }
}

.drug-info {
    display: flex;
    margin-bottom: 8pt;
    font-size: 10pt;
    font-weight: 300;

    .des {
        flex: 1 auto;
    }

    .right-des {
        flex: 0 0 auto;
    }
}

.footer {
    font-size: 10pt;
    font-weight: 300;
    display: flex;
    justify-content: space-between;
}
</style>