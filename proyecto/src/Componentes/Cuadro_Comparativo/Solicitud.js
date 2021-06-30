import './estilos-solicitudes.css'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap'
import React, {useState, useEffect} from 'react'

function SolicitudCuadros(props){

    const [estadoModalVer, setEstadoModalVer] = useState(false)

    const abrirModalVer = () => {
        setEstadoModalVer(!estadoModalVer)
    }

    const modalStyles = {
        position: "absolute",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '1100px'
    }

    return(
        <div className="contenedor-gral">
            <section className="contenedor-campos-ver-empresa">
                    <div className="contenedor-id campos">
                        <label className="subt-ver-empr">ID: </label>
                        <label className="cont-ver-emp">{props.solicitud.idFormularioSolitud}</label>
                    </div>
                    <div className="contenedor-resp campos">
                        <label className="subt-ver-empr">Responsable:</label>
                        <label className="cont-ver-emp">{props.solicitud.responsableSolicitud}</label>
                    </div>
                    <div className="contenedor-monto campos">
                        <label className="subt-ver-empr">Monto:</label>
                        <label className="cont-ver-emp">{props.solicitud.montoSolicitud}bs.</label>
                    </div>
                    <div className="contenedor-btn-ver-cuadro">
                        <button className="btn-ver-empresa btn-ver-empr" title="Ver cuadro comparativo" onClick={abrirModalVer}><i class="far fa-eye icono-ver-empresa"></i></button>
                    </div>
            </section>
            <Modal isOpen={estadoModalVer} style={modalStyles}>
                <ModalHeader >
                    Cuadro Comparativo
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label> Empresa 1: </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label> Item: </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label> Precio: </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label> Cantidad: </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label> Empresa 2: </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label> Item: </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label> Precio: </Label>
                    </FormGroup>
                    <FormGroup>
                        <Label> Cantidad: </Label>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={abrirModalVer}>Aceptar</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default SolicitudCuadros;