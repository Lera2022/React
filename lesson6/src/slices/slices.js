import { createSlice } from "@reduxjs/toolkit"
import { useState } from "react"

const initialState = [
    {
        id:'chat1',
        title:'Алексей',
        messages:['сообщение1', 'сообщение2']
    },
    {
        id:'chat2',
        title:'Илья',
        messages:['сообщение1', 'сообщение2', 'сообщение2']
    },    
    {
        id:'chat2',
        title:'Соня',
        messages:[]
    },
]

const chatSlice = createSlice({
    name:'chats',
    initialState,   // можно здесь присвоить данные
    reducers:{
        addChat:(state,action)=>{
            return [...state, action.payload]       // можно написать return state = чему-то. здесь стейт можно мутировать
        },
        removeChat:(state,action)=>{
            console.log(action)
            return [...state.filter((e,i)=> i < state.length -1 )]
        },
        //Мутация
        addMessage:(state,action) =>{
            state[action.payload.id].messages.push(action.payload.data)
            return state
        }
    }
})



export const {addChat,removeChat,addMessage} = chatSlice.actions
export const chatReducer = chatSlice.reducer

// const selector = (state) => () => {}

// const [chats, setChats] = useState()