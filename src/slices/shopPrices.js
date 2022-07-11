import { createSlice } from "@reduxjs/toolkit";

export const shopPriceSlice=createSlice({
    name:'shopprice',
    initialState:[],
    reducers:{
        addSp:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const {addSp} = shopPriceSlice.actions;
export default shopPriceSlice.reducer;