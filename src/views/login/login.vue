<template>
  <div class="login">
    <login-pane />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import loginPane from './components/login-panel.vue'

export default defineComponent({
  components: {
    loginPane
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('~@/assets/img/winterVillage.jpeg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
