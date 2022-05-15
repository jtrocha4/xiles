import React from 'react'
import Producto from './Producto'
import '../estilos/SeccionHombre.css'

import camisetaNegra from '../imagenes/camiseta negra-Hombre.jpg'
import jeansNegro from '../imagenes/jeans negro-Hombre.jpg'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
} from 'react-router-dom';


function SeccionHombre() {
    return (
        <div className='container'>
            <h1>Hombre</h1>
            <div className='row'>
                <div className='col-sm-4 col-producto' >
                    <Link to='/' className='text-reset text-decoration-none'><Producto img={camisetaNegra} categoria={'Camiseta'} titulo={'Oversize negro basico'} precio={'40000'}></Producto></Link>
                </div>
                <div className='col-sm-4 col-producto'>
                    <Producto img={jeansNegro} categoria={'Jean'} titulo={'Slim fit negro roto'} precio={'104000'}></Producto>
                </div>

                <div className='col-sm-4'>
                    <button type='button' className='btn btn-outline-dark' data-bs-toggle='modal' data-bs-target='#añadirModal'><i className='bi bi-plus-lg'></i></button>

                    <div className='modal fade' id='añadirModal' aria-hidden='true'>
                        <div className='modal-dialog'>
                            <div className='modal-content'>

                                <div className='modal-header'>
                                    <h5 className='modal-title' id='exampleModalLabel'>Añadir producto</h5>
                                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                                </div>

                                <div className='modal-body'>
                                    <form>
                                        <div className='mb-3'>
                                            <label for='recipient-name' className='col-form-label'>Categoria:</label>
                                            <input type='text' className='form-control' id='recipient-name'/>
                                        </div>
                                        <div className='mb-3'>
                                            <label for='message-text' className='col-form-label'>Titulo:</label>
                                            <input className='form-control' id='message-text'/>
                                        </div>
                                        <div className='mb-3'>
                                            <label for='message-text' className='col-form-label'>Precio:</label>
                                            <input className='form-control' id='message-text'/>
                                        </div>
                                    </form>
                                </div>
                                <div className='modal-footer'>
                                    <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Cancelar</button>
                                    <button type='button' className='btn btn-primary'>Agregar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default SeccionHombre