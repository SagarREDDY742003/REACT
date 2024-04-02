import './App.css'
import { useState } from 'react';

function App() {
 
  const [counter, setCounter] = useState(10)

  const addvalue = () => {
    setCounter(counter + 1)    
    setCounter((prevcounter) => prevcounter+1)    
    setCounter((prevcounter) => prevcounter+1)    
    setCounter((prevcounter) => prevcounter+1)    

  }
  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React course with sagar {counter}</h1>
      <h2>count value: {counter}</h2>
      <button onClick={addvalue}>Add value</button>{"  "}
      <button onClick={removeValue}>remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
