import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import New from "./New"
function App() {
  var x=10;
function Fun()
	{
	  alert("FUNCTION CALL");
	}
  const Fruit=(name)=>
  {
    alert(name);
  }
  return (
    <>
      <New></New>
      <h1>Example of Arrow Function</h1>
      <button onClick={Fun}>Click to call function</button>
      <button onClick={()=>Fruit("FIRST PARAMETER")}>Arrow Function</button>
    </>
  )
}
export default App