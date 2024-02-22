import React from 'react'
import { HR, HRSecondary, HeroStyled, StyledImg } from './HeroStyles'


const Hero = () => {
  return (
    <HeroStyled>
      <StyledImg src='LogoImg.png'/>
      <h1>Facundo Mychaliczka</h1>
      <HR/>
      <h3>Desarrollador Web Full-Stack</h3>
      <HRSecondary/>
    </HeroStyled>
  )
}

export default Hero