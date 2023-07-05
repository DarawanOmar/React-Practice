import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { cartItems } from "../../cartItems";
import axios from "axios";
import { openModal } from "../modal/modalSlice";
const initialState = {
    cartItems : [],
    amount : 0,
    total : 0,
    isLoading : true,
}

const url = 'https://course-api.com/react-useReducer-cart-project';

export const getCartItems = createAsyncThunk("cart/getItemCarts",
    async (_,thinkAPI)=> {
        try {
            const res = await axios(url)
            return res.data;
        } catch (error) {
            return thinkAPI.rejectWithValue(" Some Thihg Went Wrong!..")
        }
})

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
        calculateTotal : (state) => {
            let amount = 0 ;
            let total = 0;
            state.cartItems.forEach((item)=>{
                amount += item.amount    // amount = amount  + item.amount
                total += item.amount * item.price  // total = total + item.amount * item.price 
            })

            state.amount = amount
            state.total = total

        }
    },
    extraReducers : {

        [getCartItems.pending] : (state)=>{
            state.isLoading = true;
        },
        [getCartItems.fulfilled] : (state ,action)=>{
            state.isLoading = false;
            state.cartItems = action.payload
        },
        [getCartItems.rejected] : (state )=>{
            state.isLoading = false;
        },
        
    }   
})
// console.log(cartSlice);

export const {clearCart , removeItem , increase , decrease ,calculateTotal} = cartSlice.actions
export default cartSlice.reducer;