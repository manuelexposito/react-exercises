import logo from './logo.svg';
import './App.css';
import ContactoComponent from './components/containers/contacto_component';
import { Contacto } from './models/contacto.class';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <ContactoComponent contacto={new Contacto("Manuel", "Exposito Herrera", "manuelexposito@gmail.com", true)}></ContactoComponent>
    </header>
    
  </div>
  );
}

export default App;
