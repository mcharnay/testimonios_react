import React from "react";
import '../estilos/Testimonio.css'

function Testimonio(props){
    return(
        <div className='contenedor-testimonio'>
            
            <img className='imagen-testimonio'
            src={require(`../imagenes/imagen${props.imagen}.png`)}
            alt='Foto primera' />

            <div className='contenedor-texto-testimonio'>
                <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.region}</p>
                <p className="cargo-testimonio">{props.job} en <strong>{props.gremio}</strong></p>
                <p className="texto-testimonio">"{props.testimonio}"</p>
            </div>

        </div>
    );
}

export default Testimonio;