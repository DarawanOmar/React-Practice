import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './features/countSlice'

export const store = configureStore({
    reducer : {
        counter : counterSlice
    }
})