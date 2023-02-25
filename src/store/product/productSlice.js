import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_URL, POSTFIX} from "../../const";

const initialState = {
    productsList: [],
    error: ''
}

export const productRequestAsync = createAsyncThunk(
    'product/fetch',
    (category) => fetch(`${API_URL}${POSTFIX}?category=${category}`)
        .then(res => res.json())
        .catch(error => ({error}))
)

const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: {
        [productRequestAsync.pending.type]: (state) => {
            state.error = ''
        },
        [productRequestAsync.fulfilled.type]: (state, action) => {
            state.error = ''
            state.productsList = action.payload
        },
        [productRequestAsync.rejected.type]: (state, action) => {
            state.error = action.payload.error
        }
    }

})

export default productSlice.reducer;