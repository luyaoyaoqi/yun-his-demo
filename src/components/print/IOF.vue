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
                    <div class="title-sub" data-visible="documentType" data-field="documentType">输液注射单</div>
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
                <div class="info-item row-two">
                    诊断：
                    <span data-field="diagnosis">急性支气管炎，急性上呼吸道感染</span>
                </div>
                <div class="info-item" data-visible="medicalInsuranceNo">
                    医保号：
                    <span data-field="medicalInsuranceNo">SG4348591</span>
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
            </div>
            <div class="divider"></div>
        </template>

        <!-- 主内容 -->
        <template #main>
            <!-- 标签在右侧添加signature-right -->
            <div class="infusion-head signature-right">
                <div class="infusion-medicine-box">
                    <div class="infusion-medicine">
                        <!-- 标签在右侧显示 -->
                        <div class="name">医嘱内容</div>
                        <div class="number">单次剂量</div>
                    </div>
                </div>
                <!-- 标签在右侧显示:3个签名 -->
                <div class="signature">时间/签名</div>
                <div class="signature">时间/签名</div>
                <div class="signature">时间/签名</div>
            </div>
            <!-- 标签在右侧添加signature-right -->
            <div class="infusion-item signature-right">
                <div class="infusion-medicine-box">
                    <div class="infusion-medicine">
                        <div class="infusion-medicine-item">
                            <div class="group-index">①</div>
                            <div class="group">
                                <div class="medicine-item">
                                    <div class="medicine-top">
                                        <div class="medicine-name">
                                            氯化钠注射液9%
                                            <span class="product-name">(生理盐水)</span>
                                            (
                                            <span class="medicine-spec">2.25g*250ml/瓶</span>
                                            ×
                                            <span class="medicine-quantity">1瓶</span>
                                            )
                                        </div>
                                        <div class="medicine-quantity">250ml</div>
                                    </div>
                                    <div class="medicine-footer">
                                        <div class="manufacturer">
                                            厂家：
                                            <span>北京韩美</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="medicine-item">
                                    <div class="medicine-top">
                                        <div class="medicine-name">
                                            克林霉素磷酸酯注射液
                                            <span class="product-name"></span>
                                            (
                                            <span class="medicine-spec">0.3g*2ml/支</span>
                                            ×
                                            <span class="medicine-quantity">4支</span>
                                            )
                                        </div>
                                        <div class="medicine-quantity">1.2g</div>
                                    </div>
                                    <div class="medicine-footer">
                                        <div class="manufacturer">
                                            厂家：
                                            <span>北京韩美</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="infusion-bracket"></div>
                            <div class="infusion-instruction">
                                <div class="infusion-content">
                                    <span class="frequency">每天1次</span>
                                    <span class="days">1天</span>
                                    <br />
                                    <span class="method">静脉滴注</span>
                                    <span class="speed">60滴/分钟</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 标签在右侧显示:3个签名 -->
                <div class="signature"></div>
                <div class="signature"></div>
                <div class="signature"></div>
            </div>
            <div class="infusion-item signature-right">
                <div class="infusion-medicine-box">
                    <div class="infusion-medicine">
                        <div class="infusion-medicine-item">
                            <div class="group-index">②</div>
                            <div class="group">
                                <div class="medicine-item">
                                    <div class="medicine-top">
                                        <div class="medicine-name">
                                            葡萄糖氯化钠注射液
                                            <span class="product-name"></span>
                                            (
                                            <span class="medicine-spec">12.5g*250ml/瓶</span>
                                            ×
                                            <span class="medicine-quantity">2瓶</span>
                                            )
                                        </div>
                                        <div class="medicine-quantity">500ml</div>
                                    </div>
                                    <div class="medicine-footer">
                                        <div class="manufacturer">
                                            厂家：
                                            <span>北京韩美</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="medicine-item">
                                    <div class="medicine-top">
                                        <div class="medicine-name">
                                            维生素C注射液
                                            <span class="product-name"></span>
                                            (
                                            <span class="medicine-spec">0.5g*2ml/支</span>
                                            ×
                                            <span class="medicine-quantity">3支</span>
                                            )
                                        </div>
                                        <div class="medicine-quantity">1.2g</div>
                                    </div>
                                    <div class="medicine-footer">
                                        <div class="manufacturer">
                                            厂家：
                                            <span>北京韩美</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="infusion-bracket"></div>
                            <div class="infusion-instruction">
                                <div class="infusion-content">
                                    <span class="frequency">每天1次</span>
                                    <span class="days">1天</span>
                                    <br />
                                    <span class="method">静脉滴注</span>
                                    <span class="speed">60滴/分钟</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 标签在右侧显示:3个签名 -->
                <div class="signature"></div>
                <div class="signature"></div>
                <div class="signature"></div>
            </div>
            <div class="blank-section">
                <div class="divider dashed"></div>
                <div class="blank-text">以下空白</div>
                <div class="divider dashed"></div>
            </div>

        </template>

        <!-- 页脚内容 -->
        <template #footer>
            <!-- 标签在下方 -->
            <table class="signature-section">
                <tr>
                    <th>执行时间</th>
                    <th>执行签名</th>
                    <th>患者签名</th>
                    <th>执行时间</th>
                    <th>执行签名</th>
                    <th>患者签名</th>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <div class="divider"></div>
            <div class="footer">
                <div class="doctor-info">
                    <div class="info-item">
                        医生：
                        <span data-visible="doctorSignature" data-field="doctor">张仲景</span>
                    </div>
                    <div class="info-item" data-visible="amount">
                        金额：
                        <span data-field="amount">33.90</span>
                    </div>
                    <div class="info-item" data-visible="auditor">
                        审核：
                        <span data-visible="auditorSignature" data-field="auditor">李时珍</span>
                    </div>
                    <div class="info-item" data-visible="dispatcher">
                        调配：
                        <span data-visible="dispatcherSignature" data-field="dispatcher">孙思邈</span>
                    </div>
                    <div class="info-item" data-visible="issueOperator">
                        核发：
                        <span data-visible="issueOperatorSignature" data-field="issueOperator">华佗</span>
                    </div>
                </div>
                <div class="footer-note">
                    <div class="note-content" data-field="remark">请按时按量执行，过期作废。治疗执行量请遵医嘱。</div>
                    <div class="contact-info">
                        <div class="contact-item" data-visible="printTime">
                            打印时间：
                            <span data-field="printTime">2023-06-28 09:45:33</span>
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


