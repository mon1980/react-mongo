
import {
    GET_ALL_PRODUCTS,
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR

} from "../types";

const initialState = {

    productos: [],
    error: null,
    loading: false

}


export default function (state = initialState, action) {

    switch(action.type){

        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload
        }

        case AGREGAR_PRODUCTO:
            return{
                ...state,
                loading: action.payload
            }
        case AGREGAR_PRODUCTO_EXITO:
             return{
                 ...state,
                 loading: false,
                 products: [...state.products, action.payload]
             }
        case AGREGAR_PRODUCTO_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload


            }

       
        default :
        return state;
    }
}











