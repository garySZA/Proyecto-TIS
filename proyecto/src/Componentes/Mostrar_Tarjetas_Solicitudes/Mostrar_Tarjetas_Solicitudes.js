import React, {useState, useEffect} from 'react';
import './estilos_mostrar_tarjetas-solicitudes.css';
import Tarjeta_Solicitudes from "../Tarjeta-Solicitudes/Tarjeta-Solicitudes";
import Spinner from '../Spinner/Spinner'
import { Button } from 'reactstrap';

function Mostrar_tarjetas_solicitudes(){
    const url = 'https://backendcompleto-sdc.herokuapp.com/api/formReq/getFormReq'
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON)
    }
console.log(todos)

    useEffect(() => {
        fetchApi()
    }, [])


        return(
            <div className="contenedor-flex-solicitudes">
                <div className="contenedor-grid">
                    {
                        !todos ? <Spinner/> : 
                        todos.map(solicitud => {
                            return (solicitud.estadoSolicitud == 'Aprobado' || solicitud.estadoSolicitud == 'Rechazado')?
                                (solicitud.estadoSolicitud == 'Aprobado')?
                                <Tarjeta_Solicitudes solicitud = {solicitud} estadoCaja = 'tarjeta-solicitud-aprobado' estadoTitulo = 'contenedor-estado-solicitud-aprobado'/>
                                :
                                <Tarjeta_Solicitudes solicitud = {solicitud} estadoCaja = 'tarjeta-solicitud-rechazado' estadoTitulo = 'contenedor-estado-solicitud-rechazado'/>
                               
                                :
                            ''
                            
                        })

                    }
                     
                    
                </div>

            </div>
        );
}

export default Mostrar_tarjetas_solicitudes;