
import './App.css';
import { firestore } from './firebase/firebase';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from './hooks/useAuth';
import { useDispatch } from 'react-redux';
import { createUserThunk, loginThunk, removeUser } from "./slices/userSlice";
import { addPost, getAllPosts } from './firebase/crud';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element = {<HomeView/>}/>
        <Route path='/login' element = {<LoginView/>}/>
        <Route path='/list' element = {<DataList/>}/>
      </Routes>
    </div>
  )
}

export default App;

// СТРАНИЦА ЛОГИНА
const LoginView = () => {
  // хук для отслеживания аутентификации
  const isAuth = useAuth().isAuth

  // стейты для инпутов
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const dispatch = useDispatch()

  // если не аутентифицирован - возвращаем форму иначе Navigate to
  return !isAuth ? (
    <div style={authStyles().container}>
      <h1>Логин</h1>

      <div style={authStyles().card}>
        <input
        type = 'text'
        placeholder = 'email'
        value={email}
        onChange = {(e) => {setEmail(e.target.value)}}/>

        <input
        type = 'password'
        placeholder = 'password'
        value={pass}
        onChange = {(e) => {setPass(e.target.value)}}/>

        <div>
          <button onClick = {() => {
            dispatch(createUserThunk({email, pass}))
          }}>Регистрация</button>

          <button onClick = {() => {
            dispatch(loginThunk({email, pass}))
          }}>Войти</button>
        </div>
      </div>
    </div>
  ) :
  (<Navigate to = {'/list'}/>)
}

// ГЛАВНАЯ
const HomeView = () => {
  return(
    <div>
      <h1>Домашняя страница</h1>
      <Navigate to = {'/login'}/>
    </div>
  )
}

// СТРАНИЦА С ПОСТАМИ
const DataList = () => {

  const dispatch = useDispatch()
  const isAuth = useAuth()

  // стейты для получения данных из firestore (без middleware)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState()

  // состояние для хранения данных о посте, для последующей отправки в firestore
  const [formData, setFormData] = useState({
    body: '',
    user: ''
  })

  // функция обрабатывающая загруженные данные о постах и добавляющая их в data state
  const getPostsHandler = async() => {
    setLoading(true)
    let data = await getAllPosts()
    setLoading(false)
    setData(data)
  }

  // сайд эффект (загрузка постов при монтировании компонента)
  useEffect(() => {
    getPostsHandler()
  }, [])

  return isAuth.isAuth ? (
    <div>
      {/* Шапка */}
      <h1>Данные юзера</h1>
      <div>
        <h2>Привет, { isAuth.email }</h2>
      </div>

      {/* Кнопка разлогина - разлогин происходит локально в приложении без middleware через обычный редьюсер*/}
      <button onClick = {() => {dispatch(removeUser())}}>Выйти из аккаунта</button>


      {/* Контейнер постов */}
      <div style = {{minHeight: '50vh'}}>

        {/* Инпут для добавления постов */}
        <PostForm formData = {formData} setFormData = {setFormData}/>
        {/* кнопка добавляет посты и выполняет повторный fetch постов чтобы отобразить обновлённые данные */}
        <button onClick = {() => {
          addPost(formData)
          getPostsHandler()
        }}>Добавить пост</button>

        {/* Список постов или лодер если грузим */}
      </div>
    </div>
  )
}