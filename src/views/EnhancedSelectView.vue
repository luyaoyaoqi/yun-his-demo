<template>
  <el-select v-model="selectedDoctorId" placeholder="选择医生" style="width: 300px" ref="selectRef"
    @visible-change="handleVisibleChange" :fit-input-width="false" :filter-method="filterOptions"
    popper-class="doctor-select-dropdown">
    <template #header>
      <el-input ref="inputRef" v-model="input" placeholder="搜索医生或科室..." @keydown.up.stop.prevent="handleKeyUp"
        @keydown.down.stop.prevent="handleKeyDown" @keydown.esc.stop.prevent="handleEsc"
        @keydown.enter.stop.prevent="selectOption" @keydown.delete.stop="deletePrevTag" @input="handleInputChange" />
    </template>
    <div class="el-select-dropdown__wrap">
      <!-- 当输入框有内容时隐藏左侧科室按钮 -->
      <div class="left" v-if="!input">
        <template v-for="dept in departmentGroups" :key="dept.value">
          <el-button v-if="currentDept === dept.value" type="primary" @click="handleDeptChange(dept.value)">
            {{ dept.label }}
          </el-button>
          <el-button v-else text bg @click="handleDeptChange(dept.value)">
            {{ dept.label }}
          </el-button>
        </template>
      </div>
      <!-- 当输入框有内容时让右侧占满宽度 -->
      <div class="right" :style="{ width: !!input ? '100%' : '' }">
        <el-option v-for="doctor in filteredDoctors" :key="doctor.id" :label="doctor.name" :value="doctor.id"
          @click="handleDoctorSelect(doctor)">
          <div class="doctor-info">
            <div class="doctor-name">{{ doctor.name }}</div>
            <div class="doctor-details">
              <span class="department" v-if="!!input">{{ doctor.department }}</span>
              <span class="remaining" :class="{ insufficient: doctor.remaining <= 5 }">
                余 {{ doctor.remaining }}
              </span>
              <span class="fee"> ¥{{ doctor.fee.toFixed(2) }}</span>
            </div>
          </div>
        </el-option>
        <!-- <div v-if="filteredDoctors.length === 0" class="no-results">
          没有找到匹配的医生
        </div> -->
      </div>
    </div>
    <template #empty>
      <div class="no-results">
        没有找到匹配的医生
      </div>
    </template>
  </el-select>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick, computed } from 'vue'

// 选中的医生ID
const selectedDoctorId = ref('')
// 当前选中的科室
const currentDept = ref('internal')
// 搜索输入框内容
const input = ref('')

// 定义医生数据结构
interface DoctorItem {
  id: string;          // 医生唯一标识
  name: string;        // 医生姓名
  remaining: number;   // 剩余挂号数量
  fee: number;         // 挂号费
  department: string;  // 所属科室
  departmentKey: string; // 科室标识键
}

// 定义科室分组结构
interface DepartmentGroup {
  label: string;       // 科室名称
  value: string;       // 科室标识
}

// 医生数据 - 包含姓名、剩余号源、挂号费和所属科室
const doctors: DoctorItem[] = [
  { id: 'd1', name: '张医生', remaining: 12, fee: 50, department: '内科', departmentKey: 'internal' },
  { id: 'd2', name: '李医生', remaining: 8, fee: 60, department: '内科', departmentKey: 'internal' },
  { id: 'd3', name: '王医生', remaining: 3, fee: 50, department: '内科', departmentKey: 'internal' },
  { id: 'd4', name: '赵医生', remaining: 15, fee: 80, department: '外科', departmentKey: 'surgery' },
  { id: 'd5', name: '刘医生', remaining: 5, fee: 70, department: '外科', departmentKey: 'surgery' },
  { id: 'd6', name: '陈医生', remaining: 20, fee: 100, department: '儿科', departmentKey: 'pediatrics' },
  { id: 'd7', name: '杨医生', remaining: 7, fee: 90, department: '儿科', departmentKey: 'pediatrics' },
  { id: 'd8', name: '黄医生', remaining: 1, fee: 120, department: '妇产科', departmentKey: 'obstetrics' },
  { id: 'd9', name: '周医生', remaining: 9, fee: 110, department: '妇产科', departmentKey: 'obstetrics' },
  { id: 'd10', name: '吴医生', remaining: 14, fee: 80, department: '眼科', departmentKey: 'ophthalmology' },
]

