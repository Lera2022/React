import './App.css';
import {useEffect, useRef, useState } from 'react';
import Routed from './Routing/Routed';


function App() {
  const [modal, setModal] = useState(false)
  const [color, setColor] = useState(true)
  const [list, setList] = useState([])

  const ref = useRef(null)

// useEffect(()=>{

// },[list])

return (
  <div className="App">
    {/* Пропс чилдрен */}
    {
      console.log(
        <DivWithChild>
          <p>Новый текст</p>
          <div>Див</div>
        </DivWithChild>)
    }

    <DivWithChild>
      <p>Новый текст</p>
    </DivWithChild>

    <DivWithChild>
      <h1 style={{color:'red'}}>Тайтл</h1>
    </DivWithChild>

    {
      [<p>1</p>,<p>2</p>]
    }

    {/* Render props */}
    {/* <Square render = {(className)=><div className={className}>Див внутри рендера</div>} /> */}

    {/* <button onClick={()=>{setModal(true)}}>Открыть модальное окно</button> */}

    {/* Кейс с пропс чилдрен */}
    {/* {modal === true &&
    <Modal setModal={setModal}>
      <p>модальное окно</p>
      <DivWithChild>
        <p>Чайлд пропс</p>
      </DivWithChild>
    </Modal>} */}

    {/* <button onClick = {()=>{
      setColor(prev => !prev)
    }}>Переключить цвет</button> */}

    <ChildWithRProps state={color}/>

    <Routed/>


    {/* <input ref = {ref}></input> */}
  </div>
)
}

export default App;

    // const Abc = ({children, isLoading}) => isLoading ? <Loader></Loader> : {children}


const DivWithChild = ({children}) =>{
  return(
    <div style={{fontSize:'50px'}}>{children}</div>
  )
}

//MainFont

//BaseFont

const Modal = ({children, setModal}) =>{

  const styles = {
    width: '50%',
    height: '50%',
    background: '#fff'
  }

  return(
    <div className='modalContainer' onClick={(e)=>{setModal(false)}}>
      <div style={styles} onClick={(e)=>{e.stopPropagation()}}>
        {children}
      </div>
    </div>
  )
}

const ChildWithRProps = ({state}) =>{

  return(
    state ?
    <h1 style={{color:'#FF0000'}}>Красный</h1> :
    <h1 style={{color:'#0000FF'}}>Синий</h1>
  )

}

const Square = ({render}) =>{

  return <>{render('blue')}</>
}