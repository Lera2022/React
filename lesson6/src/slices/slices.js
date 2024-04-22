import { createSlice } from "@reduxjs/toolkit"

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
    initialState,
    reducers:{
        addChat:(state,action)=>{
            return [...state, action.payload]
        },
        removeChat:(state)=>{
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