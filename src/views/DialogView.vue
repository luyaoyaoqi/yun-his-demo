<template>
  <div id="dialog-container">
    <el-button plain @click="outerVisible = true">
      Open the outer Dialog
    </el-button>

    <el-dialog v-model="outerVisible" title="Outer Dialog" width="800" modal-class="outer-dialog">
      <p style="height: 500px;">This is the outer Dialog</p>
      <el-dialog v-model="innerVisible" width="500" title="Inner Dialog" modal-class="inner-dialog" align-center>
        <p>This is the inner Dialog</p>
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
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const outerVisible = ref(false)
const innerVisible = ref(false)
</script>

<style lang="scss" scoped>
:deep(.outer-dialog) {
  .el-overlay-dialog {
    .el-dialog {
      position: relative;

      .inner-dialog {
        position: absolute;
        top: 0;
        left: 0;
        margin: 1px;
        height: calc(100% - 2px);
        border-radius:var(--el-border-radius-base);
        background-color: var(--el-overlay-color-light);
        
        .el-overlay-dialog {
          position: unset;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>