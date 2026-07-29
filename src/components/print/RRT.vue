<template>
    <PrintContainer :paperSize="props.paperSize" :orientation="props.orientation"
        :containerPaddingStyle="props.containerPaddingStyle">
        <!-- 页眉内容 -->
        <template #header>
            <div class="header">
                <div class="header-title">
                    <div class="title-main" data-field="organizationName">上海脉景工作室</div>
                    <div class="title-sub" data-visible="documentType" data-field="documentType">挂号小票</div>
                </div>
            </div>
            <div class="receipt-detail-info">
                <div class="info-item">
                    <span class="label">姓名：</span>
                    <span data-field="patientName">任盈盈</span>
                    <span data-field="patientGender">女</span>
                    <span data-field="patientAge">22岁</span>
                </div>
                <div class="info-item" data-visible="patientMobile">
                    <span class="label">手机号：</span>
                    <span data-field="patientMobile">139****0000</span>
                </div>
                <div class="info-item">
                    <span class="label">医生：</span>
                    <span data-visible="doctorSignature" data-field="doctor">胡青牛</span>
                    <span data-visible="visitType" data-field="visitType">初诊</span>
                </div>
                <div class="info-item" data-visible="department">
                    <span class="label">科室：</span>
                    <span data-field="department">内科</span>
                </div>
                <div class="info-item big-info">
                    <span class="label">序号：</span>
                    <span class="big-number" data-field="serialNumber">上午+10号</span>
                </div>
            </div>
        </template>

        <!-- 主内容 -->
        <template #main>
            <div class="receipt-detail-info">
                <!-- 就诊信息 -->
                <div class="visit-info">
                    <div class="divider dashed"></div>
                    <div class="info-item">
                        <span class="label">就诊日期：</span>
                        <span data-field="visitDate">2019-12-11周三</span>
                    </div>
                    <div class="info-item">
                        <span class="label">就诊时间：</span>
                        <span data-field="visitTime">12:00~13:00</span>
                    </div>
                    <div class="info-item" data-visible="visitRemark">
                        <span class="label">就诊备注：</span>
                        <span data-field="visitRemark"></span>
                    </div>
                </div>

                <!-- 收银信息 -->
                <div class="cashier-info">
                    <div class="divider dashed"></div>
                    <div class="info-item">
                        <span class="label">金额：</span>
                        <span class="total-prices" data-field="amount">100.00</span>
                    </div>
                    <div class="info-item">
                        <span class="label">实付：</span>
                        <span class="pay-type" data-field="payType">（微信）</span>
                        <span class="total-prices" data-field="actualAmount">100.00</span>
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
                    <div class="info-item" data-visible="operator">
                        <span class="label">操作员：</span>
                        <span data-visible="operatorSignature" data-field="operator">令狐冲</span>
                    </div>
                    <div class="info-item" data-visible="appointmentDate">
                        <span class="label">预约日期：</span>
                        <span data-field="appointmentDate">2019-12-10</span>
                    </div>
                    <div class="info-item">
                        <span class="label">打印时间：</span>
                        <span>2021-12-15 10:15:15</span>
                    </div>
                    <div class="info-item" data-visible="address">
                        <span class="label">地址：</span>
                        <span data-field="address">成都市一环路西二段199号</span>
                    </div>
                    <div class="info-item" data-visible="clinicPhone">
                        <span class="label">电话：</span>
                        <span data-field="clinicPhone">028-87732526</span>
                    </div>
                </div>
                <!-- 公告提示 -->
                <div class="remark-info">
                    <div class="divider dashed"></div>
                    <div class="info-item" data-field="remark">挂号公告提示</div>
                </div>
                <!-- 有效期提醒 -->
                <div class="warn-info">
                    <div class="divider dashed"></div>
                    <div>当日有效 过期作废</div>
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

// 挂号小票无条码行，标题区不需要 print.less 的 50pt 占位高度
.header-title {
    min-height: auto;
}

.receipt-detail-info {
    font-size: 9pt;
    line-height: 1.2;
    font-weight: 300;

    .info-item {
        margin-top: 4pt;
        word-break: break-all;
        flex-basis: 100%;
        display: flex;

        &:last-child {
            margin-bottom: 0;
        }

        &.big-info {
            font-size: 11pt;
            font-weight: 400;
            // 9pt 标签与 12pt 序号混排，按基线对齐
            align-items: baseline;
        }

        span {
            white-space: wrap;

            &:not(:first-child) {
                margin-left: 4px;
            }

            &.big-number {
                font-size: 12pt;
                font-weight: 600;
            }
        }

        .label {
            white-space: nowrap;
            flex: 2 1 auto;
            flex-basis: 64pt;
        }

        .pay-type {
            flex: 0 0 auto;
            white-space: nowrap;
        }

        .total-prices {
            flex: 0 0 auto;
            text-align: right;
            flex-basis: 40pt;
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
