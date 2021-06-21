import React, {useState} from 'react'
import './estilos-empresas.css'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import swal from 'sweetalert2';

function Estructura(props){
    //bloque para poder mostrar ventana flotante que contenga datos de una empresa
    const [estadoModalVer, setEstadoModalVer] = useState(false)

    const abrirModalVer = () => {
        setEstadoModalVer(!estadoModalVer)
    }

    const modalStyles = {
        position: "absolute",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '500px'
    }

    //bloque para mostrar ventana flotante para editar una empresa.

    //bloque para eliminar una empresa mediante un boton.
    const eliminarEmpresa = () => {
        swal.fire({
            title: 'Advertencia!',
            text: "La empresa seleccionada será borrada de forma definitiva! ¿Desea continuar?",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText:"Cancelar",
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Borrar empresa.'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://backendcompleto-sdc.herokuapp.com/api/registerBusiness/deleteRegisterBus/${props.empresa.idRegistroEmpresa}`, {method: 'DELETE'})
                .then(() => 
                    swal.fire(
                        'Eliminada',
                        'La empresa seleccionada ha sido elimida.',
                        'Hecho!'
                    )
                )
            }
            })
    }

    return(
        <div className="contenedor-gral" data-aos="fade-up" data-aos-duration="2000">
            <section className="contenedor-campos-ver-empresa">
                    <div className="contenedor-id campos">
                        <label className="subt-ver-empr">ID: </label>
                        <label className="cont-ver-emp">{props.empresa.idRegistroEmpresa}</label>
                    </div>
                    <div className="contenedor-nombre campos">
                        <label className="subt-ver-empr">Empresa:</label>
                        <label className="cont-ver-emp">{props.empresa.nombreEmpresa}</label>
                    </div>
                    <div className="contenedor-telf campos">
                        <label className="subt-ver-empr">Teléfono:</label>
                        <label className="cont-ver-emp">{props.empresa.telefonoEmpresa}</label>
                    </div>
                    <div className="contenedor-enc campos">
                        <label className="subt-ver-empr">Encargado:</label>
                        <label className="cont-ver-emp">{props.empresa.NombrePersona}</label>
                    </div>
                    <div className="contenedor-btn-ver-empresas">
                        <button className="btn-ver-empresa btn-edit-empr" title="Editar datos de empresa"><i class="fas fa-pencil-alt icono-ver-empresa"></i></button>
                        <button className="btn-ver-empresa btn-elim-empr" title="Eliminar empresa" onClick={eliminarEmpresa}><i class="far fa-trash-alt icono-ver-empresa"></i></button>
                        <button className="btn-ver-empresa btn-ver-empr" title="Ver datos completos de empresa" onClick={abrirModalVer}><i class="far fa-eye icono-ver-empresa"></i></button>
                    </div>
            </section>
            <Modal isOpen={estadoModalVer} style={modalStyles}>
                <ModalHeader>
                    {props.empresa.nombreEmpresa}
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label className ="subt-ver-empr">Rubro:</Label>
                        <Label className ="cont-ver-emp">{props.empresa.rubroEmpresa}</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label className ="subt-ver-empr">Teléfono:</Label>
                        <Label className ="cont-ver-emp">{props.empresa.telefonoEmpresa}</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label className ="subt-ver-empr">Correo:</Label>
                        <Label className ="cont-ver-emp">{props.empresa.correoEmpresa}</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label className ="subt-ver-empr">Nit:</Label>
                        <Label className ="cont-ver-emp">{props.empresa.NITEmpresa}</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label className ="subt-ver-empr">Encargado:</Label>
                        <Label className ="cont-ver-emp">{props.empresa.NombrePersona}</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label className ="subt-ver-empr">Teléfono Encargado:</Label>
                        <Label className ="cont-ver-emp">{props.empresa.telefonoPersona}</Label>
                    </FormGroup>
                    <FormGroup>
                        <Label className ="subt-ver-empr">Ci:</Label>
                        <Label className ="cont-ver-emp">{props.empresa.ciPersona}</Label>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={abrirModalVer}>Aceptar</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Estructura;