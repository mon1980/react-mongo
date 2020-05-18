import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {crearNuevoProductoAction} from '../redux/actions/products';

const NuevoProducto = () => {

    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState(0);


    const dispatch = useDispatch();
 

    const agregarProducto = (producto) => dispatch(crearNuevoProductoAction(producto));

    const submitNuevoProducto = e =>{
        e.preventDefault();

        if (nombre.trim() === '' || precio <= 0) {
            return;
        }

        agregarProducto({
            name:nombre,
            price:precio,
            image_path:e.target.image_path.value
        });
    }

    return ( 

  <div className="nuevoProducto">          
   <h2 className="AgregarNuevoProducto">Agregar nuevo producto</h2>
   
   <form onSubmit={submitNuevoProducto}>
       <div classsName="formulario">
           <label>Nombre Producto</label>
           <input type="text" className="form-control" name="nombre" placeholder="Nombre Producto" value={nombre} onChange={e => guardarNombre(e.target.value)}/>      
        </div>

        <div classsName="formulario">
           <label>Precio Producto</label>
           <input type="number" className="form-control" name="precio" placeholder="Precio Producto" value={precio} onChange={e => guardarPrecio( Number (e.target.value))}></input>
        </div>
        <input type="text" name="image_path" placeholder="Introduzca la url de la imagen"/>
        <button className="button" type="submit">Agregar</button>


   </form>

   </div>

     );
}
 
export default NuevoProducto;