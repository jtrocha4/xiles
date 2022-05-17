import React from 'react'
import { nanoid } from 'nanoid'

function SeccionMujer() {
    //Hooks.
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
        if (!img.trim()) {
            alert("Ingrese la ubicacion de la imagen del producto")
            setError("Ingrese la ubicacion de la imagen del producto")
            return
        }
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

    const cancelarEdicion = () => {
        setModoEdicion(false)
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

    const editar = (elemento) => {
        setModoEdicion(true)
        setImg(elemento.img)
        setCategoria(elemento.categoria)
        setTitulo(elemento.titulo)
        setPrecio(elemento.precio)
        setId(elemento.id)
    }

    const editarProducto = (e) => {
        e.preventDefault()
        if (!img.trim()) {
            alert("Ingrese la ubicacion de la imagen del producto")
            setError("Ingrese la ubicacion de la imagen del producto")
            return
        }
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

        const listaEditada = lista.map(
            (elemento) => elemento.id === id ? { id: id, img: img, categoria: categoria, titulo: titulo, precio: precio } : elemento
        )
        setLista(listaEditada)//Listando nuevos valores
        setModoEdicion(false)
        setImg('')
        setCategoria('')
        setTitulo('')
        setPrecio('')
        setError(null)
    }

    return (
        <div className='container'>
            <h1>Mujer</h1>
            <div className='row'>
                {
                    lista.map(
                        (elemento) => (
                            // <Producto key={elemento.id} img={elemento.img} categoria={elemento.categoria} titulo={elemento.titulo} precio={elemento.precio}></Producto>
                            <div className="col-sm-4 col-producto" key={elemento.id}>
                                <div className='container-fluid'>
                                    <button className='btn btn-danger mx-1 my-1 float-end' onClick={() => eliminarProducto(elemento.id)}>
                                        <i className='bi bi-trash3'></i>
                                    </button>
                                    <button className='btn btn-success mx-1 my-1 float-end' data-bs-toggle='modal' data-bs-target='#AbrirModal' onClick={() => editar(elemento)} >
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
                    <button type='button' className='btn btn-outline-dark' data-bs-toggle='modal' data-bs-target='#AbrirModal'><i className='bi bi-plus-lg'></i></button>

                    <div className='modal fade' id='AbrirModal' aria-hidden='true'>
                        <div className='modal-dialog'>
                            <div className='modal-content'>

                                <div className='modal-header'>
                                    <h5 className='modal-title' id='exampleModalLabel'>{modoEdicion ? 'Editar Producto' : 'Añadir producto'}</h5>
                                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' onClick={() => cancelarEdicion()}></button>
                                </div>

                                <div className='modal-body'>
                                    <form onSubmit={modoEdicion ? editarProducto : guardarProducto}>

                                        <div className='mb-3'>
                                            <label htmlFor='recipient-name' className='col-form-label'>img:</label>
                                            <input type='url' className='form-control' name='img' id='recipient-name' onChange={(e) => { setImg(e.target.value) }} value={img} />
                                        </div>

                                        <div className='mb-3'>
                                            <label htmlFor='recipient-name' className='col-form-label'>Categoria:</label>
                                            <input type='text' className='form-control' name='categoria' id='recipient-name' onChange={(e) => { setCategoria(e.target.value) }} value={categoria} />
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor='message-text' className='col-form-label'>Titulo:</label>
                                            <input className='form-control' name='titulo' id='message-text' onChange={(e) => { setTitulo(e.target.value) }} value={titulo} />
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor='message-text' className='col-form-label'>Precio:</label>
                                            <input type='number' className='form-control' name='precio' id='message-text' onChange={(e) => { setPrecio(e.target.value) }} value={precio} />
                                        </div>
                                        <div className='modal-footer'>
                                            <button type='button' className='btn btn-secondary' data-bs-dismiss='modal' onClick={() => cancelarEdicion()}>Cancelar</button>
                                            <button type='sumbit' className='btn btn-primary'>{modoEdicion ? 'Editar' : 'Añadir'}</button>
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

export default SeccionMujer