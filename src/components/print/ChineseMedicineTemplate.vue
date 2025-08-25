<template>
    <PrintContainer :paperSize="props.paperSize" :orientation="props.orientation"
        :containerPaddingStyle="props.containerPaddingStyle">
        <!-- 页眉内容 -->
        <template #header>
            <div class="header">
                <div class="header-left">
                    <div class="qr-code" data-field="barcode">
                        <img src="./image/qr1.png" alt="条码"></img>
                    </div>
                    <div class="service">
                        <div class="service-item">加工</div>
                        <div class="service-item">快递</div>
                        <div class="service-item">中西成药房</div>
                    </div>
                </div>
                <div class="header-title">
                    <div class="title-main" data-field="organizationName">上海脉景工作室</div>
                    <div class="title-sub" data-field="documentTitle">处方笺 (饮片)</div>
                </div>
                <div class="header-right">
                    <div class="qr-code" data-field="qrcode">
                        <img src="./image/qr2.png" alt="二维码"></img>
                    </div>
                </div>
            </div>
            <div class="patient-basic-info">
                <div class="info-item" data-field="patientInfoVisible">姓名： <span data-field="patientName">李四</span><span
                        data-field="patientAge">45岁</span><span data-field="patientGender">男</span>
                </div>
                <div class="info-item" data-field="medicalRecordCodeVisible">诊号：<span
                        data-field="medicalRecordCode">0015678</span> <span data-field="visitType">复诊</span>
                </div>
                <div class="info-item" data-field="appointmentDateVisible">日期: <span
                        data-field="appointmentDate">2023-06-28</span></div>
            </div>
            <div class="divider"></div>
            <div class="patient-detail-info">
                <div class="info-item" data-field="">机构编码: <span data-field="">B11010500123</span></div>
                <div class="info-item" data-field="">医生编码: <span data-field="">D110108005678</span></div>
                <div class="info-item"></div>
                <div class="info-item" data-field="departmentVisible">科室: <span data-field="department">中医科</span></div>
                <div class="info-item" data-field="feeTypeVisible">费别: <span data-field="feeType">城乡居民医保</span></div>
                <div class="info-item" data-field="phoneVisible">手机: <span data-field="phone">13812345678</span></div>
                <div class="info-item extended" data-field="">诊断: <span data-field="">慢性咽炎，高血压1级</span></div>
                <div class="info-item"></div>
                <div class="info-item" data-field="medicalInsuranceNumberVisible">医保号: <span
                        data-field="medicalInsuranceNumber">BJ7890123</span></div>
                <div class="info-item" data-field="idCardVisible">身份证: <span
                        data-field="idCard">11010519780615XXXX</span></div>
                <div class="info-item" data-field="personalNumberVisible">个人编号: <span
                        data-field="personalNumber">GR9876543</span></div>
                <div class="info-item" data-field="archiveNumberVisible">档案号: <span
                        data-field="archiveNumber">D123456</span></div>
                <div class="info-item" data-field="birthDateVisible">出生日期: <span
                        data-field="birthDate">1978-06-15</span></div>
                <div class="info-item" data-field="weightVisible">体重: <span data-field="weight">72kg</span></div>
                <div class="info-item" data-field="maritalStatusVisible">婚否: <span data-field="maritalStatus">已婚</span>
                </div>
                <div class="info-item" data-field="nationalityVisible">民族: <span data-field="nationality">满族</span>
                </div>
                <div class="info-item" data-field="jobVisible">职业: <span data-field="job">教师</span></div>
                <div class="info-item"></div>
                <div class="info-item extended" data-field="addressVisible">地址: <span
                        data-field="address">北京市朝阳区建国路88号院3号楼1202</span></div>
            </div>
            <div class="divider"></div>
        </template>

        <!-- 主内容 -->
        <template #main>
            <div class="prescription-label">Rp:</div>
            <div class="chinese-medicine-section-item" data-field="">
                <div class="medicine-item col-8">
                    <div class="medicine-header">
                        <div class="cabinet-number">a-2-089</div>
                        <div class="price-unit"><span>¥0.02/g</span></div>
                        <div class="price-total">，<span>共¥3.60</span></div>
                    </div>
                    <div class="medicine-body">
                        <div class="medicine-name">当归</div>
                        <div class="grams-dose"><span>12g</span></div>
                        <div class="grams-total"><span>/ 36g</span></div>
                    </div>
                </div>
                <div class="medicine-item col-8">
                    <div class="medicine-header">
                        <div class="cabinet-number">b-3-156</div>
                        <div class="price-unit"><span>¥0.05/g</span></div>
                        <div class="price-total">，<span>共¥7.50</span></div>
                    </div>
                    <div class="medicine-body">
                        <div class="medicine-name">黄芪</div>
                        <div class="grams-dose"><span>15g</span></div>
                        <div class="grams-total"><span>/ 45g</span></div>
                    </div>
                </div>
                <div class="medicine-item col-8">
                    <div class="medicine-header">
                        <div class="cabinet-number">c-1-072</div>
                        <div class="price-unit"><span>¥0.04/g</span></div>
                        <div class="price-total">，<span>共¥4.80</span></div>
                    </div>
                    <div class="medicine-body">
                        <div class="medicine-name">白术</div>
                        <div class="grams-dose"><span>10g</span></div>
                        <div class="grams-total"><span>/ 30g</span></div>
                    </div>
                </div>
                <div class="medicine-item col-8">
                    <div class="medicine-header">
                        <div class="cabinet-number">d-4-110</div>
                        <div class="price-unit"><span>¥0.06/g</span></div>
                        <div class="price-total">，<span>共¥5.40</span></div>
                    </div>
                    <div class="medicine-body">
                        <div class="medicine-name">防风</div>
                        <div class="grams-dose"><span>9g</span></div>
                        <div class="grams-total"><span>/ 27g</span></div>
                    </div>
                </div>
                <div class="medicine-item col-8">
                    <div class="medicine-header">
                        <div class="cabinet-number">e-5-033</div>
                        <div class="price-unit"><span>¥0.03/g</span></div>
                        <div class="price-total">，<span>共¥3.80</span></div>
                    </div>
                    <div class="medicine-body">
                        <div class="medicine-name">甘草</div>
                        <div class="grams-dose"><span>10g</span></div>
                        <div class="grams-total"><span>/ 30g</span></div>
                    </div>
                </div>
                <div class="medicine-item col-8">
                    <div class="medicine-header">
                        <div class="cabinet-number">f-2-095</div>
                        <div class="price-unit"><span>¥0.08/g</span></div>
                        <div class="price-total">，<span>共¥9.60</span></div>
                    </div>
                    <div class="medicine-body">
                        <div class="medicine-name">川芎</div>
                        <div class="grams-dose"><span>12g</span></div>
                        <div class="grams-total"><span>/ 36g</span></div>
                    </div>
                </div>
            </div>
            <div class="usage-section" data-field="">
                <div class="usage-label">用法</div>
                <div class="usage-separator">：</div>
                <div class="usage-content" data-field="">
                    <div class="usage-item">共 3 剂，</div>
                    <div class="usage-item">6 味，单剂 68.00 g，总重 204.00 g</div>
                    <div class="usage-item">煎服，1日1剂，1日2次，每次200ml，饭前30分钟服用</div>
                </div>
            </div>
            <div class="processing-section" data-field="">
                <div class="processing-label">加工</div>
                <div class="processing-separator">：</div>
                <div class="processing-content" data-field="">手工煎药，1剂煎 2 袋</div>
            </div>
            <div class="delivery-section" data-field="">
                <div class="delivery-label">快递</div>
                <div class="delivery-separator">：</div>
                <div class="delivery-content" data-field="">
                    <div class="delivery-item">圆通-到付，张伟 13787654321</div>
                    <div class="delivery-item">北京市海淀区中关村大街1号</div>
                </div>
            </div>
            <div class="advice-section" data-field="medicalOrdersVisible">
                <div class="advice-label">医嘱</div>
                <div class="advice-separator">：</div>
                <div class="advice-content" data-field="medicalOrders">
                    <div class="advice-item">1. 忌生冷油腻，注意休息</div>
                    <div class="advice-item">2. 按时服药，定期复查血压</div>
                </div>
            </div>
        </template>

        <!-- 页脚内容 -->
        <template #footer>
            <div class="large-prescription">
                <div class="title">大额处方意见：<span class="checkbox"></span>同意</div>
                <div class="signature">签名：</div>
            </div>
            <div class="divider"></div>
            <div class="footer">
                <div class="doctor-info">
                    <div class="info-item" data-field="doctorNameVisible">医生：<span data-field="doctorName">张仲景</span>
                    </div>
                    <div class="info-item" data-field="amountVisible">金额：<span data-field="amount">33.90</span></div>
                    <div class="info-item" data-field="">审核：<span data-field="">李时珍</span></div>
                    <div class="info-item" data-field="">调配：<span data-field="">孙思邈</span></div>
                    <div class="info-item" data-field="">核发：<span data-field="">华佗</span></div>

                </div>
                <div class="footer-note">
                    <div class="note-content" data-field="remark">除主诊医师特别注明外，处方仅当日有效。按卫生部规定，药房药品一经发出，不得退换。</div>
                    <div class="contact-info">
                        <div class="contact-item" data-field="printTimeVisible">打印时间：<span
                                data-field="printTime">2023-06-28 09:45:33</span></div>
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

