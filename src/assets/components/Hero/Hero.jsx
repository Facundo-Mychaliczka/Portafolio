import React from 'react'
import { HR, HRSecondary, HeroStyled, StyledH1, StyledH3, StyledImg } from './HeroStyles'
import { useSelector } from 'react-redux'


const Hero = () => {

  const language = useSelector((state) => state.language.language)

  return (
    <HeroStyled id="hero">
      <StyledImg src='LogoImg.png'/>
      <StyledH1>Facundo Mychaliczka</StyledH1>
      <HR/>
      {
        language === "ES"
        ? <StyledH3>Desarrollador Web Full-Stack</StyledH3>
        : <StyledH3>Full-Stack Web Developer</StyledH3>
      }
    </HeroStyled>
  )
}

export default Hero