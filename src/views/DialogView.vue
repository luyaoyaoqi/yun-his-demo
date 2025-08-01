<template>
  <el-button plain @click="outerVisible = true">
    Open the outer Dialog
  </el-button>

  <el-dialog v-model="outerVisible" title="Outer Dialog" width="800" class="outer-dialog">
    <span>This is the outer Dialog</span>
    
    <!-- 移除 append-to-body 属性，让内部对话框保持在父级上下文中 -->
    <el-dialog
      v-model="innerVisible"
      width="500"
      title="Inner Dialog"
      class="inner-dialog"
    >
      <span>This is the inner Dialog</span>
      <template #footer>
        <el-button @click="innerVisible = false">Close</el-button>
      </template>
    </el-dialog>
    
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="outerVisible = false">Cancel</el-button>
        <el-button type="primary" @click="innerVisible = true">
          Open the inner Dialog
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const outerVisible = ref(false)
const innerVisible = ref(false)
</script>

<style scoped>
/* 确保外层对话框有足够的 z-index 基础值 */
::v-deep .outer-dialog {
  z-index: 2000 !important;
}

/* 内层对话框 z-index 应高于外层，但不需要过高 */
::v-deep .inner-dialog {
  z-index: 2010 !important;
  /* 可选：添加一些内边距，让内层对话框与外层边缘有间距 */
  --el-dialog-margin-top: 10vh;
}

/* 调整内层对话框的遮罩层，使其只覆盖外层对话框 */
::v-deep .inner-dialog .el-dialog__wrapper {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
    