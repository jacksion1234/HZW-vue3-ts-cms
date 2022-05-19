<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { log } from 'console'
import { ElForm } from 'element-plus/lib/components'
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config/account-config'

export default defineComponent({
  setup() {
    const store = useStore()
    const formRef = ref<InstanceType<typeof ElForm>>()
    const account = reactive({
      name: '',
      password: ''
    })
    const login = () => {
      formRef.value?.validate((valid: boolean) => {
        if (valid) {
          console.log('account通过校验，开始登录')
        } else {
          console.log('校验失败')
        }
      })
    }
    return {
      account,
      rules,
      formRef,
      login
    }
  }
})
</script>

<style scoped lang="less"></style>
