import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
function Callfun()
	{
	  alert("FUNCTION CALL");
	}
  function Fruit()
	{
	  alert("YOU HAVE CLICKED ON APPLE");
	}
  function Yellow()
	{
	  alert("YOU HAVE CLICKED ON BANANA");
	}
  return (
    <div>
            <h1>WELCOME TO NEW PROJECT</h1>
            <button onClick={Callfun}>OK</button>
            <button onClick={Fruit}>   APPLE  </button>
            <button onClick={Yellow}>  BANANA  </button>
    </div>
  )
}

export default App
