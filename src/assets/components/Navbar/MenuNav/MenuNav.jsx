import React from 'react'
import { StyledLanguageText, StyledMenu } from './MenuNavStyles'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguageToEN, setLanguageToES } from '../../../../redux/language/languageSlice'

const MenuNav = () => {

    const isHiddenMenu = useSelector((state) => state.language.menuHidden)

    const dispatch = useDispatch()

  return (
    <StyledMenu hidden= {isHiddenMenu}>
        <StyledLanguageText onClick={() => dispatch(setLanguageToES())}>Español</StyledLanguageText>
        <StyledLanguageText onClick={() => dispatch(setLanguageToEN())}>English</StyledLanguageText>
    </StyledMenu>
  )
}

export default MenuNav