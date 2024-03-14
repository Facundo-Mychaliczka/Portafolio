import styled from "styled-components";


export const AboutMeWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: calc(100vh - 50px);
    width: 100%;
    background-color: var(--aboutMeBgColor);
`

export const AboutMeTitle = styled.h3 `
    background-color: transparent;
    color: whitesmoke;
    font-size: 50px;
`

export const AboutMeContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: transparent;
    margin: 30px;
    height: 100%;
    @media (max-width: 700px) {
         align-items: flex-start; 
         flex-direction: column; 
         gap: 20px; 
        width: 100%;
    }
`

export const AboutMeImgContainer = styled.div `
    display: flex;
    background-color: transparent;
    width: 40%;
    height: 100%;
    justify-content: center;
    @media (max-width: 700px) {
         width: 100%; 
    } 
`

export const AboutMeImg = styled.img `
    width: 70%;
    border-radius: 1rem;
    background-color: transparent;
    align-items: center;
    justify-content: center;
     @media (max-width: 700px) {
        width: 40%;
    } 
`
export const AboutMeDescriptionContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 60%;
    font-size: 20px;
    text-align: justify;
    gap: 20px;
    background-color: transparent;
    @media (max-width: 700px) {
         width: 100%; 
    } 
`
export const AboutMeDescription = styled.p `
    text-align: justify;
    color: whitesmoke;
    font-size: 20px;
    background-color: transparent;
    @media (min-width: 1400px) {
        font-size: 30px;
    }
    @media (max-width: 800px) {
        text-align: left;
        font-size: 15px;
    }
    @media (max-width: 700px) {
         text-align: center;
    } 
`

export const DownloadBtn = styled.a `
    background-color: var(--aboutMeBtnColor);
    color: whitesmoke;
    padding: 15px;
    border-radius: 2rem;
    transition: 0.5s;
    &:hover {
        scale: 1.1;
    }
`