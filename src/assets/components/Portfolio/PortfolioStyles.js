import styled, { keyframes } from "styled-components";


export const PortFolioWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 100px;
    min-height: calc(100vh - 50px);
    margin: 100px;
`

export const PortfolioTitle = styled.h2 `
    font-size: 30px;
    color: #5C5C5C;
`

export const ProyectsContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 10px;
`

export const ProyectBox = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* gap: 20px; */
    /* position: relative; */
    width: 60%;
`


export const StyledImg = styled.img `
    cursor: pointer;
    width: 600px;
    height: 300px;
    border-radius: 2rem;
    border: grey solid;
    transition: 0.5s;
    /* position: relative; */
    z-index: 1; 
    filter: ${({isHidden}) => isHidden ? "blur(1px) grayScale(1)" : "none"};
    /* SACAR OPACITY */
      /* opacity: 0.5;   */
`

export const InfoDescription = styled.div `
    background-color: gray;
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    border-radius: 2rem;
    padding: 10px;
    width: ${({isHidden}) => isHidden ? "80%": "100%"};
    margin-top: ${({isHidden}) => isHidden ? "-250px": "5px"};

`

export const StyledP = styled.p `
    background-color: transparent;
    
`

export const IconsWrapper = styled.div `
    display: flex;
    flex-direction: row;
    gap: 10px;
    background-color: transparent;
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


