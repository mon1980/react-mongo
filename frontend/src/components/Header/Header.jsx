import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import { Badge } from 'antd';
import { connect } from 'react-redux'
import { logout } from '../../redux/actions/users';
const Header = (props) => {

    return (
        <header className="header">
            <NavLink to='/' exact>Home</NavLink>
            <NavLink to='/products' exact>Products</NavLink>
            <NavLink to='/productos/nuevo' exact>Agregar Producto &#43;</NavLink>
            {props.user ?
                <div className="userZone">
                    <NavLink to='/profile' exact>{props.user.email}</NavLink>
                    <div onClick={logout}>Logout</div>
                </div>
                :
                <div className="guestZone" >
                    <NavLink to='/login' exact>Login</NavLink>
                    <NavLink to='/register' exact>Register</NavLink>
                </div>
            }
            <Badge count={props.cart?.length}>
            </Badge>
        </header>
    )
}
// const mapStateToProps = (state) => ({ user: state.user.user })
const mapStateToProps = ({ user,product }) => ({ user: user.user, cart:product.cart })
export default connect(mapStateToProps)(Header);
