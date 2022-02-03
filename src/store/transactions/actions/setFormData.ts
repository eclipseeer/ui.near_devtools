export const setFormData = ({ payload, slice }: any) => {
  const { formData, actionId } = payload;
  slice.map[actionId].formData = formData;
}
