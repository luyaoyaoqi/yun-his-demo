<template>
    <PrintContainer :paperSize="props.paperSize" :orientation="props.orientation"
        :containerPaddingStyle="props.containerPaddingStyle">
        <!-- 页眉内容 -->
        <template #header>
            <div class="header">
                <div class="header-qr-left" data-field="barcode">
                    <img src="./image/qr1.png" alt="条码"></img>
                </div>
                <div class="header-title">
                    <div class="title-main" data-field="organizationName">上海脉景工作室</div>
                    <div class="title-sub" data-field="documentTitle">门诊病历</div>
                </div>
                <div class="header-qr-right" data-field="qrcode">
                    <img src="./image/qr2.png" alt="二维码"></img>
                </div>
            </div>
            <div class="patient-basic-info">
                <div class="info-item" data-field="patientInfoVisible">姓名： <span data-field="patientName">张三</span>
                    <span data-field="age">32岁</span> <span data-field="gender">女</span>
                </div>
                <div class="info-item" data-field="medicalRecordCodeVisible">诊号：<span
                        data-field="medicalRecordCode">0009292</span> <span data-field="visitType">初诊</span>
                </div>
                <div class="info-item" data-field="appointmentDateVisible">日期: <span
                        data-field="appointmentDate">2021-12-15</span></div>
            </div>
            <div class="divider"></div>
            <div class="patient-detail-info">
                <div class="info-item" data-field="departmentVisible">科室: <span data-field="department">内科</span></div>
                <div class="info-item" data-field="feeTypeVisible">费别: <span data-field="feeType">市医保(普通)职工</span></div>
                <div class="info-item" data-field="phoneVisible">手机: <span data-field="phone">13900000000</span></div>
                <div class="info-item" data-field="idCardVisible">身份证: <span
                        data-field="idCard">50000000000000000X</span></div>
                <div class="info-item" data-field="personalNumberVisible">个人编号: <span
                        data-field="personalNumber">TK1203163</span></div>
                <div class="info-item" data-field="medicalInsuranceNumberVisible">医保号: <span
                        data-field="medicalInsuranceNumber">SG4348591</span></div>
                <div class="info-item" data-field="archiveNumberVisible">档案号: <span
                        data-field="archiveNumber">000881</span></div>
                <div class="info-item" data-field="birthDateVisible">出生日期: <span
                        data-field="birthDate">1999-12-15</span></div>
                <div class="info-item" data-field="weightVisible">体重: <span data-field="weight">45kg</span></div>
                <div class="info-item" data-field="maritalStatusVisible">婚否: <span data-field="maritalStatus">未婚</span>
                </div>
                <div class="info-item" data-field="nationalityVisible">民族: <span data-field="nationality">汉族</span>
                </div>
                <div class="info-item" data-field="jobVisible">职业: <span data-field="job">职员</span></div>
                <div class="info-item" data-field="addressVisible">地址: <span
                        data-field="address">上海市闵行区申昆路1999号2号705</span></div>
            </div>
            <div class="divider"></div>
        </template>

        <!-- 主内容 -->
        <template #main>
            <div class="clinic-item">
                <!-- label之间必须加空格，否咋打印不生效 -->
                <div class="item-label" data-field="chiefComplaintVisible">主 诉</div>
                <div class="item-separator">：</div>
                <div class="item-content" data-field="chiefComplaint">咳嗽，夜咳，咽痛，咽干</div>
            </div>
            <div class="clinic-item" data-field="presentHistoryVisible">
                <div class="item-label">现 病 史</div>
                <div class="item-separator">：</div>
                <div class="item-content" data-field="presentHistory">无</div>
            </div>
            <div class="clinic-item" data-field="pastHistoryVisible">
                <div class="item-label">既 往 史</div>
                <div class="item-separator">：</div>
                <div class="item-content" data-field="pastHistory">既往体健</div>
            </div>
            <div class="clinic-item" data-field="treatmentVisible">
                <div class="item-label">处 置</div>
                <div class="item-separator">：</div>
                <div class="item-content" data-field="treatment"></div>
            </div>
            <div class="inspect-item" data-field="inspectionList">
                <div class="inspect-name">超敏C反应蛋白测定</div>
                <div class="inspect-instruction">共一次</div>
            </div>
            <div class="treatment-method-item" data-field="treatmentMethodList">
                <div class="inspect-name">三位一体单次</div>
                <div class="inspect-instruction">每天1次，1天，共1次</div>
            </div>
            <div class="patent-medicine-item" data-field="cpmList">
                <div class="medicine-name">四季抗病毒合剂(120ml/瓶)</div>
                <div class="medicine-quantity">×1瓶</div>
                <div class="medicine-dosage">每次5ml 每天1次</div>
            </div>
            <div class="patent-medicine-item" data-field="cpmList">
                <div class="medicine-name">小柴胡颗粒(10g*10包/盒)</div>
                <div class="medicine-quantity">×1瓶</div>
                <div class="medicine-dosage">每次5ml 每天1次</div>
            </div>
            <div class="treatment-section-item" data-field="infusionList">
                <div class="treatment-group">
                    <div class="treatment-item">
                        <div class="treatment-name">氯化钠注射液9%(生理盐水)2.25g*250ml/瓶</div>
                        <div class="treatment-quantity">×1瓶</div>
                        <div class="treatment-dosage">250ml</div>
                    </div>
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
                <div class="treatment-bracket"></div>
                <div class="treatment-instruction">每天1次1天<br />静脉滴注60滴/分钟</div>
            </div>
            <div class="treatment-section-item" data-field="infusionList">
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
                <div class="treatment-bracket"></div>
                <div class="treatment-instruction">每天1次1天<br />静脉滴注60滴/分钟</div>
            </div>
            <div class="chinese-medicine-section-item" data-field="tcmList">
                <div class="medicine-item">桔梗6g</div>
                <div class="medicine-item">黄芩6g</div>
                <div class="medicine-item">知母6g</div>
                <div class="medicine-item">赤芍6g</div>
                <div class="medicine-item">玄参6g</div>
                <div class="medicine-item">连翘6g</div>
                <div class="medicine-item">桔梗6g</div>
                <div class="medicine-item">白术6g</div>
                <div class="medicine-summary" data-field="usage">共2剂，煎服，1日1剂 1日3次 每次150ml，饭后1小时服用</div>
            </div>
            <div class="advice-section" data-field="medicalOrdersVisible">
                <div class="advice-label">医 嘱</div>
                <div class="advice-separator">：</div>
                <div class="advice-content" data-field="medicalOrders">
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
            <div class="footer">
                <div class="doctor-info">
                    <div class="info-item" data-field="doctorNameVisible">医生：<span data-field="doctorName">胡青牛</span>
                    </div>
                    <div class="info-item" data-field="amountVisible">金额：<span data-field="amount">0.00</span></div>
                    <div class="info-item" data-field="printTimeVisible">打印时间：<span data-field="printTime">2025-08-15
                            11:11:07</span></div>
                </div>
                <div class="footer-note">
                    <div class="note-content" data-field="remark">除主诊医师特别注明外，处方仅当日有效。按卫生部规定，药房药品一经发出，不得退换。</div>
                    <div class="contact-info">
                        <div class="contact-item" data-field="doctorPhoneVisible">电话：<span
                                data-field="doctorPhone">13882100001</span></div>
                        <div class="contact-item" data-field="doctorAddressVisible">地址：<span
                                data-field="doctorAddress">惠民佳苑北路东南侧西部</span></div>
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

.inspect-item {
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

    .inspect-name {
        flex: 1 auto;
    }

    .inspect-instruction {
        flex: 0 0 auto;
    }
}

.treatment-method-item {
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

.treatment-section-item {
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
    font-size: 10pt;
    line-height: 1.2;
    font-weight: 400;
    flex-wrap: wrap;
    margin: 6pt 0;
    border-top: 1px dashed #888;
    padding-top: 6pt;

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