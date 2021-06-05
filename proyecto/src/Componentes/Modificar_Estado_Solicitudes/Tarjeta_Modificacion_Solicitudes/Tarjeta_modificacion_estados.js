import React, {useState} from 'react';
import './estilos_tarjeta_modificacion_estados.css'

function Tarjeta_Modificacion_Estados(props){
    let estadoRechazado= 'Rechazado'
    
    let estados = ['En Verificacion','Esperando Autorizacion','Realizando Cotización','En Espera','Esperando Autorizacion Final','Rechazado','Aprobado']

    const [estado, setEstado] = useState(props.solicitud.estadoSolicitud)

    const rechazarSolicitud = () => {
        setEstado(estadoRechazado)
        document.getElementById("contenedor-botones-cambio-estado").style.display = 'none'
    }

    return(
        <div className="tarjeta-solicitud">
            <div className="contenedor-estado-solicitud">
                <label className="estado-solicitud">{estado}</label>
            </div>
            <div className="contenedor-campos-solicitud">
                <label className = "subtitulos-solicitud">Detalle:</label>
                <div className="contenido-de-solicitudes contenedor-overflow">
                    <label className="etiqueta-contenido-solicitud">{props.solicitud.DetalleSolitud}</label>
                </div>
                <label className = "subtitulos-solicitud">Fecha de Solicitud:</label>
                <div className="contenido-de-solicitudes">
                    <label className="etiqueta-contenido-solicitud">{props.solicitud.FechaDeSolicitud}</label>
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
            <div className="contenedor-botones-cambio-estado" id="contenedor-botones-cambio-estado">
                <button className="Boton-estado-solicitud boton-rechazar-solicitud" onClick={rechazarSolicitud}>Rechazar</button>
                <button className="Boton-estado-solicitud boton-aprobar-solicitud">Aprobar</button>
            </div>
        </div>
    )
}

export default Tarjeta_Modificacion_Estados;