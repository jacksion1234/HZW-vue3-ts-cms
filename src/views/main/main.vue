<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside width="200px">
        <nav-menu></nav-menu>
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">Header</el-header>
        <el-main class="page-content">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import NavMenu from '@/components/nav-menu'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    NavMenu
  },
  setup() {
    const isCollapse = ref(true)
    return {
      isCollapse
    }
  }
})
</script>

<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .main-content {
    width: 100%;
    height: 100%;
    .page {
      height: 100%;
    }
  }
}
</style>
