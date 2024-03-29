import React from 'react'
import { BR, LanguageBtn, MenuBtn, NavProfile, NavWrapper, NavbarName, NavbarUl, StyledNavbarLi, StyledSPan } from './NavbarStyles'
import MenuNav from './MenuNav/MenuNav'
import { useDispatch, useSelector } from 'react-redux'
import { toggleHiddenMenu, toggleHiddenSmallMenu } from '../../../redux/language/languageSlice'
import MenuIcon from "../../../../public/MenuIcon.png"
import RightArrow from "../../../../public/RightArrow.png"
import MenuSmall from './MenuSmall/MenuSmall'

const Navbar = () => {

  const dispatch = useDispatch()
  const language = useSelector((state) => state.language.language)
  const isHiddenSmallMenu = useSelector((state) => state.language.smallMenuHidden)

  return (
    <NavWrapper>
        <NavProfile>
            <NavbarName>Facundo Mychaliczka <BR/> <StyledSPan>|</StyledSPan> {language === "ES" ? "Desarrollador Web Full-Stack" : "Full-Stack Web Developer" }</NavbarName>
        </NavProfile>
        <NavbarUl>
          <StyledNavbarLi href='#hero'>{language === "ES" ? "Inicio" : "Home"}</StyledNavbarLi>
          <StyledNavbarLi href='#AboutMe'>{language === "ES" ? "Sobre mí" : "About me"}</StyledNavbarLi>
          <StyledNavbarLi href='#Skillset'>{language === "ES" ? "Conocimientos" : "Skillset"}</StyledNavbarLi>
          <StyledNavbarLi href='#Portfolio'>{language === "ES" ? "Portafolio" : "Portfolio"}</StyledNavbarLi>
          <StyledNavbarLi href='#ContactMe'>{language === "ES" ? "Contacto" : "Contact"}</StyledNavbarLi>
          <LanguageBtn onClick={() => dispatch(toggleHiddenMenu({click:"menuLanguages"}))}>{language === "ES" ? "Idioma": "Language"}</LanguageBtn>
          <MenuBtn onClick={() => dispatch(toggleHiddenSmallMenu({click:"smallMenu"}))} src={isHiddenSmallMenu === true ? MenuIcon : RightArrow} />
        </NavbarUl>
        <MenuSmall/>
        <MenuNav/>
    </NavWrapper>
  )
}

export default Navbar