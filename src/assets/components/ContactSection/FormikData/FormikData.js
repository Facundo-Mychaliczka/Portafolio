import * as Yup from "yup"

export const INITIAL_VALUES_CONTACT = {
    email: "",
    message: ""
}

export const validationSchema = Yup.object({
    email: Yup.string("Este campo solo recibe emails.")
    .email("Este campo sólo acepta emails.")
    .required("Este campo es obligatorio."),
    message: Yup.string()
    .required("Este campo es obligatorio.")
})

export const validationSchemaEnglish = Yup.object({
    email: Yup.string("This field only receives emails.")
    .email("This field only receives emails.")
    .required("This field is required."),
    message: Yup.string()
    .required("This field is required.")
})