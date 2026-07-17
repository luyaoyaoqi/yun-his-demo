<template>
    <PrintContainer :paperSize="props.paperSize" :orientation="props.orientation"
        :containerPaddingStyle="props.containerPaddingStyle">
        <!-- 页眉内容 -->
        <template #header>
            <div class="header">
                <div class="header-title">
                    <div class="title-main">
                        <span data-field="organizationName">上海脉景工作室</span>
                        <span>收费清单</span>
                    </div>
                </div>
            </div>
            <div class="patient-detail-info">
                <div class="info-item">
                    <span>姓名：</span>
                    <span data-field="patientName">张三</span>
                </div>
                <div class="info-item">
                    <span>医生：</span>
                    <span data-visible="doctorSignature" data-field="doctor">张仲景</span>
                </div>
                <div class="info-item">
                    <span>科室：</span>
                    <span data-field="department">内科</span>
                </div>
                <div class="info-item">
                    <span>诊断：</span>
                    <span data-field="diagnosis">急性支气管炎</span>
                </div>
                <div class="info-item" data-visible="archiveNo">
                    <span>病历号：</span>
                    <span data-field="archiveNo">000881</span>
                </div>
                <div class="info-item" data-visible="idCard">
                    <span>身份证：</span>
                    <span data-field="idCard">3100********3100</span>
                </div>
            </div>
            <div class="divider"></div>
            <div class="table-row table-header">
                <div class="name-row">
                    <span class="name">项目名称</span>
                    <span class="trace-code">追溯码</span>
                    <span class="unit">单位</span>
                    <span class="price">单价</span>
                    <span class="quantity">数量</span>
                    <span class="amount">金额</span>
                </div>
            </div>
            <div class="divider"></div>
        </template>

        <!-- 主内容 -->
        <template #main>
            <div class="table-row table-row-item">
                <div class="name-row">
                    <span class="name">挂号费</span>
                    <span class="trace-code"></span>
                    <span class="unit">次</span>
                    <span class="price">25.00</span>
                    <span class="quantity">1</span>
                    <span class="amount">25.00</span>
                </div>
                <div class="trace-code-row mj-hidden">
                    <span class="name"></span>
                    <span class="trace-code">
                        <span>追溯码： </span>
                        <span class="trace-code-item">86901234567890123456</span>
                    </span>
                </div>
            </div>
            <div class="table-row table-row-item">
                <div class="name-row">
                    <span class="name">头孢克洛缓释片</span>
                    <span class="trace-code"></span>
                    <span class="unit">盒</span>
                    <span class="price">15.80</span>
                    <span class="quantity">4</span>
                    <span class="amount">15.80</span>
                </div>
                <div class="trace-code-row">
                    <span class="name"></span>
                    <span class="trace-code">
                        <span>追溯码： </span>
                        <span class="trace-code-item">86901234567890123456</span>
                        <span>、</span>
                        <span class="trace-code-item">86901234567890123456</span>
                        <span>、</span>
                        <span class="trace-code-item">86901234567890123456</span>
                        <span>、</span>
                        <span class="trace-code-item">86901234567890123456</span>
                        <span>、</span>
                        <span class="trace-code-item">86901234567890123456</span>
                    </span>
                </div>
            </div>
            <div class="table-row table-row-item">
                <div class="name-row">
                    <span class="name">阿莫西林胶囊</span>
                    <span class="trace-code"></span>
                    <span class="unit">盒</span>
                    <span class="price">12.50</span>
                    <span class="quantity">2</span>
                    <span class="amount">25.00</span>
                </div>
                <div class="trace-code-row">
                    <span class="name"></span>
                    <span class="trace-code">
                        <span>追溯码： </span>
                        <span class="trace-code-item">86909876543210987654</span>
                        <span>、</span>
                        <span class="trace-code-item">86909876543210987654</span>
                    </span>
                </div>
            </div>
            <div class="table-row table-row-item">
                <div class="name-row">
                    <span class="name">布洛芬缓释胶囊</span>
                    <span class="trace-code"></span>
                    <span class="unit">盒</span>
                    <span class="price">18.60</span>
                    <span class="quantity">3</span>
                    <span class="amount">55.80</span>
                </div>
                <div class="trace-code-row">
                    <span class="name"></span>
                    <span class="trace-code">
                        <span>追溯码： </span>
                        <span class="trace-code-item">86905555666677778889</span>
                        <span>、</span>
                        <span class="trace-code-item">86905555666677778889</span>
                        <span>、</span>
                        <span class="trace-code-item">86905555666677778889</span>
                    </span>
                </div>
            </div>
            <div class="table-row table-row-item">
                <div class="name-row">
                    <span class="name">复方甘草片</span>
                    <span class="trace-code"></span>
                    <span class="unit">瓶</span>
                    <span class="price">8.90</span>
                    <span class="quantity">1</span>
                    <span class="amount">8.90</span>
                </div>
                <div class="trace-code-row mj-hidden">
                    <span class="name"></span>
                    <span class="trace-code">
                        <span>追溯码： </span>
                        <span class="trace-code-item">86901111222233334445</span>
                    </span>
                </div>
            </div>
            <div class="table-row table-row-item">
                <div class="name-row">
                    <span class="name">盐酸氨溴索口服液</span>
                    <span class="trace-code"></span>
                    <span class="unit">瓶</span>
                    <span class="price">22.40</span>
                    <span class="quantity">2</span>
                    <span class="amount">44.80</span>
                </div>
                <div class="trace-code-row">
                    <span class="name"></span>
                    <span class="trace-code">
                        <span>追溯码： </span>
                        <span class="trace-code-item">86906666777788889990</span>
                        <span>、</span>
                        <span class="trace-code-item">86906666777788889990</span>
                    </span>
                </div>
            </div>
            <div class="table-row table-row-item">
                <div class="name-row">
                    <span class="name">中药饮片-金银花</span>
                    <span class="trace-code"></span>
                    <span class="unit">g</span>
                    <span class="price">0.35</span>
                    <span class="quantity">60</span>
                    <span class="amount">21.00</span>
                </div>
                <div class="trace-code-row mj-hidden">
                    <span class="name"></span>
                    <span class="trace-code">
                        <span>追溯码： </span>
                        <span class="trace-code-item">86903333444455556667</span>
                    </span>
                </div>
            </div>
            <!-- 套餐加is-package -->
            <div class="table-row table-row-item is-package">
                <div class="name-row">
                    <span class="name">【套餐】综合调养套餐</span>
                    <span class="trace-code"></span>
                    <span class="unit">次</span>
                    <span class="price">100.00</span>
                    <span class="quantity">1</span>
                    <span class="amount">100.00</span>
                </div>
            </div>
            <!-- 子项目加is-child -->
            <div class="table-row table-row-item is-child">
                <div class="name-row">
                    <span class="name"><span class="treatment-child-number">1</span>穴位贴敷</span>
                    <span class="trace-code"></span>
                    <span class="unit">次</span>
                    <span class="price">20.00</span>
                    <span class="quantity">1</span>
                    <span class="amount">20.00</span>
                </div>
                <div class="trace-code-row">
                    <span class="name"></span>
                    <span class="trace-code">
                        <span>追溯码： </span>
                        <span class="trace-code-item">86901234567890123456</span>
                    </span>
                </div>
            </div>
            <div class="table-row table-row-item is-child">
                <div class="name-row">
                    <span class="name"><span class="treatment-child-number">2</span>电针灸</span>
                    <span class="trace-code"></span>
                    <span class="unit">次</span>
                    <span class="price">60.00</span>
                    <span class="quantity">1</span>
                    <span class="amount">60.00</span>
                </div>
                <div class="trace-code-row">
                    <span class="name"></span>
                    <span class="trace-code">
                        <span>追溯码： </span>
                        <span class="trace-code-item">86909876543210987654</span>
                    </span>
                </div>
            </div>
            <div class="table-row table-row-item is-child">
                <div class="name-row">
                    <span class="name"><span class="treatment-child-number">3</span>推拿</span>
                    <span class="trace-code"></span>
                    <span class="unit">次</span>
                    <span class="price">20.00</span>
                    <span class="quantity">1</span>
                    <span class="amount">20.00</span>
                </div>
                <div class="trace-code-row">
                    <span class="name"></span>
                    <span class="trace-code">
                        <span>追溯码： </span>
                        <span class="trace-code-item">86905555666677778889</span>
                    </span>
                </div>
            </div>

        </template>

        <!-- 页脚内容 -->
        <template #footer>
            <div class="divider"></div>
            <div class="footer">
                <div class="doctor-info">
                    <div class="info-item">
                        <span>费用合计：</span>
                        <span data-field="totalFee">¥195.70</span>
                    </div>
                    <div class="info-item">
                        <span>收费员：</span>
                        <span data-field="chargePerson">张三</span>
                    </div>
                    <div class="info-item">
                        <span>收费时间：</span>
                        <span data-field="chargeTime">2025-08-15 11:11:07</span>
                    </div>
                    <div class="info-item">
                        <span>收费单位：</span>
                        <span data-field="chargeUnit">上海脉景工作室</span>
                    </div>
                </div>
                <div class="doctor-info">
                    <div class="info-item">
                        <span>患者签字：</span>
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


