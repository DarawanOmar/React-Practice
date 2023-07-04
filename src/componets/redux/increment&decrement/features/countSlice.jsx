import { createSlice } from "@reduxjs/toolkit";

const initialState = { count : 0};

const counterSlice = createSlice({
    name : "count",
    initialState,
    reducers : {
        increment : (state)=>{
            state.count +=1 // state.count = state.count + 1
        },
        decrement : (state)=>{
            state.count -=1 // state.count = state.count - 1
        },
        reset : (state) => {
            state.count = 0 // state.count = 0
        },
        incrementByAmount : (state,action) => {
            state.count += action.payload; // state.count = state.count + ( awai la input dainewsit )
        }

    }
})

export const {increment , decrement , reset , incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;