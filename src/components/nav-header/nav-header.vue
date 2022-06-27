<template>
  <div class="nav-header">
    <el-icon :size="30" @click="handleCollapse">
      <Expand v-if="isCollapse" />
      <Fold v-else />
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  emits: ['changCollapse'],
  setup(props, { emit }) {
    const handleCollapse = () => {
      // console.log('触发点击事件')
      emit('changCollapse')
    }
    return {
      handleCollapse
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
