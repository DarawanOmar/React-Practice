import { createSlice } from "@reduxjs/toolkit";
import { cartItems } from "../../cartItems";
const initialState = {
    cartItems : cartItems,
    amount : 4,
    total : 0,
    isLoading : true,
}
const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        clearCart : (state)=>{
            state.cartItems = [] 
            // return { cartItems : [] }
        },
        removeItem : (state,action) => {
            const itemID = action.payload
            state.cartItems = state.cartItems.filter((item)=>{
                return itemID !== item.id
            })
        },
        increase : (state,{payload})=>{
           const cardItem = state.cartItems.find((item)=> 
                item.id === payload.id
           )
           cardItem.amount = cardItem.amount + 1
        },
        decrease : (state,{payload})=>{
           const cardItem = state.cartItems.find((item)=> 
                item.id === payload.id
           )
           cardItem.amount = cardItem.amount - 1
        },
        calculateTotal : (state)=>{
            let total = 0;
            let amount = 0;
            state.cartItems.forEach((item)=>{
                amount += item.amount;
                total += item.amount * item.price 
            })
            state.amount = amount;
            state.total = total;
        }
    }
})
// console.log(cartSlice);

export const {clearCart , removeItem , increase , decrease ,calculateTotal} = cartSlice.actions
export default cartSlice.reducer;