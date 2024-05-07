import { createSlice } from "@reduxjs/toolkit";

const sagaSlice = createSlice({
    name:'saga',
    initialState:{},
    reducers:{
        fetchOnePost:(state,action) => state = action.payload
    }
})

export const {fetchOnePost} = sagaSlice.actions
export const sagaReducer = sagaSlice.reducer