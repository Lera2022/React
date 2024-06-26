import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState } from 'react';
import { fetchItems, testMiddleware } from './slices/item';


function App() {

  const items = useSelector(state => state.items)
  const users = useSelector(state => state.items.users)
  const dispatch = useDispatch()
  // const posts = useSelector(state => state.items)
// const [error, setError] = 
// const [loading, setLoading] = 


  
  useEffect(()=>{

    //Кастомный мидлвэр
    // dispatch(testMiddleware("Пэйлод"))
    
    // Thunk
    dispatch(fetchItems())
    console.log(items);

    // fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(json => {
      // dispatch(getPosts(json))
    // })
  },[])
  
  return (
    <div className="App">
      <h1>Пользователи</h1>
      {
        users.map(e =>
          <div>
            <h1>{e.name}</h1>
            <p>{e.email}</p>
          </div>
        )
      }
    </div>
  )

}

export default App;

