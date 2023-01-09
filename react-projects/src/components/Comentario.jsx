// import './Comentario.css';
import Avatar from "./Avatar";

function Comentario( {sujeto} ){
return (
<>
<h1>Comentarios</h1>
<hr />
<div className="media d-flex">
    <Avatar  urlImg={sujeto.urlImg}/>
    {/* <img src={sujeto.urlImg} alt="" className="mr-3"/> */}
    <div className="media-body">
        <h5 className="mt-0">{sujeto.nombre}</h5>
        {sujeto.texto}
    </div>
</div>
</>
);
}

export default Comentario;