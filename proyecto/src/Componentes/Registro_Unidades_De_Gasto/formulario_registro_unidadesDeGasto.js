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
    elegirFacultad:         /^[a-zA-ZÀ-ÿ\s\d]{1,50}$/,
    elegirCarrera:          /^[a-zA-ZÀ-ÿ\s\d]{1,50}$/,
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
            seleccionarFacultad:    "",
            seleccionarCarrera:     "",

            validarunidadAdministrativa:   false, 
            validarpresupuesto:            false, 
            validarnombreJefe:             false, 
            validarnombreSecretaria:       false, 
            validartelefonoUnidad:         false,

            camposVacios:                   true,    
            
        };

        this.facultad = [
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
            { name: 'LIC. EN DIS. INTERIORES Y DEL MOBILIARIO',     code: 'LIM' },
            { name: 'LIC. EN DISEÑO GRAF Y COMUNIC VISUAL',         code: 'LDG' },
            { name: 'LICENCIATURA EN ARQUITECTURA',          	code: 'LEA' },
            { name: 'LICENCIATURA EN TURISMO',          		code: 'LET' },
            { name: 'TECNICO UNIV. SUPERIOR EN CONSTRUCCIONES',     code: 'TSC' },
    
            { name: 'LIC. EN INGENIERIA AGRICOLA',          	    code: 'LIAGRI' },
            { name: 'LIC. EN INGENIERIA FITOTECNISTA',          	code: 'LIF' },
            { name: 'LIC. EN INGENIERIA FORESTAL(NUE)',         	code: 'LIFN' },
            { name: 'LICENCIATURA EN ING. AGROINDUSTRIAL',          code: 'LIAL' },
            { name: 'LICENCIATURA EN INGENIERIA AGRONOMICA',        code: 'LIAGRO' },
            { name: 'TEC. SUPERIOR EN MECANIZACION AGRICOLA',       code: 'TSMA' },
    
            { name: 'LIC. EN ADMINISTRACION DE EMPRESAS',          code: 'LAdmE' },
        { name: 'LICENCIATURA EN CONTADURIA PUBLICA',              code: 'LConP' },
        { name: 'LICENCIATURA EN ECONOMIA',     	               code: 'LEco' },
        { name: 'LICENCIATURA EN INGENIERA COMERCIAL',         code: 'LIngCom' },
        { name: 'LICENCIATURA EN INGENIERA FINANCIERA',        code: 'LIngFin' },
    
        { name: 'LICENCIATURA EN CIENCIAS JURIDICAS',          code: 'LCIeJur' },
        { name: 'LICENCIATURA EN CIENCIAS POLITICAS (NUE)',    code: 'LCIeJurNue' },
    
        { name: 'LICENCIATURA EN SOCIOLOGIA',          		code: 'LEnSoc' },
        { name: 'PROGRAMA DE LICENCIATURA EN ANTROPOLOGIA',     code: 'PLicAnt' },
    
        { name: 'LIC. EN MEDICINA VETERINARIA Y ZOOTECNIA',     code: 'LMedVet' },
    
        { name: 'LICENCIATURA EN BIOLOGIA',          		code: 'LEnBio' },
        { name: 'LICENCIATURA EN FISICA',          		code: 'LEnFis' },
        { name: 'LICENCIATURA EN ING. ELECTROMECANICA',         code: 'LIngELecM' },
        { name: 'LICENCIATURA EN INGENIERIA CIVIL (NUEVO)',     code: 'LIngCivN' },
        { name: 'LICENCIATURA EN INGENIERIA DE SISTEMAS',       code: 'LIngSis' },
        { name: 'LICENCIATURA EN INGENIERIA ELECTRICA',         code: 'LIngEle' },
        { name: 'LICENCIATURA EN INGENIERIA INDUSTRIAL',        code: 'LIngInd' },
        { name: 'LICENCIATURA EN INGENIERIA INFORMATICA',       code: 'LIngInf' },
        { name: 'LICENCIATURA EN INGENIERIA QUIMICA',           code: 'LIngQui' },
        { name: 'LICENCIATURA EN INGENIERIA MECANICA',          code: 'LIngMec' },
    
        { name: 'LICENCIATURA EN BIOQUIMICA Y FARMACIA',        code: 'LicBioFar' },
    
        { name: 'LIC. EN PROD. AGRARIA Y DES. TERRITORIAL',  code: 'LicProAgrTer' },
        { name: 'TECNICO SUPERIOR EN AGRONOMIA',             code: 'TSAgro' },
    
        { name: 'LIC. EN FISIOTERAPIA Y KINESIOLOGIA',          code: 'LicFisKi' },
        { name: 'LICENCIATURA EN MEDICINA',          		code: 'LicMed' },
        { name: 'LICENCIATURA EN NUTRICION Y DIETETICA',        code: 'LicNutDie' },
    
        { name: 'LICENCIATURA EN ENFERMERIA',          		code: 'LicEnf' },
    
        { name: 'LICENCIATURA EN CIENCIAS DE LA EDUCACION',     code: 'LicCieEdu' },
        { name: 'LICENCIATURA EN COMUNICACION SOCIAL(NUE)',    code: 'LicComSocN' },
        { name: 'LICENCIATURA EN PSICOLOGIA (NUE)',             code: 'LicPsiN' },
        { name: 'LICENCIATURA EN TRABAJO SOCIAL',               code: 'LTraSoc' },
        { name: 'LIC. EN LINGUIS. APLIC.ENSEÑANZA LENGUAS',     code: 'LicAplLen' },
    
        { name: 'LIC. EN ODONTOLOGIA (PLAN NUEVO)',          code: 'LicOdoN' }
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
    nameImputs = ["unidadAdministrativa", 
                  "presupuesto", 
                  "nombreJefe", 
                  "nombreSecretaria", 
                  "telefonoUnidad"];

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
        if( //this.setState.seleccionarFacultad == true
            //&& this.setState.seleccionarCarrera == true

             this.state.validarunidadAdministrativa == true
            && this.state.validarpresupuesto == true
            && this.state.validarnombreJefe == true
            && this.state.validarnombreSecretaria == true
            && this.state.validartelefonoUnidad == true){
            console.log("solicitar");
            this.nameImputs.forEach((campo) => {
                console.log(document.getElementById(campo).value)
            })

            var nomF = ""
            var nomC = ""
            var nomUnid = document.getElementById("unidadAdministrativa").value
            var pre = document.getElementById("presupuesto").value 
            var jefeUnid = document.getElementById("nombreJefe").value
            var secreUnid = document.getElementById("nombreSecretaria").value
            var telUnid = document.getElementById("telefonoUnidad").value
            var llave = "1000000"

            const data = {
                nombreFacultad: `${nomF}`,
                nombreCarrera: `${nomC}`,
                nombreUnidad: `${nomUnid}`,
                presupuesto: `${pre}`,
                jefeUnidad: `${jefeUnid}`,
                secretariaUnidad: `${secreUnid}`,
                telefonoUnidad: `${telUnid}`,
                RegistroNuevoUsuario_idRegistroNuevoUsuario: 1000000
            }
            //añadiendo datos a la API con ayuda de axios
            axios.post('https://backendcompleto-sdc.herokuapp.com/api/unitSpending/createRegisterUnit' , 
                data
            ).then(response => {
                console.log('registro añadido!', response.data);
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
                                    name="elegirFacultad"
                                    title="elegirFacultad" 
                                    type="selection" 
                                    value={this.state.seleccionarFacultad} 
                                    options={this.facultad} 
                                    onChange={this.onFacultad} 
                                    optionLabel="name" 
                                    placeholder="Seleccione una Facultad" >
                                </Dropdown>
                                    
                                    
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
                                    title="nombreCarrera" 
                                    type="selection" 
                                    value={this.state.seleccionarCarrera} 
                                    options={this.carrera} 
                                    onChange={this.onCarrera} 
                                    optionLabel="name" 
                                    placeholder="Seleccione una Carrera" >
                                </Dropdown>
                                    
                                    
                                </div>
                            </div>
                            
                            <div className="p-col-12 camposform solicitud__datos" id="dato__fecha">
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