import { createSlice } from "@reduxjs/toolkit"


const INITIAL_STATE = {
    menuHidden: true,
    blurHidden: true,
    language: "ES"
}

const languageSlice = createSlice({
    name: "language",
    initialState: INITIAL_STATE,
    reducers: {
        setLanguageToEN: (state) => {
            return {
                ...state,
                language: "EN",
                menuHidden: true,
                blurHidden: true
            }
        },
        setLanguageToES: (state) => {
            return {
                ...state,
                language: "ES",
                menuHidden: true,
                blurHidden: true
            } 
        },
        toggleHiddenMenu: (state) => {
            return {
                ...state,
                menuHidden: !state.menuHidden,
                blurHidden: !state.blurHidden
            }
        },
        setHiddenBlur: (state) => {
            return {
                ...state,
                blurHidden: true,
                menuHidden: true
            }
        }
    }
})

export const {
    setLanguageToEN,
    setLanguageToES,
    toggleHiddenMenu,
    setHiddenBlur
} = languageSlice.actions;

export default languageSlice.reducer;