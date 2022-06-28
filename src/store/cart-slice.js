import { createSlice } from '@reduxjs/toolkit';

const cartProductsInitialState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
};

const shoppingCartSlice = createSlice({
    name:'cart',
    initialState: cartProductsInitialState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.product_id === newItem.product_id);
            state.totalQuantity++
            if(!existingItem){
                state.items.push({
                    ...newItem,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }else{
                existingItem.quantity++
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        reduceItemQuantity(state, action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.product_id === id);
            state.totalQuantity--;
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.product_id !== existingItem.product_id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
        deleteItem(state,action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.product_id === id);
            state.items = state.items.filter(item => item.product_id !== existingItem.product_id);
            state.totalQuantity = state.totalQuantity - existingItem.quantity;
        },
        removeAllItems(state){
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        }
    }
});

export const cartActions = shoppingCartSlice.actions;

export default shoppingCartSlice;