import { useState } from "react"
import { addChat, removeChat } from "../slices/slices"
import { useDispatch, useSelector } from "react-redux"
import Chat from "./chat"
//import { addChatAC, removeChatAC} from "../actions/chatsActions"

const Chats = () =>{
    // const chats = useSelector(state => state)
    //toolkit
    const chats = useSelector(state => state.chats)
    // const messages = useSelector(state => state.messages)
    const dispatch = useDispatch()

    const [currentChatId, setCurrentChatId] = useState(0)

    const newChat = {
        id:'chat5',
        title:'Новый юзер',
        messages:[]
    }

    const addChatHandler = () =>{
        // dispatch(addChatAC(newChat))
        dispatch(addChat(newChat))
    }
    const removeChatHandler = () => {
        // dispatch(removeChatAC())
        dispatch(removeChat())
    }
    return(
        <>
            <div style={{width:'30%', padding:'50px',background:'#f9f9f9'}}>
                {chats.map(({title},id) => <div className="chatItem" key = {id}
                    onClick={()=>{
                        setCurrentChatId(id)
                    }}
                >{title}</div>)}
                <button onClick={addChatHandler}>Добавить чат</button>
                <button onClick={removeChatHandler}>Удалить чат</button>
            </div>
            <div style={{width:'70%', padding:'50px'}}>
                <Chat id = {currentChatId} messages = {chats[currentChatId].messages}></Chat>
            </div>
        </>
    )
}
export default Chats