.infusion-head,
.infusion-item {
    display: flex;
    font-size: 10pt;
    line-height: 1.2;
    padding-bottom: 6pt;

    .infusion-medicine-box {
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        overflow: hidden;

        .infusion-medicine {
            display: flex;
            align-items: center;

            .name {
                display: none;
            }

            .number {
                display: none;
            }

            .infusion-medicine-item {
                display: flex;
                font-weight: 400;
                width: 100%;

                .group-index {
                    margin-right: 4pt;
                    margin-top: -1pt;
                }

                .group {
                    display: flex;
                    flex: 1 auto;
                    flex-direction: column;
                    overflow: hidden;

                    .medicine-item {
                        margin-bottom: 10pt;
                        display: flex;
                        flex-direction: column;

                        .medicine-top {
                            display: flex;
                            margin-bottom: 4pt;

                            .medicine-name {
                                margin-right: 6pt;
                                flex: 1 1 auto;
                                word-break: break-all;
                                margin-right: 12pt;
                                font-weight: 600;

                                .medicine-spec,
                                .medicine-quantity {
                                    font-weight: 400;
                                }
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

                    .infusion-content {
                        >span:not(:last-child) {
                            margin-right: 4pt;
                        }
                    }
                }

            }

        }
    }

    .signature {
        display: none;
    }
}

.infusion-head,
.infusion-item {

    &.signature-right {
        padding: 0 6pt;
        border: 1px solid #888;
        font-size: 9pt;

        &:first-child {
            border-top: 1px solid #888 !important;
        }

        &+.signature-right {
            border-top: none;
        }

        .infusion-medicine-box {
            padding: 4pt 0;

            .infusion-medicine {
                .name {
                    flex: 1 1 auto;
                    text-align: left;
                    display: block;
                }

                .number {
                    flex: 0 0 46pt;
                    text-align: right;
                    display: block;
                }

                .infusion-medicine-item {
                    flex-wrap: wrap;

                    .group {
                        flex: 1 calc(100% - 20pt);
                    }

                    .infusion-bracket {
                        display: none;
                    }

                    .infusion-instruction {
                        margin-left: 16pt;

                        .infusion-content {
                            display: flex;

                            br {
                                display: none;
                            }

                            .method {
                                order: -1;
                            }
                        }

                    }

                }
            }
        }

        .signature {
            display: block;
            flex: 0 0 40pt;
            text-align: center;
            border-left: 1px solid #888;
            padding: 4pt 0 4pt 6pt;
            margin-left: 6pt;
        }

    }
}

.signature-section {
    font-size: 10pt;
    line-height: 1.2;
    width: 100%;
    margin-bottom: 6pt;
    border-collapse: collapse;

    tr {
        height: 20pt;

        th {
            font-weight: 400;
            border: 1px solid #888;
        }

        td {
            border: 1px solid #888;
        }
    }

    .row {
        flex: 1 1 auto;
        text-align: left;
    }
}
</style>