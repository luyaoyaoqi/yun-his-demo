<template>
  <el-select v-model="value" placeholder="Select" style="width: 240px" ref="selectRef"
    @visible-change="handleVisibleChange" :fit-input-width="false" :filter-method="filterOptions">
    <template #header>
      <el-input ref="inputRef" v-model="input" placeholder="Please input to filter"
        @keydown.up.stop.prevent="handleKeyUp" @keydown.down.stop.prevent="handleKeyDown"
        @keydown.esc.stop.prevent="handleEsc" @keydown.enter.stop.prevent="selectOption"
        @keydown.delete.stop="deletePrevTag" @input="handleInputChange" />
    </template>
    <div class="el-select-dropdown__wrap">
      <div class="left">
        <template v-for="group in groupOptions" :key="group.value">
          <el-button v-if="groupValue === group.value" type="primary" @click="handleGroupChange(group.value)">
            {{ group.label }}
          </el-button>
          <el-button v-else text bg @click="handleGroupChange(group.value)">
            {{ group.label }}
          </el-button>
        </template>
      </div>
      <div class="right">
        <el-option v-for="item in filteredOptions" :key="item.value" :label="item.label" :value="item.value"
          @click="handleOptionClick(item)">
          <div class="option-item">
            <span style="float: left">{{ item.label }}</span>
            <span style="
              float: right;
              color: var(--el-text-color-secondary);
              font-size: 13px;
            ">
              {{ item.value }}
            </span>
          </div>
        </el-option>
        <div v-if="filteredOptions.length === 0" class="no-results">
          No matching options
        </div>
      </div>
    </div>
  </el-select>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick, computed } from 'vue'

const value = ref('')
const groupValue = ref('group1')
const input = ref('')

// 定义选项数据结构
interface OptionItem {
  value: string
  label: string
}

// 定义分组数据结构
interface GroupItem {
  label: string
  value: string
  options: OptionItem[]
}

// 基础选项数据
const baseOptions: OptionItem[] = [
  { value: 'Option1', label: 'Option1' },
  { value: 'Option2', label: 'Option2' },
  { value: 'Option3', label: 'Option3' },
  { value: 'Option4', label: 'Option4' },
  { value: 'Option5', label: 'Option5' },
  { value: 'Option6', label: 'Option6' },
  { value: 'Option7', label: 'Option7' },
  { value: 'Option9', label: 'Option9' },
  { value: 'Option10', label: 'Option10' },
  { value: 'Option11', label: 'Option11' },
  { value: 'Option12', label: 'Option12' },
]

// 分组选项数据
const groupOptions: GroupItem[] = [
  {
    label: 'Group1',
    value: 'group1',
    options: [...baseOptions].filter(item => ['Option1', 'Option2', 'Option3', 'Option4', 'Option5', 'Option6'].includes(item.value))
  },
  {
    label: 'Group2',
    value: 'group2',
    options: [...baseOptions].filter(item => ['Option7', 'Option8', 'Option9'].includes(item.value)).reverse()
  },
  {
    label: 'Group3',
    value: 'group3',
    options: [...baseOptions].filter(item => ['Option10', 'Option11'].includes(item.value))
  }
]

// 获取当前分组的选项
const currentGroupOptions = computed(() => {
  const group = groupOptions.find(g => g.value === groupValue.value)
  return group ? group.options : []
})

// 根据输入框内容过滤选项
const filteredOptions = computed(() => {
  if (!input.value) {
    return currentGroupOptions.value
  }

  const searchStr = input.value.toLowerCase()
  return currentGroupOptions.value.filter(item =>
    item.label.toLowerCase().includes(searchStr) ||
    item.value.toLowerCase().includes(searchStr)
  )
})

// 引用
const selectRef = ref<InstanceType<any> | null>(null)
const inputRef = ref<InstanceType<any> | null>(null)

// 处理键盘上键事件
const handleKeyUp = (event: KeyboardEvent) => {
  selectRef.value?.navigateOptions('prev')
}

const handleEsc = () => {
   selectRef.value?.handleEsc()
}

const deletePrevTag = () => {
   selectRef.value?.deletePrevTag()
}

const selectOption = () => {
   selectRef.value?.selectOption()
}

// 处理键盘下键事件
const handleKeyDown = (event: KeyboardEvent) => {
  selectRef.value?.navigateOptions('next')
}

// 处理输入框变化
const handleInputChange = () => {
  // 输入变化时重置选项导航
  nextTick(() => {
    if (filteredOptions.value.length > 0) {
      selectRef.value?.setOptionIndex(0)
    }
  })
}

// 处理选项点击
const handleOptionClick = (item: OptionItem) => {
  value.value = item.value
  // 点击选项后清空输入框
  input.value = ''
}

// 处理分组切换
const handleGroupChange = (value: string) => {
  groupValue.value = value
  // 切换分组后清空输入框并重置选项导航
  input.value = ''
  nextTick(() => {
    if (inputRef.value) {
      inputRef.value.focus()
    }
    if (filteredOptions.value.length > 0) {
      selectRef.value?.setOptionIndex(0)
    }
  })
}

// 处理下拉框显示/隐藏变化
const handleVisibleChange = (visible: boolean) => {
  if (visible && inputRef.value) {
    nextTick(() => {
      inputRef.value.focus()
    })
  } else {
    // 隐藏时清空输入框
    input.value = ''
  }
}

// 过滤选项的方法（供el-select使用）
const filterOptions = (query: string, option: any) => {
  return option.label.toLowerCase().includes(query.toLowerCase()) ||
    option.value.toLowerCase().includes(query.toLowerCase())
}

onMounted(() => {
  // 初始化时设置第一个选项为激活状态
  nextTick(() => {
    if (filteredOptions.value.length > 0) {
      selectRef.value?.setOptionIndex(0)
    }
  })
})
</script>

<style scoped lang="scss">
:deep(.el-input__wrapper.is-focus) {
  --el-input-focus-border-color: var(--el-input-border-color);
}

.el-select-dropdown__wrap {
  display: flex;
  max-height: 300px;
  overflow: auto;

  .left {
    width: 100px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--el-border-color);
    flex-shrink: 0;

    .el-button {
      margin: 4px 8px;
      width: calc(100% - 16px);
    }
  }

  .right {
    flex-grow: 1;
    padding: 0 8px;

    .option-item {
      display: flex;
      justify-content: space-between;
      width: 100%;
      min-width: 200px;
      font-size: 14px;
    }

    .no-results {
      padding: 12px;
      text-align: center;
      color: var(--el-text-color-secondary);
    }
  }
}
</style>
