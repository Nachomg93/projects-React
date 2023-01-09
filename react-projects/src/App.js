// import './App.css';
import Saludo from "./components/Saludo";
import Comentario from "./components/Comentario";

function App() {

const sujeto = {
    nombre: "Nacho",
    urlImg: "https://via.placeholder.com/64",
    texto: "Lorem ipsum dolor sit amet consectetur ,adipisicing elit. Id, animi!"
}

  return (
      <div className="container mt-2">
        <h1>Components</h1>
        <Saludo persona="Nacho" edad={29}/>
        <Saludo persona="Maria" edad={25}/>
        <Comentario sujeto={sujeto}/>
      </div>
     );
}

export default App;