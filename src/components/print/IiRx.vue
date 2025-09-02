<template>
    <PrintContainer :paperSize="props.paperSize" :orientation="props.orientation"
        :containerPaddingStyle="props.containerPaddingStyle">
        <!-- 页眉内容 -->
        <template #header>
            <div class="header">
                <div class="header-left">
                    <div class="qr-code" data-field="barcode">
                        <img data-visible="barcode" src="https://qaweb.macrocura.com/yunhis/barcode.png" alt="条码" />
                    </div>
                    <div class="service">
                        <div class="service-item" data-visible="deliveryInfo">快递</div>
                        <div class="service-item">中西成药房</div>
                    </div>
                </div>
                <div class="header-title">
                    <div class="title-main" data-field="organizationName">上海脉景工作室</div>
                    <div class="title-sub" data-visible="documentTitle" data-field="documentTitle">黄煌传承工作室</div>
                    <div class="title-sub" data-visible="documentType" data-field="documentType">
                        处方笺
                    </div>
                </div>
                <div class="header-right">
                    <div class="qr-code" data-field="qrcode">
                        <img data-visible="qrcode" src="https://qaweb.macrocura.com/yunhis/qrcode.png" alt="二维码" />
                    </div>
                </div>
            </div>
            <div class="patient-basic-info">
                <div class="info-item">
                    姓名：
                    <span data-field="patientName">李四</span>
                    <span data-field="patientAge">45岁</span>
                    <span data-field="patientGender">男</span>
                </div>
                <div class="info-item" data-visible="medicalRecordCode">
                    诊号：<span data-field="medicalRecordCode">0015678</span>
                    <span data-visible="visitType" data-field="visitType">复诊</span>
                </div>
                <div class="info-item">日期: <span data-field="visitDate">2023-06-28</span></div>
            </div>
            <div class="divider"></div>
            <div class="patient-detail-info">
                <div class="info-item" data-visible="organizationMSC">
                    机构编码: <span data-field="organizationMSC">B11010500123</span>
                </div>
                <div class="info-item row-two" data-visible="doctorMSC">
                    医生编码: <span data-field="doctorMSC">D110108005678</span>
                </div>
                <div class="info-item">科室: <span data-field="department">中医科</span></div>
                <div class="info-item">
                    费别: <span data-visible="feeType" data-field="feeType">城乡居民医保</span>
                    <span data-visible="patientType" data-field="patientType">职工</span>
                </div>
                <div class="info-item" data-visible="patientMobile">
                    手机: <span data-field="patientMobile">13812345678</span>
                </div>
                <div class="info-item row-two">诊断: <span data-field="diagnosis">急性支气管炎，急性上呼吸道感染</span></div>
                <div class="info-item" data-visible="medicalInsuranceNo">
                    医保号: <span data-field="medicalInsuranceNo">BJ7890123</span>
                </div>
                <div class="info-item row-two" data-visible="idCard">
                    身份证: <span data-field="idCard">11010519780615XXXX</span>
                </div>
                <div class="info-item" data-visible="personalNo">
                    个人编号: <span data-field="personalNo">GR9876543</span>
                </div>
                <div class="info-item" data-visible="archiveNo">档案号: <span data-field="archiveNo">D123456</span></div>
                <div class="info-item" data-visible="birthDate">出生日期: <span data-field="birthDate">1978-06-15</span>
                </div>
                <div class="info-item" data-visible="weight">体重: <span data-field="weight">72kg</span></div>
                <div class="info-item" data-visible="maritalStatus">婚否: <span data-field="maritalStatus">已婚</span></div>
                <div class="info-item" data-visible="nationality">民族: <span data-field="nationality">满族</span></div>
                <div class="info-item" data-visible="job">职业: <span data-field="job">教师</span></div>
                <div class="info-item row-three" data-visible="address">
                    地址: <span data-field="address">北京市朝阳区建国路88号院3号楼1202</span>
                </div>
            </div>
            <div class="divider"></div>
        </template>

        <!-- 主内容 -->
        <template #main>
            <div class="prescription-label">Rp:</div>
            <div class="infusion-medicine-item">
                <div class="group-index">①</div>
                <div class="group">
                    <div class="medicine-item">
                        <div class="medicine-top">
                            <div class="medicine-name">氯化钠注射液9%<span class="product-name">(生理盐水)</span>(<span
                                    class="medicine-spec">2.25g*250ml/瓶</span> × <span
                                    class="medicine-quantity">1包</span>)</div>
                            <div class="usage"><span></span><span>续用</span></div>
                            <div class="medicine-quantity">250ml</div>
                        </div>
                        <div class="medicine-footer">
                            <div class="cabinet-number" data-visible="tcmCabinetNo">sc-22-2340</div>
                            <div class="manufacturer">厂家：<span>北京韩美</span></div>
                            <div class="price-unit" data-visible="tcmPrice"><span>¥0.01/包</span></div>
                            <div class="price-total" data-visible="tcmTotalAmount">，<span>共¥1.00</span></div>
                        </div>
                    </div>
                    <div class="medicine-item">
                        <div class="medicine-top">
                            <div class="medicine-name">克林霉素磷酸酯注射液<span class="product-name"></span>(<span
                                    class="medicine-spec">0.3g*2ml/支</span> × <span class="medicine-quantity">4支</span>)
                            </div>
                            <div class="usage"><span>皮试(+)</span><span></span></div>
                            <div class="medicine-quantity">250ml</div>
                        </div>
                        <div class="medicine-footer">
                            <div class="cabinet-number" data-visible="tcmCabinetNo">sc-22-2341</div>
                            <div class="manufacturer">厂家：<span>北京韩美</span></div>
                            <div class="price-unit" data-visible="tcmPrice"><span>¥0.01/包</span></div>
                            <div class="price-total" data-visible="tcmTotalAmount">，<span>共¥1.00</span></div>
                        </div>
                    </div>
                </div>
                <div class="infusion-bracket"></div>
                <div class="infusion-instruction">每天1次1天<br />静脉滴注60滴/分钟</div>
            </div>
            <div class="infusion-medicine-item">
                <div class="group-index">②</div>
                <div class="group">
                    <div class="medicine-item">
                        <div class="medicine-top">
                            <div class="medicine-name">葡萄糖氯化钠注射液<span class="product-name"></span>(<span
                                    class="medicine-spec">12.5g*250ml/瓶</span> × <span
                                    class="medicine-quantity">2瓶</span>)</div>
                            <div class="usage"><span></span><span></span></div>
                            <div class="medicine-quantity">250ml</div>
                        </div>
                        <div class="medicine-footer">
                            <div class="cabinet-number" data-visible="tcmCabinetNo">sc-22-2342</div>
                            <div class="manufacturer">厂家：<span>北京韩美</span></div>
                            <div class="price-unit" data-visible="tcmPrice"><span>¥0.01/包</span></div>
                            <div class="price-total" data-visible="tcmTotalAmount">，<span>共¥1.00</span></div>
                        </div>
                    </div>
                </div>
                <div class="infusion-bracket"></div>
                <div class="infusion-instruction">每天1次1天<br />静脉滴注60滴/分钟</div>
            </div>
            <div class="delivery-section" data-visible="deliveryInfo">
                <div class="delivery-label">快递</div>
                <div class="delivery-separator">：</div>
                <div class="delivery-content">
                    <div class="delivery-item">
                        <span data-field="deliveryMethod">圆通-到付，</span>
                        <span data-field="deliveryName">张伟 </span>
                        <span data-field="deliveryMobile">13787654321</span>
                    </div>
                    <div class="delivery-item" data-field="deliveryAddress">北京市海淀区中关村大街1号</div>
                </div>
            </div>
            <div class="advice-section" data-visible="medicalOrder">
                <div class="advice-label">医嘱</div>
                <div class="advice-separator">：</div>
                <div class="advice-content" data-field="medicalOrderList">
                    <div class="advice-item">1. 忌生冷油腻，注意休息</div>
                    <div class="advice-item">2. 按时服药，定期复查血压</div>
                </div>
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
                    <div class="info-item">医生：<span data-visible="doctorSignature" data-field="doctor">张仲景</span></div>
                    <div class="info-item" data-visible="amount">金额：<span data-field="amount">33.90</span></div>
                    <div class="info-item" data-visible="auditor">
                        审核：<span data-visible="auditorSignature" data-field="auditor">李时珍</span>
                    </div>
                    <div class="info-item" data-visible="dispatcher">
                        调配：<span data-visible="dispatcherSignature" data-field="dispatcher">孙思邈</span>
                    </div>
                    <div class="info-item" data-visible="issueOperator">
                        核发：<span data-visible="issueOperatorSignature" data-field="issueOperator">华佗</span>
                    </div>
                </div>
                <div class="footer-note">
                    <div class="note-content" data-field="remark">
                        除主诊医师特别注明外，处方仅当日有效。按卫生部规定，药房药品一经发出，不得退换。
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

