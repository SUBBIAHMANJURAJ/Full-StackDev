import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import Routing from '../Routes/Routing';


function App() {
  return (
    <>
    <Navbar/>
      <Routing/>
    </>
      
    
  )
}

export default App;
