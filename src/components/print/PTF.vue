<template>
    <PrintContainer :paperSize="props.paperSize" :orientation="props.orientation"
        :containerPaddingStyle="props.containerPaddingStyle">
        <!-- 页眉内容 -->
        <template #header>
            <div class="header">
                <div class="header-left">
                    <div class="qr-code">
                        <img data-visible="barcode" data-field="barcode"
                            src="https://qaweb.macrocura.com/yunhis/barcode.png" alt="条码" />
                    </div>
                </div>
                <div class="header-title">
                    <div class="title-main" data-field="organizationName">上海脉景工作室</div>
                    <div class="title-sub" data-visible="documentTitle" data-field="documentTitle">黄煌传承工作室</div>
                    <div class="title-sub" data-visible="documentType" data-field="documentType">治疗理疗单</div>
                </div>
                <div class="header-right">
                    <div class="qr-code">
                        <img data-visible="qrcode" data-field="qrcode"
                            src="https://qaweb.macrocura.com/yunhis/qrcode.png" alt="二维码" />
                    </div>
                </div>
            </div>
            <div class="patient-basic-info">
                <div class="info-item">
                    姓名： <span data-field="patientName">张三</span><span data-field="patientAge">32岁</span><span
                        data-field="patientGender">女</span>
                </div>
                <div class="info-item">
                    诊号： <span data-field="medicalRecordCode">0009292</span><span data-visible="visitType"
                        data-field="visitType">初诊</span>
                </div>
                <div class="info-item">日期： <span data-field="visitDate">2021-12-15</span></div>
            </div>
            <div class="divider"></div>
            <div class="patient-detail-info">
                <div class="info-item">科室: <span data-field="department">内科</span></div>
                <div class="info-item">
                    费别: <span data-visible="feeType" data-field="feeType">市医保(普通)</span><span data-visible="patientType"
                        data-field="patientType">职工</span>
                </div>
                <div class="info-item" data-visible="patientMobile">
                    手机: <span data-field="patientMobile">13900000000</span>
                </div>
                <div class="info-item row-two">
                    诊断: <span data-field="diagnosis">急性支气管炎，急性上呼吸道感染</span>
                </div>
                <div class="info-item" data-visible="medicalInsuranceNo">
                    医保号: <span data-field="medicalInsuranceNo">SG4348591</span>
                </div>
                <div class="info-item row-two" data-visible="idCard">
                    身份证: <span data-field="idCard">50000000000000000X</span>
                </div>
                <div class="info-item" data-visible="personalNo">
                    个人编号: <span data-field="personalNo">TK1203163</span>
                </div>
                <div class="info-item" data-visible="archiveNo">
                    档案号: <span data-field="archiveNo">000881</span>
                </div>
            </div>
            <div class="divider"></div>
        </template>

        <!-- 主内容 -->
        <template #main>
            <div class=" treatment-head">
                <div class="name">项目</div>
                <div class="price">单价</div>
                <div class="unit">单位</div>
                <div class="number">单次数量</div>
                <div class="total-number">总数量</div>
                <div class="days">天数</div>
                <div class="amount">执行金额</div>
                <div class="total-amount">总金额</div>
            </div>
            <div class="treatment-item">
                <div class="treatment-info">
                    <div class="name">骨伤、颈腰整脊手法</div>
                    <div class="price">100.00</div>
                    <div class="unit">次</div>
                    <div class="number"> </div>
                    <div class="total-number">4</div>
                    <div class="days">4天</div>
                    <div class="amount"> </div>
                    <div class="total-amount">100.00</div>
                </div>
                <div class="treatment-instruction">
                    用法： <span>2日1次，4天，共4次</span>
                </div>
            </div>
            <div class="treatment-item">
                <div class="treatment-info">
                    <div class="name">三位一体单次</div>
                    <div class="price">168.00</div>
                    <div class="unit">次</div>
                    <div class="number"> </div>
                    <div class="total-number">4</div>
                    <div class="days">4天</div>
                    <div class="amount"> </div>
                    <div class="total-amount">168.00</div>
                </div>
                <div class="treatment-instruction">
                    用法： <span>2日1次，4天，共4次</span>
                </div>
            </div>
            <div class="treatment-item">
                <div class="treatment-info">
                    <div class="name">穴位埋线（普通）</div>
                    <div class="price">35.00</div>
                    <div class="unit">次</div>
                    <div class="number"> </div>
                    <div class="total-number">4</div>
                    <div class="days">4天</div>
                    <div class="amount"> </div>
                    <div class="total-amount">35.00</div>
                </div>
                <div class="treatment-instruction">
                    用法： <span>2日1次，4天，共4次</span>
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
            <div class="large-prescription" data-visible="patientSignature">
                <div class="title">大额处方意见：<span class="checkbox"></span>同意</div>
                <div class="signature">签名：</div>
            </div>
            <div class="divider"></div>
            <div class="footer">
                <div class="doctor-info">
                    <div class="info-item">
                        开单人：<span>孙思邈</span>
                    </div>
                    <div class="info-item">
                        医生：<span data-visible="doctorSignature" data-field="doctor">张仲景</span>
                    </div>
                    <div class="info-item" data-visible="dispatcher">
                        收费员：<span data-visible="dispatcherSignature" data-field="dispatcher">华佗</span>
                    </div>
                    <div class="info-item" data-visible="amount">
                        金额：<span data-field="amount">503.00</span>
                    </div>
                </div>
                <div class="footer-note">
                    <div class="note-content" data-field="remark">
                        请按时按量执行，过期作废。治疗执行量请遵医嘱。
                    </div>
                    <div class="contact-info">
                        <div class="contact-item" data-visible="printTime">
                            打印时间：<span data-field="printTime">2023-06-28 09:45:33</span>
                        </div>
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

.treatment-info,
.treatment-head {
    display: flex;
    font-size: 10pt;
    line-height: 1.2;
    margin-bottom: 6pt;
    text-align: right;

    .name {
        flex: 1 1 auto;
        text-align: left;
    }

    .price {
        flex: 0 0 50pt;
    }

    .unit {
        flex: 0 0 30pt;
    }

    .number {
        flex: 0 0 50pt;
    }

    .total-number {
        flex: 0 0 40pt;
    }

    .days {
        flex: 0 0 30pt;
    }

    .amount {
        flex: 0 0 50pt;
    }

    .total-amount {
        flex: 0 0 50pt;
    }
}

.treatment-item {
    display: flex;
    flex-direction: column;
    font-size: 9pt;
    line-height: 1.2;

    .treatment-instruction {
        margin-left: 20pt;
        margin-bottom: 6pt;
    }
}
</style>