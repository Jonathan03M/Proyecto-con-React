import React from 'react'
import Cards from './components/Cards'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Primero from './Paginas/Primero'
import Segundo from'./Paginas/Segundo'
import Tercero from './Paginas/Tercero'
import Contacto from './Paginas/Contacto'





function App() {
  return (
    
    <div className='App' >
  
      <Routes>
          <Route path="/" element={<Cards/>}/>
      </Routes>
      <div>
      <main className="">

     
<section className="">
        <Routes>
            <Route path="/home" element={<Primero/>}/>
            <Route path="/viaje" element={<Segundo/>}/>
            <Route path="/progreso" element={<Tercero/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
        </Routes>
        </section>
       </main>
      </div>

        

    </div>

  )
}


export default App
