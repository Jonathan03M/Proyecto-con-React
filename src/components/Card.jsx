import React from 'react'
import { Link } from 'react-router-dom'


function Card({title, animacionJSON, descripcion}) {

  return (
    <div className='card text-center bg-dark '>
      {animacionJSON}
      <div className="card-body text-primary">
        <h4 className='card-title'>{title}</h4>
        <p className='card-text- text-light'>{descripcion}</p>

    <Link to="/primero" className='btn btn-outline-secondary' target='_blank'>
          Empieza tu rutina
        </Link>
    
    

      </div>
    </div>
  )
}

export default Card