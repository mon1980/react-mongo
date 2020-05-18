import React, { useEffect, Fragment } from 'react'
import { getAllProducts } from '../../redux/actions/products'
import {connect} from 'react-redux';
import './Products.scss';

const Products = (props) => {
    useEffect(() => {
        getAllProducts()
        .catch(console.error)
    }, [])
    return (

        <Fragment>
            <h2>Listado de productos</h2>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>acciones</th>


            </tr>


     
        
        <div className="products">
        
            {props.products?.map(product=><div className="product" key={product._id}>
                <span className="nombreProducto"><strong>{product.name}</strong></span>
                <img src={product.image_path} alt=""/>
                <span className="precio">{product.price} €</span>
               
            </div>)}
        </div>

        </Fragment>

    )
}
const mapStateToProps = ({product}) => ({products:product.products})
export default connect(mapStateToProps)(Products)
