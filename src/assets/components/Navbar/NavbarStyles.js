import styled from "styled-components";

export const NavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
    background-color: #00B5CD;
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
    :hover {
        color: white;
        transition: 0.25s;
    }
    transition: 0.25s;
`
export const NavbarName = styled.p `
    font-size: 15px;
    text-align: center;
    background-color: transparent;
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
    &:hover {
        scale: 1.1;
        transition: 0.25s;
    }
`

export const MenuBtn = styled.p `
    background-color: transparent;
    cursor: pointer;
    padding: 3px;
    border-radius: 1rem;
    transition: 0.5s;
    &:hover {
        background-color: #EBEBEB;
        transition: 0.5s;
    }
`
