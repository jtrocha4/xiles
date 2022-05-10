import React from 'react'
import '../estilos/SeccionTiendas.css'

function SeccionTiendas() {
    return (
        <div className='container-fluid mt-2'>
            <div class="row">
                <div class="col-sm-12">
                    <h5>Estamos ubicados en</h5>
                </div>
                <div class="col-sm-6">
                    <h5><i className='bi bi-geo-alt-fill'></i> Barranquilla</h5>
                    <ul>
                        <li>xxx-xxx-xxx</li>
                    </ul>
                </div>
                <div class="col-sm-6">
                    <h5><i className='bi bi-geo-alt-fill'></i> Cartagena</h5>
                    <ul>
                        <li>xxx-xxx-xxx</li>
                    </ul>
                </div>
                <div class="col-sm-6">
                    <h5><i className='bi bi-geo-alt-fill'></i> Santa Marta</h5>
                    <ul>
                        <li>xxx-xxx-xxx</li>
                    </ul>
                </div>
                <div class="col-sm-12">
                    <h5><i className='bi bi-clock'></i> Horarios</h5>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miercoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>8:30Am-9:00Pm</td>
                                <td>8:30Am-9:00Pm</td>
                                <td>8:30Am-9:00Pm</td>
                                <td>8:30Am-9:00Pm</td>
                                <td>8:30Am-9:00Pm</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='table table-striped'>
                        <thead >
                            <tr>
                                <th>Sábado</th>
                                <th>Domingo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>10:00Am-8:00Pm</td>
                                <td>10:00Am-5:00Pm</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SeccionTiendas