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
                    <label className="estado-solicitud">Aprobado</label>
                </div>
                <div className="contenedor-campos-solicitud">
                    <label className = "subtitulos-solicitud">Detalle:</label>
                    <div className="contenido-de-solicitudes">
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
            </div>
        );
    }
}

export default Tarjeta_Solicitudes;