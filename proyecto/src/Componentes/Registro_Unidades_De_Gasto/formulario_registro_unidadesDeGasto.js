import { Component } from "react";
import { Card, Label } from "reactstrap";
import axios from 'axios';
import swal from 'sweetalert2';

import './formulario_registro_unidadesDeGasto.css';

import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';


const llenadoDeCampos = {
    unidadAdministrativa:   /^[a-zA-ZÀ-ÿ\s\d]{1,50}$/, 
    presupuesto:            /^\d{1,7}$/, 
    nombreJefe:             /^[a-zA-ZÀ-ÿ\s\d]{1,50}$/, 
    nombreSecretaria:       /^[a-zA-ZÀ-ÿ\s\d]{1,50}$/, 
    telefonoUnidad:         /^\d{7,8}$/
};




class Registro_Unidad_Gasto extends Component {
    constructor(props){
        super(props)
        this.state = {
            showMe:true, 
            validarunidadAdministrativa:   false, 
            validarpresupuesto:            false, 
            validarnombreJefe:             false, 
            validarnombreSecretaria:       false, 
            validartelefonoUnidad:         false,
            camposVacios:                   true,
            seleccionarFacultad:    null,
            seleccionarCarrera:     null,                      
        };
        this.factultad = [
            { name: 'Fac. Arquitectura Y Ciencias Del Habitat',     code: 'FAC' },
            { name: 'Fac. Ciencias Agricolas Y Pecuarias',          code: 'FCA' },
            { name: 'Fac. Ciencias Economicas',                     code: 'FCE' },
            { name: 'Fac. Ciencias Juridicas Y Politicas',          code: 'FCJ' },
            { name: 'Fac. Ciencias Sociales',                       code: 'FCS' },
            { name: 'Fac. Ciencias Veterinarias',                   code: 'FCV' },
            { name: 'Fac. Ciencias y Tecnología',                   code: 'FCT' },
            { name: 'Fac. Cs .Farmaceuticas Y Bioquimicas',         code: 'FFB' },
            { name: 'Fac. Desarrollo Rural y Territorial',          code: 'FDR' },
            { name: 'Fac. De Medicina',                             code: 'FM' },
            { name: 'Fac. De Enfermeria',                           code: 'FE' },
            { name: 'Fac. Humanidades Y Cs. De Educacion',          code: 'FHE' },
            { name: 'Fac. De Odontología',                          code: 'FO' }
        ];

        this.carrera = [
            { name: 'Ing. de SIstemas',                             code: 'IS' },
            { name: 'Fac. Ciencias Agricolas Y Pecuarias',          code: 'FCA' },
            { name: 'Fac. Ciencias Economicas',                     code: 'FCE' },
            { name: 'Fac. Ciencias Juridicas Y Politicas',          code: 'FCJ' },
            { name: 'Fac. Ciencias Sociales',                       code: 'FCS' },
            { name: 'Fac. Ciencias Veterinarias',                   code: 'FCV' },
            { name: 'Fac. Ciencias y Tecnología',                   code: 'FCT' },
            { name: 'Fac. Cs .Farmaceuticas Y Bioquimicas',         code: 'FFB' },
            { name: 'Fac. Desarrollo Rural y Territorial',          code: 'FDR' },
            { name: 'Fac. De Medicina',                             code: 'FM' },
            { name: 'Fac. De Enfermeria',                           code: 'FE' },
            { name: 'Fac. Humanidades Y Cs. De Educacion',          code: 'FHE' },
            { name: 'Fac. De Odontología',                          code: 'FO' }
        ];

        this.onFacultad = this.onFacultad.bind(this);
        this.onCarrera = this.onCarrera.bind(this);
    }
    onFacultad(e) {
        this.setState({ seleccionarFacultad: e.value });
    }
    onCarrera(e) {
        this.setState({ seleccionarCarrera: e.value });
    }



    //Verificar todos los campos



    nameImputs = ["unidadAdministrativa", "presupuesto", "nombreJefe", "nombreSecretaria", "telefonoUnidad"];

