import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, createStore, compose } from 'redux'
import { toggleReducer } from "./reducer";
import { userReducer } from "react";

const composeEchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// combineReducers = {
//     rootReducer,
//     toggleReducer
//     userReducer
// }

export const store = createStore(toggleReducer,composeEchancers(applyMiddleware()))