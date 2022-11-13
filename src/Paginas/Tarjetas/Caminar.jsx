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
             <h6><input type="checkbox" id="todo" name="todo" value="todo"></input> <span data-content="Preparate un desayuno saludable" className="task mt-4">Preparate un desayuno saludable</span><span className="float-right">30min</span><p className="ml-9">Da energia al cuerpo y al cerebro</p></h6> 
             <h6><input type="checkbox" id="todo" name="todo" value="todo"></input> <span  data-content="Bebe agua suficiente" className="task mt-4">Bebe agua suficiente</span><span className="float-right">30min</span><p className="ml-9">Ayuda a tus musculos a trabajar eficientemente</p> </h6>
            <h6> <input type="checkbox" id="todo" name="todo" value="todo"></input> <span  data-content="Caminar" className="task mt-4">Caminar</span><span className="float-right">30min</span><p className="ml-9">Manten la velocidad del ritmo</p> </h6>
            
            <h6 className="heading2"><span className="tomorrow">Mañana</span> <span className="float-right headingright">2h</span> </h6>
            <h6 className="task2 mt-4"> <span className="task">Bebe agua suficiente</span> <span className="time ml-2">8:00-8:30AM</span> <span className="float-right">30min</span> <p className="ml-2">Ayuda a tus musculos a trabajar eficientemente</p></h6>
            <h6 className="task2 mt-4"> <span className="task">Correr</span> <span className="time ml-2">8:00-8:30AM</span> <span className="float-right">1hr</span> <p className="ml-2">Manten la velocidad del ritmo</p></h6>
            <h6 className="task2 mt-4"> <span className="task">Preparate la ropa para mañana</span> <span className="time ml-2">8:00-8:30AM</span> <span className="float-right">30min</span> <p className="ml-2">Haz que tu mañana vaya como la seda</p></h6>
            
       
        </div>
    </div>



        </section>
        </main>
        </div>

            
  )
}

export default Caminar