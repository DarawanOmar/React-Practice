import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDark: true,
}
const darkModeSlice = createSlice({
    name : 'darkMode',
    initialState,
    reducers : {
        dark : (state) => {
            state.isDark=true;
        },
        light : (state) => {
            state.isDark=false;
        }
    }
    
})


export const {dark , light} = darkModeSlice.actions;

export default darkModeSlice.reducer;
