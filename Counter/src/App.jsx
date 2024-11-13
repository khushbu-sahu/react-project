import { useState } from 'react'
function App() {
  let[counter, setCounter]=useState(0)

  const addValue= ()=>{
// setCounter(counter+1)

// interview question prevCounter means that previous counter
setCounter(prevCounter => prevCounter +1)
setCounter(prevCounter => prevCounter +1)
setCounter(prevCounter => prevCounter +1)
setCounter(prevCounter => prevCounter +1)
  }

  const removeValue= ()=>{
    setCounter(counter-1)
      }
  return (
    <>
      <h1>Couter</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add Value </button>
      
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
