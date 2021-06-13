import React from 'react';
import './estilos_tarjeta.css';
class Tarjeta extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="contenedor-principal-tarjetaE">
                    <div className="contenedor-subtitulo-tarjetaE subtitulos-tarjetaE">
                        <label >Datos de Empresa</label>
                    </div>
                    <div>
                        <label className="subtitulos-tarjetaE campos-tarjetaE">Nombre empresa: <label className="contenido-tarjetaE">{this.props.nombre}</label></label>
                    </div>
                    <label className="subtitulos-tarjetaE campos-tarjetaE">Rubro: <label className="contenido-tarjetaE">{this.props.rubro}</label></label>
                    <label className="subtitulos-tarjetaE campos-tarjetaE">Telefono: <label className="contenido-tarjetaE">{this.props.telefonoEmpresa}</label></label>
                    <label className="subtitulos-tarjetaE campos-tarjetaE">Correo: <label className="contenido-tarjetaE">{this.props.correoEmpresa}</label></label>
                    <label className="subtitulos-tarjetaE campos-tarjetaE">Nit: <label className="contenido-tarjetaE">{this.props.nit}</label></label>
                    <div className="contenedor-subtitulo-tarjetaE subtitulos-tarjetaE">
                        <label >Datos de Persona Encargada</label>
                    </div>
                    <label className="subtitulos-tarjetaE campos-tarjetaE">Nombre: <label className="contenido-tarjetaE">{this.props.nombreEncargado}</label></label>
                    <label className="subtitulos-tarjetaE campos-tarjetaE">Telefono: <label className="contenido-tarjetaE">{this.props.telefonoEncargado}</label></label>
                    <label className="subtitulos-tarjetaE campos-tarjetaE">CI: <label className="contenido-tarjetaE">{this.props.ciEncargado}</label></label>
                </div>
        );
    }
}

export default Tarjeta;