import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import About from './pages/About';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Navbar>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </Navbar>
      
    
  )
}

export default App;
