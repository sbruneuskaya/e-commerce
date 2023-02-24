import {configureStore} from "@reduxjs/toolkit";
import categoryReducer from './categoty/categorySlice.js'

export const store = configureStore({
    reducer: {
        categoryRedux: categoryReducer
    }
})

// reducer---считывает текущее состояние и возвращает новое состояние приложения