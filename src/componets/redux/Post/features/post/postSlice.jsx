import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState=[
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things.",
    },
    {
        id: '2',
        title: 'Slices That is A Good',
        content: "The more I say slice, the more I want pizza.",
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
                    id: nanoid(),
                    title,
                    content,
                    userId
                }
            }
        }
    },
        
    }
})

export const {addPost} = postSlice.actions;
export default postSlice.reducer;
export const selectAllPost = (state)=> state.posts