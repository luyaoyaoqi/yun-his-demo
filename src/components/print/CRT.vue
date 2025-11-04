<template>
    <PrintContainer :paperSize="props.paperSize" :orientation="props.orientation"
        :containerPaddingStyle="props.containerPaddingStyle">
        <!-- 页眉内容 -->
        <template #header>
            <div class="header">
                <div class="header-title">
                    <div class="title-main" data-field="organizationName">上海脉景工作室</div>
                    <!-- <div class="title-sub" data-visible="documentTitle" data-field="documentTitle">黄煌传承工作室</div> -->
                    <div class="title-qr" data-field="barcode">
                        <img data-visible="barcode" src="https://qaweb.macrocura.com/yunhis/barcode.png" alt="条码" />
                    </div>
                    <div class="title-sub" data-visible="documentType" data-field="documentType">收费单</div>
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
                <div class="info-item" data-visible="idCard">
                    身份证：
                    <span data-field="idCard">11010519780615XXXX</span>
                </div>
                <div class="info-item" data-visible="medicalRecordCode">
                    诊号：
                    <span data-field="medicalRecordCode">0015678</span>
                    <!-- <span data-visible="visitType" data-field="visitType">复诊</span> -->
                </div>
                <div class="info-item">
                    医生：
                    <span data-visible="doctorSignature" data-field="doctor">张仲景</span>
                </div>
                <div class="info-item">
                    开单人：
                    <span>孙思邈</span>
                </div>
            </div>
        </template>

        <!-- 主内容 -->
        <template #main>
            <!-- 项目名一行显示加label-line-1 -->
            <div class="receipt-detail-info label-line-1">

                <!-- 挂号费 -->
                <div class="registration-fee">
                    <div class="divider dashed"></div>
                    <div class="info-item">
                        <span class="label">诊费</span>
                        <span class="times">1次</span>
                        <span class="total-prices">10.00</span>
                    </div>
                </div>

                <!-- 治疗理疗 -->
                <div class="treatment-and-therapy">
                    <div class="divider dashed"></div>
                    <!-- 治疗理疗:合并 -->
                    <div class="info-item">
                        <span class="label">治疗理疗费</span>
                        <span class="total-prices">25.00</span>
                    </div>
                    <!-- 治疗理疗:单项 -->
                    <div class="info-item">
                        <span class="label">拔罐</span>
                        <span class="unit-price">25.00</span>
                        <span class="times">1次</span>
                        <span class="total-prices">25.00</span>
                    </div>
                </div>

                <!-- 中西成药 -->
                <div class="chinese-and-western-medicine">
                    <div class="divider dashed"></div>
                    <!-- 中西成药:合并 -->
                    <div class="info-item">
                        <span class="label">中西成药费</span>
                        <span class="total-prices">25.00</span>
                    </div>
                    <!-- 中西成药:单项 -->
                    <div class="info-item-group">
                        <div class="info-item">
                            <span class="label">双丹膏</span>
                            <span class="unit-price">1.00</span>
                            <span class="times">1粒</span>
                            <span class="total-prices">1.00</span>
                        </div>
                        <div class="info-item-child">
                            <div class="child-info">2粒/盒</div>
                            <div class="child-info">厂家：</div>
                        </div>
                    </div>
                    <div class="info-item-group">
                        <div class="info-item">
                            <span class="label">感冒灵颗粒</span>
                            <span class="unit-price">10.00</span>
                            <span class="times">1盒</span>
                            <span class="total-prices">10.00</span>
                        </div>
                        <div class="info-item-child">
                            <div class="child-info">10袋/盒</div>
                            <div class="child-info">厂家：</div>
                        </div>
                    </div>
                </div>

                <!-- 中药 -->
                <div class="chinese-medicine">
                    <div class="divider dashed"></div>
                    <!-- 中药:合并 -->
                    <div class="info-item">
                        <span class="label">中药费</span>
                        <span class="total-prices">25.00</span>
                    </div>
                    <!-- 中药:单项 -->
                    <div class="info-item-group">
                        <div class="info-item">
                            <span class="label">柴胡</span>
                            <span class="unit-price">0.10</span>
                            <span class="times">100g</span>
                            <span class="total-prices">10.00</span>
                        </div>
                        <div class="info-item-child">
                            <div class="child-info">代煎</div>
                            <div class="child-info">厂家：</div>
                        </div>
                    </div>
                    <div class="info-item-group">
                        <div class="info-item">
                            <span class="label">黄芩</span>
                            <span class="unit-price">0.10</span>
                            <span class="times">100g</span>
                            <span class="total-prices">10.00</span>
                        </div>
                        <div class="info-item-child">
                            <div class="child-info">代煎</div>
                            <div class="child-info">厂家：</div>
                        </div>
                    </div>
                    <div class="info-item-group">
                        <div class="info-item">
                            <span class="label">生姜</span>
                            <span class="unit-price">0.10</span>
                            <span class="times">100g</span>
                            <span class="total-prices">10.00</span>
                        </div>
                        <div class="info-item-child">
                            <div class="child-info">代煎</div>
                            <div class="child-info">厂家：</div>
                        </div>
                    </div>
                    <div class="info-item-group">
                        <div class="info-item">
                            <span class="label">大枣</span>
                            <span class="unit-price">0.10</span>
                            <span class="times">100g</span>
                            <span class="total-prices">10.00</span>
                        </div>
                        <div class="info-item-child">
                            <div class="child-info">代煎</div>
                            <div class="child-info">厂家：</div>
                        </div>
                    </div>
                    <!-- 中药：药量 -->
                    <div class="info-item">
                        <span>共4剂，118.66 ，6味 </span>
                        <span>（单剂6g，总重24g）</span>
                    </div>
                    <!-- 中药：用法 -->
                    <div class="info-item">
                        1日2剂 1日3次 每次150ml
                    </div>
                </div>

                <!-- 材料 -->
                <div class="chinese-and-western-medicine">
                    <div class="divider dashed"></div>
                    <!-- 材料:合并 -->
                    <div class="info-item">
                        <span class="label">材料费</span>
                        <span class="total-prices">25.00</span>
                    </div>
                    <!-- 材料:单项 -->
                    <div class="info-item">
                        <span class="label">医用材料1</span>
                        <span class="unit-price">1.00</span>
                        <span class="times">1片</span>
                        <span class="total-prices">1.00</span>
                    </div>
                    <div class="info-item">
                        <span class="label">医用材料2</span>
                        <span class="unit-price">1.00</span>
                        <span class="times">1片</span>
                        <span class="total-prices">1.00</span>
                    </div>
                </div>

                <!-- 其他 -->
                <div class="chinese-and-western-medicine">
                    <div class="divider dashed"></div>
                    <!-- 其他:合并 -->
                    <div class="info-item">
                        <span class="label">其他费用</span>
                        <span class="total-prices">25.00</span>
                    </div>
                    <!-- 其他:单项 -->
                    <div class="info-item">
                        <span class="label">其他1</span>
                        <span class="unit-price">1.00</span>
                        <span class="times">1片</span>
                        <span class="total-prices">1.00</span>
                    </div>
                </div>

                <!-- 收银信息 -->
                <div class="cashier-info">
                    <div class="divider dashed"></div>
                    <div class="info-item">
                        <span class="label">合计：</span>
                        <span class="total-prices">325.00</span>
                    </div>
                    <div class="info-item big-label">
                        <span class="label">应付：</span>
                        <span class="total-prices">325.00</span>
                    </div>
                    <div class="info-item">
                        <span class="label">实付（支付宝）：</span>
                        <span class="total-prices">325.00</span>
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
                    <div class="info-item" data-visible="dispatcher">
                        收费时间：
                        <span>2021-12-15 10:10:10</span>
                    </div>
                    <div class="info-item" data-visible="dispatcher">
                        打印时间：
                        <span>2021-12-15 10:15:15</span>
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

