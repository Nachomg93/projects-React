// import './Jsx.css';

function Jsx() {
  // const saludo = "Hola Jsx"
  const temperatura = 21;

  return (
    <div>
      <h1>Frio o calor?</h1>
      <h4>{temperatura > 20 ? "Calor" : "Frio"}</h4>
    </div>
  );
}

export default Jsx;
