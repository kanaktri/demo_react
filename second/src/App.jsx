import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const name="JOHN";
  var x=10;
  let y=20;
function nam()
{
  return "Kanak";
}
function sum(a,b)
{
  return a+b;
}
function calc(a,b,op)
{
 
  if(op=='+')return a+b;
  if(op=='-')return a-b;
  if(op=='*')return a*b;
  if(op=='/')return a/b;
}
function table(t)
{
  for(i=1;i<=10;i++)
  
    result=t*i;
}
  return (
      <div>
        <h1> User variable with jsx</h1>
        <h1> Value of variable is {name}</h1>
        <h1>{x+y}</h1>
        <h1> Use of functions with jsx</h1>
        <h1>{nam()}</h1>
        <h1>{sum(43,75)}</h1>
        <h1>{calc(34,12,'*')}</h1>
        <h1>{table(5)}</h1>
      </div> 
  )
}
export default App