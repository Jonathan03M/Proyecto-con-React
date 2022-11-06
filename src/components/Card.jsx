import React from 'react'


function Card({title, animacionJSON, url, descripcion}) {
  
  return (
    <div className='card text-center bg-dark '>
      {animacionJSON}
      <div className="card-body text-primary">
        <h4 className='card-title'>{title}</h4>
        <p className='card-text- text-light'>{descripcion}</p>
        <a href={url} className='btn btn-outline-secondary' target='_blank'>
          Empieza tu rutina
        </a>
      </div>
    </div>
  )
}

export default Card