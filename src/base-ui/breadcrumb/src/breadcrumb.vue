<template>
  <div>
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumbs" :key="item.path">
        <el-breadcrumb-item :to="{ path: item.path }"
          >homepage</el-breadcrumb-item
        >
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, PropType } from 'vue'
import { IBreadcrumb } from '../types'
const props = defineProps({
  breadcrumbs: {
    type: Array as PropType<IBreadcrumb[]>
  }
})
</script>

<style scoped></style>
