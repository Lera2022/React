import './App.css';

function App() {
  // const name = "Alex"
  // const name = undefined
  // const theme = 'dark'
  const theme = 'light'

  console.log(<MyHeader name = {"Alex"} age = {26} theme = {theme}/>);

  return (
    <div className="App">
      {/* <h1>Привет, {name ? name : 'Неизвестный'}</h1> */}
      <MyHeader name = {"Alex"} age = {26} theme = {theme}/>
    </div>
  );
}

export default App;


// function MyHeader(props){
  function MyHeader({name, age, theme}){

  return(
    // <div className='header'>
    // <div style={{color: 'blue'}} className='header'>
    <div style={{color:theme === 'dark' ? 'blue' : 'red'}}>
      {/* <h1>Привет, {props.name}</h1> */}
      <h1>Привет, {name}</h1>
    </div>
  )
}

// const MyHeader = () => {

// }