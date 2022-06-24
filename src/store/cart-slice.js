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
            const existingItem = state.items.find(item => item.id === newItem.id);
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
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== existingItem.id)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
        removeAllItems(state){
            state.items = [];
        }
    }
});

export const cartActions = shoppingCartSlice.actions;

export default shoppingCartSlice;