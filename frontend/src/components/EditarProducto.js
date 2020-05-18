import React from 'react';

const EditarProducto = () => {
    return ( 

<div className="nuevoProducto">          
   <h2 className="EditarNuevoProducto">Editar nuevo producto</h2>
   
   <form>
       <div classsName="formulario">
           <label>Nombre Producto</label>
           <input type="text" className="form-control" name="nombre" placeholder="Nombre Producto"/>      
        </div>

        <div classsName="formulario">
           <label>Precio Producto</label>
           <input type="number" className="form-control" name="precio" placeholder="Precio Producto"></input>
        </div>

        <button className="button" type="submit">Guardar cambios</button>


   </form>

   </div>

     );
}



 
export default EditarProducto;