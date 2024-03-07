import React from 'react'
import { StyledMenu } from '../MenuNav/MenuNavStyles'
import { StyledNavbarLi } from '../NavbarStyles'
import { useDispatch, useSelector } from 'react-redux'
import { SmallNavLi, SmallNavUL } from './MenuSmallStyles'
import { navigationTroughtMenu } from '../../../../redux/language/languageSlice'

const MenuSmall = () => {
    const language = useSelector((state) => state.language.language)
    const isMenuSmallHidden = useSelector((state) => state.language.smallMenuHidden)
    const dispatch = useDispatch()
  return (
    <StyledMenu hidden={isMenuSmallHidden}>
        <SmallNavUL>
          <SmallNavLi onClick={() => dispatch(navigationTroughtMenu())} href='#hero'>{language === "ES" ? "Inicio" : "Home"}</SmallNavLi>
          <SmallNavLi onClick={() => dispatch(navigationTroughtMenu())} href='#AboutMe'>{language === "ES" ? "Sobre mí" : "About me"}</SmallNavLi>
          <SmallNavLi onClick={() => dispatch(navigationTroughtMenu())} href='#Skillset'>{language === "ES" ? "Conocimientos" : "Skillset"}</SmallNavLi>
          <SmallNavLi onClick={() => dispatch(navigationTroughtMenu())} href='#Portfolio'>{language === "ES" ? "Portafolio" : "Portfolio"}</SmallNavLi>
          <SmallNavLi onClick={() => dispatch(navigationTroughtMenu())} href='#ContactMe'>{language === "ES" ? "Contacto" : "Contact"}</SmallNavLi>
        </SmallNavUL>
    </StyledMenu>
  )
}

export default MenuSmall