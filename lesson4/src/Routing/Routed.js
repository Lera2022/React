import { useEffect, useState } from "react";
import {
    BrowserRouter,
    HashRouter,
    Routes,
    Route,
    Link,
    useParams,
    useRoutes,
    useMatch
} from "react-router-dom";

const Routed = () =>{

    return(
        <>
        <Route path="/" element = {<CompA/>}/>
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