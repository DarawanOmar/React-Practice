import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from "date-fns";
const initialState=[
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things.",
        date : sub(new Date(),{minutes : 10}).toISOString()
    },
    {
        id: '2',
        title: 'Slices That is A Good',
        content: "The more I say slice, the more I want pizza.",
        date : sub(new Date(),{minutes : 5}).toISOString()

    },
]

export const postSlice = createSlice({
    name : 'posts',
    initialState,
    reducers: {
        addPost : {
            reducer : (state,action)=>{
            state.push(action.payload)
            },
            prepare(title,content,userId){
                return{
                    payload : {
                        id : nanoid(),
                        title,
                        content,
                        date : new Date().toISOString(),
                        userId
                    }
                }
            }
        }
    }
})

export const {addPost} = postSlice.actions;
export const selectAllPosts = (store)=> store.posts
export default postSlice.reducer;