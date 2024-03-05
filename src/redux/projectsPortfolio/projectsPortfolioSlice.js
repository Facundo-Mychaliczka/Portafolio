import { createSlice } from "@reduxjs/toolkit"


const INITIAL_STATE_PROJECTS = {
    aorusPageHidden: true,
    aorusApiHidden: true
}

const projectSlice = createSlice({
    name: "projectsDisplay",
    initialState: INITIAL_STATE_PROJECTS,
    reducers: {
        toggleAorusPageHidden: (state) => {
            return {
                ...state,
                aorusPageHidden: !state.aorusPageHidden
            }
        },
        toggleAorusApiHidden : (state) => {
            return {
                ...state,
                aorusApiHidden: !state.aorusApiHidden
            }
        }
    }
})

export const {
    toggleAorusPageHidden,
    toggleAorusApiHidden
} = projectSlice.actions

export default projectSlice.reducer