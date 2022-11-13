import React from 'react'
import Sidebar3 from './components/Sidebar3'
import '../Paginas/components/Tercero.css'


function Tercero() {
 

return (

    <div className="grid lg:grid-cols-4 xl:grid-cols-6">
    <Sidebar3/>
    
    
    <main className="flex items-center lg:col-span-3 xl:col-span-5">


<section className='container d-flex justify-content-center  h-100'>

    <div className='contenedor'>
    <div class="scene">
    <div class="book-wrap">
      <div class="left-side">
        <div class="book-cover-left"></div>
        <div class="layer1">
          <div class="page-left"></div>
        </div>
        <div class="layer2">
          <div class="page-left"></div>
        </div>
        <div class="layer3">
          <div class="page-left"></div>
        </div>
        <div class="layer4">
          <div class="page-left"></div>
        </div>
        <div class="layer-text">
          <div class="page-left-2">
            <div class="corner"></div>
            <div class="corner2"></div>
            <div class="corner-fold"></div>
            <div class="page-text w-richtext">
              <h3><strong>Habitos a seguir</strong></h3>
              <h5>‍-Realizar ejercicio.</h5>
              <p>No hace falta que todos los días se realicen actividades físicas, pero al menos caminar durante 30 minutos cuatro veces por semana, es lo básico para mantener el cuerpo activo.</p>
              <h5>Dormir ocho horas</h5>
              <p>-Parece algo lógico, pero con los horarios de la sociedad actual en los que hay que compaginar trabajo, ocio y relaciones familiares, puede ser muy difícil. Si esto no se produce aparecerán síntomas de estrés y cansancio.</p>
              <h5>Evitar el abuso de la tecnologia</h5>
              <p>Ya sean los teléfonos móviles, tablets u ordenadores, son dispositivos que estamos todo el día viendo y que condicionan nuestra vida. El no estar pendientes de ellos dan opciones a poder hacer otras actividades (como ejercicio físico, la lectura o incluso el descanso).</p>
            </div>
          </div>
        </div>
      </div>
      <div class="center"></div>
      <div class="right-side">
        <div class="book-cover-right"></div>
        <div class="layer1">
          <div class="page-right"></div>
        </div>
        <div class="layer2 right">
          <div class="page-right"></div>
        </div>
        <div class="layer3 right">
          <div class="page-right"></div>
        </div>
        <div class="layer4 right">
          <div class="page-right"></div>
        </div>
        <div class="layer-text right">
          <div class="page-right-2">
            <div class="page-text w-richtext">
              <h5><strong>¿Sabias Que?</strong></h5>
              <h4>‍Miel para llenarte de energia</h4>
              <p>Si buscas una alternativa saludable al azúcar de mesa, la miel es una gran opción. Entre sus múltiples propiedades, este alimento es una gran fuente de energía o puede ayudarte a suavizar la tos. ¡Pruébalo! </p>
              <h4>Huesos fuertes</h4>
              <p>‍Aunque la leche es una indiscutible fuente de calcio, hay muchos otros alimentos donde encontrar este mineral. Entre ellos las espinacas, la cebolla, el brócoli, las legumbres, las nueces, el yogur, los quesos, el huevo, las sardinas, el marisco y las galletas tipo María.</p>
              <h4>¿Sed o Hambre?</h4>
              <p>Aunque suene extraño, muchas personas confundimos la sed con el hambre, lo que nos lleva a comer más. Por ello, se recomienda tomar un vaso de agua antes de las comidas, de forma que calmemos el hambre y no comamos más de lo que necesitamos.‍</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


    </div>

</section>
</main>
</div>
    
    )
}

export default Tercero