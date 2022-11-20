import React from 'react'
import { TarjetasData } from '../Data/Data'
import './tarjeta.css'
import Tarjetaaa from './Tarjetita/Tarjetaaa'

function Tarjeta() {
  return (
    <div className="Tarjetas">
        {TarjetasData.map((card, id)=>{
            return (
                <div className="parentContainer" key={id}>
                    <Tarjetaaa
                         title={card.title}
                         color={card.color}
                         barValue={card.barValue}
                         value={card.value}
                         png={card.png}
                         series={card.series}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default Tarjeta