import React from "react";
import {
	AccordionItemButtonStyled,
	AccordionItemHeadingStyled,
	AccordionItemPanelStyled,
	AccordionItemStyled,
	AccordionLi,
	AccordionStyled,
	AccordionUl,
	HRSecondary,
	IconsWrapper,
	PortFolioWrapper,
	PortfolioDivPrueba,
	PortfolioTitle,
	ProyectBox,
	ProyectDescription,
	ProyectImage,
	ProyectImageAnchor,
	ProyectP,
	ProyectsContainer,
	StyledIcon,
	StyledLinkPortfolio,
	TecnlogiesImgContainer,
	TecnologieImg,
	TecnologiesPortfolio,
	TecnologiesTitle,
} from "./PortfolioStyles";
import AorusImage from "../../../../public/AorusPage.png";
import AorusAPI from "../../../../public/AorusAPI.png";
import ElenoPage from "../../../../public/ElenoPage.png";
import VercelIcon from "../../../../public/VercelIcon.svg";
import GithubIcon from "../../../../public/GithubIcon.png";
import PostmanIcon from "../../../../public/PostmanIcon.png";
import ReactLogo from "../../../../public/ReactLogo.png";
import GitLogo from "../../../../public/GitLogo.png";
import JavaScriptLogo from "../../../../public/JSLogo.svg";
import TypescriptLogo from "../../../../public/TsLogo.png";
import MongoDBIcon from "../../../../public/MongoDBIcon.png";
import { useSelector } from "react-redux";
import PortfolioBgImg from "../../../../public/PruebaFondoPortfolioImg.jpg";
import { HR } from "../Hero/HeroStyles";

