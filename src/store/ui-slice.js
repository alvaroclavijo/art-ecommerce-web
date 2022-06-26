import { createSlice } from "@reduxjs/toolkit";

const initialState = { isCartVisible: false };

const uiSlice = createSlice({
    name:'ui',
    initialState: initialState,
    reducers: {
        toggle(state) {
            state.isCartVisible = !state.isCartVisible;
        },
        showCart(state){
            state.isCartVisible = true;
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;

