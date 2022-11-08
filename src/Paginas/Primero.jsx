
import React, {useState} from 'react';
import Sidebar from './components/Sidebar'
import Checkbox from './components/Checkbox';





function Primero() {

 const [toggle, setToggle] = useState(false)

return (
    


    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
    <Sidebar />
    <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-6  overflow-y-scroll">

     
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
      
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
        
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <div className="flex items-center gap-1 mb-1">
              <div>
                <h3 className="font-bold">Tarea:</h3>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-1">
              <div>
                <h3 className="font-bold">Beber agua</h3>
                <p className="text-gray-500">Hazlo 3 veces esta semana</p>
                <div className='flex align-items-center gap-3'>
                <Checkbox/>
              <Checkbox/>
              <Checkbox />
                </div>
              
              </div>
            </div>
            <div className="flex justify-end align-items-center gap-9">
              
            <button onClick={() => setToggle(!toggle)} className="btn btn-danger hover:underline">
              Cambiar de tarea
            </button>
            </div>
          </div>
        </div>
        {toggle && (
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
        
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <div className="flex items-center gap-1 mb-1">
            <div>
              <h3 className="font-bold">Tarea:</h3>
            </div>
          </div>
          <div className="flex items-center gap-1 mb-1">
            <div>
              <h3 className="font-bold">Beber agua</h3>
              <p className="text-gray-500">Hazlo 3 veces esta semana</p>
              <div className='flex align-items-center gap-3'>
              <Checkbox/>
            <Checkbox/>
            <Checkbox />
              </div>
            
            </div>
          </div>
          <div className="flex justify-end align-items-center gap-9">
            
            <button onClick={() => setToggle(!toggle)} className="btn btn-danger hover:underline">
              Cambiar de tarea
            </button>
          </div>
        </div>
      </div>)}
      {toggle && (
      <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
        
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <div className="flex items-center gap-1 mb-1">
            <div>
              <h3 className="font-bold">Tarea:</h3>
            </div>
          </div>
          <div className="flex items-center gap-1 mb-1">
            <div>
              <h3 className="font-bold">Beber agua</h3>
              <p className="text-gray-500">Hazlo 3 veces esta semana</p>
              <div className='flex align-items-center gap-3'>
              <Checkbox/>
            <Checkbox/>
            <Checkbox />
              </div>
            
            </div>
          </div>
          <div className="flex justify-end align-items-center gap-9">
            
            <button className="btn btn-danger hover:underline">
              Cambiar de tarea
            </button>
          </div>
        </div>
      </div>
      )}
      {toggle && (
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
        
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <div className="flex items-center gap-1 mb-1">
              <div>
                <h3 className="font-bold">Tarea:</h3>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-1">
              <div>
                <h3 className="font-bold">Beber agua</h3>
                <p className="text-gray-500">Hazlo 3 veces esta semana</p>
                <div className='flex align-items-center gap-3'>
                <Checkbox/>
              <Checkbox/>
              <Checkbox />
                </div>
              
              </div>
            </div>
            <div className="flex justify-end align-items-center gap-9">
              
              <button className="btn btn-danger hover:underline">
                Cambiar de tarea
              </button>
            </div>
          </div>
        </div>
      )}
      </section>
    </main>
  </div>
      
);
}

export default Primero





