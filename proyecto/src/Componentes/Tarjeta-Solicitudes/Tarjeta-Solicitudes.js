import React from 'react';
import './estilos-tarjeta-solicitudes.css'

class Tarjeta_Solicitudes extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div className="tarjeta-solicitud-aprobado">
                <div className="contenedor-estado-solicitud-aprobado">
                    <label className="estado-solicitud">{this.props.solicitud.estadoSolicitud}</label>
                </div>
                <div className="contenedor-campos-solicitud">
                    <label className = "subtitulos-solicitud">Detalle:</label>
                    <div className="contenido-de-solicitudes">
                        <label className="etiqueta-contenido-solicitud">{this.props.solicitud.DetalleSolitud}</label>
                    </div>
                    <label className = "subtitulos-solicitud">Item:</label>
                    <div className="contenido-de-solicitudes">
                        <label className="etiqueta-contenido-solicitud">{this.props.solicitud.item}</label>
                    </div>
                    <label className = "subtitulos-solicitud">Fecha de Solicitud:</label>
                    <div className="contenido-de-solicitudes">
                        <label className="etiqueta-contenido-solicitud">{this.props.solicitud.FechaDeSolicitud.replace('T00:00:00.000Z', '')}</label>
                    </div>
                    <label className = "subtitulos-solicitud">Responsable:</label>
                    <div className="contenido-de-solicitudes">
                        <label className="etiqueta-contenido-solicitud">{this.props.solicitud.responsableSolicitud}</label>
                    </div>
                    <label className = "subtitulos-solicitud">Monto:</label>
                    <div className="contenido-de-solicitudes">
                        <label className="etiqueta-contenido-solicitud">{this.props.solicitud.montoSolicitud}Bs.</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tarjeta_Solicitudes;