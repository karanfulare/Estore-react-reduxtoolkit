import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productSlice";

const store = configureStore({
    reducer:{
        myproduct:productSlice
    }
})

export default store;

