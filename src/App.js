import './App.css';
import MenuNavegacion from './componentes/MenuNavegacion';
import 'bootstrap/dist/css/bootstrap.min.css';
import SeccionPrincipal from './componentes/SeccionPrincipal';
import Footer from './componentes/Footer';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import SeccionTiendas from './componentes/SeccionTiendas';
import SeccionHombre from './componentes/SeccionHombre';
import SeccionMujer from './componentes/SeccionMujer';
import { auth, db } from './firebase'
import Login from './componentes/Login';

function App() {

  const [user, setUser] = React.useState(null)

  auth.onAuthStateChanged((usuario) => {
    if (usuario) {
      setUser(usuario)
    } else {
      setUser(null)
    }
  })

  return (
    <>
      {
        user ? 
          <Router>
            <MenuNavegacion></MenuNavegacion>
            <Routes>

              <Route path='/xiles' exact element={<SeccionPrincipal />}>
              </Route>
              <Route path='/tiendas' exact element={<SeccionTiendas></SeccionTiendas>} >
              </Route>
              <Route path='/hombre' exact element={<SeccionHombre></SeccionHombre>}>
              </Route>
              <Route path='/mujer' exact element={<SeccionMujer></SeccionMujer>}>
              </Route>

            </Routes>
            <Footer></Footer>
          </Router> : 

          <Router>
            <MenuNavegacion></MenuNavegacion>
            <Routes>

              <Route path='/xiles' exact element={<SeccionPrincipal />}>
              </Route>
              <Route path='/tiendas' exact element={<SeccionTiendas></SeccionTiendas>} >
              </Route>
              <Route path='/hombre' exact element={<SeccionHombre></SeccionHombre>}>
              </Route>
              <Route path='/mujer' exact element={<SeccionMujer></SeccionMujer>}>
              </Route>

            </Routes>
            <Footer></Footer>
          </Router>
      }
    </>
  );
}

export default App;
