import { configureStore, createReducer } from "@reduxjs/toolkit";
import CartReducer from "./reducers"

export default configureStore({
    reducer:{
        cart:CartReducer 
    }
})