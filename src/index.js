import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom/client'


const root = ReactDOM.createRoot(document.getElementById('root'))

function Greeting(){
    const married = false
    return <h1>{ married ? 'Estoy casado' : 'No estoy casado'}</h1>
}



function Counter(){

    const  [counter, setCounter] = useState(0)



    return (<div><h1>Counter: {counter}</h1>
    <button onClick={()=>{
        setCounter(counter + 1)
    }}>
        Increment
    </button></div>)
}

root.render(
    <>
    <Counter />
    </>
);
