import styled from "styled-components";

export const SkillsetWrapper = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* background: rgb(16,18,19);
    background: linear-gradient(180deg, rgba(16,18,19,1) 55%, rgba(35,114,156,1) 100%); */
    background: rgb(21,32,43);
    background: linear-gradient(180deg, rgba(21,32,43,1) 55%, rgba(35,114,156,1) 100%);
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
    @media ( max-width : 803px) {
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
    color: white;
`
