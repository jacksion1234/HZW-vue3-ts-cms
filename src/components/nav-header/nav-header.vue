<template>
  <div class="nav-header">
    <el-icon :size="30" @click="handleCollapse">
      <Expand v-if="isCollapse" />
      <Fold v-else />
    </el-icon>
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from '@/store'
import Breadcrumb from '@/base-ui/breadcrumb/index'
import { pathBreadcrumb } from '@/utils/map-routes'
import { useRoute } from 'vue-router'

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
const breadcrumbs = computed(() => {
  const store = useStore()
  const menuList = computed(() => store.state.login.userMenu)
  const currentRoute = useRoute().path
  const breadcrumbsList = pathBreadcrumb(menuList.value, currentRoute)
  console.log('面包屑', breadcrumbsList)
  return breadcrumbsList
})
</script>

<style scoped lang="less">
.nav-header {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
