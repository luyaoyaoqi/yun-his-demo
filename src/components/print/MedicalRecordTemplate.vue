<template>
    <PrintContainer :paperSize="props.paperSize" :orientation="props.orientation"
        :containerPaddingStyle="props.containerPaddingStyle">
        <!-- 页眉内容 -->
        <template #header>
            <div class="header">
                <div class="header-qr-left">
                    <img src="./image/qr1.png" alt="条码"></img>
                </div>
                <div class="header-title">
                    <div class="title-main">上海脉景工作室</div>
                    <div class="title-sub">门诊病历</div>
                </div>
                <div class="header-qr-right">
                    <img src="./image/qr2.png" alt="二维码"></img>
                </div>
            </div>
            <div class="patient-basic-info">
                <div class="info-item">姓名: 张三 32岁 女</div>
                <div class="info-item">诊号: 0009292 初诊</div>
                <div class="info-item">日期: 2021-12-15</div>
            </div>
            <div class="divider"></div>
            <div class="patient-detail-info">
                <div class="info-item">科室: 内科</div>
                <div class="info-item">费别: 市医保(普通)职工</div>
                <div class="info-item">手机: 13900000000</div>
                <div class="info-item">身份证: 50000000000000000X</div>
                <div class="info-item">个人编号: TK1203163</div>
                <div class="info-item">医保号: SG4348591</div>
                <div class="info-item">档案号: 000881</div>
                <div class="info-item">出生日期: 1999-12-15</div>
                <div class="info-item">体重: 45kg</div>
                <div class="info-item">婚否: 未婚</div>
                <div class="info-item">民族: 汉族</div>
                <div class="info-item">职业: 职员</div>
                <div class="info-item">地址: 上海市闵行区申昆路1999号2号705</div>
            </div>
            <div class="divider"></div>
        </template>

        <!-- 主内容 -->
        <template #main>
            <div class="clinic-item">
                <div class="item-label">主 诉</div>
                <div class="item-separator">:&nbsp;</div>
                <div class="item-content">咳嗽，夜咳，咽痛，咽干</div>
            </div>
            <div class="clinic-item">
                <div class="item-label">现 病 史</div>
                <div class="item-separator">:&nbsp;</div>
                <div class="item-content">无</div>
            </div>
            <div class="clinic-item">
                <div class="item-label">既 往 史</div>
                <div class="item-separator">:&nbsp;</div>
                <div class="item-content">既往体健</div>
            </div>
            <div class="clinic-item">
                <div class="item-label">处置</div>
                <div class="item-separator">:&nbsp;</div>
                <div class="item-content"></div>
            </div>
            <div class="inspect-item">
                <div class="inspect-name">超敏C反应蛋白测定</div>
                <div class="inspect-instruction">共一次</div>
            </div>
            <div class="divider dashed"></div>
            <div class="inspect-item">
                <div class="inspect-name">三位一体单次</div>
                <div class="inspect-instruction">每天1次，1天，共1次</div>
            </div>
            <div class="divider dashed"></div>
            <div class="patent-medicine-item">
                <div class="medicine-name">四季抗病毒合剂(120ml/瓶)</div>
                <div class="medicine-quantity">×1瓶</div>
                <div class="medicine-dosage">每次5ml 每天1次</div>
                <div class="medicine-method">口服</div>
                <div class="medicine-duration">1天</div>
            </div>
            <div class="patent-medicine-item">
                <div class="medicine-name">小柴胡颗粒(10g*10包/盒)</div>
                <div class="medicine-quantity">×1瓶</div>
                <div class="medicine-dosage">每次5ml 每天1次</div>
                <div class="medicine-method">口服</div>
                <div class="medicine-duration">1天</div>
            </div>
            <div class="divider dashed"></div>
            <div class="treatment-section-item">
                <div class="treatment-group">
                    <div class="treatment-item">
                        <div class="treatment-name">氯化钠注射液9%(生理盐水)2.25g*250ml/瓶</div>
                        <div class="treatment-quantity">×1瓶</div>
                        <div class="treatment-dosage">250ml</div>
                    </div>
                    <div class="treatment-item">
                        <div class="treatment-name">克林霉素磷酸酯注射液0.3g*2ml/支</div>
                        <div class="treatment-quantity">×1瓶</div>
                        <div class="treatment-dosage">250ml</div>
                    </div>
                </div>
                <div class="treatment-bracket">
                </div>
                <div class="treatment-instruction">每天1次1天<br />静脉滴注60滴/分钟</div>
            </div>
            <div class="divider dashed"></div>
            <div class="chinese-medicine-section-item">
                <div class="medicine-item">桔梗6g</div>
                <div class="medicine-item">黄芩6g</div>
                <div class="medicine-item">知母6g</div>
                <div class="medicine-item">赤芍6g</div>
                <div class="medicine-item">玄参6g</div>
                <div class="medicine-item">连翘6g</div>
                <div class="medicine-item">桔梗6g</div>
                <div class="medicine-item">白术6g</div>
                <div class="medicine-summary">共2剂，煎服，1日1剂 1日3次 每次150ml，饭后1小时服用</div>
            </div>
            <div class="divider dashed"></div>
            <div class="advice-section">
                <div class="advice-label">医嘱</div>
                <div class="advice-separator">:&nbsp;</div>
                <div class="advice-content">
                    <div class="advice-item">1.多喝水，保持身体充足水分</div>
                    <div class="advice-item">2.饮食规律宜清淡，忌烟酒，忌辛辣荤腥</div>
                </div>
            </div>
            <div class="blank-section">
                <div class="divider dashed"></div>
                <div class="blank-text">以下空白</div>
                <div class="divider dashed"></div>
            </div>


        </template>

        <!-- 页脚内容 -->
        <template #footer>
            <div class="divider"></div>
            <div class="medical-footer">
                <div class="doctor-info">
                    <div class="info-item">医生：胡青牛</div>
                    <div class="info-item">金额：0.00</div>
                    <div class="info-item">打印时间：2025-08-1511:11:07</div>
                </div>
                <div class="footer-note">
                    <div class="note-content">除主诊医师特别注明外，处方仅当日有效。按卫生部规定，药房药品一经发出，不得退换。</div>
                    <div class="contact-info">
                        <div class="contact-item">电话：13882100001</div>
                        <div class="contact-item">地址：惠民佳苑北路东南侧西部</div>

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
    line-height: 1.2;
    font-weight: 300;

    .header-qr-left {
        img {
            width: 80pt;
            height: auto;
        }
    }

    .header-qr-right {
        img {
            width: 48pt;
            height: 48pt;
        }
    }

    .header-title {
        flex: 1 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title-main {
            font-size: 15pt;
            font-weight: 400;
        }

        .title-sub {
            font-size: 13pt;
            margin-top: 6pt;
        }
    }

}

