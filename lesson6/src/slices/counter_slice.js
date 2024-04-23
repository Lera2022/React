import { createSlice } from "@reduxjs/toolkit";

// const counterSlice = createSlice({
//     name:'counter',
//     initialState:0,
// })

// const [isChecked, setChecked] = useState('')


const modalSlice = createSlice({
    name:'modal',
    initialState:false,
    reducers:{
        openModal:(state) => state = true,
        closeModal:(state) => state = false
    }
})

// action creators
export const {openModal, closeModal} = modalSlice.actions
// reducer
export const modalReducer = modalSlice.reducer
