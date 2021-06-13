
import {Component} from 'react';
import './Estilos_formulario_productos-servicios.css';
import swal from 'sweetalert2';
import axios from 'axios';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Input, Label} from 'reactstrap';

import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

const llenadoDeCampos = {
    item: /^[a-zA-ZÀ-ÿ\s\d]{1,50}$/,
    detalleSolicitud: /^[a-zA-ZÀ-ÿ\s\d]{1,200}$/,
    //fecha: /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[/\\/](19|20)\d{2}$/,
    responsableSolicitud: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    monto: /^\d{1,7}$/,
};



class Formulario_ProductosServicios extends Component{

    constructor(props){
        super(props)
        this.state = {
            showMe:true,
            validarItem:                    false,
            validarDetalleSolicitud:        false,
            validarResponsableSolicitud:    false,
            validarMonto:                   false,
            camposVacios:                   true,

            fecha: new Date()
        }
    }

    operation(){
        this.setState.showMe = true;
    }

    nameImputs = ["item",
                  "detalleSolicitud", 
                  "responsableSolicitud", 
                  "monto"];

    //para verificar los datos de cada campo
    verificarCampos = () => {
        this.nameImputs.forEach((campo) => {
            this.verificarCamposVacios();
            var elemento = document.getElementById(campo);
            if(campo == "detalleSolicitud"){
                if(elemento.value ===""){
                    this.setState({
                        validarDetalleSolicitud: false
                    })
                }else{
                    console.log("posiloco");
                    if(llenadoDeCampos.detalleSolicitud.test(elemento.value)){
                        this.setState({
                            validarDetalleSolicitud:true
                        })
                        this.ocultarError(campo);
                    }else{
                        this.setState({
                            validarDetalleSolicitud:false
                        })
                        this.mostrarError(campo)
                    }
                }
            }else if(campo == "responsableSolicitud"){
                if(elemento.value ===""){
                    this.setState({
                        validarResponsableSolicitud: false
                    })
                }else{
                    console.log("posiloco");
                    if(llenadoDeCampos.responsableSolicitud.test(elemento.value)){
                        this.setState({
                            validarResponsableSolicitud: true
                        })
                        this.ocultarError(campo);
                    }else{
                        this.setState({
                            validarResponsableSolicitud: false
                        })
                        this.mostrarError(campo)
                    }
                }
            }else if (campo == "monto"){
                if(elemento.value ===""){
                    this.setState({
                        validarMonto: false
                    })
                }else{
                    console.log("posiloco");
                    if(llenadoDeCampos.monto.test(elemento.value)){
                        this.setState({
                            validarMonto: true
                        })
                        this.ocultarError(campo);
                    }else{
                        this.setState({
                            validarMonto: false
                        })
                        this.mostrarError(campo)
                    }
                }
            }else if (campo == "item"){
                if(elemento.value === ""){
                    this.setState({
                        validarItem: false
                    })
                }else{
                    console.log("posiloco");
                    if(llenadoDeCampos.item.test(elemento.value)){
                        this.setState({
                            validarItem:true
                        })
                        this.ocultarError(campo);
                    }else{
                        this.setState({
                            validarItem: false
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



    //al presionar el boton "Solicitar"
    Solicitar = () => {
        if(this.state.validarItem == true 
            && this.state.validarDetalleSolicitud == true 
            && this.state.validarResponsableSolicitud == true 
            && this.state.validarMonto == true){
            console.log("solicitar");
            this.nameImputs.forEach((campo) => {
                console.log(document.getElementById(campo).value)
            })


            var iitem1 = document.getElementById("item").value
            var detalle = document.getElementById("detalleSolicitud").value
            var fechaS = document.getElementById("fecha").value
            var respon = document.getElementById("responsableSolicitud").value
            var mont = document.getElementById("monto").value
            var llave = "3000000"

            const data = {
                item: `${iitem1}`,
                DetalleSolitud: `${detalle}` ,
                FechaDeSolicitud: `${fechaS}` ,
                responsableSolicitud: `${respon}` ,
                montoSolicitud: `${mont}`,
                estadoSolicitud: "En espera",
                registroUnidadGasto_idRegistroUnidad: 3000000
            }
            console.log(fechaS);
            //añadiendo datos a la API con ayuda de axios
            axios.post('https://backendcompleto-sdc.herokuapp.com/api/formReq/createFormReq' ,
                data
            ).then(response => {
                console.log('solicitud aceptada y añadida!', response.data);
            }).catch(e => {
                console.log(e);
            });

            document.getElementById("solicitud__mensaje-exitoso").classList.add("solicitud__mensaje-activo")
        }else{
            console.log("datos incorrectos");
            document.getElementById("solicitud__mensaje").classList.add("solicitud__dato-erroneo-activo");
        }
    }



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
    
    
    
    render(){
        return(
            <div>
                    {this.state.showMe ? (
                    <div className="p-grid contenedor-deRegistro" id="mostrar-formulario-proser">

                        <div className="p-col-12 contedor-tituloDeRegistro">
                            <label className=" solitudDeProductos-servicios">
                                Solicitud de Productos y/o Servicios
                            </label>
                        </div>           
                                                                                                                            
                        <div className="contenedor-formularioDeRegistro">

                            <div className="camposform solicitud__datos" id="dato__item">
                                <div className="contenedor-camposform-subtitulos">
                                    <h3 for="campo-detalle" className="subtitulos"> <i class="fas fa-newspaper"></i> Item:</h3>
                                </div>
                                <div className="solicitud__datos-imputs">
                                    <input
                                        className="entradas"
                                        name="item"
                                        id="item" 
                                        type="text" 
                                        placeholder="Ingresar nombre del Item" 
                                        maxlength="51"
                                        onChange = {this.verificarCampos}>
                                    </input>
                                    <i class="solicitud__validacionCampos-Estados"></i>
                                    <p className="solicitud__dato-erroneo" id="errorDeMensaje-item">
                                        El texto debe de contener caracteres y numeros.
                                    </p>
                                </div>
                            </div>

                            <div className="camposform solicitud__datos" id="dato__detalle">
                                <div className="contenedor-camposform-subtitulos">
                                    <h3 for="campo-detalle" className="subtitulos"> <i class="fas fa-book"></i> Detalle:</h3>
                                </div>
                                <div className="solicitud__datos-imputs">
                                    <textarea
                                        className="entradas"
                                        name="detalleSolicitud"
                                        id="detalleSolicitud" 
                                        type="text" 
                                        placeholder="Ingresar detalle de solicitud..." 
                                        maxlength="201"
                                        onChange = {this.verificarCampos}>

                                    </textarea>
                                    <i class="solicitud__validacionCampos-Estados"></i>
                                    <p className="solicitud__dato-erroneo" id="errorDeMensaje-detalleSolicitud">
                                        El texto debe de contener menos de 200 caracteres.
                                    </p>

                                </div>
                            </div>

                            <div className="camposform solicitud__datos" id="dato__fecha" method="POST">
                                <div className="contenedor-camposform-subtitulos">
                                    <h3 for="campo-detalle" className="subtitulos"><i class="fas fa-calendar-week"></i> Fecha de solicitud:</h3>
                                </div>
                                <div className="solicitud__datos-imputs">
                                    <DatePicker className="entradas" 
                                        type="text" 
                                        name="fecha"
                                        title="fechaSolicitud"
                                        id="fecha" selected={this.state.fecha}
                                        dateFormat="dd/MM/yyyy">
                                    </DatePicker>

                                </div>
                            </div>

                            <div className="camposform solicitud__datos" id="dato__responsable">
                                <div className="contenedor-camposform-subtitulos">
                                    <h3 for="campo-detalle" className="subtitulos"> <i class="fas fa-user"></i> Responsable de solicitud:</h3>
                                </div>
                                <div className="solicitud__datos-imputs">
                                    <input 
                                        className="entradas"
                                        name="responsableSolicitud"
                                        id="responsableSolicitud"
                                        type="text" 
                                        placeholder="ingresar responsable de solicitud"
                                        onChange = {this.verificarCampos}>

                                    </input>

                                    <i class="solicitud__validacionCampos-Estados"></i>
                                    <p className="solicitud__dato-erroneo" id="errorDeMensaje-responsableSolicitud">
                                        El campo debe de contener solo letras.
                                    </p>

                                </div> 
                            </div>

                            <div className="camposform solicitud__datos" id="dato__monto">
                                <div className="contenedor-camposform-subtitulos">
                                    <h3 for="campo-detalle" className="subtitulos"> <i class="fas fa-dollar-sign"></i> Monto:   </h3>
                                </div>
                                <div className="solicitud__datos-imputs">
                                    <input 
                                        className="entradas"
                                        name="monto"
                                        id="monto" 
                                        type="number" 
                                        placeholder="ingresar monto" 
                                        required pattern="[0-9]+" 
                                        onChange = {this.verificarCampos}>

                                    </input>
                                    <i class="solicitud__validacionCampos-Estados"></i>
                                    <p className="solicitud__dato-erroneo" id="errorDeMensaje-monto">
                                        El campo debe de contener solo numeros positivos.
                                    </p>

                                </div>
                            </div>

                            <div class="solicitud__mensaje" id="solicitud__mensaje">
                                <label>
                                    <i class="fas fa-exclamation-triangle"></i>
                                    <b>Error:</b> Llene los campos correctamente.
                                </label>
                            </div>

                            <div className="contendor-botonesDeRegistro solicitud__datos solicitud__datos-botonsolicitar">
                                    <button className="botondecancelar botones-formulario" type="button" onClick={this.notificacionAdvertencia} >Cancelar</button>
                                    <button className="botondesolicitar botones-formulario" id="solicitar" type="button" onClick={this.Solicitar} >Solicitar</button>
                            </div>

                            <div className="mensaje-exitoso">
                                <p className= "solicitud__mensaje-exitoso" id="solicitud__mensaje-exitoso">
                                    ¡Se envio el formulario exitosamente!
                                </p>
                            </div>
                        </div>

                    </div>
                    ):(<div></div>)}
            </div>
        );
    }
}

export default Formulario_ProductosServicios;