.prescription-label {
    font-size: 11pt;
    margin-bottom: 8pt;
}

.infusion-medicine-item {
    display: flex;
    font-size: 10pt;
    line-height: 1.2;
    font-weight: 400;

    .group-index {
        margin-right: 4pt;
        font-size: 12pt;
        margin-top: -1pt;
    }

    .group {
        display: flex;
        flex: 1 auto;
        flex-direction: column;

        .medicine-item {
            margin-bottom: 10pt;
            display: flex;
            flex-direction: column;

            .medicine-top {
                display: flex;
                font-size: 11pt;
                margin-bottom: 4pt;


                .medicine-name {
                    margin-right: 6pt;
                    flex: 1 1 auto;
                    word-break: break-all;
                    margin-right: 12pt;
                }

                .usage {
                    flex: 0 auto;
                    margin-right: 6pt;
                    white-space: nowrap;
                }

                .medicine-quantity {
                    flex: 0 auto;
                    white-space: nowrap;
                }
            }

            .medicine-footer {
                display: flex;
                font-size: 10pt;
                padding-left: 12pt;
                flex-wrap: wrap;

                .cabinet-number {
                    margin-right: 6pt;
                    flex: 0 calc(50% - 6pt);
                }

                .manufacturer {
                    margin-right: 6pt;
                    flex: 0 calc(50% - 6pt);
                }

                .price-unit,
                .price-total {
                    flex: 0 auto;
                }
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