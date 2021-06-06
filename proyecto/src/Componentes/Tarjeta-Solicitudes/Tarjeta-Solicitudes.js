import React from 'react';
import './estilos-tarjeta-solicitudes.css'

function Tarjeta_Solicitudes(props){
    
    return(
        <div className={props.estadoCaja}>
            <div className={props.estadoTitulo}>
                <label className="estado-solicitud">{props.solicitud.estadoSolicitud}</label>
            </div>
            <div className="contenedor-campos-solicitud">
                <label className = "subtitulos-solicitud">Detalle:</label>
                <div className="contenido-de-solicitudes">
                    <label className="etiqueta-contenido-solicitud">{props.solicitud.DetalleSolitud}</label>
                </div>
                <label className = "subtitulos-solicitud">Item:</label>
                <div className="contenido-de-solicitudes">
                    <label className="etiqueta-contenido-solicitud">{props.solicitud.item}</label>
                </div>
                <label className = "subtitulos-solicitud">Fecha de Solicitud:</label>
                <div className="contenido-de-solicitudes">
                    <label className="etiqueta-contenido-solicitud">{props.solicitud.FechaDeSolicitud.replace('T00:00:00.000Z', '')}</label>
                </div>
                <label className = "subtitulos-solicitud">Responsable:</label>
                <div className="contenido-de-solicitudes">
                    <label className="etiqueta-contenido-solicitud">{props.solicitud.responsableSolicitud}</label>
                </div>
                <label className = "subtitulos-solicitud">Monto:</label>
                <div className="contenido-de-solicitudes">
                    <label className="etiqueta-contenido-solicitud">{props.solicitud.montoSolicitud}Bs.</label>
                </div>
            </div>
        </div>
    )
}

export default Tarjeta_Solicitudes;