import React, {useState, useEffect}from 'react'
import '../Mostrar_Tarjetas/estilos_mostrar_tarjetas.css'
import Tarjeta_Modificacion_Estados from './Tarjeta_Modificacion_Solicitudes/Tarjeta_modificacion_estados'
import Spinner from '../Spinner/Spinner'



function Mostrar_Tarjetas_Modificacion_Estados(){
    const url = 'https://backendcompleto-sdc.herokuapp.com/api/formReq/getFormReq'
    const [todos, setTodos]  = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON)
    }

    useEffect(() => {
        fetchApi()
    },[])

    let lista = ['En Verificación', 'Esperando autorización', 'Realizando cotización', 'En espera', 'Esperando autorización final', 'Rechazado'];
    return(
        <div className="contenedor-flex-solicitudes">
        <div className="contenedor-grid">
            {
                !todos ? <Spinner/>:
                todos.map(solicitud => {
                    return (solicitud.estadoSolicitud != 'Aprobado' && solicitud.estadoSolicitud != 'Rechazado')? 
                    <Tarjeta_Modificacion_Estados solicitud={solicitud}/> : ''
                })
            }
        </div>
       


    </div>
    )
}

export default Mostrar_Tarjetas_Modificacion_Estados;