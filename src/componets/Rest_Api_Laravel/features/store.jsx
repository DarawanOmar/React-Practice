import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from './Dark-Mode/DarkModeSlice'

export const store = configureStore({
    reducer: {
        dark : darkModeSlice,
    }
})