// 科室分组 - 根据医生数据的科室自动生成
const departmentGroups = computed<DepartmentGroup[]>(() => {
  // 提取唯一的科室
  const uniqueDepartments = Array.from(
    new Map(doctors.map(doctor => [doctor.departmentKey, {
      label: doctor.department,
      value: doctor.departmentKey
    }])).values()
  )
  return uniqueDepartments
})

// 获取所有医生（用于全局搜索）
const allDoctors = computed(() => doctors)

// 获取当前科室的医生
const currentDeptDoctors = computed(() => {
  return doctors.filter(doctor => doctor.departmentKey === currentDept.value)
})

// 根据输入框内容过滤医生
const filteredDoctors = computed(() => {
  if (!input.value) {
    return currentDeptDoctors.value
  }

  const searchStr = input.value.toLowerCase()
  // 当有输入时，搜索所有医生（匹配姓名或科室）
  return allDoctors.value.filter(doctor =>
    doctor.name.toLowerCase().includes(searchStr) ||
    doctor.department.toLowerCase().includes(searchStr)
  )
})

// 引用
const selectRef = ref<InstanceType<any> | null>(null)
const inputRef = ref<InstanceType<any> | null>(null)

// 处理键盘上键事件
const handleKeyUp = (event: KeyboardEvent) => {
  selectRef.value?.navigateOptions('prev')
}

// 处理键盘Esc事件
const handleEsc = () => {
  selectRef.value?.handleEsc()
}

// 处理键盘delete事件
const deletePrevTag = () => {
  selectRef.value?.deletePrevTag()
}

// 选择键盘enter事件
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
    if (filteredDoctors.value.length > 0) {
      selectRef.value?.setOptionIndex(0)
    }
  })
}

// 处理医生选择
const handleDoctorSelect = (doctor: DoctorItem) => {
  selectedDoctorId.value = doctor.id
  // 点击选项后清空输入框
  input.value = ''
  console.log(`选中医生: ${doctor.name}, 挂号费: ¥${doctor.fee}, 剩余号源: ${doctor.remaining}`)
}

// 处理科室切换
const handleDeptChange = (deptKey: string) => {
  currentDept.value = deptKey
  // 切换科室后清空输入框并重置选项导航
  input.value = ''
  nextTick(() => {
    if (inputRef.value) {
      inputRef.value.focus()
    }
    if (filteredDoctors.value.length > 0) {
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
  const doctor = doctors.find(d => d.id === option.value)
  if (!doctor) return false
  return doctor.name.toLowerCase().includes(query.toLowerCase()) ||
    doctor.department.toLowerCase().includes(query.toLowerCase())
}

onMounted(() => {
  // 初始化时设置第一个选项为激活状态
  nextTick(() => {
    if (filteredDoctors.value.length > 0) {
      selectRef.value?.setOptionIndex(0)
    }
  })
})
</script>

<style scoped lang="scss">
:deep(.el-input__wrapper.is-focus) {
  --el-input-focus-border-color: var(--el-input-border-color);
}

.doctor-select-dropdown {
  width: 400px;
}

.el-select-dropdown__wrap {
  display: flex;
  max-height: 400px;
  overflow: auto;

  .left {
    width: 108px;
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

    :deep(.el-select-dropdown__item) {
      padding: 0 12px;
    }

    .doctor-info {
      display: flex;
      gap: 8px;

      .doctor-name {
        font-size: 14px;
        margin-bottom: 4px;
        font-weight: 500;
        width: 100px;
        color: var(--el-text-color-regular);
      }

      .doctor-details {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        color: var(--el-text-color-secondary);
        flex-wrap: wrap;
        gap: 8px;
      }
    }


    .department {
      width: 100px;
      color: var(--el-text-color-placeholder);
    }

    .fee {
      color: var(--el-text-color-regular);
      width: 64px;
      text-align: right;
    }

    .remaining {
      color: var(--el-text-color-placeholder);
      width: 64px;
      text-align: right;
    }


  }
}

.no-results {
  width: 392px;
}
</style>
