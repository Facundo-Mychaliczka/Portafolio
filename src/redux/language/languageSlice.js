import { createSlice } from "@reduxjs/toolkit"


const INITIAL_STATE = {
    menuHidden: true,
    language: "ES"
}

const languageSlice = createSlice({
    name: "language",
    initialState: INITIAL_STATE,
    reducers: {
        setLanguageToEN: (state) => {
            return {
                ...state,
                language: "EN"
            }
        },
        setLanguageToES: (state) => {
            return {
                ...state,
                language: "ES"
            } 
        },
        toggleHiddenMenu: (state) => {
            return {
                ...state,
                menuHidden: !state.menuHidden
            }
        }
    }
})

export const {
    setLanguageToEN,
    setLanguageToES,
    toggleHiddenMenu
} = languageSlice.actions;

export default languageSlice.reducer;