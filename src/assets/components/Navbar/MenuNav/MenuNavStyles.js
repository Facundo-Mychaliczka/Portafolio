import styled from "styled-components";


export const StyledMenu = styled.div `
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    min-width: 200px;
    border-color: #EBEBEB;
    z-index: 2;
    position: fixed;
    background-color: #00B5CD;
    margin: 10px;
    padding: 10px;
    border-radius: 2rem;
    gap: 10px;
    /* --------- */
    top: 40px;
    right: -400px; 
    transform: ${({hidden}) => hidden ? "" : "translateX(-390px)"};
`

export const StyledLanguageText = styled.p `
    background-color: transparent;
    cursor: pointer;
    transition: 0.25s;
    &:hover {
        color: #EBEBEB;
        transition: 0.25s;
    }
`