    verificarCampos = () => {
        this.nameImputs.forEach((campo) => {
            this.verificarCamposVacios(); //funcion para ver campos vacios revisar
            var elemento = document.getElementById(campo);
            if(campo == "unidadAdministrativa"){
                if(elemento.value ===""){
                    this.setState({
                        validarunidadAdministrativa: false
                    })
                }else{
                    console.log("posilocox2");
                    if(llenadoDeCampos.unidadAdministrativa.test(elemento.value)){
                        this.setState({
                            validarunidadAdministrativa:true
                        })
                        this.ocultarError(campo);
                    }else{
                        this.setState({
                            validarunidadAdministrativa:false
                        })
                        this.mostrarError(campo)
                    }
                }
            }else if(campo == "presupuesto"){
                if(elemento.value ===""){
                    this.setState({
                        validarpresupuesto: false
                    })
                }else{
                    console.log("posilocox2");
                    if(llenadoDeCampos.presupuesto.test(elemento.value)){
                        this.setState({
                            validarpresupuesto: true
                        })
                        this.ocultarError(campo);
                    }else{
                        this.setState({
                            validarpresupuesto: false
                        })
                        this.mostrarError(campo)
                    }
                }
            }else if(campo == "nombreJefe"){
                if(elemento.value ===""){
                    this.setState({
                        validarnombreJefe: false
                    })
                }else{
                    console.log("posilocox2");
                    if(llenadoDeCampos.nombreJefe.test(elemento.value)){
                        this.setState({
                            validarnombreJefe: true
                        })
                        this.ocultarError(campo);
                    }else{
                        this.setState({
                            validarnombreJefe: false
                        })
                        this.mostrarError(campo)
                    }
                }
            }else if(campo == "nombreSecretaria"){
                if(elemento.value ===""){
                    this.setState({
                        validarnombreSecretaria: false
                    })
                }else{
                    console.log("posilocox2");
                    if(llenadoDeCampos.nombreSecretaria.test(elemento.value)){
                        this.setState({
                            validarnombreSecretaria: true
                        })
                        this.ocultarError(campo);
                    }else{
                        this.setState({
                            validarnombreSecretaria: false
                        })
                        this.mostrarError(campo)
                    }
                }
            }else if(campo == "telefonoUnidad"){
                if(elemento.value ===""){
                    this.setState({
                        validartelefonoUnidad: false
                    })
                }else{
                    console.log("posilocox2");
                    if(llenadoDeCampos.telefonoUnidad.test(elemento.value)){
                        this.setState({
                            validartelefonoUnidad: true
                        })
                        this.ocultarError(campo);
                    }else{
                        this.setState({
                            validartelefonoUnidad: false
                        })
                        this.mostrarError(campo)
                    }
                }
            }
        })
    }

    ocultarError(etiqueta){
        document.getElementById(etiqueta).classList.remove("dato-erroneo");
        document.getElementById(`errorDeMensaje-${etiqueta}`).classList.remove("solicitud__dato-erroneo-activo");
    }
    mostrarError(etiqueta){
        document.getElementById(etiqueta).classList.add("dato-erroneo");
        document.getElementById(`errorDeMensaje-${etiqueta}`).classList.add("solicitud__dato-erroneo-activo");
    }


    //para el boton cancelar... verifica y vacia los campos
    limpiarCampos = () =>{
        this.nameImputs.forEach((campo) => {
            document.getElementById(campo).value ="";
        })
    }
    notificacionAdvertencia = () =>{
        if(!this.state.camposVacios){
            swal.fire({
                title:      'Advertencia',
                text:       'Los campos llenados serán vaciados!',
                icon:       'warning',
                showDenyButton:     'true',
                confirmButtonText:  `Aceptar`,
                denyButtonText:     `Cancelar`
            }).then((respuesta) => {
                if(respuesta.isConfirmed){
                    this.limpiarCampos();
                }else if(respuesta.isDenied){
                
                }
            })
        }
    }
    verificarCamposVacios(){
        this.nameImputs.forEach((campo) => {
            if(document.getElementById(campo) === ""){
                this.setState({
                    camposVacios: true
                })
            }else{
                this.setState({
                    camposVacios: false
                })
            }
        })
    }


    //para el boton registrar
    Solicitar = () => {
        if(this.state.validarDetalleSolicitud == true 
            && this.state.validarunidadAdministrativa == true
            && this.state.validarpresupuesto == true
            && this.state.validarnombreJefe == true
            && this.state.validarnombreSecretaria == true
            && this.state.validartelefonoUnidad == true){
            console.log("solicitar");
            this.nameImputs.forEach((campo) => {
                console.log(document.getElementById(campo).value)
            })
            //añadiendo datos a la API con ayuda de axios
            axios.post('https://backendcompleto-sdc.herokuapp.com/api/unitSpending/createRegisterUnit' , {
                nombreFacultad:     document.getElementById("nombreFacultad").value,
                nombreCarrera:      document.getElementById("nombreCarrera").value ,
                nombreUnidad:       document.getElementById("unidadAdministrativa").value ,
                presupuesto:        document.getElementById("presupuesto").value ,
                jefeUnidad:         document.getElementById("nombreJefe").value,
                secretariaUnidad:   document.getElementById("nombreSecretaria").value,
                telefonoUnidad:     document.getElementById("telefonoUnidad").value
            }).then(response => {
                console.log('Registro añadido¡¡¡', response.data);
            }).catch(e => {
                console.log(e);
            });
            document.getElementById("solicitud__mensaje-exitoso").classList.add("solicitud__mensaje-activo")
        }else{
            console.log("datos incorrectos");
            document.getElementById("solicitud__mensaje").classList.add("solicitud__dato-erroneo-activo");
        }
    }

