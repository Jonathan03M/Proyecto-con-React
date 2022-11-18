import React, {useRef} from 'react'
import FlechaIzquierda from '../../assets/Izquierdo.jsx'
import FlechaDerecha from '../../assets/Derecha.jsx'
import './Slider.css'







function Slideshow() {
  const slideshow = useRef(null)

  const siguiente = () => {
    if(slideshow.current.children.length > 0){
      const primerElemento = slideshow.current.children[0]

      slideshow.current.style.transition = `3000ms ease-out all`

      slideshow.current.style.transform = `translateX(500px)`
    }
  }
  
  
  const anterior = () => {
    console.log("anterior")
  }


  return (
    <div className="contenedor-principal">
      <div className="contenedor-slider-show" ref={slideshow}>
        <div className="slide">
          
        </div>
      </div>
      <div className="contenedor-slider-show" ref={slideshow}>
        <div className="slide">
          <h1>hola</h1>
        </div>
      </div>


      <div className='controles'>
        <button onClick={anterior} className='boton'>
          <FlechaIzquierda/>
        </button>
        
        <button onClick={siguiente} className='boton-derecho'>
        <FlechaDerecha/>
        </button>

      </div>





    </div>

      
      
  )
}



export default Slideshow
