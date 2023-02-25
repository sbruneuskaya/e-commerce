import {configureStore} from "@reduxjs/toolkit";
import categoryReducer from './categoty/categorySlice.js'
import productReducer from './product/productSlice.js'
import orderReducer, {LocalStorageMiddleware} from './order/orderSlice.js'

export const store = configureStore({
    reducer: {
        categoryRedux: categoryReducer,
        productRedux: productReducer,
        orderRedux: orderReducer
    },
    middleware: getDefaultMiddleware => {
        const localState = getDefaultMiddleware().concat(LocalStorageMiddleware)

        console.log(localState)

        return localState;
    }
})
