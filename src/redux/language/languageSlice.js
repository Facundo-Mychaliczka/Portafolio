import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const INITIAL_STATE = {
	menuHidden: true,
	smallMenuHidden: true,
	blurHidden: true,
	messageModalHidden: true,
	language: "ES",
};

const blurFunction = (state, action) => {
	const { click } = action.payload;

	if (click === "smallMenu") {
		if (state.smallMenuHidden === true && state.blurHidden === true && state.menuHidden === true) {
			return false;
		} else if (state.menuHidden === false) {
			return false;
		} else if (state.smallMenuHidden === false) {
			return true;
		}
	} else if (click === "menuLanguages") {
		if (state.smallMenuHidden === true && state.blurHidden === true && state.menuHidden === true) {
			return false;
		} else if (state.smallMenuHidden === false) {
			return false;
		} else if (state.menuHidden === false) {
			return true;
		}
	}
};

const languageSlice = createSlice({
	name: "language",
	initialState: INITIAL_STATE,
	reducers: {
		setLanguageToEN: (state) => {
			return {
				...state,
				language: "EN",
				menuHidden: true,
				blurHidden: true,
			};
		},
		setLanguageToES: (state) => {
			return {
				...state,
				language: "ES",
				menuHidden: true,
				blurHidden: true,
			};
		},
		toggleHiddenMenu: (state, action) => {
			return {
				...state,
				menuHidden: !state.menuHidden,
				smallMenuHidden: true,
				blurHidden: blurFunction(state, action),
			};
		},
		toggleHiddenSmallMenu: (state, action) => {
			return {
				...state,
				smallMenuHidden: !state.smallMenuHidden,
				menuHidden: true,
				blurHidden: blurFunction(state, action),
			};
		},
		navigationTroughtMenu: (state) => {
			return {
				...state,
				smallMenuHidden: true,
				blurHidden: true,
			};
		},
		setHiddenBlur: (state) => {
			return {
				...state,
				blurHidden: true,
				menuHidden: true,
				smallMenuHidden: true,
			};
		},
		setMessageModalFalse: (state) => {
			return {
				...state,
				messageModalHidden: false,
			};
		},
		setMessageModalTrue: (state) => {
			return {
				...state,
				messageModalHidden: true,
			};
		},
	},
});

export const {
	setLanguageToEN,
	setLanguageToES,
	toggleHiddenMenu,
	toggleHiddenSmallMenu,
	navigationTroughtMenu,
	setMessageModalFalse,
	setMessageModalTrue,
	setHiddenBlur,
} = languageSlice.actions;

export default languageSlice.reducer;
