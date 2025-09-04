<template>
    <div class="flex flex-col gap-[16px]">
        <el-input class="mdd-input-underline" v-model="input" style="width: 240px" placeholder="Please input" />
        <el-input class="mdd-input-hover-underline" v-model="input" style="width: 240px" placeholder="Please input" />
        <el-input class="mdd-input-no-border" v-model="input" style="width: 240px" placeholder="Please input" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const input = ref('')
</script>

<style lang="less">
.mdd-input-underline {

    .el-input__wrapper {
        box-shadow: none;
        border-radius: 0;
        border-bottom: 1px solid var(--el-input-border-color);

        &:hover {
            border-color: var(--el-input-hover-border-color);
        }

        &.is-focus {
            border-color: var(--el-input-focus-border-color);
        }
    }
}

.mdd-input-hover-underline {

    .el-input__wrapper {
        box-shadow: none;
        border-radius: 0;
        border-bottom: 1px solid transparent;

        &:hover {
            border-color: var(--el-input-hover-border-color);
        }

        &.is-focus {
            border-color: var(--el-input-focus-border-color);
        }
    }
}


.mdd-input-no-border {
    .el-input__wrapper {
        box-shadow: none;
    }
}
</style>