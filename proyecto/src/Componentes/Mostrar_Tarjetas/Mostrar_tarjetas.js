import React from 'react'
import './estilos_mostrar_tarjetas.css';
import Tarjeta from '../Tarjeta/Tarjeta';
import axios from 'axios';


function Mostrar_tarjetas(props){
    return(
        <div className="tarjetas">
            <div className="contenedor-grid-tarjetas">
                {
                    props.lista.map(item =>
                        <Tarjeta 
                                nombre = {item.nombreEmpresa}
                                rubro = {item.rubro}
                                telefonoEmpresa = {item.telefonoEmpresa}
                                correoEmpresa = {item.correoEmpresa}
                                nit = {item.nit}
                                nombreEncargado = {item.nombreEncargado}
                                telefonoEncargado = {item.telefonoEncargado}
                                ciEncargado = {item.ciEncargado}
                                />
                        )
                }
            </div>  
        </div>
    );
}

export default Mostrar_tarjetas;