import { createSlice, createAsyncThunk, applyMiddleware } from "@reduxjs/toolkit";


export const fetchItems = createAsyncThunk(
    'fetchItems',
    async function(_,thunkApi){
        // try {
            
        // } catch (error) {
            
        // }
        console.log(thunkApi);
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
        err:false,
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
            console.log('State.loading' + state.loading)
            state.loading = true
        })
        builder.addCase(fetchItems.fulfilled, (state,action)=>{
            console.log(action.payload)
            console.log('State.loading' + state.loading)
            state.users = action.payload
            state.loading = false
        })
        builder.addCase(fetchItems.rejected, (state,action)=>{
            console.log('Ошибка');
            console.log('State.err' + state.err)
            state.err = true
            state.loading = false
        })
    }
})

export const itemsReducer = itemSlice.reducer
export const {testMiddleware,getPosts} = itemSlice.actions


export const middlewareAlert = store => next => (action) => {               // базовый свой middleware
    if (action.type === 'items/testMiddleware' && action.payload !== "Бот месседж")
    {
        alert('middleware is worked')
        setTimeout(()=>{ store.dispatch(testMiddleware("Бот месседж"))}, 2000)
    }

    return next(action)
}