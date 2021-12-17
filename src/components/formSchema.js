import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("name must be at least 2 characters")
    .min(2, "name must be at least 2 characters"),
  size: yup.string(),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  pineapple: yup.boolean(),
  tomatoes: yup.boolean(),
  olives: yup.boolean(),
  special: yup.string(),
});

export default formSchema;
