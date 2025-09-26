<template>
    <PrintContainer :paperSize="props.paperSize" :orientation="props.orientation"
        :containerPaddingStyle="props.containerPaddingStyle">
        <!-- 页眉内容 -->
        <template #header>
            <div class="header">
                <div class="header-left"></div>
                <div class="header-title">
                    <div class="title-main" data-field="organizationName">上海脉景工作室</div>
                    <div class="title-sub" data-visible="documentTitle" data-field="documentTitle">黄煌传承工作室</div>
                    <div class="title-sub" data-visible="documentType" data-field="documentType">诊断证明书</div>
                </div>
                <div class="header-right">
                    <div class="qr-code">
                        <!-- 默认二维码 -->
                        <img data-visible="qrcode" data-field="qrcode"
                            src="https://qaweb.macrocura.com/yunhis/qrcode.png" alt="二维码" />
                    </div>
                </div>
            </div>
            <div class="patient-basic-info">
                <div class="info-item">
                    姓名：
                    <span data-field="patientName">张三</span>
                    <span data-field="patientGender">女</span>
                    <span data-field="patientAge">32岁</span>
                </div>
                <div class="info-item">
                    诊号：
                    <span data-field="medicalRecordCode">0009292</span>
                </div>
                <div class="info-item">
                    日期：
                    <span data-field="visitDate">2021-12-15</span>
                </div>
            </div>
            <div class="divider"></div>
            <div class="patient-detail-info">
                <div class="info-item">
                    科室：
                    <span data-field="department">内科</span>
                </div>
                <div class="info-item">
                    费别：
                    <span data-visible="feeType" data-field="feeType">市医保(普通)</span>
                </div>
                <div class="info-item" data-visible="patientMobile">
                    手机：
                    <span data-field="patientMobile">13900000000</span>
                </div>
                <div class="info-item row-two" data-visible="idCard">
                    身份证：
                    <span data-field="idCard">50000000000000000X</span>
                </div>
                <div class="info-item" data-visible="personalNo">
                    个人编号：
                    <span data-field="personalNo">TK1203163</span>
                </div>
                <div class="info-item" data-visible="archiveNo">
                    档案号：
                    <span data-field="archiveNo">000881</span>
                </div>
                <div class="info-item row-two">
                    诊断：
                    <span data-field="diagnosis">急性支气管炎，急性上呼吸道感染</span>
                </div>
            </div>
            <div class="divider"></div>
        </template>

        <!-- 主内容 -->
        <template #main>
            <div class="clinic-item">
                <!-- label之间必须加空格，否咋打印不生效 -->
                <div class="item-label">主 诉</div>
                <div class="item-separator">：</div>
                <div class="item-content" data-field="chiefComplaint">
                    <span>咳嗽，夜咳，咽痛，咽干</span>
                    <span>；发病日期：2025-06-11</span>
                </div>
            </div>
            <div class="clinic-item">
                <div class="item-label">现 病 史</div>
                <div class="item-separator">：</div>
                <div class="item-content" data-field="presentHistory">情绪正常，睡眠差，睡眠浅</div>
            </div>
            <div class="clinic-item">
                <div class="item-label">既 往 史</div>
                <div class="item-separator">：</div>
                <div class="item-content" data-field="pastHistory">既往体健，未见明显异常</div>
            </div>
            <div class="clinic-item">
                <div class="item-label">家 族 史</div>
                <div class="item-separator">：</div>
                <div class="item-content">否认家族遗传病史</div>
            </div>
            <div class="clinic-item">
                <div class="item-label">既 往 史</div>
                <div class="item-separator">：</div>
                <div class="item-content">既往体健，未见明显异常</div>
            </div>
            <div class="clinic-item">
                <div class="item-label">个 人 史</div>
                <div class="item-separator">：</div>
                <div class="item-content">不吸烟，未婚</div>
            </div>
            <div class="clinic-item">
                <div class="item-label">月经婚育史</div>
                <div class="item-separator">：</div>
                <div class="item-content">未婚，经量正常，白带正常</div>
            </div>
            <div class="clinic-item">
                <div class="item-label">望 闻 切 诊</div>
                <div class="item-separator">：</div>
                <div class="item-content">面色萎黄，面色晦暗，舌淡白，苔白</div>
            </div>
            <div class="clinic-item">
                <div class="item-label">体 格 检 查</div>
                <div class="item-separator">：</div>
                <div class="item-content">生命体征平稳，神志清楚</div>
            </div>
            <div class="clinic-item">
                <div class="item-label">辅 助 检 查</div>
                <div class="item-separator">：</div>
                <div class="item-content">胸部常规X线片，腹部常规X线</div>
            </div>
            <div class="clinic-item">
                <div class="item-label">西 医 诊 断</div>
                <div class="item-separator">：</div>
                <div class="item-content">胃肠炎（外伤瘀滞）</div>
            </div>
            <div class="clinic-item">
                <div class="item-label">中 医 诊 断</div>
                <div class="item-separator">：</div>
                <div class="item-content">胃痞病（外伤瘀滞）</div>
            </div>
            <div class="clinic-item">
                <div class="item-label">既 往 史</div>
                <div class="item-separator">：</div>
                <div class="item-content">既往体健，未见明显异常</div>
            </div>
            <div class="clinic-item">
                <div class="item-label">既 往 史</div>
                <div class="item-separator">：</div>
                <div class="item-content">既往体健，未见明显异常</div>
            </div>
            <div class="clinic-item">
                <div class="item-label">治 法</div>
                <div class="item-separator">：</div>
                <div class="item-content">涤痰定喘</div>
            </div>
            <div class="clinic-item">
                <div class="item-label">方 药</div>
                <div class="item-separator">：</div>
                <div class="item-content">制川乌</div>
            </div>
            <div class="clinic-item">
                <div class="item-label">处 置</div>
                <div class="item-separator">：</div>
                <div class="item-content">测试处置</div>
            </div>
            <div class="advice-section" data-visible="medicalOrder">
                <div class="advice-label">医 嘱</div>
                <div class="advice-separator">：</div>
                <div class="advice-content" data-field="medicalOrderList">
                    <div class="advice-item">1.多喝水</div>
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
            <div class="footer">
                <div class="doctor-info">
                    <div class="info-item">
                        医生：
                        <span data-field="doctorName">胡青牛</span>
                    </div>
                    <div class="info-item">盖章：</div>
                    <div class="info-item" data-visible="printTime">
                        打印时间：
                        <span data-field="printTime">2025-08-15 11:11:07</span>
                    </div>
                </div>
                <div class="footer-note">
                    <div class="note-content" data-field="remark">
                        1. 此证明书未经加盖公章无效
                        <br />
                        2. 此证明书仅用于证明患者当前病情不作其他使用
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

    &+div {
        border-top: none;
        padding-top: 0;
    }
}

