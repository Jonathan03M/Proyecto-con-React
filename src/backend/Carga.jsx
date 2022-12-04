import React from 'react'
import {Spinner} from 'reactstrap'
import './Carga.css'

function Carga() {
  return (
    
      <div>
        <div className='divHijo'>
      <Spinner color='primary' className='spinnerReactstrap'/>
     
        </div>
        <div className='elh'>
        <h1>Cargando plan mensual, por favor espere.</h1>
        </div>
        
      </div>
    
  )
}

export default Carga