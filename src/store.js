import {configureStore} from '@reduxjs/toolkit';
import wlReducer from './slices/wishList'
import scReducer from './slices/shopCart'
import spReducer from './slices/shopPrices'
export const store= configureStore({
    reducer:{
        wishlist:wlReducer,
        shopcart:scReducer,
        shopprice:spReducer
    }
})