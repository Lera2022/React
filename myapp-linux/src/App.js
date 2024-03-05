import React, { useState } from 'react';
import './App.css';
import Message from './components/Message';
function App() {
  const text = 'Делаю первую домашку по реакту'
  return (
    <div className="App">
      <Message text={text}/>
    </div>
  );
}

export default App;
