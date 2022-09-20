<template>
  <div class="zw-table">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-table
      :data="tableData"
      :border="showBorder"
      :header-row-style="{ background: 'black' }"
    >
      <el-table-column
        v-if="showSelectColumn"
        header-align="center"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        align="center"
        width="80"
      ></el-table-column>
      <template v-for="item in tableColumn" :key="item.prop">
        <el-table-column
          :width="item.width"
          :minWidth="item.minWidth"
          v-bind="item"
          align="center"
        >
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer"></div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { ITableItem } from '../types'
defineProps({
  tableData: {
    type: Array,
    required: true
  },
  tableColumn: {
    type: Array as PropType<ITableItem[]>
  },
  // 是否显示多选框
  showSelectColumn: {
    type: Boolean,
    default: true
  },
  // 是否显示编号
  showIndexColumn: {
    type: Boolean,
    default: true
  },
  // 是否显示边框线
  showBorder: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped></style>
