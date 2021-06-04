import React from 'react';
import './estilos_tarjeta_modificacion_estados.css'

class Tarjeta_Modificacion_Estados extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div className="tarjeta-solicitud">
                <div className="contenedor-estado-solicitud">
                    <label className="estado-solicitud">{this.props.estado}</label>
                </div>
                <div className="contenedor-campos-solicitud">
                    <label className = "subtitulos-solicitud">Detalle:</label>
                    <div className="contenido-de-solicitudes contenedor-overflow">
                        <label className="etiqueta-contenido-solicitud">Compra de insumos de oficina</label>
                    </div>
                    <label className = "subtitulos-solicitud">Fecha de Solicitud:</label>
                    <div className="contenido-de-solicitudes">
                        <label className="etiqueta-contenido-solicitud">02/06/2021</label>
                    </div>
                    <label className = "subtitulos-solicitud">Responsable:</label>
                    <div className="contenido-de-solicitudes">
                        <label className="etiqueta-contenido-solicitud">Soliz Gary</label>
                    </div>
                    <label className = "subtitulos-solicitud">Monto:</label>
                    <div className="contenido-de-solicitudes">
                        <label className="etiqueta-contenido-solicitud">200bs</label>
                    </div>
                </div>
                <div className="contenedor-botones-cambio-estado">
                    <button className="Boton-estado-solicitud boton-rechazar-solicitud">Rechazar</button>
                    <button className="Boton-estado-solicitud boton-aprobar-solicitud">Aprobar</button>
                </div>
            </div>
        )
    }
}

export default Tarjeta_Modificacion_Estados;