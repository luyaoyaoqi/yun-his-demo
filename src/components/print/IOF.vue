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
                    <div class="title-sub" data-visible="documentType" data-field="documentType">{{ data.title }}</div>
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
            <!-- 项目组 -->
            <div class="treatment-head" :class="data.signatureRight && data.signatureShow ? 'signature-right' : ''"
                v-if="data.treatmentDataShow">
                <!-- 上方标签在右侧添加signature-right -->
                <div class="treatment-medicine-box">
                    <div class="treatment-medicine">
                        <!-- 标签在右侧显示 -->
                        <div class="name">医嘱内容</div>
                    </div>
                </div>
                <!-- 标签在右侧显示:3个签名 -->
                <div class="signature">时间/签名</div>
            </div>
            <template v-if="data.treatmentDataShow">
                <template v-for="item in data.treatmentData" :key="item.medicineName">
                    <div class="treatment-item"
                        :class="data.signatureRight && data.signatureShow ? 'signature-right' : ''">
                        <!-- 上方标签在右侧添加signature-right -->
                        <div class="treatment-medicine-box">
                            <div class="treatment-medicine">
                                <div class="treatment-medicine-content">
                                    <div class="group">
                                        <div class="medicine-item">
                                            <div class="medicine-top">
                                                <div class="medicine-name">{{ item.medicineName }}</div>
                                                <div class="medicine-quantity">{{ item.medicineQuantity }}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="treatment-bracket"></div>
                                    <div class="treatment-instruction"></div>
                                </div>
                            </div>
                        </div>
                        <!-- 标签在右侧显示:1个签名 -->
                        <div class="signature"></div>
                    </div>
                </template>
            </template>

            <!-- 输注组 -->
            <div class="infusion-head" :class="data.signatureRight && data.signatureShow ? 'signature-right' : ''"
                v-if="data.infusionData.length > 0">
                <!-- 上方标签在右侧添加signature-right -->
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
            <template
                v-for="item in data.infusionData.filter((item: any) => data.infusionDataShowOther || !item.isOther)"
                :key="item.groupIndex">
                <div class="infusion-item" :class="data.signatureRight && data.signatureShow ? 'signature-right' : ''">
                    <!-- 上方标签在右侧添加signature-right -->
                    <div class="infusion-medicine-box">
                        <div class="infusion-medicine">
                            <!-- 其他类型加: infusion-other -->
                            <div class="infusion-medicine-content" :class="item.isOther ? 'infusion-other' : ''">
                                <!-- 没有组号，不显示 -->
                                <div class="group-index" :class="!item.groupIndex ? 'mj-hidden' : ''">
                                    {{ item.groupIndex }}</div>
                                <div class="group">
                                    <template v-for="child in item.groupChildren">
                                        <div class="medicine-item">
                                            <div class="medicine-top">
                                                <div class="medicine-name">
                                                    {{ child.medicine.info.name }}
                                                    <span class="product-name">{{ child.medicine.info.productName
                                                        }}</span>
                                                    (
                                                    <span class="medicine-spec">{{ child.medicine.info.spec }}</span>
                                                    ×
                                                    <span class="medicine-quantity">{{ child.medicine.info.quantity
                                                        }}</span>
                                                    )
                                                </div>
                                                <!-- 皮试没有不显示 -->
                                                <div class="medicine-test">{{ child.medicine.test }}</div>
                                                <div class="medicine-dosage">{{ child.medicine.dosage }}</div>
                                            </div>
                                            <div class="medicine-footer">
                                                <div class="manufacturer">
                                                    厂家：
                                                    <span>{{ child.medicine.manufacturer }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                </div>
                                <div class="infusion-bracket"></div>
                                <div class="infusion-instruction">
                                    <div class="infusion-content">
                                        <span class="dose">{{ item.instruction.dose }}</span>
                                        <span class="frequency">{{ item.instruction.frequency }}</span>
                                        <span class="days">{{ item.instruction.days }}</span>
                                        <br />
                                        <span class="method">{{ item.instruction.method }}</span>
                                        <span class="speed">{{ item.instruction.speed }}</span>
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
            </template>

        </template>

        <!-- 页脚内容 -->
        <template #footer>
            <!-- 标签在下方 -->
            <table class="signature-section" :class="data.signatureShow && !data.signatureRight ? '' : 'mj-hidden'">
                <thead>
                    <tr>
                        <th>执行时间</th>
                        <th>执行签名</th>
                        <th>患者签名</th>
                        <th>执行时间</th>
                        <th>执行签名</th>
                        <th>患者签名</th>
                    </tr>
                </thead>
                <tbody>
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
                </tbody>
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
let data: any = {};


// 输液注射单：成药处方
// data = {
//     title: '输液单',
//     signatureRight: true,
//     signatureShow: true,
//     treatmentDataShow: false,
//     infusionDataShowOther: false,
//     treatmentData: [{
//         medicineName: '针灸',
//         medicineQuantity: '0/2根'
//     }, {
//         medicineName: '补牙',
//         medicineQuantity: '0/2次'
//     }],
//     infusionData: [{
//         isOther: false,
//         groupIndex: '',
//         groupChildren: [{
//             medicine: {
//                 info: {
//                     name: '氯化钠注射液9%',
//                     productName: '(生理盐水)',
//                     spec: '2.25g*250ml/瓶',
//                     quantity: '1瓶',
//                 },
//                 test: '皮试()',
//                 dosage: '250ml',
//                 manufacturer: '北京韩美'
//             },
//         }],
//         instruction: {
//             dose: '',
//             frequency: '每天1次',
//             days: '1天',
//             method: '静脉滴注',
//             speed: '60滴/分钟'
//         }
//     }, {
//         isOther: true,
//         groupIndex: '',
//         groupChildren: [{
//             medicine: {
//                 info: {
//                     name: '鼻炎喷雾',
//                     productName: '',
//                     spec: '1瓶/瓶',
//                     quantity: '1瓶',
//                 },
//                 test: '',
//                 dosage: '',
//                 manufacturer: ''
//             },
//         }],
//         instruction: {
//             dose: '每次1瓶',
//             frequency: '每天1次',
//             days: '7天',
//             method: '滴鼻',
//             speed: ''
//         }
//     }, {
//         isOther: false,
//         groupIndex: '',
//         groupChildren: [{
//             medicine: {
//                 info: {
//                     name: '葡萄糖氯化钠注射液',
//                     productName: '',
//                     spec: '12.5g*250ml/瓶',
//                     quantity: '2瓶',
//                 },
//                 test: '',
//                 dosage: '500ml',
//                 manufacturer: '北京韩美'
//             },
//         }],
//         instruction: {
//             dose: '',
//             frequency: '每天1次',
//             days: '1天',
//             method: '静脉滴注',
//             speed: '60滴/分钟'
//         }
//     }],
// }

// 输液注射单：输注处方
data = {
    title: '输液注射单',
    signatureRight: true,
    signatureShow: true,
    treatmentDataShow: true,
    infusionDataShowOther: true,
    treatmentData: [{
        medicineName: '针灸',
        medicineQuantity: '0/2根'
    }, {
        medicineName: '补牙',
        medicineQuantity: '0/2次'
    }],
    infusionData: [{
        isOther: false,
        groupIndex: '①',
        groupChildren: [{
            medicine: {
                info: {
                    name: '氯化钠注射液9%',
                    productName: '(生理盐水)',
                    spec: '2.25g*250ml/瓶',
                    quantity: '1瓶',
                },
                test: '皮试()',
                dosage: '250ml',
                manufacturer: '北京韩美'
            },
        }, {
            medicine: {
                info: {
                    name: '克林霉素磷酸酯注射液',
                    productName: '',
                    spec: '0.3g*2ml/支',
                    quantity: '4支',
                },
                test: '',
                dosage: '1.2g',
                manufacturer: '北京韩美'
            },
        }],
        instruction: {
            dose: '',
            frequency: '每天1次',
            days: '1天',
            method: '静脉滴注',
            speed: '60滴/分钟'
        }
    }, {
        isOther: false,
        groupIndex: '②',
        groupChildren: [{
            medicine: {
                info: {
                    name: '葡萄糖氯化钠注射液',
                    productName: '',
                    spec: '12.5g*250ml/瓶',
                    quantity: '2瓶',
                },
                test: '',
                dosage: '500ml',
                manufacturer: '北京韩美'
            },
        }, {
            medicine: {
                info: {
                    name: '维生素C注射液',
                    productName: '',
                    spec: '0.5g*2ml/支',
                    quantity: '3支',
                },
                test: '',
                dosage: '1.2g',
                manufacturer: '北京韩美'
            },
        }],
        instruction: {
            dose: '',
            frequency: '每天1次',
            days: '1天',
            method: '静脉滴注',
            speed: '60滴/分钟'
        }
    }],
}

//注射单
// data = {
//     title: '注射单',
//     signatureRight: false,
//     signatureShow: true,
//     treatmentDataShow: false,
//     infusionDataShowOther: false,
//     treatmentData: [],
//     infusionData: [{
//         isOther: false,
//         groupIndex: '③',
//         groupChildren: [{
//             medicine: {
//                 info: {
//                     name: '注射用奥美拉唑钠',
//                     productName: '',
//                     spec: '40mg',
//                     quantity: '3支',
//                 },
//                 test: '',
//                 dosage: '1支',
//                 manufacturer: '湖南五洲通药业有限责任公司'
//             },
//         }, {
//             medicine: {
//                 info: {
//                     name: '注射用头孢曲松钠',
//                     productName: '',
//                     spec: '1g',
//                     quantity: '3瓶',
//                 },
//                 test: '',
//                 dosage: '1瓶',
//                 manufacturer: '广州白云山天心制药股份有限公司'
//             },
//         }],
//         instruction: {
//             dose: '',
//             frequency: '每天1次',
//             days: '3天',
//             method: '肌肉注射'
//         }
//     }],
// }

//雾化单
// data = {
//     title: '雾化单',
//     signatureRight: true,
//     signatureShow: true,
//     treatmentDataShow: false,
//     infusionDataShowOther: false,
//     treatmentData: [],
//     infusionData: [{
//         isOther: false,
//         groupIndex: '④',
//         groupChildren: [{
//             medicine: {
//                 info: {
//                     name: '鼻朗生理性海水鼻腔喷',
//                     productName: '',
//                     spec: '',
//                     quantity: '3盒',
//                 },
//                 test: '',
//                 dosage: '1瓶',
//                 manufacturer: '浙江朗柯生物工程有限公司'
//             },
//         }],
//         instruction: {
//             dose: '',
//             frequency: '每天1次',
//             days: '3天',
//             method: '雾化吸入'
//         }
//     }],
// }

//外治单
// data = {
//     title: '外治单',
//     signatureRight: true,
//     signatureShow: true,
//     treatmentDataShow: true,
//     infusionDataShowOther: true,
//     treatmentData: [{
//         medicineName: '针灸',
//         medicineQuantity: '0/2根'
//     }, {
//         medicineName: '补牙',
//         medicineQuantity: '0/2次'
//     }],
//     infusionData: [{
//         isOther: true,
//         groupIndex: '',
//         groupChildren: [{
//             medicine: {
//                 info: {
//                     name: '鼻炎喷雾',
//                     productName: '',
//                     spec: '1瓶/瓶',
//                     quantity: '1瓶',
//                 },
//                 test: '',
//                 dosage: '',
//                 manufacturer: ''
//             },
//         }],
//         instruction: {
//             dose: '每次1瓶',
//             frequency: '每天1次',
//             days: '7天',
//             method: '滴鼻',
//             speed: ''
//         }
//     }],
// }

</script>

<style lang="less" scoped>
@import './style/print.less';

.treatment-head,
.treatment-item {
    display: flex;
    font-size: 10pt;
    line-height: 1.2;
    padding-bottom: 6pt;

    .treatment-medicine-box {
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        overflow: hidden;

        .treatment-medicine {
            display: flex;
            align-items: center;

            .name {
                display: none;
            }

            .treatment-medicine-content {
                display: flex;
                font-weight: 400;
                width: 100%;

                .group {
                    display: flex;
                    flex: 3 1 300pt;
                    flex-direction: column;
                    overflow: hidden;

                    .medicine-item {
                        display: flex;
                        flex-direction: column;

                        .medicine-top {
                            display: flex;

                            .medicine-name {
                                margin-right: 6pt;
                                flex: 1 1 auto;
                                word-break: break-all;
                                margin-right: 12pt;
                                font-weight: 600;

                                .medicine-quantity {
                                    font-weight: 400;
                                }
                            }

                            .medicine-test {
                                flex: 0 auto;
                                white-space: nowrap;
                                margin-right: 4pt;
                            }

                            .medicine-dosage {
                                flex: 0 auto;
                                white-space: nowrap;
                            }
                        }
                    }
                }


                .treatment-bracket {
                    display: inline-block;
                    flex: 0 0 2pt;
                    border-left: none;
                    margin: 6pt;
                }


                .treatment-instruction {
                    flex: 1 0 100pt;
                    display: flex;
                    align-items: center;
                }
            }

        }
    }

    .signature {
        display: none;
    }

    &.signature-right {
        padding: 0 6pt;
        border: 1px solid #888;
        font-size: 9pt;

        &:first-child {
            border-top: 1px solid #888 !important;
        }

        &+.treatment-item {
            border-top: none;
        }

        .treatment-medicine-box {
            padding: 4pt 0;

            .treatment-medicine {
                .name {
                    flex: 1 1 auto;
                    text-align: left;
                    display: block;
                }

                .treatment-medicine-content {
                    flex-wrap: wrap;

                    .group {
                        flex: 1 calc(100% - 20pt);
                    }

                    .treatment-bracket {
                        display: none;
                    }

                    .treatment-instruction {
                        margin-left: 16pt;
                    }

                }
            }
        }

        .signature {
            display: block;
            flex: 0 0 144pt;
            text-align: center;
            border-left: 1px solid #888;
            padding: 4pt 0 4pt 6pt;
            margin-left: 6pt;
        }

    }
}

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

            .infusion-medicine-content {
                display: flex;
                font-weight: 400;
                width: 100%;

                .group-index {
                    margin-right: 4pt;
                    margin-top: -1pt;
                }

                .group {
                    display: flex;
                    flex: 3 1 300pt;
                    flex-direction: column;
                    overflow: hidden;

                    .medicine-item {
                        margin-bottom: 6pt;
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

                            .medicine-test {
                                flex: 0 auto;
                                white-space: nowrap;
                                margin-right: 4pt;
                            }

                            .medicine-dosage {
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
                    flex: 1 0 100pt;
                    display: flex;
                    align-items: center;

                    .infusion-content {
                        display: flex;
                        flex-wrap: wrap;

                        .dose {
                            display: none;
                            order: 1;
                        }

                        .frequency {
                            order: 2;
                        }

                        .days {
                            order: 3;
                        }

                        .method {
                            order: 4;
                        }

                        .speed {
                            order: 5;
                        }

                        >span {
                            white-space: nowrap;

                            &:not(:last-child) {
                                margin-right: 4pt;
                            }
                        }
                    }
                }

                &.infusion-other {
                    .group-index {
                        display: none;
                    }

                    .group {
                        .medicine-item {

                            .medicine-top {
                                margin-bottom: 0;

                                .medicine-test,
                                .medicine-dosage {
                                    display: none;
                                }
                            }

                            .medicine-footer {
                                display: none;
                            }
                        }
                    }

                    .infusion-bracket {
                        visibility: hidden;
                    }

                    .infusion-instruction {
                        flex-wrap: wrap;
                        align-items: flex-start;

                        .infusion-content {
                            flex-wrap: nowrap;

                            .dose {
                                display: inline;
                            }

                            br {
                                display: none;
                            }

                            .days {
                                margin-right: 0;
                            }

                            .method {
                                order: 2;
                            }
                        }
                    }
                }

            }

        }
    }

    .signature {
        display: none;
    }

    &.signature-right {
        padding: 0 6pt;
        border: 1px solid #888;
        font-size: 9pt;

        &:first-child {
            border-top: 1px solid #888 !important;
        }

        &+.infusion-item {
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

                .infusion-medicine-content {
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
                            .method {
                                order: 0;
                            }

                            br {
                                display: none;
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

.treatment-head,
.infusion-head {
    padding-bottom: 0;
}

.treatment-item+.infusion-head {
    &:not(.signature-right) {
        border-top: 1pt dashed #888;
        padding-bottom: 6pt;
    }

    &.signature-right {
        margin-top: 6pt;
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