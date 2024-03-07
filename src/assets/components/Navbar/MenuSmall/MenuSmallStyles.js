import styled from "styled-components";
import { NavbarUl } from "../NavbarStyles";


export const SmallNavUL = styled(NavbarUl) `
    flex-direction: column;
`
export const SmallNavLi = styled.a `
    background-color: transparent;
    transition: 0.25s;
    color: white;
    &:hover {
        scale: 1.1;
        transition: 0.25s;
    }
`