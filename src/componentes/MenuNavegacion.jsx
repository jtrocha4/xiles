import React from 'react'

function MenuNavegacion() {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container-fluid'>
                    <a className='navbar-brand mb-0 h1' href="">Xiles´s</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#firstNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className='collapse navbar-collapse' id='firstNavbar'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'><a className='nav-link' href="">Hombre</a></li>
                            <li className='nav-item'><a className='nav-link' href="">Mujer</a></li>
                            <li className='nav-item'><a className='nav-link' href="">Tiendas</a></li>
                        </ul>
                        <form className='d-flex' action="">
                            <input className='form-control form-control-sm form-control me-1' type="text" name="" id="" placeholder='Buscar' />
                            <button className='btn btn-outline-light me-2'><i className="bi bi-search"></i></button>

                            {/* Boton de bolsa */}
                            <button className='btn btn-outline-light me-2'><i className="bi bi-bag"></i></button>
                            {/* Boton de Cuenta */}
                            <button className='btn btn-outline-light'><i className="bi bi-person"></i></button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default MenuNavegacion