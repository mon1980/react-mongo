import React from 'react';
import NuevoProyecto from '../Proyectos/NuevoProyecto';
import ListadoProyectos from '../Proyectos/ListadoProyectos';
import './Sidebar.scss';

const Sidebar  = () => {
    return (
     <aside>
   <h1>Gestión de Proyectos</h1>
   <NuevoProyecto />
   <div className="proyectos">
       <h2>Tus Proyectos</h2>
  <ListadoProyectos />

   </div>


     </aside>



      );
}
 
export default Sidebar ;