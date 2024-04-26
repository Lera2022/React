({{{
        [fetchItems.rejected]:(state,action)=>{
            console.log('Ошибка');
        },
        [fetchItems.rejected]:(state,action)=>{
            console.log('Ошибка');
        },
        [fetchItems.rejected]:(state,action)=>{
            console.log('Ошибка');
        }
    }
})

export const itemsReducer = itemSlice.reducer
export const {testMiddleware} = itemSlice.actions


export const middlewareAlert = store => next => (action) => {
    if (action.type === 'items/testMiddleware' && action.payload !== "Бот месседж")
    {
        alert('middleware is worked')
        setTimeout(()=>{ store.dispatch(testMiddleware("Бот месседж"))}, 2000)
    }

    return next(action)
}