import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { ErrorMessageStyled, InputContactBox, InputContactLabel, InputStyledContact, TextAreaStyled } from './ContactInputStyles'

const ContactInput = ({label, type, name}) => {
  return (
    <Field
        name= {name}
    >
        {
            name === "email" 
            ?({field, form: {errors, touched}}) => (
                <InputContactBox>
                    <InputContactLabel>{label}</InputContactLabel>
                    <InputStyledContact
                    type={type}
                    {...field}
                    name={field.name}
                    isError={errors[field.name] && touched[field.name]}
                    />
                    <ErrorMessage name={name} component={ErrorMessageStyled}/>
                </InputContactBox>
            )
            : ({field, form: {errors, touched}}) => (
                <InputContactBox>
                    <InputContactLabel>{label}</InputContactLabel>
                    <TextAreaStyled
                    type={type}
                    {...field}
                    name={field.name}
                    isError={errors[field.name] && touched[field.name]}
                    />
                    <ErrorMessage name={name} component={ErrorMessageStyled}/>
                </InputContactBox>
            )
        }
        
    </Field>
  )
}

export default ContactInput