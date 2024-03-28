import { useTheme } from '@emotion/react';
import { Checkbox, createTheme, FormControl, FormControlLabel, FormGroup, ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import './App.css';
import PropTypes from 'prop-types'
import React, { useEffect, useRef, useState } from 'react';



const darkTheme = createTheme({
  palette:{
    mode:'dark'
  }
})

const lightTheme = createTheme({
  palette:{
    mode:'light',
    primary:{
      main:'#a032a8',
    },
    secondary:{
      main:'#d8addb'
    },
    background:{
      paper:'#000'
    },
    text:{
      primary: '#173A5E',
    }
  },

})


function App() {

  const obj = {
    title:"name",
    count:1
  }

  const arr = [1,2,3]
  const [isDark, setIsDark] = useState(false)

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <div className="App">
        <SampleForVirtualDOM data={['a','b']}/>

        <InputAutoFocus data={obj}/>
        <Button variant="contained" onClick={()=>{setIsDark(pervstate => !pervstate)}}>Сменить тему</Button>

        <RenderTree/>
      </div>
    </ThemeProvider>
  );
}

export default App;



const SampleForVirtualDOM = ({data = []}) =>{
  const theme = useTheme()
  // console.log(theme)
  console.log(data)

return(
  <div style = {{background:theme.palette.primary.main}}>
    Какой-то текст
    <br/>
    {data}
  </div>
)
}

SampleForVirtualDOM.propTypes = {
  data: PropTypes.array,
}

// SampleForVirtualDOM.defaultProps = {
//  data:[]
// }

{/*<Button variant="contained">Outlined</Button>

<FormGroup>
  <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
</FormGroup> */}


const InputAutoFocus = ({data}) =>{

  const ref = useRef(null)

  useEffect(()=>{
    // ref.current.focus()
    ref.current?.focus()
    ref.current?.addEventListener('mouseover',(e)=>{
      e.target.style.border = "4px solid red"
    })
  },[])

  return(
    <>
      <input ref={ref} onMouseEnter = {()=>{console.log('hover')}}/>
      <div>{data.id?.map(e => e)}</div>
    </>
  )
}


{/* <Box sx = {{
  backgroundColor: '#c9c9c9',
  color: 'text.primary'
}}
>
    <p>Текст</p>
    <Button variant="contained">Outlined</Button>
</Box> */}



const RenderTree = () =>{
  console.log('render parent')
  return(
    <div>
      <RenderTreeChild1/>
      <RenderTreeChild2/>
    </div>
  )
}

const RenderTreeChild1 = ()=>{
  const [state, setState] = useState(false)
  console.log('child1')

  return(
    <button onClick={()=>{setState(p =!p)}}>Child 1</button>
  )
}

//Демонстрация перерисовки ветки
const RenderTreeChild2 = ()=>{
  const [state, setState] = useState(false)
  console.log('child2')

  return(
    <div>
      <button onClick={()=>{setState(p => !p)}}>Child 2</button>
      {/* При изменении типа объект размонтируется и перемонтируется заново вместо изменения */}
      {state ? <RenderTreeChild3/> : <p>Другой тип тега</p>}
      {/* Другой пример, одинаковый тип, тогда элемент не перемонтируется, а изменяется только класс в нём*/}
      <RenderTreeChild4/>
    </div>
  )
}
//Демонстрация сопоставления и алгоритма построения DOM реактом
const RenderTreeChild3 = () => {
  useEffect(()=>{
    console.log("child 3 render (only if mounted not update)");
  }, [])

  return(
    <h1>Саб-чайлд</h1>
  )
}

const RenderTreeChild4 = () => {
  const [classesName, setClasses] = useState('default')

  console.log("child 4");
  useEffect(()=>{
    console.log("child 4 render (only if mounted not update)");
  },[])

  return(
    <>
      <h2 className={classesName} id ='child4'>Саб-чайлд</h2>
      <button onClick={()=>{setClasses('changed')}}>Изменить имя класса</button>
    </>
  )
}




//Про ключи
// Все нормально, мутация пройдёт эффективно
{/* <ul>
  <li>первый</li>
  <li>второй</li>
</ul>

<ul>
  <li>первый</li>
  <li>второй</li>
  <li>третий</li>
</ul> */}

//Плохо, мутация не эффективна. Мутируем каждый элемент вместо добавления
{/* <ul>
  <li>Санкт-Петербург</li> - меняем на ростов
  <li>Москва</li> - меняем на спб
  -- добавляем Ростов
</ul>

<ul>
  <li>Ростов-на-Дону</li>
  <li>Санкт-Петербург</li>
  <li>Москва</li>
</ul> */}

//Решение - ключи
{/* <li key = 1>Ростов-на-Дону</li>
  <li key = 2>Санкт-Петербург</li>
  <li key = 3>Москва</li> */}


{/* <div className='cde' id='321'></div> */}