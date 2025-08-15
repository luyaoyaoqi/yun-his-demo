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
            <div class="cure-infos item">
                <div class="left-group">
                    <div class="cure-info item">
                        <div class="des">氯化钠注射液9%(生理盐水)2.25g*250ml/瓶</div>
                        <div class="nub-des">×1瓶</div>
                        <div class="nub-des">250ml</div>
                    </div>
                    <div class="cure-info item">
                        <div class="des">克林霉素磷酸酯注射液0.3g*2ml/支</div>
                        <div class="nub-des">×1瓶</div>
                        <div class="nub-des">250ml</div>
                    </div>
                </div>
                <div class="right-bracket">
                </div>
                <div class="right-des">每天1次1天<br />静脉滴注60滴/分钟</div>
            </div>
            <div class="line dashed"></div>
            <div class="chinese-drug-info item">
                <div class="des item">桔梗6g</div>
                <div class="des item">黄芩6g</div>
                <div class="des item">知母6g</div>
                <div class="des item">赤芍6g</div>
                <div class="des item">玄参6g</div>
                <div class="des item">连翘6g</div>
                <div class="des item">桔梗6g</div>
                <div class="des item">白术6g</div>
                <div class="botttom-des">共2剂，煎服，1日1剂1日3次每次150ml,饭后1小时服用</div>
            </div>
            <div class="line dashed"></div>
            <div class="advice-info">
                <div class="label">医嘱</div>
                <div>:&nbsp;</div>
                <div class="right-group">
                    <div class="des item">1.多喝水，保持身体充足水分</div>
                    <div class="des item">2.饮食规律宜清淡，忌烟酒，忌辛辣荤腥</div>
                </div>
            </div>
            <div class="empty-info">
                <div class="line dashed"></div>
                <div class="des">以下空白</div>
                <div class="line dashed"></div>
            </div>


        </template>

        <!-- 页脚内容 -->
        <template #footer>
            <div class="line"></div>
            <div class="footer">
                <div class="doctor-info">
                    <div class="des item">医生：胡青牛</div>
                    <div class="des item">金额：0.00</div>
                    <div class="des item">打印时间：2025-08-1511:11:07</div>
                </div>
                <div class="bottom-info">
                    <div class="des">除主诊医师特别注明外，处方仅当日有效。按卫生部规定，药房药品一经发出，不得退换。</div>
                    <div class="right-group">
                        <div class="des">电话：13882100001</div>
                        <div class="des">地址：惠民佳苑北路东南侧西部</div>
                        
                        </div>
                </div>
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
    line-height: 1.1;
    font-weight: 300;

    .left-qr-box {

        img {
            width: 80pt;
            height: auto;
        }
    }

    .right-qr-box {

        img {
            width: 48pt;
            height: 48pt;
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
            font-size: 13pt;
            margin-top: 8pt;
        }
    }

}

.patient-info {
    display: flex;
    flex-wrap: wrap;
    margin-top: 8pt;
    margin-bottom: -8pt;
    font-size: 10pt;
    line-height: 1.1;
    font-weight: 300;

    .des {
        flex: 1 auto;
        margin-right: 8pt;
        margin-bottom: 8pt;
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
    line-height: 1.1;
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
    line-height: 1.1;
    font-weight: 300;

    .des {
        flex: 1 auto;
    }

    .right-des {
        flex: 0 0 auto;
    }
}

.cure-infos {
    display: flex;
    margin-bottom: 8pt;
    font-size: 10pt;
    line-height: 1.1;
    font-weight: 300;

    .left-group {
        flex-direction: column;
        flex: 1 auto;
        margin-bottom: -8pt;

        .cure-info {
            display: flex;
            margin-bottom: 8pt;

            .des {
                flex: 1 auto;
            }

            .nub-des {
                flex: 0 40pt;
                text-align: right;
            }
        }
    }

    .right-bracket {
        display: inline-block;
        flex: 0 0 2pt;
        border: 1px solid#888;
        border-left: none;
        margin: 8px;
    }


    .right-des {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
    }


}

.chinese-drug-info {
    display: flex;
    margin-bottom: 8pt;
    font-size: 10pt;
    line-height: 1.1;
    font-weight: 300;
    flex-wrap: wrap;

    .des {
        flex: 1 25%;
        margin-bottom: 8pt;
    }

    .bottom-des {
        flex: 1 0 100%;
    }
}

.advice-info {
    display: flex;
    margin-bottom: 8pt;
    font-size: 10pt;
    line-height: 1.2;
    font-weight: 300;

    .right-group {
        display: flex;
        flex-direction: column;
        flex: 1 auto;

        .des {
            flex: 1 auto;
            margin-bottom: 4pt;
        }

    }

}

.empty-info {
    display: flex;
    margin-top: 8pt;
    font-size: 8pt;
    line-height: 1.1;
    font-weight: 300;
    justify-content: center;
    align-items: center;

    .line {
        flex: 0 0 40pt;
    }
}


.footer {
    display: flex;
    font-size: 10pt;
    line-height: 1.1;
    font-weight: 300;
    flex-direction: column;

    .doctor-info {
        display: flex;
        flex-wrap: wrap;
        font-size: 10pt;
        line-height: 1.1;
        font-weight: 300;

        .des {
            flex: 1 auto;
            margin-right: 8pt;
            margin-bottom: 8pt;
            word-break: break-all;
            flex-basis: calc(28% - 12pt);

            &:nth-child(3n) {
                flex-basis: calc(40% - 12pt);
                margin-right: 0;
            }

        }
    }

    .bottom-info {
        display: flex;
        font-size: 8pt;
        line-height: 1.1;
        font-weight: 300;
        justify-content: space-between;

        .des {
            flex: 0 48%;
            word-break: break-all;
        }
        .right-group{
            text-align: right;
        }
    }
}
</style>