const Portfolio = () => {
	const language = useSelector((state) => state.language.language);

	return (
		<PortFolioWrapper id="Portfolio" style={{ backgroundImage: `url(${PortfolioBgImg})` }}>
			<PortfolioDivPrueba>
				<PortfolioTitle>
					{language === "ES" ? "PORTAFOLIO" : "PORTFOLIO"}
					<HR />
				</PortfolioTitle>
				<ProyectsContainer>
					<ProyectBox>
						<ProyectImageAnchor href="https://integrador-react-facundo-mychaliczka.vercel.app/" target="_blank">
							<ProyectImage src={AorusImage} />
						</ProyectImageAnchor>
						<ProyectDescription>
							{language === "ES" ? (
								<ProyectP>
									AorusPage es el proyecto final integrador del módulo "ReactJs" de NUCBA. Consta de un E-Commerce con
									carrito funcional, inicio de sesión, registro y validación por medio de un código proporcionado vía
									E-Mail. donde se hace una conexión a una API para crear órdenes, crear usuarios, iniciar sesión,
									generar un código y enviarlo al e-mail del usuario.
								</ProyectP>
							) : (
								<ProyectP>
									AorusPage is the final project integrating the "ReactJs" module of NUCBA. It consists of an E-Commerce
									with a functional cart, login, registration and validation through a code provided via E-Mail. where a
									connection is made to an API to create orders, create users, log in, generate a code and send it to
									the user's email.
								</ProyectP>
							)}

							<TecnologiesPortfolio>
								<TecnologiesTitle>
									{" "}
									{language === "ES" ? "Tecnologías usadas" : "Technologies used"}
									<HRSecondary />
								</TecnologiesTitle>
								<TecnlogiesImgContainer>
									<TecnologieImg src={ReactLogo} />
									<TecnologieImg src={JavaScriptLogo} />
									<TecnologieImg src={GitLogo} />
								</TecnlogiesImgContainer>

								<AccordionStyled allowZeroExpanded>
									<AccordionItemStyled>
										<AccordionItemHeadingStyled>
											<AccordionItemButtonStyled>
												➡{language === "ES" ? "Librerías" : "Libraries"}
											</AccordionItemButtonStyled>
										</AccordionItemHeadingStyled>
										<AccordionItemPanelStyled>
											<AccordionUl>
												<AccordionLi>- StyledComponents</AccordionLi>
												<AccordionLi>- Axios</AccordionLi>
												<AccordionLi>- React-Router-Dom</AccordionLi>
												<AccordionLi>- React-Redux</AccordionLi>
												<AccordionLi>- Formik</AccordionLi>
												<AccordionLi>- Yup</AccordionLi>
											</AccordionUl>
										</AccordionItemPanelStyled>
									</AccordionItemStyled>
								</AccordionStyled>
							</TecnologiesPortfolio>

							<IconsWrapper>
								<StyledLinkPortfolio href="https://github.com/Facundo-Mychaliczka/ApiBack" target="_blank">
									{language === "ES" ? "Código" : "Code"}
									<StyledIcon src={GithubIcon} alt="" />
								</StyledLinkPortfolio>
							</IconsWrapper>
						</ProyectDescription>
					</ProyectBox>
					{/* SEGUNDO PROYECTO */}
					<ProyectBox>
						<ProyectImageAnchor href="https://github.com/Facundo-Mychaliczka/ApiBack" target="_blank">
							<ProyectImage src={AorusAPI} />
						</ProyectImageAnchor>
						<ProyectDescription>
							{language === "ES" ? (
								<ProyectP>
									{" "}
									AorusAPI es un proyecto back-end realizado con typescript, el cual es utilizado en AorusPage para la
									creación, logueo, autentificaión de usuarios y creación de órdenes por medio de una Base de Datos
									creada en Mongo. Validando los datos recibidos y dando feedback al front-end.
								</ProyectP>
							) : (
								<ProyectP>
									AorusAPI is a back-end project made with typescript, which is used in AorusPage for the creation,
									logging, user authentication and creation of orders through a Database created in Mongo. Validating
									the data received and giving feedback to the front-end.
								</ProyectP>
							)}

							<TecnologiesPortfolio>
								<TecnologiesTitle>
									{" "}
									{language === "ES" ? "Tecnologías usadas" : "Technologies used"}
									<HRSecondary />
								</TecnologiesTitle>
								<TecnlogiesImgContainer>
									<TecnologieImg src={TypescriptLogo} />
									<TecnologieImg src={MongoDBIcon} />
									<TecnologieImg src={GitLogo} />
								</TecnlogiesImgContainer>

								<AccordionStyled allowZeroExpanded>
									<AccordionItemStyled>
										<AccordionItemHeadingStyled>
											<AccordionItemButtonStyled>
												➡{language === "ES" ? "Librerías" : "Libraries"}
											</AccordionItemButtonStyled>
										</AccordionItemHeadingStyled>
										<AccordionItemPanelStyled>
											<AccordionUl>
												<AccordionLi>- Nodemon</AccordionLi>
												<AccordionLi>- Express</AccordionLi>
												<AccordionLi>- Express-Validator</AccordionLi>
												<AccordionLi>- Bcryptjs </AccordionLi>
												<AccordionLi>- Nodemailer</AccordionLi>
												<AccordionLi>- Mongoose</AccordionLi>
												<AccordionLi>- Dotenv</AccordionLi>
												<AccordionLi>- Jsonwebtoken</AccordionLi>
												<AccordionLi>- Randomstring</AccordionLi>
												<AccordionLi>- Cors</AccordionLi>
											</AccordionUl>
										</AccordionItemPanelStyled>
									</AccordionItemStyled>
								</AccordionStyled>
							</TecnologiesPortfolio>
							<IconsWrapper>
								<StyledLinkPortfolio href="https://documenter.getpostman.com/view/30895857/2sA2rAz2nC" target="_blank">
									Postman Doc.
									<StyledIcon src={PostmanIcon} alt="" />
								</StyledLinkPortfolio>
							</IconsWrapper>
						</ProyectDescription>
					</ProyectBox>
					{/* TERCER PROYECTO */}
					<ProyectBox>
						<ProyectImageAnchor href="https://martinaelenotraductora.netlify.app/" target="_blank">
							<ProyectImage src={ElenoPage} />
						</ProyectImageAnchor>
						<ProyectDescription>
							{language === "ES" ? (
								<ProyectP>
									Página profesional diseñada a medida para traductora, realizada con ReactJs y Javascript y su sección
									de "Contacto" totalmente funcional, enviando e-mail al correo del cliente con el contenido
									proporcionado en la página por el usuario.
								</ProyectP>
							) : (
								<ProyectP>
									Professional page custom designed for a translator, made with ReactJs, Javascript and its section of
									"Contact" fully functional, sending e-mail to the client's email with the content provided on the page
									by the user.
								</ProyectP>
							)}

							<TecnologiesPortfolio>
								<TecnologiesTitle>
									{language === "ES" ? "Tecnologías usadas" : "Technologies used"}
									<HRSecondary />
								</TecnologiesTitle>
								<TecnlogiesImgContainer>
									<TecnologieImg src={ReactLogo} />
									<TecnologieImg src={JavaScriptLogo} />
									<TecnologieImg src={TypescriptLogo} />
									<TecnologieImg src={GitLogo} />
								</TecnlogiesImgContainer>

								<AccordionStyled allowZeroExpanded>
									<AccordionItemStyled>
										<AccordionItemHeadingStyled>
											<AccordionItemButtonStyled>
												➡{language === "ES" ? "Librerías" : "Libraries"}
											</AccordionItemButtonStyled>
										</AccordionItemHeadingStyled>
										<AccordionItemPanelStyled>
											<AccordionUl>
												<AccordionLi>- StyledComponents</AccordionLi>
												<AccordionLi>- Axios</AccordionLi>
												<AccordionLi>- React-Redux</AccordionLi>
												<AccordionLi>- Formik</AccordionLi>
												<AccordionLi>- Yup</AccordionLi>
												<AccordionLi>- Typescript</AccordionLi>
												<AccordionLi>- Cors</AccordionLi>
												<AccordionLi>- Express</AccordionLi>
												<AccordionLi>- Nodemailer</AccordionLi>
												<AccordionLi>- Nodemon</AccordionLi>
											</AccordionUl>
										</AccordionItemPanelStyled>
									</AccordionItemStyled>
								</AccordionStyled>
							</TecnologiesPortfolio>
						</ProyectDescription>
					</ProyectBox>
				</ProyectsContainer>
			</PortfolioDivPrueba>
		</PortFolioWrapper>
	);
};

export default Portfolio;
