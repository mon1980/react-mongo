import {
    GET_ALL_PRODUCTS,
    ADD_CART,
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    DELETE_PRODUCT
} from "../types";


import axios from 'axios';
import store from '../store'



export const getAllProducts = async() => {
    const token = localStorage.getItem('authToken');
    const res = await axios.get('/products', {
        headers: {
            Authorization: token
        }
    });
    store.dispatch({
        type: GET_ALL_PRODUCTS,
        payload: res.data
    })
}
export const addCart = ({ _id }) => {
    const { product } = store.getState();
    if (!product.cart.includes(_id)) {
        store.dispatch({
            type: ADD_CART,
            payload: _id
        })
    }
}

export const crearNuevoProductoAction = (producto)=> {
    return  async (dispatch) => {
        dispatch(agregarProducto());
        try {
            const token = localStorage.getItem('authToken');
            const res= await axios.post('/products',producto, {
                headers: {
                    Authorization: token
                }
            });
           dispatch (agregarProductoExito(res.data))
        } catch (error){
            console.log(error)
           dispatch (agregarProductoError(true));

        }
    }
}

const agregarProducto = () =>({
    type: AGREGAR_PRODUCTO,
    payload: true

});

const agregarProductoExito = producto => ({

    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado


})

export const deleteOneProduct = async(product_id)=>{
    const token = localStorage.getItem('token');
    await axios.delete('/products/'+product_id, {
        headers: {
            Authorization: token
        }
    })
    store.dispatch({
        type:DELETE_PRODUCT
    })
    return getAllProducts();
}

