import React from 'react';
import './estilos_mostrar_tarjetas-solicitudes.css';
import Tarjeta_Solicitudes from "../Tarjeta-Solicitudes/Tarjeta-Solicitudes";

function Mostrar_tarjetas_solicitudes(props){

    let lista = ['nombre1', 'nombre2','nombre3','nombre4','nombre5','nombre6','nombre7','nombre8']

    return(
        <div className="contenedor-flex-solicitudes">
            <div className="contenedor-grid">
                {
                    lista.map(item =>
                        
                            
                                (item != 'nombre2')?
                                <Tarjeta_Solicitudes lista = {item}/>
                                :
                                ''
                        
                        )
                }
            </div>
        </div>
    );
}

export default Mostrar_tarjetas_solicitudes;