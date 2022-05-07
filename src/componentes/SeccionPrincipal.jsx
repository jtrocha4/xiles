import React from 'react'
import '../estilos/SeccionPrincipal.css'
import seccionHombre from '../imagenes/seccionHombre.jpg'
import seccionMujer from '../imagenes/seccionMujer.jpg'

function SeccionPrincipal() {
    return (
        <div className='container-fluid mt-2'>
            <div className='row'>
                <div className='col-sm-6' id='col1' >
                    <img src={seccionHombre} alt="" id='seccionHombreimg' />
                    <div id='hombrebtn'>
                        <button type='button' className='btn btn-outline-light'>Hombre</button>
                    </div>
                </div>

                <div className='col-sm-6' id='col2'>
                    <img src={seccionMujer} alt="Mujer" id='seccionMujerimg' />
                    <div id='mujerbtn'>
                        <button type='button' className='btn btn-outline-light'>Mujer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeccionPrincipal