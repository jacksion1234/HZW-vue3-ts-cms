<template>
  <div class="main-form">
    <el-form
      :label-position="labelPosition"
      :label-width="labelWidth"
      :model="formData"
    >
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemLayout">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  type="date"
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, PropType } from 'vue'
import { IFormItem } from '../types'
const props = defineProps({
  formItems: {
    type: Array as PropType<IFormItem[]>,
    default: () => []
  },
  colLayout: {
    type: Object,
    default() {
      return {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 8,
        xl: 6
      }
    }
  },
  labelWidth: {
    type: String,
    default: '100px'
  },
  itemLayout: {
    type: Object,
    default() {
      return {
        padding: '10px 40px'
      }
    }
  }
})
console.log(props)

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
