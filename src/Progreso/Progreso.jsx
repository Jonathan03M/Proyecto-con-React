import Table  from './Table/Table'
import {React} from 'react'
import Sidebar5 from '../Paginas/components/Sidebar5'
import './progreso.css'
import Tarjeta from './Tarjetas/Tarjeta'


function Progreso() {



  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6">
    <Sidebar5/>
    
    <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-4  overflow-y-scroll">

     
<section className="">

  <div className=" container m-9 p-5 rounded mx-auto bg-light shadow">
     <div className="MainDash">
        <h1>Progreso</h1>
        <Tarjeta/>
        
        <Table/>
     </div>



        </div>
    </section>
    </main>
    </div>
  )
}

export default Progreso