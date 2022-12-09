import "./App.css";
import freeCodeCamp from "./imagenes/freecodecamp-logo.jpg";
import ListaDeTareas from "./componentes/ListaDeTareas";
import Tarea from "./componentes/Tarea";

function App() {
  return (
    <div className="aplicacion-tarea">
      <div className="freecodecamp-logo-contenedor">
        <img src={freeCodeCamp} className="freecodecamp-logo" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
