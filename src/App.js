import logo from './logo.svg';
import './App.css';
import MenuNavegacion from './componentes/MenuNavegacion';
import * as bootstrap from 'bootstrap'
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

function App() {
  return (
    <div className="App">
      <Router>
        <MenuNavegacion></MenuNavegacion>
        <Routes>
          
          <Route path='/xiles' exact element={<SeccionPrincipal/>}>
          </Route>

          <Route path='/tiendas' exact element={<SeccionTiendas></SeccionTiendas>} >
          </Route>

          <Route path='/hombre' exact element={<SeccionHombre></SeccionHombre>}></Route>

          <Route path='/mujer' exact element={<SeccionMujer></SeccionMujer>}></Route>
          
        </Routes>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
