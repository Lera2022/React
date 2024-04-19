export const toggleReducer = (state = false,action) => {
    switch(action.type){
        case'SWITCH_TOGGLE':
            console.log(action)
            console.log(state)
            return !state

        default:return state
    }
}