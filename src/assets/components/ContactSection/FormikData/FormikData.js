import * as Yup from "yup"

export const INITIAL_VALUES_CONTACT = {
    email: "",
    message: ""
}

export const validationSchema = Yup.object({
    email: Yup.string("Este campo solo recibe emails")
    .email("Este campo sólo acepta emails")
    .required("Este campo es obligatorio"),
    message: Yup.string()
    .required("Este campo es obligatorio")
})