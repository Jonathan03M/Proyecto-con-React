import React from 'react'
import Sidebar3 from './components/Sidebar3'
import {DatePicker} from '@material-ui/pickers'
import '../Paginas/components/Tercero.css'
import {TimePicker} from '@material-ui/pickers'
import {DateTimePicker} from '@material-ui/pickers'

function Tercero() {
 

return (

    <div className="grid lg:grid-cols-4 xl:grid-cols-6">
    <Sidebar3/>
    
    
    <main className="flex items-center lg:col-span-3 xl:col-span-5">


<section className='container d-flex justify-content-center  h-100'>

    <div className='contenedor'>
        <div className='grupo'>
            <label>Fecha</label>
            <DatePicker/>
        </div>
        <div className='grupo'>
            <label>Hora</label>
            <TimePicker/>
        </div>
        <div className='grupo'>
            <label>Fecha y Hora</label>
            <DateTimePicker/>
        </div>
    

    </div>

</section>
</main>
</div>
    
    )
}

export default Tercero