import React, {useState} from 'react';
import './estilos_tarjeta_modificacion_estados.css'
import axios from 'axios'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'

//  Funcion que se encarga de cambiar el campo 'estadoSolicitud'
function cambioDeEstado(estado, solicitud){
    axios.post(`https://backendcompleto-sdc.herokuapp.com/api/formReq/updateFormReq/${solicitud.idFormularioSolitud}`,{
        
        item: solicitud.item,
        DetalleSolitud: solicitud.DetalleSolitud,
        FechaDeSolicitud: solicitud.FechaDeSolicitud.replace('T00:00:00.000Z', ''),
        responsableSolicitud: solicitud.responsableSolicitud,
        montoSolicitud: solicitud.montoSolicitud,
        estadoSolicitud: estado,
        registroUnidadGasto_idRegistroUnidad: solicitud.registroUnidadGasto_idRegistroUnidad
    }
    )
}

//  Funcion para añadir datos para el informe de una solicitur
function mandarDatosInforme(nombreJefe, detalle, unidadSolicitante, facultadSolicitante, carreraSolicitante, idSolicitud){
    axios.post('https://backendcompleto-sdc.herokuapp.com/api/inform/createInfAR',{
        NombreJefeIRA: nombreJefe,
        DetalleIAR: detalle,
        UnidadSolicitanteIRA: unidadSolicitante,
        FacultadSolicitanteIRA: facultadSolicitante,
        CarreraSolicitanteIRA: carreraSolicitante,
        FormularioSolitud_idFormularioSolitud: idSolicitud
    }
    )
}

function Tarjeta_Modificacion_Estados(props){
    
    let idBotones = 'id' + props.solicitud.idFormularioSolitud

    let estadoRechazado= 'Rechazado'
    
    let estados = ['En Verificacion','Esperando Autorizacion','Realizando Cotización','En Espera','Esperando Autorizacion Final','Aprobado']

    const [estado, setEstado] = useState(props.solicitud.estadoSolicitud)

    const rechazarSolicitud = () => {
        abrirModal()
        //console.log("rechazando")
        //console.log(document.getElementById())
        mandarDatosInforme("Gary S.", document.getElementById('inputObservaciones').value, "...", "Tecno", "Sistems",props.solicitud.idFormularioSolitud)
        setEstado(estadoRechazado)
        document.getElementById(idBotones).style.display = 'none'
        cambioDeEstado('Rechazado', props.solicitud)
        document.getElementById(`tarjeta-solicitud${props.solicitud.idFormularioSolitud}`).classList.add('tarjeta-solicitud-rechazado')
            document.getElementById(`contenedor-estado-solicitud${props.solicitud.idFormularioSolitud}`).classList.add('contenedor-solicitud-rechazado')
    }

    const aprobarSolicitudFinal = () => {
        abrirModalAprobado()
        mandarDatosInforme("Gary S.", document.getElementById('inputApr').value, "...", "Tecno", "Sistems",props.solicitud.idFormularioSolitud)
        setEstado('Aprobado')
        document.getElementById(idBotones).style.display = 'none'
        document.getElementById(props.solicitud.idFormularioSolitud).style.fontSize = "22px"
        cambioDeEstado('Aprobado', props.solicitud)
        document.getElementById(`tarjeta-solicitud${props.solicitud.idFormularioSolitud}`).classList.add('tarjeta-solicitud-aprobado')
        document.getElementById(`contenedor-estado-solicitud${props.solicitud.idFormularioSolitud}`).classList.add('contenedor-solicitud-aprobado')
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
            abrirModalAprobado()
        }
    }

    
    const [estadoModal, setEstadoModal] = useState(false)
    const [estadoModalAprobado, setEstadoModalAprobado] = useState(false)

    const abrirModal = () => {
        setEstadoModal(!estadoModal)
    }

    const abrirModalAprobado = () => {
        setEstadoModalAprobado(!estadoModalAprobado)
    }

    const modalStyles = {
        position: "absolute",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px'
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
                <button className="Boton-estado-solicitud boton-rechazar-solicitud" onClick={abrirModal}>Rechazar</button>
                <button className="Boton-estado-solicitud boton-aprobar-solicitud" onClick={aprobarSolicitud}>Aprobar</button>
            </div>
            <Modal isOpen={estadoModal} style={modalStyles}>
                <ModalHeader>
                    Observaciones
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label>Ingrese las observaciones</Label>
                        <Input type="text" placeholder="Observaciones..." id="inputObservaciones"></Input>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={rechazarSolicitud}>Aceptar</Button>
                    <Button color="secondary" onClick={abrirModal}>Cancelar</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={estadoModalAprobado} style={modalStyles}>
                <ModalHeader>
                    Observaciones
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label>Ingrese las observaciones</Label>
                        <Input type="text" placeholder="Observaciones..." id="inputApr"></Input>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={aprobarSolicitudFinal}>Aceptar</Button>
                    <Button color="secondary" onClick={abrirModalAprobado}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Tarjeta_Modificacion_Estados;