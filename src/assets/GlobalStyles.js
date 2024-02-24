import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle `
    * {
        font-family: "Inconsolata";
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
        text-decoration: none;
        color: black;
        align-items: center;
        text-align: center;
        background-color: #EBEBEB;
    }
`
export const BlurDisplay = styled.div `
    position: fixed;
    background-color: transparent;
    top: 20px;
    height: 100vh;
    width: 100%;
    z-index: 1;
    backdrop-filter: blur(2px);
    display:${({hidden}) => hidden ? "none": "block"} ;
`

