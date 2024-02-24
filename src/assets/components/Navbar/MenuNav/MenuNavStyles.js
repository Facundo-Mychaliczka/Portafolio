import styled from "styled-components";


export const StyledMenu = styled.div `
    display: ${({hidden}) => hidden ? "none": "flex"};
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
    right: 0px;
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

