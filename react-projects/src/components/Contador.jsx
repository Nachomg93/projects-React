// import './.css';
import { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  const aumentar = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h3>Mi primer componente {count} </h3>
      <button onClick={aumentar}>Aumentar</button>
    </>
  );
}

export default Contador;
