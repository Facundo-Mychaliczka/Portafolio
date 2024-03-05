import styled from "styled-components";

export const SkillsetWrapper = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #00B5CD;
    width: 100%;
    padding: 50px;
    min-height: calc(100vh - 50px);
`

export const SkillsetTitle = styled.h3 `
    width: 100%;
    background-color: transparent;
    color: white;
    font-size: 50px;
    display: flex;
    flex-direction: column;
`
export const SkillsWrapper = styled.div `
    width: 100%;
    display: grid;
    grid-gap: 7rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    background-color: transparent;
    margin: 1rem;
    @media screen and ( max-width : 557px) {
        grid-template-columns: 1fr 1fr;
    }
`

export const SkillDiv = styled.div `
    background-color: transparent;
`

export const SkillImg = styled.img `
    width: 100px;
    border-radius: 1rem;
    background-color: transparent;
`

export const StyledP = styled.p `
    background-color: transparent;
    margin-bottom: 10px;
`
