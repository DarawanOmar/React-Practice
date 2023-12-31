import { configureStore } from "@reduxjs/toolkit";
import postReducers from './features/post/postSlice'
import usersReducer from './features/users/usersSlice'
export const store = configureStore({
    reducer: {
        posts : postReducers,
        users : usersReducer
    }
})