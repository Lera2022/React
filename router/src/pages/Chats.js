import {useEffect, useState} from 'react'
import {Link, Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom"
import Chat from '../components/chat/Chat'
import Loader from '../components/loader/Loader'

const chatsPlaceholder = [
    {
        recipient:"Alex",
        messages:[
            {
                author:'Alex',
                text:'Привет',
                date: new Date().toLocaleTimeString()
            },
            {
                author:'You',
                text:'И тебе привет',
                date: new Date().toLocaleTimeString()
            },
        ]
    },
    {
        recipient:"Jessica",
        messages:[]
    },
]

const ChatsPage = () =>{

    const [chats, setChats] = useState([])
    const [loading, setLoading] = useState(null)
    const {chatId} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setChats(chatsPlaceholder)
            setLoading(false)
        }, 1000)
    },[])


    return (
        <div style={{display: 'flex', flexGrow: 1, position: 'relative'}}>
            <WithLoading isLoading={loading}>
                <div style={{display:'flex', flexGrow:1}}>
                    <div className='chatList'>
                        <h2>Чаты</h2>
                        <>
                        <ChatList chats={chats}/>
                        <button onClick={()=>{
                            setChats(p => [...p, chatsPlaceholder[0]])
                        }}>+</button>
                        </>
                    </div>
                    {
                        chatId && chats[chatId] ? <Chat chat={chats[chatId]}/> : <h2>Выберите чат</h2>
                    }
                </div>
            </WithLoading>
        </div>
    )
}

const WithLoading = ({isLoading, children}) =>{
    return isLoading || isLoading === null ? <Loader/> : children
}

const ChatList = ({chats}) =>{

    return(
        <>
            {chats.map((e,id) =>
                <div key={id}>
                    <p className="chatDelete">❌</p>
                    <Link to={`chat${id}`}>{e.recipient}</Link>
                </div>)}
        </>
    )
}

export default ChatsPage