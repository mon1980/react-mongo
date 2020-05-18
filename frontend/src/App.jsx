import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './containers/user/Login/Login';
import Register from './containers/user/Register/Register';
import PrivateZone from './guards/PrivateZone';
import Home from './containers/Home/Home';
import Header from './components/Header/Header';
import Products from './containers/Products/Products';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';

const App = () => {
    return (<BrowserRouter>   
        <Header />
        <Switch>
            <Route path='/products' component={Products} exact />
            <Route path='/productos/nuevo' component={NuevoProducto} exact />
            <Route path='/productos/editar/:id' component={EditarProducto} exact />
            <Route path='/login' component={Login} exact />
            <Route path='/register' component={Register} exact />
        
            <PrivateZone>
                <Route path='/' component={Home} exact />
            </PrivateZone>
        </Switch>
    </BrowserRouter>);
}

export default App;


