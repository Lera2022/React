import './App.css';
import React, { Component, useContext, useEffect, useState } from 'react'
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Toggler from './reduxSample/toggler';
import { useSelector } from 'react-redux';



//Создание контекста
const UserContext = React.createContext()
const AdminContext = React.createContext()


//Функция высшего порядка
// const greaterThan = (n) => {
//   return (m) => {
//     return (m > n)
//   }
// }

// const greaterThan5 = greaterThan(5)
// const greaterThan10 = greaterThan(10)

// greaterThan(10)(8)

// console.log(greaterThan5(10))
// console.log(greaterThan10(8))

function App() {
  //Стейты
  // const [user, setUser] = useState(null)
  const navigate = useNavigate()
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)


  //Функция имитация загрузки данных
  const loadingPlaceholder = () =>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  }


//Имитация логина с использованием роутов и хука navigate
  useEffect(()=>{
    // navigate('/sign')
    // setTimeout(()=>{
    //   setUser('Alex')
    //   navigate('/user')
    // }, 3500)
    loadingPlaceholder()
  },[])

  //Компоненты высшего порядка
  //Модальное окно с пропсами
  const ModalWithProps = withProps(Modal)

  //Привязка контекста к компоненту
  const CompWithContext = withContext(ContextReciever, AdminContext)

  //Компонент для загрузки
  const CompWithLoader = withLoading(List)
  // const CompWithLoader2 = withLoading(Card)
  // const CompWithLoader3 = withLoading(Profile)

  const isChecked = useSelector(state => state)
  console.log(isChecked + "из redux")

  const [theme, setTheme] = useState("light")

  return (
    // Провайдеры (предоставляют контекст)
    <UserContext.Provider value={{name:"John", age:23}}>
      <AdminContext.Provider value={"Admin"}>
        <div className='App'>

          {/* <Routes>
            <Route path='/sign' element = {<Sign/>}/>
            <Route path='/user' element = {<UserCard/>}/>
          </Routes> */}
          <UserCard/>

          <button onClick={()=>{setTheme('dark')}}>Сменить тему</button>
          <button onClick={()=>{setModal(true)}}>Открыть модальное окно</button>

          {
            modal && <ModalWithProps data = {'another'} setModal ={setModal}/>
          }

          <CompWithContext/>

          <CompWithLoader isLoading = {loading} data = {[1,2,3]}/>
          <Toggler/>


        </div>
      </AdminContext.Provider>
    </UserContext.Provider>
  );
}

export default App;


const Sign = () => {
  return(
    <h1>Подождите</h1>
  )
}


const UserCard = () =>{

  const userName = useContext(UserContext)
  const admin = useContext(AdminContext)
  // console.log(admin)
  // console.log(userName)

  return(
    <h1 style={themeHandler()}>Привет, {userName}</h1>
  )
}

// const themeHandler = (theme) => ({
//   color: theme === "dark" ? "#c9c9c9" : "#000",
//   background: theme === "dark" ? "#000" : "#fff"
// })


const Modal = ({data, setModal}) =>{

  return (
    <div className='modal'>
      <div>
        <h1>Модальное окно</h1>
        <p>{data}</p>
        <button onClick={()=>{setModal(false)}}>Закрыть</button>
      </div> 
    </div>
  )
}


const withProps = (Component) =>{
  return (props) => {
    // console.log(props)
    return <Component {...props} />
  }
}


const withContext = (Component, PassedContext) =>{
  return (props) => {
    const context = useContext(PassedContext)
    return <Component {...props} context = {context}/>
  }
}


const ContextReciever = ({context}) =>{
  // console.log(context)

  return(
    <div>
      <h1>Принятый компонентом контекст</h1>
      <p>{context}</p>
    </div>
  )
}


const Loader = () =>{
  return(
    <div className='loader'>
      <h1>Загрузка</h1>
    </div>
  )
}

const withLoading = (Component) =>{
  return ({isLoading, ...props}) => {
    return isLoading ? <Loader/> : <Component {...props}/>
  }
}

const List = ({data}) =>{


}
// function App() {
// const [user, setUser] = useState(null)
// const navigate = useNavigate()

// useEffect(()=>{
//   navigate('/sign')
//   setTimeout(()=>{
//     setUser('Alex')
//     navigate('/user')
//   }, 1500)
// }, [])

// const ModalWithProps = propsConnectorHOC(Modal)
// const CompWithContext = withContext(ContextGetter, UserContext)

// return (
//   <UserContext.Provider value = {user}>
//     <AdminContext.Provider value={"Admin"}>
//       <div className="App">
//         <Routes>
//           <Route path='/sign' element = {<Sign/>}/>
//           <Route path='/user' element = {<UserCard/>}/>
//         </Routes>

//         <ModalWithProps data = {'data'}/>
//         <CompWithContext/>
//       </div>
//     </AdminContext.Provider>
//   </UserContext.Provider>
// );
// }

// export default App;