import styled from "styled-components";


export const StyledMenu = styled.div `
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    min-width: 200px;
    z-index: 2;
    position: fixed;
    background-color: var(--navBgColor);
    margin: 10px;
    padding: 10px;
    border-bottom-left-radius: 1rem;
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
    color: white;
    &:hover {
        color: black;
        transition: 0.25s;
    }
`