    render(){
        return(
            <div>
                {this.state.showMe ? (
                    <div className="p-grid contenedor-deRegistro" id="mostrar-formulario-proser">

                        <div className="p-col-12 contedor-tituloDeRegistro">
                            <label className=" solitudDeProductos-servicios">
                                Registrar Unidad de Gasto
                            </label>
                        </div>           

                        <div className="contenedor-formularioDeRegistro">
                            <div className="p-col-12 camposform solicitud__datos" id="dato__item">
                                <div className="p-col-5 contenedor-camposform-subtitulos">
                                    <h3 for="campo-item" className="subtitulos"> 
                                    <i class="fas fa-school"></i> Nombre de Facultad:
                                    </h3>
                                </div>
                                <div className="p-col-7 solicitud__datos-imputs">  
                                    <Dropdown
                                        className="entradas"
                                        name="nombreFacultad"
                                        id="nombreFacultad" 
                                        type="selection" 
                                        value={this.state.seleccionarFacultad} 
                                        options={this.factultad} 
                                        onChange={this.onFacultad} 
                                        optionLabel="name" 
                                        placeholder="Seleccione una Facultad" >
                                    </Dropdown>         
                                    <i class="solicitud__validacionCampos-Estados"></i>
                                    <p className="solicitud__dato-erroneo" id="errorDeMensaje-nombreFacultad">
                                        Debe de seleccionar una Facultad.
                                    </p>
                                </div>
                            </div>
                            <div className="p-col-12 camposform solicitud__datos" id="dato__detalle">
                                <div className="p-col-5 contenedor-camposform-subtitulos">
                                    <h3 for="campo-detalle" className="subtitulos"> 
                                    <i class="fas fa-landmark"></i> Nombre de Carrera:
                                    </h3>
                                </div>
                                <div className="p-col-7 solicitud__datos-imputs">
                                    <Dropdown
                                        className="entradas"
                                        name="nombreCarrera"
                                        id="nombreCarrera" 
                                        type="selection" 
                                        value={this.state.seleccionarCarrera} 
                                        options={this.carrera} 
                                        onChange={this.onCarrera} 
                                        optionLabel="name" 
                                        placeholder="Seleccione una Carrera" >
                                    </Dropdown>
                                    <i class="solicitud__validacionCampos-Estados"></i>
                                    <p className="solicitud__dato-erroneo" id="errorDeMensaje-nombreCarrera">
                                        Debe de seleccionar una Carrera.
                                    </p>
                                </div>
                            </div>
                            <div className="p-col-12 camposform solicitud__datos" id="dato__fecha" method="POST">
                                <div className="p-col-5 contenedor-camposform-subtitulos">
                                    <h3 for="campo-detalle" className="subtitulos">
                                        <i class="fas fa-calendar-week"></i> Unidad Administrativa:
                                    </h3>
                                </div>
                                <span className="p-col-7 p-float-label solicitud__datos-imputs">
                                    <InputText className="entradas" 
                                        name="unidadAdministrativa" 
                                        id="unidadAdministrativa"
                                        title="unidadAdministrativa"
                                        type="text" 
                                        maxlength="51" 
                                        onChange = {this.verificarCampos}/>
                                    <label htmlFor="username">Ingresar la Unidad Administrativa.</label>                                                                                                                                                                			                                                                                    

                                    <i class="solicitud__validacionCampos-Estados"></i>
                                    <p className="solicitud__dato-erroneo" id="errorDeMensaje-unidadAdministrativa">
                                        El campo debe de contener solo letras.
                                    </p>
                                </span>
                            </div>
                            <div className="p-col-12 camposform solicitud__datos" id="dato__responsable">
                                <div className="p-col-5 contenedor-camposform-subtitulos">
                                    <h3 for="campo-detalle" className="subtitulos"> 
                                        <i class="fas fa-dollar-sign"></i> Presupuesto:
                                    </h3>
                                </div>
                                <span className="p-col-7 p-float-label solicitud__datos-imputs">
                                    <InputText className="entradas"
                                        name="presupuesto" 
                                        id="presupuesto" 
                                        title="presupuesto"
                                        type="number"  
                                        required pattern="[0-9]+"
                                        onChange = {this.verificarCampos}/>                                                                                                                                                                   
                                    <label htmlFor="username"> Ingresar el presupuesto destinado. </label>

                                    <i class="solicitud__validacionCampos-Estados"></i>
                                    <p className="solicitud__dato-erroneo" id="errorDeMensaje-presupuesto">
                                        El campo debe de contener solo numeros enteros.
                                    </p>
                                </span> 
                            </div>
                            <div className="p-col-12 camposform solicitud__datos" id="dato__monto">
                                <div className="p-col-5 contenedor-camposform-subtitulos">
                                    <h3 for="campo-detalle" className="subtitulos"> 
                                        <i class="fas fa-user-tie"></i> Nombre de Jefe:
                                    </h3>
                                </div>
                                <span className="p-col-7 p-float-label solicitud__datos-imputs">
                                    <InputText className="entradas"
                                        name="nombreJefe" 
                                        id="nombreJefe" 
                                        title="nombreJefe"
                                        type="text" 
                                        maxlength="51" 
                                        onChange = {this.verificarCampos}/>                                                                                                                                                                                                                                         
                                    <label htmlFor="username"> Ingresar nombre completo de Jefe. </label>

                                    <i class="solicitud__validacionCampos-Estados"></i>
                                    <p className="solicitud__dato-erroneo" id="errorDeMensaje-nombreJefe">
                                        El campo debe de contener solo letras.
                                    </p>
                                </span>
                            </div>
                            <div className="p-col-12 camposform solicitud__datos" id="dato__monto">
                                <div className="p-col-5 contenedor-camposform-subtitulos">
                                    <h3 for="campo-detalle" className="subtitulos"> 
                                    <i class="fas fa-user"></i> Nombre de Secretario/a:
                                    </h3>
                                </div>
                                <span className="p-col-7 p-float-label solicitud__datos-imputs">
                                    <InputText className="entradas"
                                        name="nombreSecretaria" 
                                        id="nombreSecretaria" 
                                        title="nombreSecretaria"
                                        type="text" 
                                        maxlength="51" 
                                        onChange = {this.verificarCampos}/>                                                                                                                                                              
                                    <label htmlFor="username"> Ingresar nombre completo de Secretaria. </label>

                                    <i class="solicitud__validacionCampos-Estados"></i>
                                    <p className="solicitud__dato-erroneo" id="errorDeMensaje-nombreSecretaria">
                                        El campo debe de contener solo letras.
                                    </p>
                                </span>
                            </div>
                            <div className="p-col-12 camposform solicitud__datos" id="dato__monto">
                                <div className="p-col-5 contenedor-camposform-subtitulos">
                                    <h3 for="campo-detalle" className="subtitulos"> 
                                    <i class="fas fa-phone-alt"></i> Telefono:
                                    </h3>
                                </div>
                                <span className="p-col-7 p-float-label solicitud__datos-imputs">
                                    <InputText className="entradas"
                                        name="telefonoUnidad" 
                                        id="telefonoUnidad" 
                                        title="telefonoUnidad"
                                        type="number"  
                                        required pattern="[0-9]+"
                                        onChange = {this.verificarCampos}/>                                                                                                                                                                                                      
                                    <label htmlFor="username"> Ingresar numero de Telefono. </label>

                                    <i class="solicitud__validacionCampos-Estados"></i>
                                    <p className="solicitud__dato-erroneo" id="errorDeMensaje-telefonoUnidad">
                                        El campo debe de contener entre 7 a 8 digitos.
                                    </p>
                                </span>
                            </div>

                            <div class="p-col-12 solicitud__mensaje" id="solicitud__mensaje">
                                <label>
                                    <i class="fas fa-exclamation-triangle"></i>
                                    <b>Error:</b> Llene los campos correctamente.
                                </label>
                            </div>
                            <div className="p-col-12 contendor-botonesDeRegistro solicitud__datos solicitud__datos-botonsolicitar">
                                    <button className="botondecancelar botones-formulario" type="button" onClick={this.notificacionAdvertencia} >Cancelar</button>
                                    <button className="botondesolicitar botones-formulario" id="solicitar" type="button" onClick={this.Solicitar} >Registrar Unidad</button>
                            </div>
                            <div className="mensaje-exitoso">
                                <p className= "solicitud__mensaje-exitoso" id="solicitud__mensaje-exitoso">
                                    ¡Se envio el formulario exitosamente!
                                </p>
                            </div>
                        </div>
                    </div>

                ):(<div></div>)}
            </div>);
    }
}

export default Registro_Unidad_Gasto;