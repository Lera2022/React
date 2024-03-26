import React, { useState } from 'react';
import './App.css';















































function App() {
  const text = 'Делаю первую домашку по реакту'
  return (
    <div className="App">

    </div>
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
