import { createSlice } from "@reduxjs/toolkit"

const appLoadingSlice = createSlice({
    name: 'appLoading',
    initialState: false,
    reducers: {
        setAppLoading: (state, action) => state = true,
        unsetAppLoading: (state, action) => state = false
    }
})

const errorOnLoadingSlice = createSlice({
    name: 'errLoading',
    initialState: false,
    reducers: {
        setError: (state, action) => state = true,
        unsetError: (state, action) => state = false
    }
})

export const {setAppLoading, unsetAppLoading} = appLoadingSlice.actions
export const appLoadingRedicer = appLoadingSlice.reducer

export const {setError, unsetError} = errorOnLoadingSlice.actions
export const errorLoadingReducer = errorOnLoadingSlice.reducer