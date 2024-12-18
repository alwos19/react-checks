import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom/client'


const root = ReactDOM.createRoot(document.getElementById('root'))

function Greeting(){
    const married = false
    return <h1>{ married ? 'Estoy casado' : 'No estoy casado'}</h1>
}



function Counter(){

const  [counter, setCounter] = useState()

return (

<div>
    <h1>Counter: {counter} </h1>

    <button onClick={()=>{
        setCounter(counter + 1)}}>
        Increment
    </button>

    <button onClick={()=>{
        setCounter(counter - 1)}}>
        Decrement
    </button>

    <button onClick={()=>{
        setCounter(1000)
    }}>
        Restart
    </button>



    </div>



)
}

root.render(
    <>
    <Counter />
    </>
);
