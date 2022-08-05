<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!isCollapse" class="title">Vue3+TS</span>
    </div>
    <el-menu
      :default-active="currentActive"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :unique-opened="true"
      background-color="#001529"
      text-color="#FFF"
      active-text-color="#836FFF"
    >
      <template v-for="item in menuList">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.url + ''" :key="item.url">
            <template #title>
              <!-- <i v-if="item.icon" class="el-icon" :class="item.icon"></i> -->
              <el-icon v-if="item.icon">
                <component
                  :is="item.icon.substring(7)"
                  style="width: 16px; height: 16px"
                ></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.url">
              <el-menu-item
                :index="subitem.url + ''"
                @click="showPage(subitem)"
              >
                <i
                  v-if="subitem.icon"
                  class="el-icon"
                  :class="subitem.icon"
                ></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :key="item.url">{{ item.name }}</el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watchEffect } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
// import { us } from 'vuex'

export default defineComponent({
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    // const isCollapse = ref(false)
    let currentActive = ref('')
    const store = useStore()
    const router = useRouter()
    console.log('当前路由', router)

    const menuList = computed(() => store.state.login.userMenu)
    const showPage = (item: any) => {
      console.log(item)
      // currentActive.value = item.url + ''
      router.push({
        path: item.url ?? '/NOTFOUND'
      })
    }
    watchEffect(() => {
      currentActive.value = router.currentRoute.value.path
    })
    // computed()
    return {
      currentActive,
      menuList,
      showPage
    }
  }
})
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
  .el-menu {
    border-right: none;
    .el-menu--inline {
      background-color: #fff !important;
    }
  }
  .el-menu--inline {
    background-color: #001529 !important;
  }
  .el-sub-menu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }
}
</style>
