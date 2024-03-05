import React from 'react'
import { SkillDiv, SkillImg, SkillsWrapper, SkillsetTitle, SkillsetWrapper, StyledP } from './SkillsetStyles'
import { HRSecondary } from '../Hero/HeroStyles'
import HTMLlogo from "../../../../public/HTMLlogo.svg"
import CSSLogo from "../../../../public/CSSLogo.png"
import JSLogo from "../../../../public/JSLogo.svg"
import ReactLogo from "../../../../public/ReactLogo.png"
import GitLogo from "../../../../public/GitLogo.png"
import NodeJsLogo from "../../../../public/NodeJsLogo.png"
import TsLogo from "../../../../public/TsLogo.png"
import VsCodeLogo from "../../../../public/VsCodeLogo.png"
import { useSelector } from 'react-redux'



const Skillset = () => {

  const language = useSelector((state) => state.language.language)

  return (
    <SkillsetWrapper id='Skillset'>
        <SkillsetTitle>
            SKILLSET
            <HRSecondary/>
        </SkillsetTitle>
        <SkillsWrapper>
            <SkillDiv>
              <StyledP>HTML</StyledP>
              <SkillImg src={HTMLlogo} alt="" />
              </SkillDiv>
            <SkillDiv>
              <StyledP>CSS</StyledP>
              <SkillImg src={CSSLogo} alt="" />
              </SkillDiv>
            <SkillDiv>
              <StyledP>JS</StyledP>
              <SkillImg src={JSLogo} alt="" />
            </SkillDiv>
            <SkillDiv>
              <StyledP>REACT</StyledP>
              <SkillImg src={ReactLogo} alt="" />
            </SkillDiv>
            <SkillDiv>
              <StyledP>GIT</StyledP>
              <SkillImg src={GitLogo} alt="" />
            </SkillDiv>
            <SkillDiv>
              <StyledP>NODE JS</StyledP>
              <SkillImg src={NodeJsLogo} alt="" />
            </SkillDiv>
            <SkillDiv>
              <StyledP>TYPESCRIPT</StyledP>
              <SkillImg src={TsLogo} alt="" />
            </SkillDiv>
            <SkillDiv>
              <StyledP>{language == "ES" ? "LIBRERÍAS" : "LIBRARIES"}</StyledP>
              <SkillImg src={VsCodeLogo} alt="" />
            </SkillDiv>

        </SkillsWrapper>
    </SkillsetWrapper>
  )
}

export default Skillset