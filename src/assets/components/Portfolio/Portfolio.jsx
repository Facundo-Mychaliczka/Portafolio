import React  from 'react'
import {  IconsWrapper, InfoDescription, PortFolioWrapper, PortfolioDivPrueba, PortfolioTitle, ProyectBox, ProyectsContainer, StyledIcon, StyledImg, StyledInstructionPortfolio, StyledLink, StyledP } from './PortfolioStyles'
import AorusImage from "../../../../public/AorusPage.png"
import VercelIcon from "../../../../public/VercelIcon.svg"
import GithubIcon from "../../../../public/GithubIcon.png"
import PostmanIcon from "../../../../public/PostmanIcon.png"
import AorusAPI from "../../../../public/AorusAPI.png"
import { useDispatch, useSelector } from 'react-redux'
import { toggleAorusApiHidden, toggleAorusPageHidden } from '../../../redux/projectsPortfolio/projectsPortfolioSlice'
import PortfolioBgImg from "../../../../public/PruebaFondoPortfolioImg.jpg"
import { HR } from '../Hero/HeroStyles'


const Portfolio = () => {

  const dispatch = useDispatch()

  const language = useSelector((state) => state.language.language)
  const AorusPageIsHidden = useSelector((state) => state.projects.aorusPageHidden)
  const AorusApiIsHidden = useSelector((state) => state.projects.aorusApiHidden)

  return (
    <PortFolioWrapper id='Portfolio' style={{ backgroundImage: `url(${PortfolioBgImg})` }}>
      <PortfolioDivPrueba>
     <PortfolioTitle>{language === "ES" ? "PORTAFOLIO" : "PORTFOLIO"} <HR/></PortfolioTitle>
      <ProyectsContainer>
        {/* PRIMER PROYECTO */}
        <ProyectBox onClick={() => dispatch(toggleAorusPageHidden())}>
             <StyledInstructionPortfolio>{language === "ES" ? "Click en la imagen para ver más." : "Click on the image to see more."} </StyledInstructionPortfolio>
            <StyledImg src={AorusImage} isHidden= {AorusPageIsHidden}/>
            <InfoDescription isHidden= {AorusPageIsHidden}>
              {language === "ES"
              ?<StyledP>
                AorusPage es un proyecto realizado utilizando React  para la maquetación, JS  con la librería styled-components para los estilos, Axios  para la conexión a una Base de Datos, React-Router-Dom  para sus rutas, React-Redux para la utilización de su store y Formik junto a Yup para creación y validación de formularios.</StyledP>
              : <StyledP>
                AorusPage is a project made using React for the layout, JS with the styled-components library for the styles, Axios for the connection to a Database, React-Router-Dom for its routes, React-Redux for the use of its store and Formik together with Yup for form creation and validation.
              </StyledP>
              }
              
              <IconsWrapper>
              <StyledLink href='https://integrador-react-facundo-mychaliczka.vercel.app/' target='_blank'>Deploy<StyledIcon src={VercelIcon} alt="" /></StyledLink>
                <StyledLink href='https://github.com/Facundo-Mychaliczka/ApiBack' target='_blank'>Code<StyledIcon src={GithubIcon} alt="" /></StyledLink>
              </IconsWrapper>
            </InfoDescription>
        </ProyectBox>

    {/* SEGUNDO PROYECTO  */}
        <ProyectBox onClick={() => dispatch(toggleAorusApiHidden())}>
             <StyledInstructionPortfolio>{language === "ES" ? "Click en la imagen para ver más." : "Click on the image to see more."} </StyledInstructionPortfolio>
            <StyledImg src={AorusAPI} isHidden= {AorusApiIsHidden}/>
            <InfoDescription isHidden= {AorusApiIsHidden}>
              {language === "ES" 
              ?<StyledP>
                AorusAPI es un proyecto back-end realizado con typescript, el cual es utilizado en AorusPage para la creación, logueo, autentificaión de usuarios y creación de órdenes por medio de una Base de Datos creada en Mongo. 
            Se utilizaron librerías tales como Cors, bcryptjs, express, express-validator, jsonwebtoken, entre otras.
              </StyledP>
              : <StyledP>
                AorusAPI is a back-end project made with typescript, which is used in AorusPage for the creation, logging, user authentication and creation of orders through a Database created in Mongo.
            Libraries such as Cors, bcryptjs, express, express-validator, jsonwebtoken, among others, were used.
              </StyledP>
              }
              
              <IconsWrapper>
                <StyledLink href='https://documenter.getpostman.com/view/30895857/2sA2rAz2nC' target='_blank'>Postman Doc.<StyledIcon src={PostmanIcon} alt="" /></StyledLink>
                <StyledLink href='https://github.com/Facundo-Mychaliczka/ApiBack' target='_blank'>Code<StyledIcon src={GithubIcon} alt="" /></StyledLink>
              </IconsWrapper>
            </InfoDescription>
        </ProyectBox>
      </ProyectsContainer>
      </PortfolioDivPrueba>
    </PortFolioWrapper>
  )
}

export default Portfolio