<template>
    <el-form ref="formRef" style="width: 600px" :model="numberValidateForm" label-width="auto" class="demo-ruleForm"
        label-position="left" require-asterisk-position="right" className="my-form">
        <el-form-item label="age" prop="age" :rules="[
            { required: true, message: 'age is required' },
            { type: 'number', message: 'age must be a number' },
        ]" size="large" label-width="104px">
            <el-input v-model.number="numberValidateForm.age" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm(formRef)">Submit</el-button>
            <el-button @click="resetForm(formRef)">Reset</el-button>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

import type { FormInstance } from 'element-plus'

const formRef = ref<FormInstance>()

const numberValidateForm = reactive({
    age: '',
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!')
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>
<style lang="less" scoped>
.my-form {
    :deep(.el-form-item) {
        .el-form-item__label {
            margin-right: -1px;
            box-shadow: 1px 0 0 0 var(--el-border-color) inset, -1px 0 0 0 transparent inset, 0 1px 0 0 var(--el-border-color) inset, 0 -1px 0 0 var(--el-border-color) inset;
            border-right: 0px;
            border-radius: var(--el-border-radius-base) 0 0 var(--el-border-radius-base);
            background: var(--el-fill-color-blank);
            padding-left: 12px;
            z-index: 1;
        }

        .el-input__wrapper {
            border-radius: 0 var(--el-border-radius-base) var(--el-border-radius-base) 0;

            &.is-focus,
            &:hover {
                z-index: 2;
            }
        }

        &.is-error {
            .el-input__wrapper {
                z-index: 2;
            }

        }
    }
}
</style>