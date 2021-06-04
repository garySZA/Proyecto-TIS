import React from 'react'
import '../Mostrar_Tarjetas/estilos_mostrar_tarjetas.css'
import Tarjeta_Modificacion_Estados from './Tarjeta_Modificacion_Solicitudes/Tarjeta_modificacion_estados'
import axios from 'axios';

function Mostrar_Tarjetas_Modificacion_Estados(props){
    let lista = ['En Verificación', 'Esperando autorización', 'Realizando cotización', 'En espera', 'Esperando autorización final', 'Rechazado'];
    return(
        <div className="contenedor-flex-solicitudes">
        <div className="contenedor-grid">
            {
                lista.map(item =>
                    <Tarjeta_Modificacion_Estados estado={item}/>
                    )
            }
        </div>
    </div>
    )
}

export default Mostrar_Tarjetas_Modificacion_Estados;