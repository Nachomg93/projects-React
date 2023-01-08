// import './Lista.css';
import { useState } from "react";

function Lista() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const [count, setCount] = useState(5);

  const agregarElemento = () => {
    console.log('click');
    setCount(count + 1)
    setArray([
        ...array, count
    ])
  }

  return (
    <>
      <h2>Lista</h2>
      <button onClick={agregarElemento}>Agregar</button>
      {
      array.map((item, index) =>
      <p key={index}>{item} - {index}</p>
      )
    }
    </>
  );
}

export default Lista;
