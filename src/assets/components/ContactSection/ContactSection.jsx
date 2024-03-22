import React from "react";
import {
	ContactSubmitButton,
	ContactTitle,
	ContactWrapper,
	IconsWrapper,
	LinkedinStyledIcon,
	StyledContactForm,
	StyledIconContact,
	StyledLinkContact,
	VercelIconContact,
} from "./ContactSectionStyles";
import { Formik } from "formik";
import { INITIAL_VALUES_CONTACT, validationSchema, validationSchemaEnglish } from "./FormikData/FormikData";
import ContactInput from "./Input/ContactInput";
import { HR } from "../Hero/HeroStyles";
import { StyledLinkPortfolio } from "../Portfolio/PortfolioStyles";
import GithubIcon from "../../../../public/GithubIcon.png";
import LinkedinIcon from "../../../../public/LinkedinIcon.png";
import VercelIcon from "../../../../public/VercelIcon.svg";
import { sendEmail } from "../../../axios/axiosContact";
import { useDispatch, useSelector } from "react-redux";
import { setMessageModalFalse } from "../../../redux/language/languageSlice";

const ContactSection = () => {
	const language = useSelector((state) => state.language.language);
	const dispatch = useDispatch();

	return (
		<ContactWrapper id="ContactMe">
			<ContactTitle>CONTACT</ContactTitle>
			<HR></HR>
			<Formik
				initialValues={INITIAL_VALUES_CONTACT}
				validationSchema={language === "ES" ? validationSchema : validationSchemaEnglish}
				onSubmit={async (values, actions) => {
					await sendEmail(values.message, values.email), dispatch(setMessageModalFalse());
					actions.resetForm();
				}}
			>
				<StyledContactForm>
					<ContactInput name="email" label="E-mail" type="email" />
					<ContactInput name="message" label={language === "ES" ? "Mensaje" : "Message"} type="string" />
					<ContactSubmitButton type="submit">{language === "ES" ? "Enviar" : "Send"}</ContactSubmitButton>
				</StyledContactForm>
			</Formik>
			<IconsWrapper>
				<StyledLinkContact href="https://github.com/Facundo-Mychaliczka" target="_blank">
					<StyledIconContact src={GithubIcon} alt="" />
				</StyledLinkContact>
				<StyledLinkContact href="https://www.linkedin.com/in/facundo-mychaliczka-4653a7299/" target="_blank">
					<LinkedinStyledIcon src={LinkedinIcon} alt="" />
				</StyledLinkContact>
				<StyledLinkContact href="https://vercel.com/facundo-mychaliczka" target="_blank">
					<VercelIconContact src={VercelIcon} alt="" />
				</StyledLinkContact>
			</IconsWrapper>
		</ContactWrapper>
	);
};

export default ContactSection;
