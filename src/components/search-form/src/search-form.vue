<template>
  <div>
    <!-- 此处之所以不直接用传递formData，是为了防止子页面直接改变父页面的数据 -->
    <HZW-Form v-bind="SearchConfigs" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button icon="el-icon-refresh" @click="handleResetClick"
            >重置</el-button
          >
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
      </template>
    </HZW-Form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import HZWForm from '@/base-ui/form/src/BaseForm.vue'
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
// watch(
//   formData,
//   () => {
//     console.log('父页面的formData改变了')
//   },
//   { deep: true }
// )
</script>

<style scoped></style>