.table-row {
    display: flex;
    font-size: 10pt;
    line-height: 1.2;
    font-weight: 400;
    flex-direction: column;
    flex: 0 0 auto;


    &.table-header {
        .name-row>span {
            margin-bottom: 0;
        }
    }

    .name-row {
        display: flex;
        width: 100%;
        overflow: hidden;

        >span {
            margin-right: 6pt;
            margin-bottom: 6pt;
            word-break: break-all;
            flex: 0 0 auto;

            &:last-child {
                margin-right: 0;
            }
        }

        .name {
            flex-grow: 1;
            width: 0;
        }

        .trace-code {
            flex-basis: 28%;
            display: flex;
            flex-wrap: wrap;
            // display: none;
        }

        .unit {
            text-align: right;
            flex-basis: 6%;
            min-width: 24pt;
        }

        .price {
            text-align: right;
            flex-basis: 12%;
            min-width: 40pt;
        }

        .quantity {
            text-align: right;
            flex-basis: 6%;
            min-width: 24pt;
        }

        .amount {
            text-align: right;
            flex-basis: 12%;
            min-width: 40pt;
        }
    }

    .trace-code-row {
        display: flex;
        width: 100%;
        // display: none;

        >span {
            margin-right: 6pt;
            margin-bottom: 6pt;
            word-break: break-all;
            flex: 0 0 auto;

            &:last-child {
                margin-right: 0;
            }
        }

        .name {
            flex-grow: 1;
            width: 0;
        }

        .trace-code {
            flex-basis: calc(64% + 24pt);
            display: flex;
            flex-wrap: wrap;
        }
    }

    &.is-package {

        &~.is-child {
            .name-row {
                .name {
                    padding-left: 16pt;
                    .treatment-child-number {
                        margin-right: 4pt;
                    }
                }
            }
        }
    }
}

.footer {
    .doctor-info {
        flex-wrap: wrap;
    }
}
</style>