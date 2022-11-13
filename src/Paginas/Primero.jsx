
import React, {useState} from 'react';
import Sidebar from './components/Sidebar'
import './Primero.css'
import TodoList from './reciclado/TodoList';
import TodoAdd from './reciclado/TodoAdd';
import { useTodo } from './Hooks/useTodo';







function Primero() {

  const {  todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo } = useTodo()

return (
    


    <div className=" grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
    <Sidebar />
    <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-4  overflow-y-scroll">

     
      <section className="">
      
        <div className=" container m-4 p-5 rounded mx-auto bg-light shadow">
        
       
   <div className='card-to-do'>
      <h1>Lista de habitos</h1>
      <div className='counter-todos'>
        <h3>N° Habitos: <span>{todosCount}</span></h3>
        <h3>Pendientes: <span>{pendingTodosCount}</span></h3>
        
      </div>
      <div className='add-todo'>
        <h3>Agregar Habito</h3>
        <TodoAdd handleNewTodo={handleNewTodo}/>
      </div>
      <TodoList 
        todos={todos}
        handleUpdateTodo={handleUpdateTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
      />
   </div>

               

     
   
</div>
      
      </section>
    </main>
  </div>
      
);
}

export default Primero





