import React from 'react'
import Sidebar4 from './components/Sidebar4'
import './Segundo.css'
import {Link} from 'react-router-dom'

function Segundo() {

  
  return (
        <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
            <Sidebar4/>
            
            <main className="flex items-center lg:col-span-3 xl:col-span-5 bg-gray-100 p-20  overflow-y-scroll">
            
            

        <section className='container d-flex justify-content-center align-items-center h-100'>

     

        <main className="page-content">
          
  <div className="card">
    <div className="content">
      <h2 className="title">Caminar todos los dias</h2>
      <p className="copy">Caminar es un ejercicio ideal, de bajo impacto y apto para todos los niveles fisicos, y ademas ofrece numerosos beneficios para la fortaleza cardiaca y muscular</p>
      <p>-Prolonga la esperanza de vida</p><p>-Sistema inmune y digestivo fuertes</p>
      <Link to='camino' className="btn btn-light">Empezar</Link>
    </div>
  </div>
  <div className="card">
    <div className="content">
      <h2 className="title">Vida feliz con amigos peludos</h2>
      <p className="copy">Los amigos peludos son nuestros compañeros mas leales en esta vida tan ajetreada y siempre nos dan apoyo emocional incondicional y rompen nuestro aislamiento social.</p>
      <p>-Menos depresion y soledad</p><p>-Aumento de las actividades exteriores</p>
      <Link to='vida' className="btn btn-light">Empezar</Link>
    </div>
  </div>
  <div className="card">
    <div className="content">
      <h2 className="title">Menos telefono, mas progreso</h2>
      <p className="copy">La adiccion a la tecnologia si que tiene un boton de apagado, si limitas cientificamente el tiempo delante de la pantalla</p>
      <p>-Menos niebla cerebral y perdida de memoria</p><p>-Menos estres y ansiedad</p><p>-Mas autodisciplina</p>
      <Link to='progreso' className="btn btn-light">Empezar</Link>
    </div>
  </div>
  <div className="card">
    <div className="content">
      <h2 className="title">Meditacion para tranquilidad</h2>
      <p className="copy">La meditacion conecta tu espacio interno con el mundo exterior mediante un vinculo privado y seguro.</p>
      <p>-Menos dolor por la tension</p><p>-Mayor lapso de atencion</p><p>-Regulacion emocional efectiva</p><p>-Lucha contra las adicciones</p>
      <Link to='meditacion' className="btn btn-light">Empezar</Link>
    </div>
  </div>
        
</main>
        </section>
        </main>
    </div>
  )
}

export default Segundo