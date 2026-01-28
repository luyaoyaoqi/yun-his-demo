<template>
    <PrintContainer :paperSize="props.paperSize" :orientation="props.orientation"
        :containerPaddingStyle="props.containerPaddingStyle">
        <!-- 页眉内容 -->
        <template #header>
            <div class="header">
                <div class="header-title">
                    <div class="big-mark">
                        <span>加工</span>
                        <span>快递</span>
                    </div>
                    <div class="title-qr" data-field="barcode">
                        <img data-visible="barcode" src="https://qaweb.macrocura.com/yunhis/barcode.png" alt="条码" />
                    </div>
                    <div class="picking-time">
                        <span>09-23 17:00</span>
                        <span>取药</span>
                    </div>
                    <div class="title-main" data-field="organizationName">上海脉景工作室</div>
                    <!-- <div class="title-sub" data-visible="documentTitle" data-field="documentTitle">黄煌传承工作室</div> -->
                    <div class="title-sub" data-visible="documentType" data-field="documentType">发药单</div>
                </div>
            </div>
            <div class="receipt-detail-info">
                <div class="info-item">
                    姓名：
                    <span data-field="patientName">李四</span>
                    <span data-field="patientGender">男</span>
                    <span data-field="patientAge">45岁</span>
                </div>
                <div class="info-item" data-visible="patientMobile">
                    手机：
                    <span data-field="patientMobile">13812345678</span>
                </div>
                <div class="info-item" data-visible="medicalRecordCode">
                    诊号：
                    <span data-field="medicalRecordCode">0015678</span>
                    <!-- <span data-visible="visitType" data-field="visitType">复诊</span> -->
                </div>
                <div class="info-item">
                    科室：
                    <span data-field="department">内科</span>
                </div>
                <div class="info-item">
                    医生：
                    <span data-visible="doctorSignature" data-field="doctor">张仲景</span>
                </div>
                <div class="info-item">
                    诊断：
                    <span data-field="diagnosis">急性支气管炎，急性上呼吸道感染</span>
                </div>
            </div>
        </template>

        <!-- 主内容 -->
        <template #main>

            <div class="receipt-detail-info">
                <!-- 中西成药 -->
                <div class="chinese-and-western-medicine">
                    <div class="divider dashed"></div>
                    <!-- 中西成药:单项 -->
                    <div class="info-item-group">
                        <div class="info-item">
                            <div class="name">
                                <span>双丹膏</span>
                                <span class="specification">2粒/盒</span>
                            </div>
                            <span class="times">1瓶</span>
                        </div>
                        <div class="info-item-child">
                            <div class="child-info">
                                <span>b-2-2018</span>
                                <span>每次1粒，1日1次</span>
                            </div>
                            <div class="child-info">厂家：</div>
                            <div class="child-info">追溯码：40000000002000000001</div>
                        </div>
                    </div>
                    <div class="info-item-group">
                        <div class="info-item">
                            <div class="name">
                                <span>感冒灵颗粒</span>
                                <span class="specification">10袋/盒</span>
                            </div>
                            <span class="times">1盒</span>
                        </div>
                        <div class="info-item-child">
                            <div class="child-info">
                                <span>b-2-2018</span>
                                <span>每次1袋，1日2次</span>
                            </div>
                            <div class="child-info">厂家：</div>
                            <div class="child-info">追溯码：40000000002000000001</div>
                        </div>
                    </div>
                </div>

                <!-- 材料 -->
                <div class="chinese-and-western-medicine">
                    <div class="divider dashed"></div>
                    <!-- 材料:单项 -->
                    <div class="info-item-group">
                        <div class="info-item">
                            <div class="name">
                                <span>医用材料1</span>
                                <span class="specification">2片/盒</span>
                            </div>
                            <span class="times">1瓶</span>
                        </div>
                        <div class="info-item-child">
                            <span class="child-info"> b-2-2018 </span>
                            <span class="child-info">厂家：</span>
                        </div>
                    </div>
                    <div class="info-item-group">
                        <div class="info-item">
                            <div class="name">
                                <span>医用材料2</span>
                                <span class="specification">2片/盒</span>
                            </div>
                            <span class="times">1盒</span>
                        </div>
                        <div class="info-item-child">
                            <span class="child-info"> b-2-2018 </span>
                            <span class="child-info">厂家：</span>
                        </div>
                    </div>
                </div>

                <!-- 中药 -->
                <div class="chinese-medicine">
                    <div class="divider dashed"></div>
                    <!-- 中药:单项 -->
                    <div class="info-item-group">
                        <div class="info-item">
                            <span class="name">柴胡</span>
                            <span class="times">10g</span>
                        </div>
                        <div class="info-item-child">
                            <div class="child-info">
                                <span>b-2-2018</span>
                                <span>[代煎]</span>
                            </div>
                        </div>
                    </div>
                    <div class="info-item-group">
                        <div class="info-item">
                            <span class="name">黄芩</span>
                            <span class="times">10g</span>
                        </div>
                        <div class="info-item-child">
                            <div class="child-info">
                                <span>b-2-2018</span>
                                <span>[代煎]</span>
                            </div>
                        </div>
                    </div>
                    <div class="info-item-group">
                        <div class="info-item">
                            <span class="name">生姜</span>
                            <span class="times">10g</span>
                        </div>
                        <div class="info-item-child">
                            <div class="child-info">
                                <span>b-2-2018</span>
                                <span>[代煎]</span>
                            </div>
                        </div>
                    </div>
                    <div class="info-item-group">
                        <div class="info-item">
                            <span class="name">大枣</span>
                            <span class="times">10g</span>
                        </div>
                        <div class="info-item-child">
                            <div class="child-info">
                                <span>b-2-2018</span>
                                <span>[代煎]</span>
                            </div>
                        </div>
                    </div>
                    <!-- 中药：药量 -->
                    <div class="info-item">
                        <span>共</span>
                        <span class="big-number">4</span>
                        <span>剂</span>
                        <span>（6味单剂6g，总重24g）</span>
                    </div>
                    <!-- 中药：用法 -->
                    <div class="info-item">
                        <span class="label">【用法】</span>
                        <span>煎服 1日1剂 1日3次 每次150ml 饭后服用</span>
                    </div>
                    <!-- 中药：加工 -->
                    <div class="info-item">
                        <span class="label">【加工】</span>2
                        <span>器煎药（普通） 1剂煎4袋，共 8 袋，联系人 19090909090 ，备注： 煎焦弃用</span>
                    </div>
                </div>

                <!-- 医嘱 -->
                <div class="advice">
                    <div class="divider dashed"></div>
                    <div class="info-item">
                        <span class="label">【医嘱】</span>
                        <span>禁食生冷、辛辣等刺激性食物。禁食生冷、辛辣等刺激性食物。禁食生冷、辛辣等刺激性食物。</span>
                    </div>
                </div>

                <!-- 快递信息 -->
                <div class="express-info">
                    <div class="divider dashed"></div>
                    <div class="info-item-group">
                        <div class="info-item">
                            <span class="name">【快递】顺丰/寄付</span>
                        </div>
                        <div class="info-item-child">
                            <div class="child-info">张龙 15800000000</div>
                            <div class="child-info">上海市闵行区申昆路1999号2号楼705</div>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <!-- 页脚内容 -->
        <template #footer>
            <div class="receipt-detail-info">
                <!-- 页尾信息 -->
                <div class="footer-info">
                    <div class="divider dashed"></div>
                    <div class="info-item" data-visible="dispatcher">
                        收费员：
                        <span data-visible="dispatcherSignature" data-field="dispatcher">张龙</span>
                    </div>
                    <div class="info-item" data-visible="amount">
                        金额：
                        <span data-field="amount">33.90</span>
                    </div>
                    <div class="info-item" data-visible="auditor">
                        审核：
                        <span data-visible="auditorSignature" data-field="auditor"></span>
                    </div>
                    <div class="info-item" data-visible="dispatcher">
                        调配：
                        <span data-visible="dispatcherSignature" data-field="dispatcher">孙思邈</span>
                    </div>
                    <div class="info-item" data-visible="issueOperator">
                        核发：
                        <span data-visible="issueOperatorSignature" data-field="issueOperator">华佗</span>
                    </div>
                    <div class="info-item" data-visible="dispatcher">
                        打印时间：
                        <span>2021-12-15 10:15:15</span>
                    </div>
                    <div class="info-item" data-visible="address">
                        地址：
                        <span data-field="address">上海市闵行区申昆路1999号2号楼705</span>
                    </div>
                    <div class="info-item" data-visible="clinicPhone">
                        电话：
                        <span data-field="clinicPhone">021-87278292</span>
                    </div>
                </div>
                <!-- 公告提示 -->
                <div class="remark-info">
                    <div class="divider dashed"></div>
                    <div class="info-item" data-field="remark">除主诊医师特别注明外，处方仅当日有效。按卫生部规定，药房药品一经发出，不得退换。</div>
                </div>
                <!-- 退换提醒 -->
                <div class="warn-info">
                    <div class="divider dashed"></div>
                    <div>药品离柜，概不退换</div>
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

