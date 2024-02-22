import React  from 'react'
import {  IconsWrapper, PortFolioWrapper, PortfolioTitle, ProyectBox, StyledIcon, StyledImg, StyledLink, StyledSpan } from './PortfolioStyles'
import AorusImage from "../../../../public/AorusPage.png"
import VercelIcon from "../../../../public/VercelIcon.svg"
import GithubIcon from "../../../../public/GithubIcon.png"
import PostmanIcon from "../../../../public/PostmanIcon.png"
import AorusAPI from "../../../../public/AorusAPI.png"



const Portfolio = () => {
  return (
    <PortFolioWrapper>
     <PortfolioTitle>PORTFOLIO</PortfolioTitle>
     <ProyectBox>
        <h3>AorusPage es un proyecto realizado utilizando <StyledSpan>React</StyledSpan>  para la maquetación, <StyledSpan>JS</StyledSpan>  con la librería styled-components para los estilos, <StyledSpan>Axios</StyledSpan>  para la conexión a una Base de Datos, <StyledSpan>React-Router-Dom</StyledSpan>  para sus rutas, <StyledSpan>React-Redux</StyledSpan>  para la utilización de su store y <StyledSpan>Formik</StyledSpan> junto a <StyledSpan>Yup</StyledSpan>  para creación y validación de formularios.</h3>
       <StyledImg src={AorusImage} />
       <IconsWrapper>
        <StyledLink href='https://integrador-react-facundo-mychaliczka.vercel.app/'>Deploy<StyledIcon src={VercelIcon} alt="" /></StyledLink>
        <StyledLink href='https://github.com/Facundo-Mychaliczka/IntegradorReact'>Code<StyledIcon src={GithubIcon} alt="" /></StyledLink>
       </IconsWrapper>
     </ProyectBox>
     <ProyectBox>
        <h3>AorusAPI es un proyecto back-end realizado con <StyledSpan>typescript</StyledSpan>, el cual es utilizado en AorusPage para la creación, logueo, autentificaión de usuarios y creación de órdenes por medio de una Base de Datos creada en Mongo. <br />
        Se utilizaron librerías tales como <StyledSpan>Cors</StyledSpan>, <StyledSpan>bcryptjs</StyledSpan>, <StyledSpan>express</StyledSpan>, <StyledSpan>express-validator</StyledSpan>, <StyledSpan>jsonwebtoken</StyledSpan>, entre otras.
         </h3>
         <StyledImg src={AorusAPI} />
         <IconsWrapper>
        <StyledLink href='https://documenter.getpostman.com/view/30895857/2sA2rAz2nC'>Postman Doc.<StyledIcon src={PostmanIcon} alt="" /></StyledLink>
        <StyledLink href='https://github.com/Facundo-Mychaliczka/ApiBack'>Code<StyledIcon src={GithubIcon} alt="" /></StyledLink>
       </IconsWrapper>
     </ProyectBox>
    </PortFolioWrapper>
  )
}

export default Portfolio