import { useEffect, useState } from "react";
import {
    BrowserRouter,
    HashRouter,
    Routes,
    Route,
    Link,
    useParams,
    useRoutes,
    useMatch,
    Navigate,
    useNavigate
} from "react-router-dom";

const Routed = () =>{

    return(
        <>
        {/* <Route path="/" element = {<CompA/>}/> */}
        <BrowserRouter>
            <div style={{width:'1000px', display:'flex'}}>
                <Link to='/'>Компонент1</Link>
                <Link to='chats/chat1'>Компонент2</Link>
                <Link to='comp3'>Компонент3</Link>
            </div>

            <div style={{width:'1000px', display:'flex'}}>
                <Routes>
                    <Route path="/" element = {<CompA/>}/>
                    <Route path="chats">
                        <Route path=":chatID" element = {<Chats/>}/>
                    </Route>
                    <Route path="comp3" element = {<CompC/>}/>
                </Routes>
            </div>
        </BrowserRouter>
        </>
    )
}

export default Routed

const Redirector = ({status, children}) => !status ? <Navigate to = {'/login'}/> : {children}

{/* <Redirector><Comp></Comp></Redirector> */}

const CompA = () => <div style={{height:'50vh', background: '#ed8551', width:'100%'}}>Компонент 1</div>

const Chats = () => {
    const chatID = useParams()
    const nav = useNavigate()

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         nav('/')
    //     }, 1000)
    // })

    // <Navigate to/>

    // console.log(useMatch('/chats/chat1'))
    console.log(chatID + 'id из хука useParams')
    const [chats, setChats] = useState([
        {
            id:'chat1',
            messages:["сообщение 1"]
        },
        {
            id: 'chat2',
            messages:["сообщение 1", "сообщение 2", "сообщение 3"]
        }
    ])

    const id = chats.findIndex(x => x.id === chatID)

    return(
        <div style={{height:'50vh', background:'#51afed', width:'100%'}}>

            <Link to={'/chats/chat1'}>Чат1</Link>
            <Link to={'/chats/chat2'}>Чат2</Link>

            <h1>Чаты</h1>
            <div>
                {
                    chatID && chats[id]?.messages.map(e => <h2>{e}</h2>)
                }
            </div>
        </div>
    )
}

const CompC = () => <div style={{height:'50vh', background:'#c9c9c9', width:'100%'}}>Компонент 3</div>