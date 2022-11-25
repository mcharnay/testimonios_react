import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
        <div className="contenedor-principal">
            <h1>Esto es lo que dicen nuestros Jobs</h1>
            <Testimonio
              nombre='Ramza'
              region='Indonesia'
              job='Acolyte'
              gremio='Festival'
              testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris . '
              imagen='2'/>
              
           <Testimonio
              nombre='Astra'
              region='Lugia'
              job='Sage'
              gremio='Carnaval'
              testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  '
              imagen='1'/>

              <Testimonio
              nombre='Tydus'
              region='Ambrosia'
              job='Trooper'
              gremio='Malesica'
              testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris  '
              imagen='3'/> 
        </div>
    </div>
  );
}

export default App;
