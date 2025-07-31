<template>
  <el-select v-model="value" placeholder="Select" style="width: 240px" ref="selectRef"
    @visible-change="handleVisibleChange" :fit-input-width="false">
    <template #header>
      <el-input ref="inputRef" v-model="input" placeholder="Please input" @keydown.up.stop.prevent="handleKeyUp"
        @keydown.down.stop.prevent="handleKeyDown" />
    </template>
    <div class="el-select-dropdown__wrap">
      <div class="left">
        <template v-for="group in groupOptions" :key="group.value">
          <el-button v-if="groupValue === group.value" type="primary">
            {{ group.label }}
          </el-button>
          <el-button v-else text bg @click="handleGroupChange(group.value)">
            {{ group.label }}
          </el-button>
        </template>
      </div>
      <div class="right">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          <div class="option-item">
            <span style="float: left">{{ item.label }}</span>
            <span style="
              float: right;
              color: var(--el-text-color-secondary);
              font-size: 13px;
            ">
              {{ item.value }} {{ item.value }}
            </span>
          </div>
        </el-option>
      </div>
    </div>
  </el-select>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue'

const value = ref('')

const groupValue = ref('group1')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
const groupOptions = [
  {
    label: 'Group1',
    value: 'group1',
    options: options,

  },
  {
    label: 'Group2',
    value: 'group2',
    options: [...options].reverse(),
  },
  {
    label: 'Group3',
    value: 'group3',
    options: options,
  }
]


const input = ref('')
const selectRef = ref<InstanceType<any> | null>(null)
const inputRef = ref<InstanceType<any> | null>(null)


const handleKeyUp = (event: KeyboardEvent) => {
  console.log('Key Up:', event.key)
  selectRef.value?.navigateOptions('prev')
  // Custom logic for handling key up events
}

const handleKeyDown = (event: KeyboardEvent) => {
  console.log('Key Down:', event.key)
  selectRef.value?.navigateOptions('next')
  // Custom logic for handling key down events
}


onMounted(() => {

})
const handleGroupChange = (value: string) => {
  groupValue.value = value
  console.log('Group changed to:', value)
  // Custom logic for handling group change
  if (inputRef.value) {
    // 等待 DOM 更新完成后再执行 focus
    nextTick(() => {
      inputRef.value.focus()
    })
  }
}

const handleVisibleChange = (visible: boolean) => {
  console.log('Dropdown visibility changed:', visible)
  if (visible && inputRef.value) {
    // 等待 DOM 更新完成后再执行 focus
    nextTick(() => {
      inputRef.value.focus()
    })
  }
}

</script>
<style scoped lang="scss">
:deep(.el-input__wrapper.is-focus) {
  --el-input-focus-border-color: var(--el-input-border-color);
}

.el-select-dropdown__wrap {
  display: flex;
  // width: 400px;

  .left {
    width: 100px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--el-border-color);

    .el-button {
      margin: 4px 8px;
      // width: 100%;
    }
  }

  .right {
    .option-item {
      display: flex;
      justify-content: space-between;
      width: 300px;
      font-size: 14px;
    }
  }
}
</style>