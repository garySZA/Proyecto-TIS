import React, {useState} from 'react';
import './estilos_tarjeta_modificacion_estados.css'
import axios from 'axios'

function cambioDeEstado(estado, solicitud){
    axios.post(`https://backendcompleto-sdc.herokuapp.com/api/formReq/updateFormReq/${solicitud.idFormularioSolitud}`,{
        
        item: "mesas",
        DetalleSolitud: "solicitud para la compra de mesas para el laboratorio",
        FechaDeSolicitud: solicitud.FechaDeSolicitud.replace('T00:00:00.000Z', ''),
        responsableSolicitud: "Raquel Chipana",
        montoSolicitud: 100,
        estadoSolicitud: estado,
        registroUnidadGasto_idRegistroUnidad: 3000000
    }
    )
}

function Tarjeta_Modificacion_Estados(props){
    let idBotones = 'id' + props.solicitud.idFormularioSolitud

    let estadoRechazado= 'Rechazado'
    
    let estados = ['En Verificacion','Esperando Autorizacion','Realizando Cotización','En Espera','Esperando Autorizacion Final','Aprobado']

    const [estado, setEstado] = useState(props.solicitud.estadoSolicitud)

    const rechazarSolicitud = () => {
        setEstado(estadoRechazado)
        document.getElementById(idBotones).style.display = 'none'
        cambioDeEstado('Rechazado', props.solicitud)
        document.getElementById(`tarjeta-solicitud${props.solicitud.idFormularioSolitud}`).classList.add('tarjeta-solicitud-rechazado')
            document.getElementById(`contenedor-estado-solicitud${props.solicitud.idFormularioSolitud}`).classList.add('contenedor-solicitud-rechazado')
    }

    const aprobarSolicitud = () => {
        if(estado == 'En Espera'){
            setEstado('Esperando Autorización Final')
            document.getElementById(props.solicitud.idFormularioSolitud).style.fontSize = "16px"
            //llamando al metodo encargado de realizar un POST
            cambioDeEstado('Esperando Autorización Final', props.solicitud)

        }else if(estado == 'En Verificación'){
            setEstado('Esperando Autorización')
            cambioDeEstado('Esperando Autorización', props.solicitud)

        }else if(estado == 'Esperando Autorización'){
            setEstado('Realizando Contización')
            cambioDeEstado('Realizando Cotización', props.solicitud)

        }else if(estado == 'Realizando Contización'){
            setEstado('En Espera')
            cambioDeEstado('En Espera', props.solicitud)

        }else if(estado == 'Esperando Autorización Final'){
            setEstado('Aprobado')
            document.getElementById(idBotones).style.display = 'none'
            document.getElementById(props.solicitud.idFormularioSolitud).style.fontSize = "22px"
            cambioDeEstado('Aprobado', props.solicitud)
            document.getElementById(`tarjeta-solicitud${props.solicitud.idFormularioSolitud}`).classList.add('tarjeta-solicitud-aprobado')
            document.getElementById(`contenedor-estado-solicitud${props.solicitud.idFormularioSolitud}`).classList.add('contenedor-solicitud-aprobado')
        }
    }

    return(
        <div className="tarjeta-solicitud" id={`tarjeta-solicitud${props.solicitud.idFormularioSolitud}`}>
            <div className="contenedor-estado-solicitud" id={`contenedor-estado-solicitud${props.solicitud.idFormularioSolitud}`}>
                <label className="estado-solicitud" id={props.solicitud.idFormularioSolitud}>{estado}</label>
            </div>
            <div className="contenedor-campos-solicitud">
                <label className = "subtitulos-solicitud">Detalle:</label>
                <div className="contenido-de-solicitudes contenedor-overflow">
                    <label className="etiqueta-contenido-solicitud">{props.solicitud.DetalleSolitud}</label>
                </div>
                <label className = "subtitulos-solicitud">Fecha de Solicitud:</label>
                <div className="contenido-de-solicitudes">
                    <label className="etiqueta-contenido-solicitud">{props.solicitud.FechaDeSolicitud.replace('T00:00:00.000Z', '')}</label>
                </div>
                <label className = "subtitulos-solicitud">Responsable:</label>
                <div className="contenido-de-solicitudes">
                    <label className="etiqueta-contenido-solicitud">{props.solicitud.responsableSolicitud}</label>
                </div>
                <label className = "subtitulos-solicitud">Monto:</label>
                <div className="contenido-de-solicitudes">
                    <label className="etiqueta-contenido-solicitud">{props.solicitud.montoSolicitud}Bs.</label>
                </div>
            </div>
            <div className="contenedor-botones-cambio-estado" id={idBotones}>
                <button className="Boton-estado-solicitud boton-rechazar-solicitud" onClick={rechazarSolicitud}>Rechazar</button>
                <button className="Boton-estado-solicitud boton-aprobar-solicitud" onClick={aprobarSolicitud}>Aprobar</button>
            </div>
        </div>
    )
}

export default Tarjeta_Modificacion_Estados;