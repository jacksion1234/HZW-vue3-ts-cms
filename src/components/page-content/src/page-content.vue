<template>
  <div class="page-content">
    <zw-table :tableData="tableData" v-bind="tableContentConfig"> </zw-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import zwTable from '@/base-ui/table'
import { useStore } from 'vuex'
defineProps({
  tableContentConfig: {
    type: Object,
    required: true
  }
})
const tableData = ref([
  { sport: '篮球', id: 1, age: 18, name: 'Tom' },
  { sport: '篮球', id: 1, age: 18, name: 'Tom' },
  { sport: '篮球', id: 1, age: 18, name: 'Tom' },
  { sport: '篮球', id: 1, age: 18, name: 'Tom' },
  { sport: '篮球', id: 1, age: 18, name: 'Tom' }
])
// const tableData =
const store = useStore()
store.dispatch('system/getPageListAction', {
  url: 'users/list',
  queryInfo: {
    offset: 1,
    size: 10
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  background: #fff;
}
</style>
