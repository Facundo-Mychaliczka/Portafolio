import { combineReducers, configureStore } from "@reduxjs/toolkit";
import languageReducers from "./language/languageSlice"
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import projectReducers from "./projectsPortfolio/projectsPortfolioSlice"


const reducers = combineReducers({
    language: languageReducers,
    projects: projectReducers
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: [""]
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    })
})

export const persistor = persistStore(store)