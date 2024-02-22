import styled from "styled-components";


export const HeroStyled = styled.div `
    display: flex;
    flex-direction: column;
    padding-top: 60px;
    width: 100%;
`

export const StyledImg = styled.img `
    border-radius: 6rem;
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
