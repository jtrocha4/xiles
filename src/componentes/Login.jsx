import React from 'react'
import { auth, db } from '../firebase'

function Login() {
    const [modoRegistro, setmModoRegistro] = React.useState(true)
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState(null)
    const [exito, setExito] = React.useState(null)

    const [user, setUser] = React.useState(null)

    const guardarDatos = (e) => {
        e.preventDefault()

        if (!email.trim()) {
            setError("Ingrese su email")
            return;
        }

        if (!password.trim()) {
            setError("Ingrese su contraseña")
            return;
        }

        if (password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres")
            return;
        }

        setError(null)
        if (modoRegistro) {
            registrarUsuario()

        } else {
            login()
        }

    }

    const login = React.useCallback(async () => {
        try {
            const respuesta = await auth.signInWithEmailAndPassword(email, password)
            console.log(respuesta.user)

            //Limpiar los estados
            setEmail('')
            setPassword('')
            setError(null)
            console.log('Sesion iniciada')

        } catch (error) {
            console.log(error)
            if (error.code === 'auth/invalid-email') {
                setError("La direccion de correo electronico no es valida")
            }

            if (error.code === 'auth/user-not-found') {
                setError("Este usuario no esta registrado")
            }

            if (error.code === 'auth/wrong-password') {
                setError("Contraseña incorrecta.")
            }
        }
    }, [email, password])

    const registrarUsuario = React.useCallback(async () => {
        try {
            const respuesta = await auth.createUserWithEmailAndPassword(email, password)

            console.log(respuesta.user)
            //doc(respuesta.user.email) es el identificador en la base de datos
            await db.collection('usuarios').doc(respuesta.user.email).set({
                email: respuesta.user.email,
                id: respuesta.user.uid,
            })
            setExito('El registro se ha realizado de manera exitosa')
            //Limpiar los estados
            setEmail('')
            setPassword('')
            setError(null)

        } catch (error) {
            console.log(error)
            if (error.code === 'auth/invalid-email') {
                setError("La direccion de correo electronico no es valida")
            }
            if (error.code === 'auth/email-already-in-use') {
                setError("La direccion de correo electronico ya se encuentra registrada")
            }
        }
    }, [email, password])

    const cerrar = () => {
        setExito(null)
    }

    return (
        <>

            <button type='button' className='btn btn-outline-light' data-bs-toggle='modal' data-bs-target='#loginModal' title='Acceder o registrarse'><i className='bi bi-person'></i></button>

            <div className='modal fade' id='loginModal' aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>

                        <div className='modal-header p-5 pb-4 border-bottom-0'>
                            <h2 className='fw-bold mb-0'>{modoRegistro ? 'Registrarse' : 'Iniciar Sesion'}</h2>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' onClick={cerrar}></button>
                        </div>

                        <div className='modal-body p-5 pt-0'>
                            {
                                error ? <div className='alert alert-danger'> <i className='bi bi-exclamation-triangle '></i> {error}</div> : null
                            }
                            {
                                exito ? <div className='alert alert-success'> <i className='bi bi-check-circle '></i> {exito}</div> : null
                            }

                            <form onSubmit={guardarDatos}>

                                <div className='form-floating mb-3'>
                                    <input type='email' className='form-control rounded-3' placeholder='Correo electronico' onChange={e => setEmail(e.target.value)} value={email} />
                                    <label htmlFor="floatingInput">Correo electronico</label>
                                </div>

                                <div className='form-floating mb-3'>
                                    <input type='password' className='form-control rounded-3' placeholder='Contraseña' onChange={e => setPassword(e.target.value)} value={password} />
                                    <label htmlFor="floatingInput">Contraseña</label>
                                </div>
                                <div className='d-grid gap-2'>
                                    <button className='w-100 mb-2 btn btn-lg rounded-3 btn-primary'>
                                        {
                                            modoRegistro ? 'Registrarse' : 'Ingresar'
                                        }
                                    </button>

                                    <button type='button' className='w-100 mb-2 btn btn-lg rounded-3 btn-primary' onClick={() => { setmModoRegistro(!modoRegistro) }}>
                                        {
                                            modoRegistro ? 'Ya tienes una cuenta ?' : 'Aun no tienes una cuenta ?'
                                        }
                                    </button>
                                    <small className="text-muted">Al hacer clic en registrarse, acepta los términos de uso.</small>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login