import React from 'react'

function Footer() {
    return (
        <div className='container-fluid'>
            <footer className='row py-4 my-4 border-top bg-dark'>
                <div className='col-md-4 mb-0 text-muted'>
                    <p>&copy; 2022 Xiles´s Company, Inc</p>
                </div>

                <div className='col'>
                    <h5 className='text-muted'>Siguenos:</h5>
                    <ul className='nav flex-column'>
                        <li className='nav-item'><a className='nav-link text-muted' href="https://www.instagram.com/"><i className='bi bi-instagram'> Instagram</i></a></li>
                        <li className='nav-item' ><a className='nav-link text-muted' href="https://www.facebook.com/"><i className='bi bi-facebook'> Facebook</i></a></li>
                        <li className='nav-item' ><a className='nav-link text-muted' href="https://twitter.com/?lang=es"><i className='bi bi-twitter'> Twitter</i></a></li>
                    </ul>
                </div>

                <div className='col'>
                    <h5 className='text-muted'>Quienes Somos</h5>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam neque placeat optio eaque molestias. Ratione sit, commodi, soluta labore accusamus maiores voluptas, blanditiis a quos similique ea voluptatum ipsam ullam.</p>
                </div>

            </footer>
        </div>
    )
}

export default Footer