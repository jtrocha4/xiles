import React from 'react'
import '../estilos/SeccionPrincipal.css'
import seccionHombre from '../imagenes/seccionHombre.jpg'
import seccionMujer from '../imagenes/seccionMujer.jpg'
import colSeasonimg from '../imagenes/colSeasonimg.gif'
import colSeasonimg2 from '../imagenes/colSeasonimg2.gif'

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

            <div className='row mt-2'>
                <div className='col-2' id='colSeasontxt'>
                    <h1>Nueva Coleccion</h1>
                </div>

                <div className='col' id='colSeasonimg'>
                    <img src={colSeasonimg} alt="" />
                </div>

                <div className='col' id='colSeasonimg2'>
                    <img src={colSeasonimg2} alt="" />
                </div>
            </div>

        </div>
    )
}

export default SeccionPrincipal