import './App.css';
import React, {useState, useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';

function App() {
  
  const [messageList, setMessageList] = useState([])
  const [messageBody, setMessageBody] = useState({
    text:'',
    author:''
  })

  const ROBOT_MESSAGE = 'Привет, человек. Я получил твоё сообщение'

  useEffect(()=>{
    if(messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot'){
      setTimeout(()=>{
        setMessageList(pervstate => [...pervstate, {text:ROBOT_MESSAGE, author:'robot'}])
      }, 1500)
    }
  },[messageList])

  return (
    <div className='App'>
      <Form data={messageBody} setData = {setMessageBody} setMessage = {setMessageList}></Form>
      <div className='messageList'>
        {
          // messageList.map((e,i)=><Message text={e.text} author ={e.author} key = {i}/>)
          messageList.map((e,i)=><ListItemText primary={e.text} secondary={e.author} />)
        }
      </div>
    </div>
  )
}

export default App;

const Form = ({data, setData, setMessage}) =>{

  const {text, author} = data

  const submitForm = (e) =>{
    e.preventDefault()
    if(text.length > 0){
      setMessage(pervstate => [...pervstate, {text, author}])
    }
    setData(
      {
        text:'',
        author:''
      }
    )
  }

  return(
    <form className='Form' onSubmit={submitForm}>
      <TextField id="outlined-basic" label="Имя" variant="outlined" value={text} onChange={(e)=>
      setData(pervstate => ({...pervstate, text: e.target.value})
      )}/>      
      <TextField id="outlined-basic" label="Текст" variant="outlined" autoFocus="true" value={author} onChange={(e)=>
      setData(pervstate => ({...pervstate, author: e.target.value})
      )}/>
      <Button variant="contained" size="large" type='submit'>Отправить</Button>
    </form>
  )
}

// const Message = ({author, text}) =>{

//   return(
//     <div>
//       <hr/>
//       <h1>{author}</h1>
//       <p>{text}</p>
//       <hr/>
//     </div>
//   )
// }