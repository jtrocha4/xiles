import logo from './logo.svg';
import './App.css';
import MenuNavegacion from './componentes/MenuNavegacion';
import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import SeccionPrincipal from './componentes/SeccionPrincipal';

function App() {
  return (
    <div className="App">
      <MenuNavegacion></MenuNavegacion>
      <SeccionPrincipal></SeccionPrincipal>
    </div>
  );
}

export default App;
