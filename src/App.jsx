import React from 'react'
import Cards from './components/Cards'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Primero from './Paginas/Primero'



function App() {
  return (
    
    <div className='App'>
  
    
      <div>
        <Routes>
          <Route path="/primero" element={<Primero/>}/>
        </Routes>
        
        
      </div>
      <Cards/>
    </div>

  )
}

export default App
