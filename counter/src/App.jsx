import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  const addValue = () =>{
    // counter = counter + 1;
    if(counter < 20){
      setCounter(counter + 1);
    }
    // console.log('Clicked', counter);
  }

  const removeValue = () =>{
    if(counter >0 ){
      setCounter(counter - 1)
    }
  }
  
  return (
    <>
      <h1>Chai aur react #5</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
