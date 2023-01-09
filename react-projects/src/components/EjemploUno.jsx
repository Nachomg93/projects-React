// import './EjemploUno.css';
import { useForm } from "react-hook-form";
import { useState } from "react";

function EjemploUno() {
  const { register, errors, handleSubmit } = useForm();

  const [entradas, setEntradas] = useState([]);

  const onSubmit = (data, e) => {
    console.log(data);
    setEntradas([...entradas, data])
    e.target.reset();
  };
  return (
    <>
      <h1>Ejemplo #1</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="titulo"
          placeholder="Ingrese titulo"
          className="form-control my-2"
          type="text"
        />
        <input
          name="descripcion"
          placeholder="Ingrese descripcion"
          className="form-control my-2"
          type="text"
        />
        <button className="btn btn-primary">Agregar</button>
      </form>
      <ul>
        {
            entradas.map(item => 
                <li>{item.titulo} - {item.descripcion}</li>
                )
        }
      </ul>
    </>
  );
}

export default EjemploUno;
