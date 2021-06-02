import React from 'react'
import './estilos_mostrar_tarjetas.css';
import Tarjeta from '../Tarjeta/Tarjeta';
import axios from 'axios';


class Mostrar_tarjetas extends React.Component{
    constructor(props){
        super(props);
        
        this.listaEmpresas = this.props.lista;
    }

    render(){
        return(
            <div className="tarjetas">
                <div className="contenedor-grid-tarjetas">
                    <Tarjeta 
                        nombre = {this.listaEmpresas.nombreEmpresa}
                        rubro = {this.listaEmpresas.rubro}
                        telefonoEmpresa = {this.listaEmpresas.telefonoEmpresa}
                        correoEmpresa = {this.listaEmpresas.correoEmpresa}
                        nit = {this.listaEmpresas.nit}
                        nombreEncargado = {this.listaEmpresas.nombreEncargado}
                        telefonoEncargado = {this.listaEmpresas.telefonoEncargado}
                        ciEncargado = {this.listaEmpresas.ciEncargado}
                        />
                </div>  
            </div>
        );
    }
}

export default Mostrar_tarjetas;