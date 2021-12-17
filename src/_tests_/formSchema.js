import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("name is a required field")
    .min(2, "name must be at least 2 characters"),
});

export default formSchema;
