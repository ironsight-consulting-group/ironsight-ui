import * as yup from "yup"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export default yup.object().shape({
  name: yup.string(),
  email: yup.string().email("Email is not valid.").required("Required."),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
})
