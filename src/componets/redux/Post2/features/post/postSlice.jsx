import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from "date-fns";
const initialState=[
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things.",
        date : sub(new Date(),{minutes : 10}).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: '2',
        title: 'Slices That is A Good',
        content: "The more I say slice, the more I want pizza.",
        date : sub(new Date(),{minutes : 5}).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }

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
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
}
)

export const {addPost,reactionAdded} = postSlice.actions;
export const selectAllPosts = (store)=> store.posts
export default postSlice.reducer;
