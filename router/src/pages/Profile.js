import { useDispatch, useSelector } from "react-redux"

const ProfilePage = () =>{
    const isChecked = useSelector(state => state.user)
    const dispatch = useDispatch()
    return (
        <>
            <input type='checkbox' value={isChecked} onChange = {()=>{
                dispatch({type:'SWITCH_TOGGLE'})
            }}/>
        </>
    )
}

export default ProfilePage