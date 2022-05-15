import React from 'react'
import hombreimg from '../imagenes/seccionHombre.jpg'


function Producto({img,categoria, titulo, precio}) {
    return (
        <div className='container-fluid'>
            <div className="productoImg">
                <img className='img-fluid mt-2' src={img} alt="" />
                <div className="productoDetalle">
                    <h4>{categoria}</h4>
                    <h6>{titulo}</h6>
                    <h6>{precio}</h6>
                </div>
            </div>
        </div>
    )
}

export default Producto