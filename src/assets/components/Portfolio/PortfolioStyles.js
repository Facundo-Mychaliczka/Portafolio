import styled, { keyframes } from "styled-components";
import { HR } from "../Hero/HeroStyles";
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";


export const PortFolioWrapper = styled.div `
    min-height: calc(100vh -50px);
    width: 100%;
     /* padding-bottom: 20px;  */
    overflow-x: hidden;
    background-size: cover;
    content: calc(100vh);
`
export const PortfolioDivPrueba = styled.div `
    width: 100%;
    min-height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 100px;
    background-color: transparent;
    backdrop-filter: blur(5px);

`

export const PortfolioTitle = styled.h2 `
    font-size: 30px;
    color: white;
    background-color: transparent;
    backdrop-filter: blur(5px);
`
export const HRSecondary = styled(HR)`
    width: 100%;
`
export const ProyectsContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 0px 50px;
    width: 100%;
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`

export const ProyectBox = styled.div `
    color: white;
    display: flex;
    flex-direction: column;
    height: 100%;
    border: solid 2px var(--navBgColor); 
    border-radius: 1rem;
    padding: 10px;
    gap: 20px;
`

export const ProyectImageAnchor = styled.a `
    width: 100%;
`

export const ProyectImage = styled.img `
    cursor: pointer;
    transition: 0.5s;
    width: 60%;
    border-radius: 1rem;
    &:hover {
        filter: blur(1px);
        transform: translateY(-20px) translateX(20px);
    }
`
export const ProyectDescription = styled.p `
    color: white;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const ProyectP = styled.p `
    color: white;
    background-color: var(--aboutMeBgColor);
    padding: 15px 10px;
    border-radius: 1rem;
    @media (max-width: 500px) {
        font-size: 10px;
    }
`

export const TecnologiesPortfolio= styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const TecnologiesTitle = styled.h4 `
    color: white;
`

export const TecnlogiesImgContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const TecnologieImg = styled.img `
    width: 10%;
`

export const AccordionStyled = styled(Accordion) `
    display: flex;
    flex-direction: column;
    width: 100%;
    
`

export const AccordionItemStyled = styled(AccordionItem) `
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`

export const AccordionItemHeadingStyled = styled(AccordionItemHeading) `
    width: 100%;
    text-align: left;
`

export const AccordionItemButtonStyled = styled(AccordionItemButton) `
    cursor: pointer;
    color: black;
    transition: 0.25s;
    text-align: left;
    background-color: white;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    padding-top: 5px;
    padding-bottom: 5px;
    &:hover {
        background-color: gray;
        color: white;
    }
`

export const AccordionItemPanelStyled = styled(AccordionItemPanel) `
    background-color: var(--aboutMeBgColor);
    width: 100%;
    text-align: center;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding: 10px;
`
export const AccordionUl = styled.ul `
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const AccordionLi = styled.li `
    text-align: left;
    width: 100%;
    color: white;
`


export const IconsWrapper = styled.div `
    display: flex;
    flex-direction: row;
    gap: 10px;
    background-color: transparent;
`


export const StyledLinkPortfolio = styled.a `
    display: flex;
    flex-direction: column;
    background-color: var(--navBgColor);
    padding: 5px;
    border-radius: 1rem;
`
export const StyledIcon = styled.img `
    width: 30px;
    height: 30px;
    transition: 0.25s;
    border-radius: 1rem;
    &:hover {
        scale: 1.1;
        transition: 0.25s;
        background-color: #00B5CD;
    }
` 