import React from 'react';
import './estilos_tarjeta.css';
class Tarjeta extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="contenedor-principal-tarjeta">
                    <div className="contenedor-subtitulo-tarjeta subtitulos-tarjeta">
                        <label >Datos de Empresa</label>
                    </div>
                    <div>
                        <label className="subtitulos-tarjeta campos-tarjeta">Nombre empresa: <label className="contenido-tarjeta">{this.props.nombre}</label></label>
                    </div>
                    <label className="subtitulos-tarjeta campos-tarjeta">Rubro: <label className="contenido-tarjeta">{this.props.rubro}</label></label>
                    <label className="subtitulos-tarjeta campos-tarjeta">Telefono: <label className="contenido-tarjeta">{this.props.telefonoEmpresa}</label></label>
                    <label className="subtitulos-tarjeta campos-tarjeta">Correo: <label className="contenido-tarjeta">{this.props.correoEmpresa}</label></label>
                    <label className="subtitulos-tarjeta campos-tarjeta">Nit: <label className="contenido-tarjeta">{this.props.nit}</label></label>
                    <div className="contenedor-subtitulo-tarjeta subtitulos-tarjeta">
                        <label >Datos de Persona Encargada</label>
                    </div>
                    <label className="subtitulos-tarjeta campos-tarjeta">Nombre: <label className="contenido-tarjeta">{this.props.nombreEncargado}</label></label>
                    <label className="subtitulos-tarjeta campos-tarjeta">Telefono: <label className="contenido-tarjeta">{this.props.telefonoEncargado}</label></label>
                    <label className="subtitulos-tarjeta campos-tarjeta">CI: <label className="contenido-tarjeta">{this.props.ciEncargado}</label></label>
                </div>
        );
    }
}

export default Tarjeta;