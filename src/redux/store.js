import { combineReducers, configureStore } from "@reduxjs/toolkit";
import languageReducers from "./language/languageSlice"
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";


const reducers = combineReducers({
    language: languageReducers
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["language"]
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    })
})

export const persistor = persistStore(store)