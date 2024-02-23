import React from 'react'
import { MenuBtn, NavProfile, NavWrapper, NavbarName } from './NavbarStyles'
import MenuNav from './MenuNav/MenuNav'
import { useDispatch } from 'react-redux'
import { toggleHiddenMenu } from '../../../redux/language/languageSlice'

const Navbar = () => {

  const dispatch = useDispatch()

  return (
    <NavWrapper>
        <NavProfile>
            <NavbarName>Facundo Mychaliczka | Desarrollador Web Full-Stack</NavbarName>
        </NavProfile>
        <MenuBtn onClick={() => dispatch(toggleHiddenMenu())}>Idioma</MenuBtn>
        <MenuNav/>
    </NavWrapper>
  )
}

export default Navbar