<template>
  <div class="nav-header">
    <el-icon :size="30" @click="handleCollapse">
      <Expand v-if="isCollapse" />
      <Fold v-else />
    </el-icon>
    <breadcrumb></breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import Breadcrumb from '@/base-ui/breadcrumb/index'
defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
})
const em = defineEmits(['changCollapse'])
const handleCollapse = () => {
  // console.log('触发点击事件')
  em('changCollapse')
}
</script>

<style scoped lang="less">
.nav-header {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
