import { Form } from "formik";
import styled from "styled-components";
import { StyledIcon } from "../Portfolio/PortfolioStyles";


export const ContactWrapper = styled.div `
    display: flex;
    flex-direction: column;
    background-color: black;
    width: 100%;
    gap: 20px;
    padding: 10px;
`

export const ContactTitle = styled.h3 `
    font-size: 40px;
    background-color: transparent;
    color: #00B5CD;
`

export const StyledContactForm = styled(Form) `
    display: flex;
    flex-direction: column;
    background-color: transparent;
    gap: 50px;
`

export const ContactSubmitButton = styled.button `
    color: #EBEBEB;
    background-color: #F26419;
    padding: 10px;
    border-radius: 1rem;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        scale: 1.1;
        transition: 0.5s;
    }
`

export const StyledIconContact = styled(StyledIcon) `
    padding: 3px;
    width: 40px;
    height: 40px;
`
export const LinkedinStyledIcon = styled(StyledIcon) `
    width: 40px;
    height: 40px;
    border-radius: 1rem;
    &:hover {
        background-color: #0A66C2;
    }
` 

export const VercelIconContact = styled(StyledIcon) `
    width: 40px;
    height: 40px;
    padding: 0px;
`

export const IconsWrapper = styled.div `
    display: flex;
    flex-direction: row;
    background-color: transparent;
    gap: 20px;
`