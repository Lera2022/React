import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Loader } from './App';
import { fetchPostsThunk } from "./slices/posts"

const PostsComponent = () => {

    const {posts,loading,err} = useSelector(state => state.posts)
    const dispatch = useDispatch()

    const [pages, setPages] = useState(10)

    // console.log(posts,loading,err)

    useEffect(()=>{
        dispatch(fetchPostsThunk())
    },[])

    // console.log('update')
    return(
        <div style={{width: '60%', display: 'flex', flexDirection: 'column'}}>
            <h1>Посты</h1>
            {
                loading ? <Loader pageName={'постов'}/> :
                <div>
                    {
                        posts.slice(0,pages).map(e =><div key={e.id}>
                            <h5>{e.title}</h5>
                            <p>{e.body}</p>
                        </div>)
                    }
                </div>
            }
            <>
            <button onClick={()=>{
                
            }}></button>
            </>
        </div>
    )
}