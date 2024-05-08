import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


export const fetchPostsThunk = createAsyncThunk(
    'fetchPosts',
    async function(){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = response.json()
        return data
    }
)

const postsSlice = createSlice({
    name:'users',
    initialState:{
        posts:[],
        loading:false,
        err:null
    },
    reducers:{

    },
    extraReducers:{
        [fetchPostsThunk.pending]:(state,action) => {
            state.loading = true
            state.err = null
        },
        [fetchPostsThunk.fulfilled]:(state,action)=>{
            state.posts = [...action.payload]
            state.loading = false
            state.err = null
        },
        [fetchPostsThunk.rejected]:(state,action)=>{
            state.err = true
        }
    }
})

export const {} = postsSlice.actions
export const postsReducer = postsSlice.reducer