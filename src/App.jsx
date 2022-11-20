import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Primero from './Paginas/Primero'
import Segundo from'./Paginas/Segundo'
import Tercero from './Paginas/Tercero'
import Contacto from './Paginas/Contacto'
import Caminar from './Paginas/Tarjetas/Caminar.jsx'
import Vida from './Paginas/Tarjetas/Vida'
import Telefono from './Paginas/Tarjetas/Telefono'
import Meditacion from './Paginas/Tarjetas/Meditacion'
import Error404 from './Paginas/Error/Error404'
import Progreso from './Progreso/Progreso'





function App() {



  return (
    
    <div> 

      <Routes>
          <Route path="/" element={<Primero/>}/>
          <Route path="/viaje" element={<Segundo/>}/>
          <Route path="/curiosidades" element={<Tercero/>}/>
          <Route path="/progreso" element={<Progreso/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/viaje/camino" element={<Caminar/>}/>
          <Route path="/viaje/vida" element={<Vida/>}/>
          <Route path="/viaje/progreso" element={<Telefono/>}/>
          <Route path="/viaje/meditacion" element={<Meditacion/>}/>
          <Route path="*" element={<Error404/>}/>
      </Routes>
      

    </div>
      
      

    

        
      


        

    

  )
}


export default App
