import { memo, useCallback, useState } from "react"

export const Parent = () => {

    const [isActive, setIsActive] = useState(false)

    const ch2props = useCallback(()=>{
        return'text'
        // return isActive ? 'text' : null
    }, [isActive])

    // console.log(ch2props())
    console.log('parent render');
    return(
        <div>
            <button onClick={()=>setIsActive(s =>!s)}>Клик</button>
            <Child1 isActive={isActive}/>
            <Child2 text = {ch2props()}/>
        </div>
    )
}

const Child1 = ({isActive}) => {

    console.log('render1');
    return(
        <div>
            Компонент 1
        </div>
    )
}

const Child2 = memo(({text}) => {

    console.log('render2');
    return(
        <div>
            {text} из Компонента 2
        </div>
    )
})