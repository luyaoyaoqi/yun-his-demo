<script setup lang="ts">
import { useRoute, RouterView } from 'vue-router'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { computed, h } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'

const route = useRoute()

const activeIndex = computed(() => {
  return route.path
})

const handleSelect = (value: any) => {
  console.log(value)
}

const ellipsisIcon = () => h(
  'div',
  { class: 'ellipsis-wrap' },
  [
    h('span', activeIndex.value.charAt(1).toUpperCase() + activeIndex.value.slice(2)),
    h(ArrowDown, { size: 14 }) // 箭头图标
  ]
)

</script>

<template>
  <el-config-provider :locale="zhCn">
    <header>
      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

      <div class="wrapper">
        <!-- <HelloWorld msg="You did it!" /> -->


        <el-menu :default-active="activeIndex" mode="horizontal" router class="el-menu-demo" @select="handleSelect"
          :ellipsis-icon="ellipsisIcon">
          <template #ellipsis>
            <div class="ellipsis-content">
              111
            </div>
          </template>
          <el-menu-item index="/">Home</el-menu-item>
          <el-menu-item index="/about">About</el-menu-item>
          <el-menu-item index="/select">SelectList</el-menu-item>
          <el-menu-item index="/selectGrid">SelectGrid</el-menu-item>
          <el-menu-item index="/input">Input</el-menu-item>
          <el-menu-item index="/calendar">Calendar</el-menu-item>
          <el-menu-item index="/timePicker">TimePicker</el-menu-item>
          <el-menu-item index="/enhancedSelect">EnhancedSelect</el-menu-item>
          <el-menu-item index="/dialog">Dialog</el-menu-item>
          <el-menu-item index="/print">Print</el-menu-item>
          <el-menu-item index="/autoComplete">AutoComplete</el-menu-item>
          <el-menu-item index="/form">Form</el-menu-item>
          <el-menu-item index="/vchart">Vchart</el-menu-item>
          <el-menu-item index="/mddInput">mddInput</el-menu-item>
        </el-menu>
      </div>
    </header>
    <main>
      <RouterView />
    </main>
  </el-config-provider>
</template>

<style lang="less" scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.wrapper {
  width: 100%;
  background: var(--el-fill-color-blank);
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--el-color-primary);
  font-weight: bold;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 24px;
}

.el-menu-demo.el-menu--horizontal {
  // 内部最大项宽度-88px
  padding-right: 100px;
  padding-left: 50px;
  justify-content: center;

  :deep(.el-sub-menu) {

    &:not(.is-active) {
      .el-sub-menu__title {
        .el-icon {
          .ellipsis-wrap {
            &::before {
              content: 'More';
            }

            span {
              display: none;
            }
          }
        }
      }
    }

    .el-sub-menu__title {

      .el-icon {
        width: initial;

        .ellipsis-wrap {
          display: flex;
          font-size: 14px;
          font-style: normal;
          align-items: center;

          svg {
            margin-left: 8px;
          }
        }
      }
    }


  }
}
</style>