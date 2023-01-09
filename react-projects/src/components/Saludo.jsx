// import './Saludo.css';

function Saludo(props) {
  console.log(props);
  return (
    <>
      <h2>Hola! soy {props.persona} tengo {props.edad} años</h2>
    </>
  );
}

export default Saludo;
