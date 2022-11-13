import React from 'react'
import './Caminar.css'
import Sidebar from '../components/Sidebar'

function Caminar() {
  return (
   
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
            <Sidebar/>
            
            <main className="flex items-center lg:col-span-3 xl:col-span-5 bg-gray-100 p-20  overflow-y-scroll">
            
            

        <section className='container d-flex justify-content-center align-items-center h-100'>

     

       
    
    <div className="container">
        <div className="card-body">
            <p className="heading1"> <span className="today">Hoy</span> <span className="float-right headingright">1h 45min</span> </p>
            <p> <input type="checkbox" id="todo" name="todo" value="todo"></input> <span for="todo" data-content="Preparate un desayuno saludable" className="task mt-4">Preparate un desayuno saludable</span><span className="float-right">30min</span><p className="ml-9">Da energia al cuerpo y al cerebro</p> </p>
            <p> <input type="checkbox" id="todo" name="todo" value="todo"></input> <span for="todo" data-content="Bebe agua suficiente" className="task mt-4">Bebe agua suficiente</span><span className="float-right">30min</span><p className="ml-9">Ayuda a tus musculos a trabajar eficientemente</p> </p>
            <p> <input type="checkbox" id="todo" name="todo" value="todo"></input> <span for="todo" data-content="Caminar" className="task mt-4">Caminar</span><span className="float-right">30min</span><p className="ml-9">Manten la velocidad del ritmo</p> </p>
            <p> <input type="checkbox" id="todo" name="todo" value="todo"></input> <span for="todo" data-content="Preparate musica o un podcast" className="task mt-4">Preparate musica o un podcast</span><span className="float-right">15min</span><p className="ml-9">Encuentra algo que escuchar</p> </p>
            <p className="heading2"><span className="tomorrow">Mañana</span> <span className="float-right headingright">6h 30min</span> </p>
            <p className="task2 mt-4"><i className="fa fa-calendar mr-2" aria-hidden="true"></i> <span className="task">Bebe agua suficiente</span> <span className="time ml-2">8:00-8:30AM</span> <span className="float-right">30min</span> <p className="ml-4">Ayuda a tus musculos a trabajar eficientemente</p></p>
            <p className="task2 mt-4"><i className="fa fa-calendar mr-2" aria-hidden="true"></i> <span className="task">Correr</span> <span className="time ml-2">8:00-8:30AM</span> <span className="float-right">30min</span> <p className="ml-4">Manten la velocidad del ritmo</p></p>
            <p className="task2 mt-4"><i className="fa fa-calendar mr-2" aria-hidden="true"></i> <span className="task">Breakfast with the Marketing team</span> <span className="time ml-2">8:00-8:30AM</span> <span className="float-right">30min</span></p>
            
       
        </div>
    </div>



        </section>
        </main>
        </div>

            
  )
}

export default Caminar