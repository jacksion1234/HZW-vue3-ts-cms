// 根据表单配置文件的属性自动生成表单需要的fromData
export function getFormModel(formItems: any) {
  const formData: any = {}
  for (const key in formItems) {
    const item = formItems[key]['field']
    formData[item] = ''
  }
  return formData
  // console.log('formData', formData)
}
