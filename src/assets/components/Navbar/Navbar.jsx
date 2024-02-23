import React from 'react'
import { MenuBtn, NavProfile, NavWrapper, NavbarName } from './NavbarStyles'
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
        <MenuBtn onClick={() => dispatch(toggleHiddenMenu())}>{language === "ES" ? "Idioma": "Language"}</MenuBtn>
        <MenuNav/>
    </NavWrapper>
  )
}

export default Navbar