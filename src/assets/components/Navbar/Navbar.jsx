import React from 'react'
import { NavProfile, NavWrapper, NavbarName } from './NavbarStyles'

const Navbar = () => {
  return (
    <NavWrapper>
        <NavProfile>
            <NavbarName>Facundo Mychaliczka | Desarrollador Web Full-Stack</NavbarName>
        </NavProfile>
        <p>☰</p>
    </NavWrapper>
  )
}

export default Navbar