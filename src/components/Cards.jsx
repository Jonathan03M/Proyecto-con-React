import React from 'react'
import Card from './Card'
import Logo from '../logos/Logo.jsx'
import Logo2 from '../logos/Logo2.jsx'
import Logo3 from '../logos/Logo3.jsx'
import './Cards.css'


const cards = [
  {
    id: 1,
    title: 'Hacer ejercicio',
    image:  <Logo3/>,
    descripcion: 'Una de las mejores cosas que puedes hacer para mejorar tu salud y perder peso es comenzar a hacer ejercicio todos los dias',
    
  },
  {
  id: 2,
  title: 'Bebe agua',
  image:  <Logo/>,
  descripcion: 'Durante los proximos 3 dias, Bebe Agua al levantarte para dar un impulso inicial a tu cuerpo y comenzar el dia con un exito',
},
  {
    id: 3,
    title: 'Buena alimentacion',
    image: <Logo2/>,
    descripcion: 'Comer una dieta rica en frutas y verduras como parte de una dieta saludable puede reducir el riesgo de enfermedades del corazon',
}
]

function Cards() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
        {
          cards.map(card => (
            <div className="col-md-4">
              <Card title={card.title} animacionJSON={card.image} descripcion={card.descripcion} />
            </div>
          ))
        }
      </div>
    
    </div>
  )
}

export default Cards