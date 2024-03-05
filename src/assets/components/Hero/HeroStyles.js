import styled from "styled-components";


export const HeroStyled = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-top: 60px;
    width: 100%;
    min-height: 100vh;
    background-image: url("../../../../public/FondoHero.jpg");
    background-size: cover;
`

export const StyledImg = styled.img `
    border-radius: 6rem;
    height: 100%;
`

export const StyledH1 = styled.h1 `
    background-color: transparent;
    color: #FFD500;
    backdrop-filter: blur(10px);
    border-radius: 2rem;
    padding: 10px;
`

export const StyledH3 = styled.h3 `
    background-color: transparent;
    padding: 10px;
    border-radius: 2rem;
    color: #EBEBEB;
    backdrop-filter: blur(10px);
`

export const HR = styled.hr `
    background-image: linear-gradient(to right,transparent,#00B5CD,transparent);
    border: 0;
    height: 0.1rem;
    width: 100vw;
    max-width: 100%;
    margin-top: 5px;
    margin-bottom: 10px;
`

export const HRSecondary = styled(HR) `
    margin-top: 20px;
    margin-bottom: 20px;
`
