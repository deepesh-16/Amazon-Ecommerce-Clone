import { createSlice } from "@reduxjs/toolkit";

export const shopCartSlice=createSlice({
    name:'shopcart',
    initialState:[],
    reducers:{
        addSc:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const {addSc} = shopCartSlice.actions;
export default shopCartSlice.reducer;