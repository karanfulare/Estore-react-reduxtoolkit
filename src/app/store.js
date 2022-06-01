import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import productSlice from "../features/productSlice";

const store = configureStore({
    reducer:{
        myproduct:productSlice,
        cart:cartSlice
    }
})

export default store;

