import React from 'react'
import { LanguageBtn, MenuBtn, NavProfile, NavWrapper, NavbarName, NavbarUl, StyledNavbarLi } from './NavbarStyles'
import MenuNav from './MenuNav/MenuNav'
import { useDispatch, useSelector } from 'react-redux'
import { toggleHiddenMenu, toggleHiddenSmallMenu } from '../../../redux/language/languageSlice'
import MenuIcon from "../../../../public/MenuIcon.png"
import MenuSmall from './MenuSmall/MenuSmall'

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
          <LanguageBtn onClick={() => dispatch(toggleHiddenMenu({click:"menuLanguages"}))}>{language === "ES" ? "Idioma": "Language"}</LanguageBtn>
          <MenuBtn onClick={() => dispatch(toggleHiddenSmallMenu({click:"smallMenu"}))} src={MenuIcon}/>
        </NavbarUl>
        <MenuSmall/>
        <MenuNav/>
    </NavWrapper>
  )
}

export default Navbar