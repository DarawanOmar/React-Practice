import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id : "0" , name : "Darawan Omar"},
    {id : "1" , name : "Aso Salam"},
    {id : "2" , name : "Aryan Brhan"},
]

export const usersSlice = createSlice({
    name : "users",
    initialState,
    reducers: {

    },
})

export const selectAllUsers = (state)=> state.users
export default usersSlice.reducer