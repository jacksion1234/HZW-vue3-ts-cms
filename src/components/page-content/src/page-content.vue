<template>
  <div class="page-content">
    <zw-table :tableData="tableData" v-bind="tableContentConfig">
      <template #header>
        <el-button type="primary">新增用户</el-button>
      </template>
      <template #enable="{ row }">
        <el-button
          size="small"
          plain
          :type="row.enable === 1 ? 'success' : 'danger'"
        >
          {{ row.enable === 1 ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="{ row }">
        <span>{{ $filters.foo(row.createAt) }}</span>
      </template>
    </zw-table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import zwTable from '@/base-ui/table'
import { useStore } from 'vuex'
const props = defineProps({
  tableContentConfig: {
    type: Object,
    required: true
  },
  pagename: {
    type: String
  }
})
const store = useStore()
function getListData() {
  store.dispatch('system/getPageListAction', {
    pagename: props.pagename,
    queryInfo: {
      offset: 1,
      size: 10
    }
  })
}
getListData()
const tableData = computed(() => {
  return store.getters['system/pageListData'](props.pagename)
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  background: #fff;
}
</style>
