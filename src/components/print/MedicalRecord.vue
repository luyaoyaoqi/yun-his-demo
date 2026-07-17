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
                    <div class="title-sub" data-visible="documentType" data-field="documentType">门诊病历</div>
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
                    姓名：
                    <span data-field="patientName">张三</span>
                    <span data-field="patientGender">女</span>
                    <span data-field="patientAge">32岁</span>
                </div>
                <div class="info-item">
                    诊号：
                    <span data-field="medicalRecordCode">0009292</span>
                    <span data-visible="visitType" data-field="visitType">初诊</span>
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
                    <span data-visible="patientType" data-field="patientType">职工</span>
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
                <div class="info-item" data-visible="medicalInsuranceNo">
                    医保号：
                    <span data-field="medicalInsuranceNo">SG4348591</span>
                </div>
                <div class="info-item" data-visible="archiveNo">
                    档案号：
                    <span data-field="archiveNo">000881</span>
                </div>
                <div class="info-item" data-visible="birthDate">
                    出生日期：
                    <span data-field="birthDate">1999-12-15</span>
                </div>
                <div class="info-item" data-visible="weight">
                    体重：
                    <span data-field="weight">45kg</span>
                </div>
                <div class="info-item" data-visible="maritalStatus">
                    婚否：
                    <span data-field="maritalStatus">未婚</span>
                </div>
                <div class="info-item" data-visible="nationality">
                    民族：
                    <span data-field="nationality">汉族</span>
                </div>
                <div class="info-item" data-visible="job">
                    职业：
                    <span data-field="job">职员</span>
                </div>
                <div class="info-item row-three" data-visible="address">
                    地址：
                    <span data-field="address">上海市闵行区申昆路1999号2号705</span>
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
                <div class="item-content" data-field="chiefComplaint">咳嗽，夜咳，咽痛，咽干</div>
            </div>
            <div class="clinic-item">
                <div class="item-label">现 病 史</div>
                <div class="item-separator">：</div>
                <div class="item-content" data-field="presentHistory">无</div>
            </div>
            <div class="clinic-item">
                <div class="item-label">既 往 史</div>
                <div class="item-separator">：</div>
                <div class="item-content" data-field="pastHistory">既往体健</div>
            </div>
            <div class="clinic-item" data-visible="treatment">
                <div class="item-label">处 置</div>
                <div class="item-separator">：</div>
                <div class="item-content" data-field="treatment"></div>
            </div>
            <div class="treatment-item" data-visible="treatment" data-field="treatmentList">
                <div class="treatment-name">超敏C反应蛋白测定</div>
                <div class="treatment-instruction">1次</div>
            </div>
            <div class="treatment-item" data-visible="treatment" data-field="treatmentList">
                <div class="treatment-name">三位一体单次</div>
                <div class="treatment-instruction">1次</div>
            </div>
            <!-- 套餐项添加 is-package -->
            <div class="treatment-item is-package" data-visible="treatmentPackage" data-field="treatmentPackageList">
                <div class="treatment-name">【套餐】综合调养套餐</div>
                <div class="treatment-instruction">1次</div>
            </div>
            <!-- 套餐子项添加 is-child -->
            <div class="treatment-item is-child" data-visible="treatmentPackageChild"
                data-field="treatmentPackageChildList">
                <div class="treatment-name"><span class="treatment-child-number">1</span>穴位贴敷</div>
                <div class="treatment-instruction">10次</div>
            </div>
            <div class="treatment-item is-child" data-visible="treatmentPackageChild"
                data-field="treatmentPackageChildList">
                <div class="treatment-name"><span class="treatment-child-number">2</span>电针灸</div>
                <div class="treatment-instruction">10次</div>
            </div>
            <div class="treatment-item is-child" data-visible="treatmentPackageChild"
                data-field="treatmentPackageChildList">
                <div class="treatment-name"><span class="treatment-child-number">3</span>推拿</div>
                <div class="treatment-instruction">10次</div>
            </div>
            <div class="treatment-item is-child" data-visible="treatmentPackageChild"
                data-field="treatmentPackageChildList">
                <div class="treatment-name"><span class="treatment-child-number">1</span>穴位贴敷</div>
                <div class="treatment-instruction">10次</div>
            </div>
            <div class="treatment-item is-child" data-visible="treatmentPackageChild"
                data-field="treatmentPackageChildList">
                <div class="treatment-name"><span class="treatment-child-number">2</span>电针灸</div>
                <div class="treatment-instruction">10次</div>
            </div>
            <div class="treatment-item is-child" data-visible="treatmentPackageChild"
                data-field="treatmentPackageChildList">
                <div class="treatment-name"><span class="treatment-child-number">3</span>推拿</div>
                <div class="treatment-instruction">10次</div>
            </div>
            <div class="treatment-item is-child" data-visible="treatmentPackageChild"
                data-field="treatmentPackageChildList">
                <div class="treatment-name"><span class="treatment-child-number">1</span>穴位贴敷</div>
                <div class="treatment-instruction">10次</div>
            </div>
            <div class="treatment-item is-child" data-visible="treatmentPackageChild"
                data-field="treatmentPackageChildList">
                <div class="treatment-name"><span class="treatment-child-number">2</span>电针灸</div>
                <div class="treatment-instruction">10次</div>
            </div>
            <div class="treatment-item is-child" data-visible="treatmentPackageChild"
                data-field="treatmentPackageChildList">
                <div class="treatment-name"><span class="treatment-child-number">3</span>推拿</div>
                <div class="treatment-instruction">10次</div>
            </div>
            <div class="treatment-item is-child" data-visible="treatmentPackageChild"
                data-field="treatmentPackageChildList">
                <div class="treatment-name"><span class="treatment-child-number">1</span>穴位贴敷</div>
                <div class="treatment-instruction">10次</div>
            </div>
            <div class="treatment-item is-child" data-visible="treatmentPackageChild"
                data-field="treatmentPackageChildList">
                <div class="treatment-name"><span class="treatment-child-number">2</span>电针灸</div>
                <div class="treatment-instruction">10次</div>
            </div>
            <div class="treatment-item is-child" data-visible="treatmentPackageChild"
                data-field="treatmentPackageChildList">
                <div class="treatment-name"><span class="treatment-child-number">3</span>推拿</div>
                <div class="treatment-instruction">10次</div>
            </div>
            <div class="patent-medicine-item" data-visible="treatment" data-field="cpmList">
                <div class="medicine-name">
                    四季抗病毒合剂
                    <span data-visible="cpmSpec">(120ml/瓶)</span>
                </div>
                <div class="medicine-quantity">×1瓶</div>
                <div class="medicine-dosage">
                    每次5ml 每天1次
                    <span data-visible="cpmUseDay">1天</span>
                </div>
            </div>
            <div class="patent-medicine-item" data-visible="treatment" data-field="cpmList">
                <div class="medicine-name">
                    小柴胡颗粒
                    <span data-visible="cpmSpec">(10g*10包/盒)</span>
                </div>
                <div class="medicine-quantity">×1瓶</div>
                <div class="medicine-dosage">
                    每次5ml 每天1次
                    <span data-visible="cpmUseDay">1天</span>
                </div>
            </div>
            <div class="infusion-section-item" data-visible="treatment" data-field="infusionList">
                <div class="infusion-group">
                    <div class="infusion-item">
                        <div class="infusion-name">氯化钠注射液9%(生理盐水)2.25g*250ml/瓶</div>
                        <div class="infusion-quantity">×1瓶</div>
                        <div class="treatment-dosage">250ml</div>
                    </div>
                    <div class="infusion-item">
                        <div class="infusion-name">克林霉素磷酸酯注射液0.3g*2ml/支</div>
                        <div class="infusion-quantity">×1瓶</div>
                        <div class="infusion-dosage">250ml</div>
                    </div>
                </div>
                <div class="infusion-bracket"></div>
                <div class="infusion-instruction">每天1次 1天<br />静脉滴注60滴/分钟</div>
            </div>
            <div class="chinese-medicine-section-item" data-visible="treatment" data-field="tcmList">
                <div class="medicine-item">
                    <span class="medicine-name">桔梗桔梗桔梗</span>
                    <span class="medicine-amount">999g</span>
                    <span class="medicine-method">先煎半小时</span>
                </div>
                <div class="medicine-item">
                    <span class="medicine-name">黄芩黄芩</span>
                    <span class="medicine-amount">86g</span>
                    <span class="medicine-method">先煎</span>
                </div>
                <div class="medicine-item">
                    <span class="medicine-name">桔梗</span>
                    <span class="medicine-amount">100g</span>
                    <span class="medicine-method">先煎半小时</span>
                </div>
                <div class="medicine-item">
                    <span class="medicine-name">赤芍</span>
                    <span class="medicine-amount">6g</span>
                </div>
                <div class="medicine-item">
                    <span class="medicine-name">玄参</span>
                    <span class="medicine-amount">6g</span>
                </div>
                <div class="medicine-item">
                    <span class="medicine-name">连翘</span>
                    <span class="medicine-amount">6g</span>
                </div>
                <div class="medicine-item">
                    <span class="medicine-name">桔梗</span>
                    <span class="medicine-amount">6g</span>
                </div>
                <div class="medicine-item">
                    <span class="medicine-name">白术</span>
                    <span class="medicine-amount">6g</span>
                </div>
                <div class="medicine-summary" data-field="usage">共2剂，煎服，1日1剂 1日3次 每次150ml，饭后1小时服用</div>
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
                    <div class="info-item" data-visible="amount">
                        金额：
                        <span data-field="amount">0.00</span>
                    </div>
                    <div class="info-item" data-visible="printTime">
                        打印时间：
                        <span data-field="printTime">2025-08-15 11:11:07</span>
                    </div>
                </div>
                <div class="footer-note">
                    <div class="note-content" data-field="remark">除主诊医师特别注明外，处方仅当日有效。按卫生部规定，药房药品一经发出，不得退换。</div>
                    <div class="contact-info">
                        <div class="contact-item" data-visible="doctorMobile">
                            电话：
                            <span data-field="doctorMobile">13882100001</span>
                        </div>
                        <div class="contact-item" data-visible="doctorAddress">
                            地址：
                            <span data-field="doctorAddress">惠民佳苑北路东南侧西部</span>
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
        flex-shrink: 0;
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

    .treatment-child-number {
        display: none;
    }

    &.is-child {
        &+.is-child {
            border-top: none;
            padding-top: 0;
        }
    }

    &.is-package {
        display: flex;

        &~.is-child {
            border-top: none;
            padding-top: 0;

            .treatment-name {
                padding-left: 16pt;

                .treatment-child-number {
                    display: inline-block;
                    margin-right: 4pt;
                }
            }
        }
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
        display: flex;

        .medicine-name {
            flex: 0 1 auto;
            margin-right: 2%;
        }

        .medicine-amount {
            flex: 0 1 auto;
            margin-right: 2pt;
            white-space: nowrap;
        }

        .medicine-method {
            flex: 0 1 auto;
            margin-right: 2pt;
            min-width: calc(33% - 2pt);
            font-size: 8pt;
            line-height: 1.5;
        }
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
        flex-shrink: 0;
    }

    .advice-separator {
        flex: 0 auto;
    }

    .advice-content {
        flex: 1 1 auto;

        .advice-item {
            width: 100%;
            margin-bottom: 4pt;
        }
    }
}
</style>