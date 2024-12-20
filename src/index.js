import React from 'react'
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'


const root = ReactDOM.createRoot(document.getElementById('root'))

function Greeting(){
    const married = false
    return <h1>{ married ? 'Estoy casado' : 'No estoy casado'}</h1>
}

function Counter(){

const  [mensaje, setMensaje] = useState('')

useEffect(() => {
    console.log('mensaje:')
},[])

return (

<div>
    <input onChange={e=> setMensaje(e.target.value)}/>
    <button onClick={()=> {
        alert('El mensaje es:' + mensaje)
    }}>
        Save
    </button>

</div>
)
}

root.render(
    <>
    <Counter />
    </>
);
