<template>
  <div class="user">
    <h2>user11</h2>
    <HZWForm v-bind="SearchConfigs"></HZWForm>
  </div>
</template>

<script lang="ts" setup>
// import { defineComponent } from 'vue'
import HZWForm from '@/base-ui/form/src/BaseForm.vue'
import searchConfigs from './config'
import { reactive } from 'vue'
const SearchConfigs = searchConfigs
// export default defineComponent({
//   name: 'user',
//   setup() {
//     return {
//       HZWForm
//     }
//   }
// })
</script>

<style scoped></style>
