import React from 'react'
import { HR, HRSecondary, HeroStyled, StyledImg } from './HeroStyles'
import { useSelector } from 'react-redux'


const Hero = () => {

  const language = useSelector((state) => state.language.language)

  return (
    <HeroStyled>
      <StyledImg src='LogoImg.png'/>
      <h1>Facundo Mychaliczka</h1>
      <HR/>
      {
        language === "ES"
        ? <h3>Desarrollador Web Full-Stack</h3>
        : <h3>Full-Stack Web Developer</h3>
      }
      <HRSecondary/>
    </HeroStyled>
  )
}

export default Hero