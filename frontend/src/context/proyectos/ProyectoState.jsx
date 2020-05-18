import React, { useReducer } from 'react';
import ProyectoContext from './ProyectoContext';
import ProyectoReducer from './ProyectoReducer';
import {FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTO, VALIDAR_FORMULARIO, PROYECTO_ACTUAL, ELIMINAR_PROYECTO} from '../../types';
import uuid from 'react-uuid';

const ProyectoState = props => {

    const proyectos = [

        { id: 1, nombre: 'Tienda Virtual' },
        { id: 2, nombre: 'Intranet' },
        { id: 3, nombre: 'Diseño de paginas web' },
        { id: 4, nombre: 'monica' },
      
    
    ]

    const initialState = {
    proyectos: [],
    nuevoProyecto: false,
    errorformulario: false,
    proyecto: null
    }

    
    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(ProyectoReducer, initialState)

    //serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    //Obtener los proyectos
    const obtenerProyectos = ()=> {
        dispatch({
        type: OBTENER_PROYECTOS,
        payload: proyectos})
    }

    //Agregar nuevo proyecto
   const agregarProyecto = proyecto => {
      proyecto.id = uuid;
   
   //instertar Proyecto en el state
    dispatch({
        type: AGREGAR_PROYECTO,
        payload: proyecto})
    }

    //validar formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO,
        })
    }

    //Selecciona el proyecto que el usuario dio click
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    //Eliminar proyecto
    const eliminarProyecto = proyectoId =>{
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })

    }


    return(

        <ProyectoContext.Provider 
        value={{
            proyectos: state.proyectos,
            nuevoProyecto: state.nuevoProyecto,
            errorformulario: state.errorformulario,
            proyecto: state.proyecto,
            mostrarFormulario,
            obtenerProyectos,
            agregarProyecto,
            mostrarError,
            proyectoActual,
            eliminarProyecto
            }}>
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState;
