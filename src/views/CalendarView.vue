<template>
    <el-calendar v-model="value">
        <template #date-cell="{ data }">
            <p :class="data.isSelected ? 'is-selected' : ''">
                {{ isToday(data.day) ? '今' : data.day.split('-').slice(2).join('-') }}
            </p>
        </template>
    </el-calendar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(new Date())
const isToday = (day: string) => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const todayStr = `${yyyy}-${mm}-${dd}`;
    return day === todayStr;
}
</script>
<style lang="scss" scoped>
:deep(.el-calendar__body) {
    padding-top: 0;
    padding-bottom: 0;

    .el-calendar-table {
        font-size: 14px;

        thead th {
            padding: 8px 0;
        }

        td {
            --el-calendar-border: none;
        }

        .el-calendar-day {
            --el-calendar-cell-width: 40px;
            text-align: center;
        }
    }

}
</style>