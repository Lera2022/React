import { useEffect, useState } from "react";

const url = 'https://jsonplaceholder.typicode.com/posts'

const Posts = () => {

    const [value, setValue] = useState('')
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
    },[])

    return(

        <div>
            {[
                data ? <h1 style = {{color: 'red'}}>Посты</h1> : null,
                data.map((e, i) => <div key = {i}>{e.title}</div>)
            ]}
        </div>
    )
}
export default Posts

export const Search = ({value, setValue}) => {

    return <input value={value} onChange={setValue}/>
}

export const Button = () => {

    const [isVisible, setVisible] = useState(false)

    return(
        <>
            {isVisible ? <div data-testid = "btn-text">Тексе рядом с кнопкой</div> : null}
            <button
                onClick={()=>{setIsVisible(state => !state)}}
                data-testid = "btn"
            >Клик</button>
        </>
    )
}