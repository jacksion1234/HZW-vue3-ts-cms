export function getFormData(formItems: any) {
  const formData: any = {}
  for (const key in formItems) {
    const item = formItems[key]?.field
    formData[item] = ''
  }
  return formData
}
