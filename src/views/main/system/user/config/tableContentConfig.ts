const tableContentConfig = {
  title: '用户列表',
  tableColumn: [
    { prop: 'realname', label: '真实姓名', minWidth: '120px' },
    { prop: 'id', label: 'id', minWidth: '120px' },
    { prop: 'name', label: '姓名', minWidth: '120px' },
    { prop: 'cellphone', label: '联系电话', minWidth: '120px' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '120px',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '120px',
      slotName: 'updateAt'
    },
    { prop: 'enable', label: '状态', minWidth: '120px', slotName: 'enable' },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showSelectColumn: true,
  showIndexColumn: true,
  showBorder: true
}
export default tableContentConfig
