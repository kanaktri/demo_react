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
  return (
    <div>
            <h1>WELCOME TO NEW PROJECT</h1>
            <button onClick={Callfun}>OK</button>
    </div>
  )
}

export default App
