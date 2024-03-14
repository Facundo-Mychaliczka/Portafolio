import styled from "styled-components";
import { StyledLinkPortfolio } from "../Portfolio/PortfolioStyles";

export const FooterStyled = styled.footer `
    width: 100%;
    background-color: #2C2D2D;
    color: #EBEBEB;
    padding: 20px;
    font-size: 14px;
`

export const FooterContainer = styled.div `
    display: flex;
    flex-direction: column;
    background-color: transparent;
    color: #EBEBEB;
    padding: 20px;
    font-size: 14px;
`

export const StyledLinkFooter = styled(StyledLinkPortfolio) `
    background-color: transparent;
    padding: 10px;
`