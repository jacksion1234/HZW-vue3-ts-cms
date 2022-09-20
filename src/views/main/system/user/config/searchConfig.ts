const searchConfigs = {
  labelWidth: '100px',
  itemLayout: {
    padding: '10px 20px'
  },
  formItems: [
    {
      field: 'sport',
      type: 'input',
      label: '运动',
      otherOptions: {
        placeholder: '请输入运动名称'
      }
    },
    {
      field: 'id',
      type: 'input',
      label: 'id',
      otherOptions: {
        placeholder: '请输入id'
      }
    },
    {
      field: 'name',
      type: 'input',
      label: '姓名',
      otherOptions: {
        placeholder: '请输入姓名'
      }
    },
    {
      field: 'age',
      type: 'input',
      label: '年龄',
      otherOptions: {
        placeholder: '请输入年龄'
      }
    },
    {
      field: 'birthday',
      type: 'datepicker',
      label: '生日',
      otherOptions: {
        placeholder: '请输入生日'
      }
    }
  ]
}
export default searchConfigs