.header-title {
    position: relative;

    .big-mark{
        position: absolute;
        display: flex;
        flex-direction: column;
        left: 0pt;
        top: 0pt;
        font-size: 13pt;
        font-weight: 600;
        line-height: 1.3;
    }

    .title-qr {
        margin-top: 4pt;
        display: flex;

        img {
            width: 100pt;
            height: 32pt;
        }
    }

    .picking-time {
        font-size: 9pt;
        width: 100%;

        span {
            &:not(:first-child) {
                margin-left: 4px;
            }
        }
    }
}

.receipt-detail-info {
    font-size: 9pt;
    line-height: 1.2;
    font-weight: 300;
    margin-bottom: 4pt;

    .info-item {
        margin-top: 4pt;
        word-break: break-all;
        flex-basis: 100%;
        display: flex;

        &:last-child {
            margin-bottom: 0;
        }

        span {
            white-space: wrap;

            &:not(:first-child) {
                margin-left: 4px;
            }

            &.big-number {
                font-size: 12pt;
                position: relative;
                top: -2pt;
            }
        }

        .label {
            white-space: nowrap;
        }

        .name {
            flex: 2 1 auto;
            flex-basis: 64pt;

        }

        .times {
            flex: 0 0 auto;
            text-align: right;
            flex-basis: 28pt;
        }

    }

    .info-item-group {
        .info-item-child {
            padding-left: 8pt;

            .child-info {
                margin-top: 2pt;
                display: flex;
                justify-content: space-between;
            }
        }
    }

    .footer-info {
        .info-item {
            margin-top: 2pt;
        }
    }

    .warn-info {
        font-weight: 300;
        font-size: 12pt;
        text-align: center;
    }
}

.divider {
    margin: 4pt 0;
}
</style>