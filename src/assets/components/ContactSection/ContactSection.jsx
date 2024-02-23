import React from 'react'
import { ContactSubmitButton, ContactTitle, ContactWrapper, IconsWrapper, LinkedinStyledIcon, StyledContactForm, StyledIconContact, VercelIconContact } from './ContactSectionStyles'
import {Formik} from "formik"
import { INITIAL_VALUES_CONTACT, validationSchema } from './FormikData/FormikData'
import ContactInput from './Input/ContactInput'
import { HR } from '../Hero/HeroStyles'
import { StyledLink } from '../Portfolio/PortfolioStyles'
import GithubIcon from "../../../../public/GithubIcon.png"
import LinkedinIcon from "../../../../public/LinkedinIcon.png"
import VercelIcon from "../../../../public/VercelIcon.svg"
import { sendEmail } from '../../../axios/axiosContact'
import { useSelector } from 'react-redux'

const ContactSection = () => {

  const language = useSelector((state) => state.language.language)

  return (
    <ContactWrapper>
        <ContactTitle>CONTACT</ContactTitle>
        <HR></HR>
        <Formik
        initialValues={INITIAL_VALUES_CONTACT}
        validationSchema={validationSchema}
        onSubmit={ async (values, actions) => {
          await sendEmail(values.message, values.email);
          actions.resetForm()
        }}
        >
            <StyledContactForm>
                <ContactInput name="email" label="E-mail" type="email"/>
                <ContactInput name="message" label={language === "ES"? "Mensaje": "Message"} type="string"/>
                <ContactSubmitButton type='submit'>{language === "ES"? "Enviar": "Send"}</ContactSubmitButton>
            </StyledContactForm>
        </Formik>
        <IconsWrapper>
            <StyledLink href='https://github.com/Facundo-Mychaliczka'><StyledIconContact src={GithubIcon} alt="" /></StyledLink>
            <StyledLink href='https://www.linkedin.com/in/facundo-mychaliczka-4653a7299/'><LinkedinStyledIcon src={LinkedinIcon} alt="" /></StyledLink>
            <StyledLink href='https://vercel.com/facundo-mychaliczka'><VercelIconContact src={VercelIcon} alt="" /></StyledLink>
        </IconsWrapper>
        
    </ContactWrapper>
  )
}

export default ContactSection