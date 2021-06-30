import './estilos-solicitudes.css';
import SolicitudCuadros from './Solicitud';
import React, {useState, useEffect} from 'react'
import Spinner from '../Spinner/Spinner';

function SolicitudesCuadros(){
    const url = 'https://backendcompleto-sdc.herokuapp.com/api/formReq/getFormReq'
    const [solicitudes, setSolicitudes] = useState()
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJSON = await response.json()
        setSolicitudes(responseJSON)
    }

    useEffect(() => {
        fetchApi()
    },[])

    const filtrado = []

    return(
        <div className="cont">
            {
                !solicitudes? <Spinner />:
                solicitudes.map(soli => {
                    if(soli.estadoSolicitud == "En Espera"){
                        return <SolicitudCuadros solicitud = {soli}/>
                    }
                })
            }
        </div>
    )
}

export default SolicitudesCuadros;