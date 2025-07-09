<template>
  <el-select v-model="value" placeholder="Select" style="width: 240px;" @visible-change="handleVisibleChange">
    <div class="el-select-dropdown__wrap">
      <div class="table-header">
        <span style="width: 120px">商品名称</span>
        <span style="width: 100px">规格</span>
        <span style="width: 70px;text-align: right;">可用库存</span>
        <span style="width: 140px">生产厂家</span>
        <span style="width: 100px">备注</span>
      </div>
      <el-option v-for="item in cities" :key="item.label" :label="item.label" :value="item.value">
        <span style="width: 120px">
          <AutoTooltip :content="item.value" ref="tooltipRefs1"/>
        </span>
        <span style="width: 100px">
          <AutoTooltip :content="item.detail.specs" ref="tooltipRefs2"/>
        </span>
        <span style="width: 70px;text-align: right;">
          <AutoTooltip :content="item.detail.inventory+item.detail.unit" ref="tooltipRefs3"/>
        </span>
        <span style="width: 140px">
          <AutoTooltip :content="item.detail.product" ref="tooltipRefs4"/>
        </span>
        <span style="width: 100px">
          <AutoTooltip :content="item.detail.note" ref="tooltipRefs5" />
        </span>
      </el-option>
    </div>
  </el-select>

</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue'
import AutoTooltip from '@/components/AutoTooltip.vue'


const value = ref('')
// 用 ref 数组存储所有 AutoTooltip 实例
const tooltipRefs1 = ref<InstanceType<typeof AutoTooltip>[]>([])
const tooltipRefs2 = ref<InstanceType<typeof AutoTooltip>[]>([])
const tooltipRefs3 = ref<InstanceType<typeof AutoTooltip>[]>([])
const tooltipRefs4 = ref<InstanceType<typeof AutoTooltip>[]>([])
const tooltipRefs5 = ref<InstanceType<typeof AutoTooltip>[]>([])

// 监听下拉框显示/隐藏状态
const handleVisibleChange = (visible: boolean) => {
  if (visible) {
    // 下拉框打开时，手动触发所有 AutoTooltip 重新计算宽度
    nextTick(() => {
      tooltipRefs1.value.forEach(tooltip => {
        tooltip?.checkOverflow()
      })
      tooltipRefs2.value.forEach(tooltip => {
        tooltip?.checkOverflow()
      })
      tooltipRefs3.value.forEach(tooltip => {
        tooltip?.checkOverflow()
      })
      tooltipRefs4.value.forEach(tooltip => {
        tooltip?.checkOverflow()
      })
      tooltipRefs5.value.forEach(tooltip => {
        tooltip?.checkOverflow()
      })
    })
  }
}
const cities = [
  {
    label: '阿莫西林胶囊1',
    value: '阿莫西林胶囊阿莫西林胶囊1',
    detail: {
      specs: '10g*1盒/盒',
      inventory: 100,
      unit: '盒',
      product: '唐山红星药业有限责任公司',
      note: '阿莫西林胶囊',
    }
  },
  {
    label: '阿莫西林胶囊2',
    value: '阿莫西林胶囊2',
    detail: {
      specs: '10g*1盒/盒',
      inventory: 100,
      unit: '盒',
      product: '唐山红星药业有限责任公司',
      note: '阿莫西林胶囊',
    }
  },
  {
    label: '阿莫西林胶囊3',
    value: '阿莫西林胶囊3',
    detail: {
      specs: '10g*1盒/盒',
      inventory: 100,
      unit: '盒',
      product: '唐山红星药业',
      note: '阿莫西林胶囊',
    }
  },
  {
    label: '阿莫西林胶囊4',
    value: '阿莫西林胶囊4',
    detail: {
      specs: '10g*1盒/盒',
      inventory: 100,
      unit: '盒',
      product: '唐山红星药业有限责任公司',
      note: '',
    }
  },
  {
    label: '阿莫西林胶囊5',
    value: '阿莫西林胶囊5',
    detail: {
      specs: '10g*1盒/盒',
      inventory: 100,
      unit: '盒',
      product: '唐山红星药业有限责任公司',
      note: '',
    }
  },
  {
    label: '阿莫西林胶囊6',
    value: '阿莫西林胶囊6',
    detail: {
      specs: '10g*1盒/盒',
      inventory: 100,
      unit: '盒',
      product: '唐山红星药业有限责任公司',
      note: '',
    }
  },
  {
    label: '阿莫西林胶囊7',
    value: '阿莫西林胶囊7',
    detail: {
      specs: '10g*1盒/盒',
      inventory: 100,
      unit: '盒',
      product: '唐山红星药业有限责任公司',
      note: '',
    }
  },
]

</script>
<style lang="less" scoped>
.el-select-dropdown__wrap {
  // width: 800px;
  display: flex;

  flex-direction: column;

  .table-header {
    display: flex;
    padding: 0px 20px;
    height: 32px;
    align-items: center;
    border-bottom: 1px solid var(--el-border-color);
    background-color: var(--el-fill-color-light);
    font-size: 12px;
    color: var(--el-text-color-secondary);
    gap: 12px;

  }

  .el-select-dropdown__item {
    display: flex;
    padding: 0px 20px;
    gap: 12px;
  }
}
</style>