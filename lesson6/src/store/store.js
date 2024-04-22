import {configureStore} from '@reduxjs/toolkit'
import {createStore} from 'redux'
// import { chatReducer } from '../reducers/chats'

//toolkit
import { chatReducer} from '../slices/slices'
import { combineReducers } from "redux"

// Toolkit
export const store = configureStore({
    reducer:{
        chats:chatReducer,
    }
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// combineReducers({
//     chats: chatReducer,
//     profile: profileReducer,
//     messages: messagesReducer,

// })
// export const store = createStore(combineReducers)
// export const store = createStore(chatReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())