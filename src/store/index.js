import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import shoppingCartSlice from "./cart-slice";

const store = configureStore({
    reducer: { ui: uiSlice.reducer, shoppingCart: shoppingCartSlice.reducer }
})

export default store;