import React from 'react'
import { FooterStyled } from './FooterStyles'
import { StyledIcon, StyledLink } from '../Portfolio/PortfolioStyles'
import GithubIcon from "../../../../public/GithubIcon.png"

const Footer = () => {
  return (
    <FooterStyled>
        Desarrolado y diseñado por Facundo Mychaliczka.
         <br />
        También puedes encontrar el código de ésta página en: <StyledLink href='https://github.com/Facundo-Mychaliczka/Portafolio'><StyledIcon src={GithubIcon} alt="" /></StyledLink>
    </FooterStyled>
  )
}

export default Footer