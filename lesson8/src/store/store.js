

import { userReducer } from "../slices/users";
import createSagaMiddleware from 'redux-saga'
import { postWatcher } from '../SagaComponent'
import { postsReducer } from "../slices/posts";

const sagaMW = createSagaMiddleware()

export const store = configureStore({
    reducer:{
        users:userReducer,
        posts:postsReducer,
        saga:sagaReducer
    },
    // добавляем сагу в миддлвар
    middleware:[...getDefaultMiddleware(), sagaMW],
})

// запускаем вотчера для саги
sagaMW.run(postWatcher)