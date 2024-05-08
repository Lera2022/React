import {createSlice} from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name:'users',
    initialState:[],
    reducers:{
        fetchUsers:(state, action) => [...action.payload],
        addUser:(state,action) => [...state,{...action.payload}]
    }
})

export const {fetchUsers,addUser} = usersSlice.actions
export const userReducer = usersSlice.reducer