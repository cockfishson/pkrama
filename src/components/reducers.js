import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart : (state,action) =>{
           state.cart.push({...action.payload})
        },
        removeFromCart:(state,action) =>{
            const removeFromCart = state.cart.filter((component) => component.name != action.payload.name);
            state.cart = removeFromCart;
        },
        clearTheCart:(state) =>{
            const clearTheCart = state.cart.filter((component) => component.name != null);
            state.cart = clearTheCart;
        }
    }
})

export const {addToCart,removeFromCart,clearTheCart} = cartSlice.actions;
export default cartSlice.reducer;