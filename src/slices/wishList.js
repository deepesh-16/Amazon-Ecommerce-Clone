import { createSlice } from "@reduxjs/toolkit";

export const wishListSlice=createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addWl:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const {addWl} = wishListSlice.actions;
export default wishListSlice.reducer;