.prescription-label {
    font-size: 11pt;
}

.chinese-medicine-section-item {
    display: flex;
    font-size: 10pt;
    line-height: 1.2;
    font-weight: 400;
    flex-wrap: wrap;
    margin: 6pt 0;

    .medicine-item {
        margin-bottom: 16pt;
        display: flex;
        flex-direction: column;

        &.col-6 {
            flex: 0 25%;
        }

        &.col-8 {
            flex: 0 0 33.33%;
        }

        .medicine-header {
            display: flex;
            font-size: 8pt;

            .cabinet-number {
                margin-right: 6pt;
            }

            .price-unit,
            .price-total {
                flex: 0 auto;
            }
        }

        .medicine-body {
            display: flex;
            font-size: 11pt;
            font-weight: 400;

            .medicine-name {
                margin-right: 6pt;
                font-weight: 600;
            }

            .grams-dose,
            .grams-total {
                flex: 0 auto;
            }
        }

    }

    .medicine-summary {
        flex: 1 0 100%;
    }
}

.usage-section {
    display: flex;
    margin-bottom: 6pt;
    font-size: 10pt;
    line-height: 1.2;
    font-weight: 400;

    .usage-label {
        font-weight: 400;
        flex: 0 0 auto;
    }

    .usage-separator {
        flex: 0 auto;
    }

    .usage-content {
        display: flex;
        flex-direction: row;
        flex: 1 auto;
        margin-bottom: -4pt;
        flex-wrap: wrap;

        .usage-item {
            flex: 0 auto;
            margin-bottom: 4pt;
        }
    }
}

