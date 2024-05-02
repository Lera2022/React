import { createSlice, createAsyncThunk, applyMiddleware } from "@reduxjs/toolkit";


export const fetchItems = createAsyncThunk(
    'fetchItems',
    async function(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = response.json()
        // Промис
        console.log(data)
        return data
    }
)


const itemSlice = createSlice({
    name:'items',
    initialState:{
        users:[],
        err:null,
        loading:false
    },
    reducers:{
        testMiddleware:(state, action)=>{
            state.users.push(action.payload)
        },
        // getPosts:(state, action)=>{
        //     console.log(action.payload);
        //     state = action.payload
        // }
    },
    extraReducers:(builder) => {
        builder.addCase(fetchItems.pending, (state,action)=>{
            console.log('Идёт загрузка')
            state.loading = true
        })
        builder.addCase(fetchItems.fulfilled, (state,action)=>{
            console.log(action.payload)
            state.users = action.payload
            state.loading = false
        })
        builder.addCase(fetchItems.rejected, (state,action)=>{
            console.log('Ошибка');
            state.err = true
            state.loading = false
        })
    }
})

export const itemsReducer = itemSlice.reducer
export const {testMiddleware,getPosts} = itemSlice.actions


export const middlewareAlert = store => next => (action) => {
    if (action.type === 'items/testMiddleware' && action.payload !== "Бот месседж")
    {
        alert('middleware is worked')
        setTimeout(()=>{ store.dispatch(testMiddleware("Бот месседж"))}, 2000)
    }

    return next(action)
}