.treatment-item {
    display: flex;
    margin-bottom: 6pt;
    font-size: 10pt;
    line-height: 1.2;
    font-weight: 400;
    border-top: 1px dashed #888;
    padding-top: 6pt;

    .treatment-name {
        flex: 1 auto;
    }

    .treatment-instruction {
        flex: 0 0 auto;
    }
}


.patent-medicine-item {
    display: flex;
    margin-bottom: 6pt;
    font-size: 10pt;
    line-height: 1.2;
    font-weight: 400;
    border-top: 1px dashed #888;
    padding-top: 6pt;

    &+& {
        border-top: none;
        padding-top: 0;
    }

    .medicine-name {
        flex: 1 auto;
    }

    .medicine-quantity,
    .medicine-dosage {
        flex: 0 0 auto;
        margin-left: 6px;
    }
}

.infusion-section-item {
    display: flex;
    margin-bottom: 6pt;
    font-size: 10pt;
    line-height: 1.2;
    font-weight: 400;
    border-top: 1px dashed #888;
    padding-top: 6pt;

    &+& {
        border-top: none;
        padding-top: 0;
    }

    .infusion-group {
        flex-direction: column;
        flex: 1 auto;
        margin-bottom: -6pt;
        overflow: hidden;

        .infusion-item {
            display: flex;
            margin-bottom: 6pt;

            .infusion-name {
                flex: 1 auto;
            }

            .infusion-quantity,
            .infusion-dosage {
                flex: 0 0 auto;
                margin-left: 6px;
            }
        }
    }

    .infusion-bracket {
        display: inline-block;
        flex: 0 0 2pt;
        border: 1pt solid#888;
        border-left: none;
        margin: 6pt;
    }


    .infusion-instruction {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
    }
}

.chinese-medicine-section-item {
    display: flex;
    font-size: 10pt;
    line-height: 1.2;
    font-weight: 400;
    flex-wrap: wrap;
    margin: 6pt 0;
    border-top: 1px dashed #888;
    padding-top: 6pt;

    .medicine-item {
        flex: 0 25%;
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
    border-top: 1px dashed #888;
    padding-top: 6pt;

    .advice-label {
        font-weight: 600;
        width: 50pt;
        display: inline-block;
        text-align: justify;
        text-align-last: justify;
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
</style>