import styled from "styled-components";


export const AboutMeWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: calc(100vh - 50px);
    width: 100%;
`

export const AboutMeTitle = styled.h3 `
    background-color: transparent;
    color: black;
    font-size: 50px;
`

export const AboutMeContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: transparent;
    margin: 30px;
`

export const AboutMeImgContainer = styled.div `
    background-color: transparent;
    width: 40%;
`

export const AboutMeImg = styled.img `
    width: 50%;
    background-color: transparent;
`
export const AboutMeDescriptionContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 60%;
    font-size: 20px;
    text-align: justify;
    gap: 20px;
`
export const AboutMeDescription = styled.p `
    text-align: justify;
    font-size: 20px;
    @media (min-width: 1400px) {
        font-size: 30px;
    }
    @media (max-width: 880px) {
        text-align: left;
    }
`

export const DownloadBtn = styled.a `
    background-color: green;
    padding: 15px;
    border-radius: 2rem;
    transition: 0.5s;
    &:hover {
        scale: 1.1;
    }
`