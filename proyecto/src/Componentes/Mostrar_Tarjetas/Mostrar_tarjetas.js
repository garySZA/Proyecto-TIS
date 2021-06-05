import React, {useState, useEffect} from 'react'
import './estilos_mostrar_tarjetas.css';
import Tarjeta from '../Tarjeta/Tarjeta';
import axios from 'axios';

function Mostrar_tarjetas(){
    const url = 'https://proyecto-tis.herokuapp.com/api/empresas'
    const [todos, setTodos] = useState()
    const fetchApi = async () =>{
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON)
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return(
        <div className="tarjetas">
            <div className="contenedor-grid-tarjetas">
                {
                    !todos ? 'Cargando...':
                    todos.map(empresa => {
                        return <Tarjeta 
                                    nombre = {empresa.nombreEmpresa}
                                    rubro = {empresa.rubro}
                                    telefonoEmpresa = {empresa.telefonoEmpresa}
                                    correoEmpresa = {empresa.correoEmpresa}
                                    nit = {empresa.nit}
                                    nombreEncargado = {empresa.nombreEncargado}
                                    telefonoEncargado = {empresa.telefonoEncargado}
                                    ciEncargado = {empresa.ciEncargado}
                                />
                    })
                        
                }
            </div>  
        </div>
    );
}

export default Mostrar_tarjetas;