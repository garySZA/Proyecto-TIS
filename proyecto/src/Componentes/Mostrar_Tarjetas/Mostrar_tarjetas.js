import React from 'react'
import './estilos_mostrar_tarjetas.css';
import Tarjeta from '../Tarjeta/Tarjeta';
import axios from 'axios';


class Mostrar_tarjetas extends React.Component{
    constructor(props){
        super(props);
        
        var listaEmpresas = ["King Dom"];
    }

    obtenerEmpresas(){
        axios.get('https://proyecto-tis.herokuapp.com/api/empresas')
        .then(response => {
            this.listaEmpresas.push(response.data[0])
        })
    }

    render(){
        return(
            <div className="tarjetas">
                <div className="contenedor-grid-tarjetas">
                    <Tarjeta nombre={this.listaEmpresas}/>
                </div>  
            </div>
        );
    }
}

export default Mostrar_tarjetas;