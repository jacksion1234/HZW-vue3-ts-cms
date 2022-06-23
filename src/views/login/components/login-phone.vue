<template>
  <div class="login-phone">
    <el-form label-width="60px" :rules="rules" :model="phone" ref="formRef">
      <el-form-item label="手机号" prop="phoneNum">
        <el-input v-model="phone.phoneNum" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="phone.code" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const rules = reactive({})
    const phone = reactive({
      phoneNum: '',
      code: ''
    })
    return {
      rules,
      phone
    }
  }
})
</script>

<style scoped lang="less"></style>
