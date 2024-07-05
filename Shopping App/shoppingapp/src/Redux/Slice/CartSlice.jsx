import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name : "cart",
    initialState:[],
    reducers:{
        Add(){
setSelected(true)
        },
        Remove(){

        }
    }
})

export const  {Add,Remove} = CartSlice.actions;
export default CartSlice.reducer;