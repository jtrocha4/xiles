import React from 'react'
import { nanoid } from 'nanoid'
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
    //Hooks.

    // const [categoria, setCategoria] = React.useState('')
    const [img, setImg] = React.useState('')
    const [categoria, setCategoria] = React.useState('')
    const [titulo, setTitulo] = React.useState('')
    const [precio, setPrecio] = React.useState('')
    const [id, setId] = React.useState('')

    //Objeto donde se estaran agregando todos los productos.
    const [lista, setLista] = React.useState([])

    const [error, setError] = React.useState(null)
    const [modoEdicion, setModoEdicion] = React.useState(false)

    const guardarProducto = (e) => {
        e.preventDefault()
        if (!categoria.trim()) {
            alert("Ingrese la categoria a la cual pertenece el producto")
            setError("Ingrese la categoria a la cual pertenece el producto")
            return
        }
        if (!titulo.trim()) {
            alert("Ingrese el titulo del producto")
            setError("Ingrese el titulo del producto")
            return
        }
        if (!precio.trim()) {
            alert("Ingrese el precio del producto")
            setError("Ingrese el precio del producto")
            return
        }
        console.log(categoria + "" + " " + titulo + " " + precio)

        //Agregar a la lista.
        setLista(
            [...lista, { id: nanoid(4), categoria, titulo, precio, img }]
        )

        //Limpiar estados y formulario.
        setImg('')
        setCategoria('')
        setTitulo('')
        setPrecio('')
        setError(null)
    }

    const eliminarProducto = (id) => {
        //Lista filtrada.
        const listaFiltrada = lista.filter((elemento) => elemento.id !== id)
        //Lista actualizada.
        setLista(listaFiltrada)
    }

    return (
        <div className='container'>
            <h1>Hombre</h1>
            <div className='row'>
                {/* <div className='col-sm-4 col-producto' >
                    <Link to='/' className='text-reset text-decoration-none'><Producto img={camisetaNegra} categoria={'Camiseta'} titulo={'Oversize negro basico'} precio={'40000'}></Producto></Link>
                </div>
                <div className='col-sm-4 col-producto'>
                    <Producto img={jeansNegro} categoria={'Jean'} titulo={'Slim fit negro roto'} precio={'104000'}></Producto>
                </div> */}
                
                    {

                        lista.map(
                            (elemento) => (
                                // <Producto key={elemento.id} img={elemento.img} categoria={elemento.categoria} titulo={elemento.titulo} precio={elemento.precio}></Producto>
                                <div className="col-sm-4 col-producto" key={elemento.id}>
                                    <div className='container-fluid'>
                                        <button className='btn btn-danger mx-1 my-1 float-end' onClick={() => eliminarProducto(elemento.id)}>
                                            <i className='bi bi-trash3'></i>
                                        </button>
                                        <button className='btn btn-success mx-1 my-1 float-end' >
                                            <i className='bi bi-pencil'></i>
                                        </button>
                                        <div className="productoImg">
                                            <img className='img-fluid mt-2' src={`${elemento.img}`} alt="" />
                                            <div className="productoDetalle">
                                                <h4>{elemento.categoria}</h4>
                                                <h6>{elemento.titulo}</h6>
                                                <h6>{elemento.precio}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    
                            )
                        )
                    }
                

                <div className='col-sm-4 mt-2'>
                    <button type='button' className='btn btn-outline-dark' data-bs-toggle='modal' data-bs-target='#añadirModal'><i className='bi bi-plus-lg'></i></button>

                    <div className='modal fade' id='añadirModal' aria-hidden='true'>
                        <div className='modal-dialog'>
                            <div className='modal-content'>

                                <div className='modal-header'>
                                    <h5 className='modal-title' id='exampleModalLabel'>Añadir producto</h5>
                                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                                </div>

                                <div className='modal-body'>
                                    <form onSubmit={guardarProducto}>

                                        <div className='mb-3'>
                                            <label for='recipient-name' className='col-form-label'>img:</label>
                                            <input type='url' className='form-control' name='img' id='recipient-name' onChange={(e) => { setImg(e.target.value) }} value={img} />
                                        </div>

                                        <div className='mb-3'>
                                            <label for='recipient-name' className='col-form-label'>Categoria:</label>
                                            <input type='text' className='form-control' name='categoria' id='recipient-name' onChange={(e) => { setCategoria(e.target.value) }} value={categoria} />
                                        </div>
                                        <div className='mb-3'>
                                            <label for='message-text' className='col-form-label'>Titulo:</label>
                                            <input className='form-control' name='titulo' id='message-text' onChange={(e) => { setTitulo(e.target.value) }} value={titulo} />
                                        </div>
                                        <div className='mb-3'>
                                            <label for='message-text' className='col-form-label'>Precio:</label>
                                            <input type='number' className='form-control' name='precio' id='message-text' onChange={(e) => { setPrecio(e.target.value) }} value={precio} />
                                        </div>
                                        <div className='modal-footer'>
                                            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Cancelar</button>
                                            <button type='sumbit' className='btn btn-primary'>Agregar</button>
                                        </div>
                                    </form>
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