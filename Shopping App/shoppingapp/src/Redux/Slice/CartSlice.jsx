import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        Add(state, actions) {
            state.push(actions.payload)
        },
        Remove(state, actions) {
           return state.filter((item) => item.id !== actions.payload)
        }
    }
})

export const { Add, Remove } = CartSlice.actions;
export default CartSlice.reducer;