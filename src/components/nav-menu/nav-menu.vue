<template>
  <div class="nav-menu">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#001529"
      text-color="#FFF"
      active-text-color="#836FFF"
    >
      <template v-for="item in menuList">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''" :key="item.id">
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
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id + ''">
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
          <el-menu-item :key="item.id">{{ item.name }}</el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from '@/store'
// import { us } from 'vuex'

export default defineComponent({
  setup() {
    const isCollapse = ref(false)

    const store = useStore()
    const menuList = computed(() => store.state.login.userMenu)
    return {
      isCollapse,
      menuList
    }
  }
})
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: #001529;
  .el-menu {
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
