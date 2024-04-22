import { useDispatch, useSelector } from "react-redux"


// const toggleAc = (value) => ({
//     type:'SWITCH_TOGGLE',
//     payload: value
// })

// STORE <= state = {
//     USER,
//     ADMIN,
//     MODAL,
//     DATA,
// }

const Toggler = () =>{
    //Редакс
    // const isChecked = useSelector(state => state.user.name)
    const isChecked = useSelector(state => state.user)
    const dispatch = useDispatch()

    // console.log(window.state)
    // console.log(isChecked)
    return(
        <>
            <input type='checkbox' value={isChecked} onChange = {()=>{
                // dispatch({type:'SWITCH_TOGGLE',payload:['title']})
                dispatch({type:'SWITCH_TOGGLE'})
                // dispatch(toggleAc("someVal"))
            }}/>
        </>
    )
}

export default Toggler