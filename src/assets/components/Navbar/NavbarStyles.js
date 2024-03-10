import styled from "styled-components";

export const NavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
    background-color: var(--navBgColor);
    justify-content: space-between;
    padding: 10px 20px 10px 20px;
    z-index: 2;
    position: fixed;
    text-align: center;
`
export const NavProfile = styled.div `
    display: flex;
    background-color: transparent;
    flex-direction: row;
    gap: 5px;
    align-items: end;
    cursor: pointer;
    padding: 10px;
    transition: 0.25s;
    :hover {
        scale: 1.05;
        transition: 0.25s;
    }
    
`
export const NavbarName = styled.p `
    font-size: 15px;
    text-align: center;
    background-color: transparent;
    color: white;
    transition: 0.25s;
`


export const NavbarUl = styled.ul `
    display: flex;
    flex-direction: row;
    gap: 20px;
    background-color: transparent;
`

export const StyledNavbarLi = styled.a `
    background-color: transparent;
    transition: 0.25s;
    color: white;
    &:hover {
        scale: 1.1;
        transition: 0.25s;
    }
    @media(max-width: 880px) {
        display: none;
    }
`

export const LanguageBtn = styled.p `
    background-color: transparent;
    cursor: pointer;
    padding: 3px;
    border-radius: 1rem;
    transition: 0.5s;
    color: white;
    &:hover {
        background-color: #EBEBEB;
        color: black;
        transition: 0.5s;
    }
`
export const MenuBtn = styled.img `
    cursor: pointer;
    width: 40px;
    background-color: transparent;
    transition: 0.25s;
    
    &:hover {
        scale: 1.1;
    }
    @media(min-width: 880px) {
        display: none;
    }
`