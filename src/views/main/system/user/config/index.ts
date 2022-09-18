const searchConfigs = {
  labelWidth: '120px',
  itemLayout: {
    padding: '10px 40px'
  },
  formItems: [
    {
      field: 'sport',
      type: 'input',
      label: '运动',
      placeholder: '请输入运动名称'
    },
    {
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      field: 'name',
      type: 'input',
      label: '姓名',
      placeholder: '请输入姓名'
    },
    {
      field: 'age',
      type: 'input',
      label: '年龄',
      placeholder: '请输入年龄'
    },
    {
      field: 'birthday',
      type: 'datepicker',
      label: '生日',
      placeholder: '请输入生日'
    }
  ]
}
export default searchConfigs