.title-qr {
    margin-top: 4pt;
    display: flex;

    img {
        width: 160pt;
        height: 32pt;
    }
}


.receipt-detail-info {
    font-size: 10pt;
    line-height: 1.2;
    font-weight: 300;

    &.label-line-1 {
        .label {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    .info-item {
        flex: 0;
        margin-top: 6pt;
        word-break: break-all;
        flex-basis: 100%;
        display: flex;

        &:last-child {
            margin-bottom: 0;
        }

        &.big-label {
            font-size: 11pt;
            font-weight: 400;
        }

        span {
            white-space: wrap;

            &:not(:first-child) {
                margin-left: 4px;
            }
        }

        .label {
            flex: 2 1 auto;
            flex-basis: 64pt;
        }

        .unit-price {
            flex: 0 0 auto;
            text-align: right;
            flex-basis: 40pt;
        }

        .times {
            flex: 0 0 auto;
            text-align: right;
            flex-basis: 28pt;
        }

        .total-prices {
            flex: 0 0 auto;
            text-align: right;
            flex-basis: 40pt;
        }
    }

    .info-item-group {
        .info-item-child {
            padding-left: 8pt;

            .child-info {
                margin-top: 2pt;
                display: flex;
            }
        }
    }
}

.warn-info {
    font-weight: 300;
    font-size: 12pt;
    text-align: center;
}
</style>