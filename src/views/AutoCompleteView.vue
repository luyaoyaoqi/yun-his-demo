<template>
    <el-autocomplete ref="autoCompleteRef" v-model="state1" :fetch-suggestions="querySearch" clearable
        class="inline-input w-50" placeholder="Please Input" @select="handleSelect">

        <template #default="{ item }">
            <div class="flex">
                <div class="name">{{ item.value }}</div>
            </div>
        </template>
    </el-autocomplete>

</template>

<script lang="ts" setup>
import { onMounted, ref, nextTick } from 'vue'

interface RestaurantItem {
    value: string
    link: string
}

const state1 = ref('')

const restaurants = ref<RestaurantItem[]>([])
const querySearch = (queryString: string, cb: any) => {
    const results = queryString
        ? restaurants.value.filter(createFilter(queryString))
        : restaurants.value
    // call callback function to return suggestions
    cb(results)
}
const createFilter = (queryString: string) => {
    return (restaurant: RestaurantItem) => {
        return (
            restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        )
    }
}
const loadAll = () => {
    return [
        { value: 'vue', link: 'https://github.com/vuejs/vue' },
        { value: 'element', link: 'https://github.com/ElemeFE/element' },
        { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
        { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
        { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
        { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
        { value: 'babel', link: 'https://github.com/babel/babel' },
        { value: 'webpack', link: 'https://github.com/webpack/webpack' },
        { value: 'vue-cli', link: 'https://github.com/vuejs/vue-cli' },
    ]
}

const handleSelect = (item: Record<string, any>) => {
    console.log(item)
}

const autoCompleteRef = ref(null)

onMounted(() => {
    restaurants.value = loadAll()
    nextTick(() => {
        // autoCompleteRef?.value && console.log(autoCompleteRef.value)
        // @ts-ignore
        const title = document.createElement("div")
        title.style.order = "0"
        title.innerHTML = '<div ><span>Custom Suggestion</span></div>'
        document.querySelector('.el-autocomplete-suggestion')?.append(title)
    })
})

</script>
<style lang="scss">
.el-autocomplete-suggestion {
    display: flex;
    flex-direction: column;
    .el-scrollbar {
        order: 1;
    }
}
</style>