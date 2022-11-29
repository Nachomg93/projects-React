import "./App.css";
import freeCodeCamp from "./imagenes/freecodecamp-logo.jpg";

function App() {
  return (
    <div className="App">
      <div className="freecodecamp-loco-contenedor">
        <img
          src={freeCodeCamp}
          className="freecodecamp-logo"
          alt="Logo de freecodecamp"
        />
      </div>
    </div>
  );
}

export default App;
