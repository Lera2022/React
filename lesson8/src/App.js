import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState } from 'react';



import PostsComponent from './PostsComponent'
import SagaComponent from './SagaComponent'

const getPhotos = async(url) => {
  const result = await fetch(url)
  const data = result.json()
  return data
}

const getUsers = async(url) => {
  const result = await fetch(url)
  const data = result.json()
  return data
}


function App() {
const [data, setData] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)

{/* const [data, error, loading] = useRequest(USERS_URL) */}

const users = useSelector(state => state.users)
const dispatch = useDispatch()

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const POST_URL = 'https://jsonplaceholder.typicode.com/posts'
// неверный урл
const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photots'
const request = useRequest(POST_URL)
console.log(request)

{/* console.log(useSelector(state => state.posts)); */}
  useEffect(() => {
          setLoading(true)
          setTimeout(()=>{
            fetch(USERS_URL)
            .then(resp => resp.json())
            .then(data => {
              console.log(data);
              setData(data)
              // dispatch(fetchUsers(data))
            })
            .catch(err => setError(err))
            .finally(() => {
              setLoading(false)
            })
          }, 1000)

{/* const photosData = getPhotos(PHOTOS_URL).then(resp => console.log(resp)).catch(err) */}

          },[])

console.log(data,error,loading);

{/* myPromise().then(resp => console.log(resp)).catch(err => new Error(err)) */}

const addUserToStorage = async() =>{
  const dataPushed = await fetch(USERS_URL,{
    method:'POST',
    body:JSON.stringify({
      name:'Мой юзер',
      id:324
      })
    })
    if(dataPushed.ok){
      dispatch(addUser({
        name:'Мой юзер',
        id:324
      }))
    }
  }

  return (
    <div className="App">
      {
        loading ? <Loader pageName={"юзеров"}/>:
        <div style={{display:'flex', flexDirection: 'column', width:'30%'}}>
          <h1>Пользователи</h1>
          {
            users.map(e => <div key={e.id}>{e.name}</div>)
          }
              <button onClick={()=>{addUserToStorage()}}>Добавить юзера</button>
        </div>
      }

        <PostsComponent/>

      <SagaComponent/>
    </div>
  );
}

export default App;


export const useRequest = (request) => {
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async() => {
      setIsLoading(true);
      try {
        let response = await fetch(request);
        let data = await response.json();
        setData(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  return [data, loading, error]
}


export const Loader = ({pageName}) =>{

  return(
    <div style={{
      background:'#c9c9c9',
      width:'100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'}}>
        Загрузка {pageName}
      </div>
    )
}

{/* const myPromise = () => {
  return new Promise((resolve,reject) =>{
    setTimeout(()=>{
      resolve(['данные1', 'данные2'])
    },1000)
  })
}


(async function(){
  try {
    const res = await getUsers()
    // ...
  } catch (error) {
    console.log(error);
  } finally {
    // ...
  }
})() */}
