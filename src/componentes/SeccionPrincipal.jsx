import React from 'react'
import '../estilos/SeccionPrincipal.css'
import seccionHombre from '../imagenes/seccionHombre.jpg'
import seccionMujer from '../imagenes/seccionMujer.jpg'
import colSeasonimg from '../imagenes/colSeasonimg.gif'
import colSeasonimg2 from '../imagenes/colSeasonimg2.gif'
import Footer from './Footer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes
} from "react-router-dom";

function SeccionPrincipal() {
    return (

        <div className='container-fluid mt-2'>
            <div className='row'>
                <div className='col-sm-6' id='col1' >
                    <img className='img-fluid' src={seccionHombre} alt="" id='seccionHombreimg' />
                    <div id='hombrebtn'>
                        <button type='button' className='btn btn-outline-light'>
                            <Link to='/hombre' className='text-reset text-decoration-none'>Hombre</Link>
                        </button>
                    </div>
                </div>

                <div className='col-sm-6' id='col2'>
                    <img className='img-fluid' src={seccionMujer} alt="Mujer" id='seccionMujerimg' />
                    <div id='mujerbtn'>
                        <button type='button' className='btn btn-outline-light'>
                            <Link to='/mujer' className='text-reset text-decoration-none'>Mujer</Link>
                        </button>
                    </div>
                </div>
            </div>

            <div className='row mt-2'>
                <div className='col-sm-4' id='colSeasontxt'>
                    <h1>Nueva Coleccion</h1>
                </div>

                <div className='col-sm-4' id='colSeasonimg'>
                    <img className='img-fluid' src={colSeasonimg} alt="" />
                </div>

                <div className='col-sm-4' id='colSeasonimg2'>
                    <img className='img-fluid' src={colSeasonimg2} alt="" />
                </div>
            </div>
        </div>


    )
}

export default SeccionPrincipal