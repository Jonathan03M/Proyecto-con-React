import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import Loading from './Carga'

function Login() {

    const [ loading, setLoading] = useState(false)

    const cambiarEstado = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
            
        }, 5000)
    }

    if(loading) {
        return (
            <Loading/>
           
        )
        }

  return (
  <div>
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
  <div className="container max-w-screen-lg mx-auto">
    <div>

      <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
          <div className="text-gray-600">
            <p className="font-medium text-lg">Detalles Personales</p>
            <p>Por favor, responder</p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-3 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5">
                <label htmlFor="full_name">Nombre Completo</label>
                <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" required />
              </div>
          
            

              <div className="md:col-span-3">
                <label htmlFor="address">¿Que meta quieres llegar?</label>
                <select type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50">
                  <option value="0"></option>   
                  <option value="1">Adelgazar</option>
                  <option value="2">Perder grasa corporal</option>
                  <option value="3">Cardio</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="city">Pais</label>
                <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="country">¿Cual es tu estatura?</label>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                 <select name="country" id="country" placeholder="Country" className="px-4  outline-none text-gray-800 w-full bg-transparent">
                  <option value="0"></option>
                  <option value="1">Menos de 160 centimetros</option>
                  <option value="2">Entre 160 centimetros y 180 centimetros</option>
                  <option value="3">Mas de 180 centimetros</option>
                 </select>
                </div>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="state">¿Cual es tu peso?</label>
                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                <select name="country" id="country" placeholder="Country" className="px-4  outline-none text-gray-800 w-full bg-transparent">
                  <option value="0"></option>
                  <option value="1">Menos de 60 kilogramos</option>
                  <option value="2">Entre 60 kilogramos y 90 kilogramos</option>
                  <option value="3">Mas de 90 kilogramos</option>
                 </select>
                </div>
              </div>

              <div className="md:col-span-1">
                <label htmlFor="zipcode">¿Cual es tu edad?</label>
                <input type="number" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=""  />
              </div>

              
      
              <div className="md:col-span-5 text-right">
                <div className="inline-flex items-end">
                  <Link onClick={() => cambiarEstado()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
  )
}

export default Login