.patient-basic-info,
.patient-detail-info {
    display: flex;
    flex-wrap: wrap;
    margin-top: 6pt;
    margin-bottom: -6pt;
    font-size: 10pt;
    line-height: 1.2;
    font-weight: 300;

    .info-item {
        flex: 1 auto;
        margin-right: 6pt;
        margin-bottom: 6pt;
        word-break: break-all;


        &:nth-child(3n+1) {
            flex-basis: calc(40% - 12pt);
        }

        &:nth-child(3n+2) {
            flex-basis: calc(34% - 12pt);
        }

        &:nth-child(3n) {
            flex-basis: calc(26% - 12pt);
            margin-right: 0;
        }
    }
}

.clinic-item {
    display: flex;
    margin-bottom: 6pt;
    font-size: 10pt;
    line-height: 1.2;
    font-weight: 400;

    .item-label {
        font-weight: 600;
        width: 50pt;
        display: inline-block;
        text-align: justify;
        text-align-last: justify;
    }

    .item-content {
        flex: 1 auto;
    }

    .item-separator {
        flex: 0 0 auto;
    }
}

.inspect-item {
    display: flex;
    margin-bottom: 6pt;
    font-size: 10pt;
    line-height: 1.2;
    font-weight: 400;

    .inspect-name {
        flex: 1 auto;
    }

    .inspect-instruction {
        flex: 0 0 auto;
    }
}

.patent-medicine-item {
    display: flex;
    margin-bottom: 6pt;
    font-size: 10pt;
    line-height: 1.2;
    font-weight: 400;

    .medicine-name {
        flex: 1 auto;
    }

    .medicine-quantity,
    .medicine-dosage,
    .medicine-method,
    .medicine-duration {
        flex: 0 0 auto;
        margin-left: 6px;
    }
}

.treatment-section-item {
    display: flex;
    margin-bottom: 6pt;
    font-size: 10pt;
    line-height: 1.2;
    font-weight: 400;

    .treatment-group {
        flex-direction: column;
        flex: 1 auto;
        margin-bottom: -6pt;

        .treatment-item {
            display: flex;
            margin-bottom: 6pt;

            .treatment-name {
                flex: 1 auto;
            }

            .treatment-quantity,
            .treatment-dosage {
                flex: 0 0 auto;
                margin-left: 6px;
            }
        }
    }

    .treatment-bracket {
        display: inline-block;
        flex: 0 0 2pt;
        border: 1px solid#888;
        border-left: none;
        margin: 6px;
    }


    .treatment-instruction {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
    }
}

.chinese-medicine-section-item {
    display: flex;
    margin-bottom: 6pt;
    font-size: 10pt;
    line-height: 1.2;
    font-weight: 400;
    flex-wrap: wrap;

    .medicine-item {
        flex: 1 25%;
        margin-bottom: 6pt;
    }

    .medicine-summary {
        flex: 1 0 100%;
    }
}

.advice-section {
    display: flex;
    margin-bottom: 6pt;
    font-size: 10pt;
    line-height: 1.2;
    font-weight: 400;

    .advice-label {
        flex: 0 auto;
    }

    .advice-separator {
        flex: 0 auto;
    }

    .advice-content {
        display: flex;
        flex-direction: column;
        flex: 1 auto;

        .advice-item {
            flex: 1 auto;
            margin-bottom: 4pt;
        }
    }
}

.blank-section {
    display: flex;
    margin-top: 6pt;
    font-size: 10pt;
    line-height: 1.2;
    font-weight: 400;
    justify-content: center;
    align-items: center;

    .divider {
        flex: 0 0 40pt;
    }

    .blank-text {
        margin: 0 8pt;
    }
}


.medical-footer {
    display: flex;
    font-size: 10pt;
    line-height: 1.2;
    font-weight: 400;
    flex-direction: column;

    .doctor-info {
        display: flex;
        justify-content: space-between;

        .info-item {
            flex: 0 auto;
            margin-right: 6pt;
            margin-bottom: 6pt;
            word-break: break-all;

            &:nth-child(3n) {
                margin-right: 0;
            }

        }
    }

    .footer-note {
        display: flex;
        font-size: 9pt;
        justify-content: space-between;

        .note-content {
            flex: 0 48%;
            word-break: break-all;
        }

        .contact-info {
            text-align: right;

            .contact-item {
                margin-bottom: 2pt;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
}
</style>