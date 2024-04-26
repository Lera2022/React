import {configureStore} from '@reduxjs/toolkit'
import {createStore} from 'redux'
import { chatReducer} from '../slices/slices'
import { modalReducer } from '../slices/counter_slice'
//toolkit

// Toolkit
// export const store = configureStore({
//     reducer:{
//         chats:chatReducer,
//         modal:modalReducer
//     }
// },window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())      это можно не писать с тулкитом
export const store = configureStore({
    reducer:{
        chats:chatReducer,
        modal:modalReducer
    }
})

// combineReducers({        не нужно делать отдельно
//     chats: chatReducer,
//     profile: profileReducer,
//     messages: messagesReducer,

// })
// export const store = createStore(combineReducers)
// export const store = createStore(chatReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())