import logo from './logo.svg'
import './App.css';
import Chats from './components/chats';
import { connect } from 'react-redux';

function App(){
  return (
    <div>
      <Chats/>
      <ConnectedComp1/>
      <ConnectedComp2/>
    </div>
  );
}
export default App;

const mapStateToProps = (state) =>({
  chats:state.chats
})


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