.processing-section {
    display: flex;
    margin-bottom: 6pt;
    font-size: 10pt;
    line-height: 1.2;
    font-weight: 400;
    border-top: 1px dashed #888;
    padding-top: 6pt;

    .processing-label {
        font-weight: 400;
        flex: 0 0 auto;
    }

    .processing-separator {
        flex: 0 auto;
    }

    .processing-content {
        display: flex;
        flex-direction: column;
        flex: 1 auto;
    }
}

.delivery-section {
    display: flex;
    margin-bottom: 6pt;
    font-size: 10pt;
    line-height: 1.2;
    font-weight: 400;
    border-top: 1px dashed #888;
    padding-top: 6pt;

    .delivery-label {
        font-weight: 400;
        flex: 0 0 auto;
    }

    .delivery-separator {
        flex: 0 auto;
    }

    .delivery-content {
        display: flex;
        flex-direction: column;
        flex: 1 auto;
        margin-bottom: -4px;

        .delivery-item {
            flex: 1 auto;
            margin-bottom: 4pt;
        }
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
        font-weight: 400;
        flex: 0 0 auto;
    }

    .advice-separator {
        flex: 0 auto;
    }

    .advice-content {
        display: flex;
        flex-direction: column;
        flex: 1 auto;
        margin-bottom: -4pt;

        .advice-item {
            flex: 1 auto;
            margin-bottom: 4pt;
        }
    }
}

.large-prescription {
    font-size: 10pt;
    display: flex;
    justify-content: flex-end;

    .title {
        flex: 1 auto;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .checkbox {
            display: inline-block;
            border: 1pt solid #888;
            width: 8pt;
            height: 8pt;
            margin-right: 2pt;
        }
    }

    .signature {
        margin-left: 16pt;
        flex: 0 100pt;
    }
}
</style>