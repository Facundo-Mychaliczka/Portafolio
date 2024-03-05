import React  from 'react'
import {  IconsWrapper, PortFolioWrapper, PortfolioTitle, ProyectBox, StyledIcon, StyledImg, StyledLink, StyledSpan } from './PortfolioStyles'
import AorusImage from "../../../../public/AorusPage.png"
import VercelIcon from "../../../../public/VercelIcon.svg"
import GithubIcon from "../../../../public/GithubIcon.png"
import PostmanIcon from "../../../../public/PostmanIcon.png"
import AorusAPI from "../../../../public/AorusAPI.png"
import { useSelector } from 'react-redux'



const Portfolio = () => {

  const language = useSelector((state) => state.language.language)

  return (
    <PortFolioWrapper id='Portfolio'>
     <PortfolioTitle>{language === "ES" ? "PORTAFOLIO" : "PORTFOLIO"}</PortfolioTitle>
     <ProyectBox>
      {language === "ES"
        ? <h3>AorusPage es un proyecto realizado utilizando <StyledSpan>React</StyledSpan>  para la maquetación, <StyledSpan>JS</StyledSpan>  con la librería styled-components para los estilos, <StyledSpan>Axios</StyledSpan>  para la conexión a una Base de Datos, <StyledSpan>React-Router-Dom</StyledSpan>  para sus rutas, <StyledSpan>React-Redux</StyledSpan>  para la utilización de su store y <StyledSpan>Formik</StyledSpan> junto a <StyledSpan>Yup</StyledSpan>  para creación y validación de formularios.</h3>
        : <h3>AorusPage is a project made using <StyledSpan>React</StyledSpan>  for the layout, <StyledSpan>JS</StyledSpan>  with the styled-components library for the styles, <StyledSpan>Axios</StyledSpan> for the connection to a Database, <StyledSpan>React-Router-Dom</StyledSpan> for its routes, <StyledSpan>React-Redux</StyledSpan> for the use of its store and <StyledSpan>Formik</StyledSpan> together with <StyledSpan>Yup</StyledSpan> for form creation and validation.</h3>
      }
        
       <StyledImg src={AorusImage} />
       <IconsWrapper>
        <StyledLink href='https://integrador-react-facundo-mychaliczka.vercel.app/' target='_blank'>Deploy<StyledIcon src={VercelIcon} alt="" /></StyledLink>
        <StyledLink href='https://github.com/Facundo-Mychaliczka/IntegradorReact' target='_blank'>Code<StyledIcon src={GithubIcon} alt="" /></StyledLink>
       </IconsWrapper>
     </ProyectBox>
     <ProyectBox>
      {language === "ES"
      ?<h3>AorusAPI es un proyecto back-end realizado con <StyledSpan>typescript</StyledSpan>, el cual es utilizado en AorusPage para la creación, logueo, autentificaión de usuarios y creación de órdenes por medio de una Base de Datos creada en <StyledSpan>Mongo.</StyledSpan> 
        Se utilizaron librerías tales como <StyledSpan>Cors</StyledSpan>, <StyledSpan>bcryptjs</StyledSpan>, <StyledSpan>express</StyledSpan>, <StyledSpan>express-validator</StyledSpan>, <StyledSpan>jsonwebtoken</StyledSpan>, entre otras.</h3>
        : <h3>AorusAPI is a back-end project made with <StyledSpan>typescript</StyledSpan>, which is used in AorusPage for the creation, logging, user authentication and creation of orders through a Database created in <StyledSpan>Mongo.</StyledSpan>
        Libraries such as <StyledSpan>Cors</StyledSpan>, <StyledSpan>bcryptjs</StyledSpan>, <StyledSpan>express</StyledSpan>, <StyledSpan>express-validator</StyledSpan>, <StyledSpan>jsonwebtoken</StyledSpan>, among others, were used.</h3>
      }
        
         
         <StyledImg src={AorusAPI} />
         <IconsWrapper>
        <StyledLink href='https://documenter.getpostman.com/view/30895857/2sA2rAz2nC' target='_blank'>Postman Doc.<StyledIcon src={PostmanIcon} alt="" /></StyledLink>
        <StyledLink href='https://github.com/Facundo-Mychaliczka/ApiBack' target='_blank'>Code<StyledIcon src={GithubIcon} alt="" /></StyledLink>
       </IconsWrapper>
     </ProyectBox>
    </PortFolioWrapper>
  )
}

export default Portfolio