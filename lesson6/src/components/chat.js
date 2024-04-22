import { useDispatch } from "react-redux"
import { addMessage } from "../slices/slices"

const Chat = ({id,messages}) =>{

    
    const dispatch = useDispatch()


    const PLACEHOLDER_MESSAGE = 'Новое сообщение'

    return(
        <div>
            {messages.map((e,id) =><div key={id}>{e}</div>)}
            <button onClick={()=>{
                dispatch(addMessage({id:id,data:PLACEHOLDER_MESSAGE}))
            }}>Отправить</button>
        </div>
    )
}

export default Chat