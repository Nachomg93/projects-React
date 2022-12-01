import "./App.css";
import freeCodeCamp from "./imagenes/freecodecamp-logo.jpg";
import Tarea from "./componentes/Tarea";

function App() {
  return (
    <div className="aplicacion-tarea">
      <div className="freecodecamp-logo-contenedor">
        <img src={freeCodeCamp} className="freecodecamp-logo" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <Tarea texto='Aprender React' />
      </div>
    </div>
  );
}

export default App;
