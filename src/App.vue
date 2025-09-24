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
          <el-menu-item index="/">Home</el-menu-item>
          <el-menu-item index="/about">About</el-menu-item>
          <el-menu-item index="/select">SelectList</el-menu-item>
          <el-menu-item index="/selectGrid">SelectGrid</el-menu-item>
          <el-menu-item index="/input">Input</el-menu-item>
          <el-menu-item index="/calendar">Calendar</el-menu-item>
          <el-menu-item index="/timePicker">TimePicker</el-menu-item>
          <el-menu-item index="/datePicker">DatePicker</el-menu-item>
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
  --mdd-menu-bg-color: var(--el-color-primary-dark-2);
  --el-menu-bg-color: var(--mdd-menu-bg-color);
  --el-menu-hover-bg-color: var(--mdd-menu-bg-color);
  --el-menu-text-color: var(--el-color-white);
  --el-menu-active-color: var(--el-color-white);

  .el-menu {
    .el-menu-item {
      padding: 0;
      height: calc(var(--el-menu-horizontal-height) * 2 / 3);
      margin: calc(var(--el-menu-horizontal-height) * 1 / 6) var(--el-menu-base-level-padding);
      --el-transition-duration: 0ms;

      &:hover:not(.is-active) {
        background-color: rgba(255, 255, 255, 0.12);
        padding: 0 var(--el-menu-base-level-padding);
        margin: calc(var(--el-menu-horizontal-height) * 1 / 6) 0;
        border-radius: calc(var(--el-border-radius-base) * 2);
      }

    }

    :deep(.el-sub-menu) {
      .el-sub-menu__title {
        padding: 0;
        height: calc(var(--el-menu-horizontal-height) * 2 / 3);
        margin: calc(var(--el-menu-horizontal-height) * 1 / 6) var(--el-menu-base-level-padding);
      }
    }
  }
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