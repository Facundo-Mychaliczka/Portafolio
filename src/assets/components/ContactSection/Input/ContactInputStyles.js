import styled from "styled-components";


export const InputContactBox = styled.div `
    display: flex;
    flex-direction: column;
    background-color: transparent;
    gap: 10px;
`

export const InputContactLabel = styled.label `
    background-color: transparent;
    color: #00B5CD;
`

export const InputStyledContact = styled.input `
    background-color: #00B5CD;
    border: solid 1px;
    border-color: ${({isError}) => (isError ? "red" : "transparent")};
    width: 300px;
    border-radius: 10px;
`

export const ErrorMessageStyled= styled.p `
color: red;
border-radius: 5px;
padding: 2px;
`

export const TextAreaStyled = styled.textarea `
    border-color: ${({isError}) => (isError ? "red" : "transparent")};
    width: 300px;
    height: 200px;
    text-align: start;
    background-color: #00B5CD;
    resize: none;
    border-radius: 1rem;
    padding: 9px;
`