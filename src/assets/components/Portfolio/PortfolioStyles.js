import styled from "styled-components";


export const PortFolioWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    min-height: calc(100vh - 50px);
`

export const PortfolioTitle = styled.h2 `
    font-size: 30px;
    color: #5C5C5C;
`

export const ProyectBox = styled.div `
    display: flex;
    flex-direction: column;
    gap: 20px;
    & h3 {
        width: 80%;
    }
`

export const StyledSpan = styled.span `
    color: #004E89;
    border-bottom: #004E89 dotted 1px;
`

export const StyledImg = styled.img `
    width: 650px;
    height: 300px;
    border-radius: 2rem;
    border: grey solid;
    @media screen and ( max-width : 680px) {
        max-width: 90%;
        height: 70%;
    }
    
`

export const IconsWrapper = styled.div `
    display: flex;
    flex-direction: row;
    gap: 10px;
`

export const StyledLink = styled.a `
    display: flex;
    flex-direction: column;
    background-color: transparent;
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


