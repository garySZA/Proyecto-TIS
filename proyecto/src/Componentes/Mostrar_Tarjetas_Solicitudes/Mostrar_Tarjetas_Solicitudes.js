import React, {useState, useEffect} from 'react';
import './estilos_mostrar_tarjetas-solicitudes.css';
import Tarjeta_Solicitudes from "../Tarjeta-Solicitudes/Tarjeta-Solicitudes";

function Mostrar_tarjetas_solicitudes(){
    const url = 'https://backendcompleto-sdc.herokuapp.com/api/formReq/getFormReq'
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON)
    }

    useEffect(() => {
        fetchApi()
    }, [])


        return(
            <div className="contenedor-flex-solicitudes">
                <div className="contenedor-grid">
                    {
                        !todos ? 'Cargando...' : 
                        todos.map(solicitud => {
                            return <Tarjeta_Solicitudes solicitud = {solicitud}/>
                        })
                    }
                </div>
            </div>
        );
}

export default Mostrar_tarjetas_solicitudes;