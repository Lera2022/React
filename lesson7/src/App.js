import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState } from 'react';
import { fetchItems, testMiddleware } from './slices/item';


function App() {

  const items = useSelector(state => state.items)
  const users = useSelector(state => state.items.users)
  const dispatch = useDispatch()
  
  
  useEffect(()=>{
    //Кастомный мидлвэр
    //dispatch(testMiddleware("Пэйлод"))
    
    // Thunk
    dispatch(fetchItems())
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



