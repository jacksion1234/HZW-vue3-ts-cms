<template>
  <div class="main-form">
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="formData"
    >
      <el-row>
        <el-col :span="8">
          <el-form-item label="名称">
            <el-input v-model="formData.name" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="编码">
            <el-input v-model="formData.name" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="数值">
            <el-input v-model="formData.name" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const labelPosition = ref('center')
const formData = reactive({
  name: '',
  region: '',
  type: ''
})
</script>

<style scoped>
.main-form {
  background-color: #fff;
}
</style>
