





const count = useSelector(counterSelector)
const dispatch = useDispatch()

return(
    <div>
        <button onClick={()=>{dispatch(decrement())}}>-</button>
        <p>{count}</p>
        <button onClick={()=>{dispatch(increment())}}>+</button>
    </div>
)
}

export default counterSelector

export const counterSelector = (state) => state.counter