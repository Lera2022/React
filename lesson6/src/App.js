import logo from './logo.svg'
import './App.css';
import Chats from './components/chats';
import { connect, useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from './slices/counter_slice';
import { useEffect } from 'react';

function App(){

  const modal = useSelector(state => state.modal)
  const dispatch = useDispatch()
  console.log(modal);

  useEffect(()=>{
    setTimeout(()=>{
      dispatch(closeModal())
    },6000)
  },[])

  return (
    <div className='App'>
      <Chats/>
      <ConnectedComp1/>
      <ConnectedComp2/>
      <button onClick={()=>{
        dispatch(openModal())
      }}>Открыть окно</button>

      {modal ? <div style={{background:'#c9c9c9', position:'fixed', top:0, height:'100vh', width:'100%'}}>Окно</div> : null}
    </div>
  );
}
export default App;

const mapStateToProps = (state) =>({
  chats:state.chats
})

// useSelector(state => state.field)

//connect
const Comp1 = ({chats}) =>{

  return(
    <div style={{display:'flex',flexDirection:'column'}}>
      <h1>Пустые чаты</h1>
      {
        chats.map(e => e?.messages.length === 0 ? <div key={e.id}>{e.title}</div> : null)
      }
    </div>
  )
}

const Comp2 = ({chats}) =>{
  return(
    <div style={{display:'flex', flexDirection:'column'}}>
      <h1>Избранные чаты</h1>
      {
        chats.map(e => e?.title === 'Соня' ? <div key={e.id}>{e.title}</div> : null)
      }
    </div>
  )
}

const ConnectedComp1 = connect(mapStateToProps)(Comp1)
const ConnectedComp2 = connect(mapStateToProps)(Comp2)

// const someFunc = (props) =>{

//   return (component) => {

//   }
// }
// // const a = someFunc()
// someFunc()()