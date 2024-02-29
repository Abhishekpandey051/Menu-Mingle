import { configureStore } from "@reduxjs/toolkit";
import cartRducer from './cartSlice'

const appStore = configureStore({
    reducer: {
        cart:cartRducer,
    }
})
 


export default appStore;