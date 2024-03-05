import React from 'react'
import { MenuBtn, NavProfile, NavWrapper, NavbarName, NavbarUl, StyledNavbarLi } from './NavbarStyles'
import MenuNav from './MenuNav/MenuNav'
import { useDispatch, useSelector } from 'react-redux'
import { toggleHiddenMenu } from '../../../redux/language/languageSlice'

const Navbar = () => {

  const dispatch = useDispatch()
  const language = useSelector((state) => state.language.language)

  return (
    <NavWrapper>
        <NavProfile>
            <NavbarName>Facundo Mychaliczka | {language === "ES" ? "Desarrollador Web Full-Stack" : "Full-Stack Web Developer" }</NavbarName>
        </NavProfile>
        <NavbarUl>
          <StyledNavbarLi href='#hero'>{language === "ES" ? "Inicio" : "Home"}</StyledNavbarLi>
          <StyledNavbarLi href='#AboutMe'>{language === "ES" ? "Sobre mí" : "About me"}</StyledNavbarLi>
          <StyledNavbarLi href='#Skillset'>{language === "ES" ? "Conocimientos" : "Skillset"}</StyledNavbarLi>
          <StyledNavbarLi href='#Portfolio'>{language === "ES" ? "Portafolio" : "Portfolio"}</StyledNavbarLi>
          <StyledNavbarLi href='#ContactMe'>{language === "ES" ? "Contacto" : "Contact"}</StyledNavbarLi>
          <MenuBtn onClick={() => dispatch(toggleHiddenMenu())}>{language === "ES" ? "Idioma": "Language"}</MenuBtn>
        </NavbarUl>
        
        <MenuNav/>
    </NavWrapper>
  )
}

export default Navbar