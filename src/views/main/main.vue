<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <nav-menu :isCollapse="isCollapse"></nav-menu>
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header
            :isCollapse="isCollapse"
            @changCollapse="changCollapse"
          ></nav-header>
        </el-header>
        <el-main class="page-content">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header/nav-header.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    let isCollapse = ref(false)
    const changCollapse = () => {
      console.log('main页面接收')
      isCollapse.value = !isCollapse.value
    }
    return {
      isCollapse,
      changCollapse
    }
  }
})
</script>

<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  .main-content {
    width: 100%;
    height: 100%;
    .el-aside {
      transition: width 0.5s;
    }
    .page {
      height: 100%;
      .page-header {
        height: 48px;
        background-color: #fff;
      }
    }
  }
}
</style>
