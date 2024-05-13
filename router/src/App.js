import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import HomePage from './pages/Home';
import ChatsPage from './pages/Chats';
import Chat from './components/chat/Chat';
import ProfilePage from './pages/Profile'

function App() {
  return (
    <div className="App">
      <>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<HomePage userName={"Пользователь"}/>}/>
        <Route path='chats' element = {<ChatsPage/>}>
          <Route path=':chatId' element = {<ChatsPage/>}/>
        </Route>
        <Route path='profile' element = {<ProfilePage/>}/>
        <Route path='*' element = {<NotFound/>}/>
      </Routes>
      </>
    </div>
  );
}

export default App;


const NavBar = () => {

  return(
    <div className='navBar'>
      <Link to={'/'}>Главная</Link>
      <Link to={'/chats'}>Чаты</Link>
      <Link to={'/profile'}>Профиль</Link>
    </div>
  )
}

const NotFound = () =>{

  return(
    <div style={{width:"100%", height:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
      <h1>404 страница не найдена</h1>
    </div>
  )
}