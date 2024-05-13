export const toggleReducer = (state = false,action) => {
    switch(action.type){
        case'SWITCH_TOGGLE':
            console.log(action)
            console.log(state)
            return !state
            // return !state.push(action.payload)

        default:return state
    }
}