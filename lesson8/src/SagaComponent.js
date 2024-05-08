import { useEffect } from "react"
import {useSelector, useDispatch} from 'react-redux'
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import { fetchOnePost } from "./slices/saga"



const SagaComponent = () => {
    const post = useSelector(state => state.saga)
    const dispatch = useDispatch()

    useEffect(()=>{
        // вызываем диспатч, но с экшеном саги
        dispatch({type:'fetchSaga'})
    },[])

    return(
        <div>
            <h1>Одиночный пост</h1>
            <div>{post.body}</div>
        </div>
    )
}

export default SagaComponent

// генератор (worker)
function* fetchOnePostSaga(){
    // yeld аналог эвейт call (эффект для вызова)
    const response = yield call(()=>fetch('https://jsonplaceholder.typicode.com/posts/1'))
    const post = yield response.json()
    // put диспатч (effect)
    yield put(fetchOnePost(post))
}

// вотчер (наблюдатель)
export function* postWatcher(){
    // ждёт экшн и воркер для выполнения
    yield takeEvery('fetchSaga', fetchOnePostSaga)
}