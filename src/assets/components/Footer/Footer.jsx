import React from 'react'
import { FooterContainer, FooterStyled } from './FooterStyles'
import { StyledIcon, StyledLinkPortfolio } from '../Portfolio/PortfolioStyles'
import GithubIcon from "../../../../public/GithubIcon.png"
import { useSelector } from 'react-redux'

const Footer = () => {
  const language = useSelector((state) => state.language.language)

  return (
    <FooterStyled>
      {language === "ES"
      ?<FooterContainer>
            Desarrolado y diseñado por Facundo Mychaliczka.
            <br />
            También puedes encontrar el código de ésta página en: <StyledLinkPortfolio href='https://github.com/Facundo-Mychaliczka/Portafolio' target='_blank'><StyledIcon src={GithubIcon} alt="" /></StyledLinkPortfolio>
        </FooterContainer>
        : <FooterContainer>
        Developed and designed by Facundo Mychaliczka.
        <br />
        You can also find the code of this page at: <StyledLinkPortfolio href='https://github.com/Facundo-Mychaliczka/Portafolio' target='_blank'><StyledIcon src={GithubIcon} alt="" /></StyledLinkPortfolio>
    </FooterContainer>
      }
      
    
    </FooterStyled>
  )
}

export default Footer