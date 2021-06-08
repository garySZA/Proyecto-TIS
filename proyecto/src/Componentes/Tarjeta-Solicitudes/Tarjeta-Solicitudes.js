import React, {useState, useEffect} from 'react';
import './estilos-tarjeta-solicitudes.css'

function Tarjeta_Solicitudes(props){
    const urlObs = 'https://backendcompleto-sdc.herokuapp.com/api/inform/getInfAR';
    const [observaciones, setObservaciones] = useState([''])

    const obtenerObservaciones = async () => {
        const response = await fetch(urlObs)
        const responseJSON = await response.json()
        setObservaciones(responseJSON)
    }

    useEffect(() => {
        obtenerObservaciones();
    },[])
    return(
        !observaciones? 'Cargando':
        observaciones.map(obs => {
            return (props.solicitud.idFormularioSolitud == obs.FormularioSolitud_idFormularioSolitud)?
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
                        <label className = "subtitulos-solicitud">Observaciones:</label>
                        <div className="contenido-de-solicitudes">
                            <label className="etiqueta-contenido-solicitud">{obs.DetalleIAR}</label>
                        </div>
                    </div>
                </div>
        :
        ''
        })
    )
}

export default Tarjeta_Solicitudes;