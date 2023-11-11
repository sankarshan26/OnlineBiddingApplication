import {configureStore } from "@reduxjs/toolkit" ;
import navbarReducer from "./navbarSlice";
import ProductDetailedViewSlice from "./ProductDetailedViewSlice";
const store = configureStore({
    reducer : {
        navbar : navbarReducer,
        productdetailedview : ProductDetailedViewSlice,

    }
})

export default store ;