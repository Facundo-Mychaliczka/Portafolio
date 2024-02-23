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
      <h3>Desarrollador Web Full-Stack</h3>
      <HRSecondary/>
      {
        language==="ES" 
        ?<p>Actualmente esta página está en Español.</p>
        :<p>Now this page is in English.</p>
      }
      
    </HeroStyled>
  )
}

export default Hero