import {configureStore} from "@reduxjs/toolkit";
import categoryReducer from './categoty/categorySlice.js'
import productReducer from './product/productSlice.js'

export const store = configureStore({
    reducer: {
        categoryRedux: categoryReducer,
        productRedux: productReducer
    }
})
