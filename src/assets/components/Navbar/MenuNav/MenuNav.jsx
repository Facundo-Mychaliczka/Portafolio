import React from 'react'
import { StyledLanguageText, StyledMenu } from './MenuNavStyles'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguageToEN, setLanguageToES } from '../../../../redux/language/languageSlice'

const MenuNav = () => {

    const isHiddenMenu = useSelector((state) => state.language.menuHidden)
    const language = useSelector((state) => state.language.language)

    const dispatch = useDispatch()

  return (
    <StyledMenu hidden= {isHiddenMenu}>
        <StyledLanguageText onClick={() => dispatch(setLanguageToES())}>{language === "ES" ? "Español": "Spanish"}</StyledLanguageText>
        <StyledLanguageText onClick={() => dispatch(setLanguageToEN())}>{language === "ES" ? "Inglés": "English"}</StyledLanguageText>
    </StyledMenu>
  )
}

export default MenuNav