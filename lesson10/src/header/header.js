import { useEffect, useState } from "react";

const Header = ({name = ''}) =>{
    return(<h1>Hello, {name}</h1>)
}

export default Header


export const ListHeader = ({list}) => {
    return list ? (
        <ul>
            {
                list.map((e, i) => <li key={i}>{e}</li>)
            }
        </ul>
    ) : null
}

// Проверка по снепшоту, по слепку интерфейсa
export const UiForSnapShot = ({userName}) => {
    return (
        <div style={{display:'flex', flexDirection:'column', width: '300px', fontSize: '1rem'}}>
            <img src="https://clov.net/img/oi.jpg"/>
            <h1>{userName}</h1>
        </div>
    )
}

export const User = () => {
    const [userData, setUserData] = useState()

    useEffect(()=>{
        let user = JSON.parse(localStorage.getItem('user'))
        setUserData(user)
    }, [])

    return(
        
    )
}

