import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";
import Login from './Login';

// reemplazar los a por los <Link> para el enrutamiento

function MenuNavegacion() {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <Link className='navbar-brand mb-0 h1' to='/xiles'>Xiles´s</Link> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#firstNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='collapse navbar-collapse justify-content-center' id='firstNavbar'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <Link className='nav-link' to='/hombre'><li className='nav-item'>Hombre</li></Link>
                            <Link className='nav-link' to='/mujer'><li className='nav-item'>Mujer</li></Link>
                            <Link className='nav-link' to='/tiendas'><li className='nav-item'>Tiendas</li></Link> 
                        </ul>
                        <form className='d-flex' action="">
                            <input className='form-control form-control-sm form-control me-1' type="text" name="" id="" placeholder='Buscar' />
                            <button className='btn btn-outline-light me-2'><i className="bi bi-search"></i></button>

                            {/* Boton de bolsa */}
                            <button className='btn btn-outline-light me-2 '><i className="bi bi-bag"></i></button>
                            {/* Boton de Cuenta */}
                            {/* <button className='btn btn-outline-light'><i className="bi bi-person"></i></button> */}              
                        </form>
                        <Login></Login>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default MenuNavegacion