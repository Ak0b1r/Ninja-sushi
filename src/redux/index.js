import { configureStore } from "@reduxjs/toolkit";
import basket from "./basket";
import favorite from "./favorite";
import filter from "./filter";

const store = configureStore({
    reducer:{
        basket,
        favorite,
        filter
    }
})

export default store