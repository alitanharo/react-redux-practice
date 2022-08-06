import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import posts from "../reducer/posts";


 export const getAsyncPost = createAsyncThunk("posts/getAsyncPost ", async(payload, {rejectWithValue})=>{


    try {
        
        const  res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()
        return data


    }catch(err){

       return  rejectWithValue(err.message)

    }

})






const initialState = {
    loading:false,
    posts:[],
    error:null

}


const postSlice = createSlice({
    name:posts,
    initialState,
    extraReducers:{
        [getAsyncPost.fulfilled]:(state,action)=>{

return {...state, posts:action.payload, loading:false, error:null}

        } 
        ,
        [getAsyncPost.pending]:(state, action)=>{

            return { ...state, posts: [], loading: true, error: null }
            


        },
        [getAsyncPost.rejected]: (state, action) => {

            return { ...state, posts: [], loading: false, error: action.payload }


        }


    }
})


export default postSlice.reducer