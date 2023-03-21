
import React from "react";
import {useState} from 'react';
import './../styles/App.css';
import Items from "./Items";
const App = () => {
  let items=[
   { fruitsName:'Apple' ,price:20},
    {fruitsName:'Banana' ,price:10},
    {fruitsName:'Neutella' ,price:30},
    {fruitsName:'Razor' ,price:5},
    {fruitsName:'CornFlakes', price:15},
    {fruitsName:'SoundBar', price:50},
    {fruitsName:'Iphone', price:80}
  ]
  const [cost,setCost]=useState('')
  let handle=(e)=>{
    setCost(e.target.value)
  }
  return (
    <div>
        <h1>Enter your budget to check available items:</h1>
        <input type="number" onChange={handle} value={cost}/>
        <Items items={items} cost={cost}/>
    </div>
  )
}

export default App
