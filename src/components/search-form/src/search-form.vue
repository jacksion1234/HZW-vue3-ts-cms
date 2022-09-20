<template>
  <div>
    <!-- 此处之所以不直接用传递formData，是为了防止子页面直接改变父页面的数据 -->
    <zw-form v-bind="SearchConfigs" v-model="formData">
      <template #header>
        <div class="header">高级检索</div>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button :icon="Refresh" @click="handleResetClick">重置</el-button>
          <el-button :icon="Search" type="primary" @click="search"
            >搜索</el-button
          >
        </div>
      </template>
    </zw-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search, Refresh } from '@element-plus/icons-vue'
import zwForm from '@/base-ui/form'
import { getFormData } from '@/utils/common'
const props = defineProps({
  SearchConfigs: {
    type: Object,
    reuqired: true,
    default: () => {
      return {}
    }
  }
})
const formItems = props.SearchConfigs?.formItems ?? []
// 此处如果使用reactive来包装对象，则会导致子页面改变数据，无法触发父页面数据同步改变的问题
const formData = ref(getFormData(formItems))
const handleResetClick = () => {
  console.log(formData)
  for (const key in formData.value) {
    console.log(key)
    formData.value[key] = ''
  }
}
const search = () => {
  console.log('触发查询')
}
// watch(
//   formData,
//   () => {
//     console.log('父页面的formData改变了')
//   },
//   { deep: true }
// )
</script>

<style scoped>
.header {
  padding: 20px 20px;
  font-size: 22px;
  font-weight: bold;
}
.handle-btns {
  padding: 10px 20px;
  text-align: right;
}
</style>
