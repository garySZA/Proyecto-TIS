
import {Component} from 'react';
import './Estilos_formulario_productos-servicios.css';
import axios from 'axios';

const llenadoDeCampos = {
    detalleSolicitud: /^[a-zA-Z\_\-]{0,200}$/,
    /*fecha: /^{1,10}/ ,*/
    responsableSolicitud: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    monto: /^\d{1,7}$/,
};

class Formulario_ProductosServicios extends Component{

    constructor(props){
        super(props)
        this.state = {
            showMe:true,
            validarDetalleSolicitud: false,
            validarResponsableSolicitud: false,
            validarMonto: false
        }
    }

    operation(){
        this.setState.showMe = true;
    }

    //al presionar le boton "Cancelar"
    Alerta = () => {
        alert("Se cancelo el registro!")
    }

    nameImputs = ["detalleSolicitud", "responsableSolicitud", "monto"];

    //para verificar los datos de cada campo
    verificarCampos = () => {
        this.nameImputs.forEach((campo) => {
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
        if(this.state.validarDetalleSolicitud == true && this.state.validarResponsableSolicitud == true && this.state.validarMonto == true){
            console.log("solicitar");
            this.nameImputs.forEach((campo) => {
                console.log(document.getElementById(campo).value)
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
                    <div className="contenedor-deRegistro">
                        <div className="contedor-tituloDeRegistro">
                            <div className="tituloDeRegistro">
                                <h1 className="SolitudDeProductos-servicios">SOLICITUD DE PRODUTOS Y/O SERVICIOS</h1>
                            </div>
                        </div>
                        <div className="contenedor-formularioDeRegistro">
                            <div className="campos solicitud__datos" id="dato__detalle">
                                <h3 className="campo-detalle"> <i class="fas fa-book"></i> Detalle:</h3>
                                <div className="solicitud__datos-imputs">
                                    <textarea 
                                        className="introducir-detalleDeRegistro"
                                        name="detalleSolicitud"
                                        id="detalleSolicitud" 
                                        type="text" 
                                        placeholder="Ingresar detalle de solicitud..." 
                                        maxlength="200"
                                        onChange = {this.verificarCampos}>

                                    </textarea>
                                    <i class="solicitud__validacionCampos-Estados fas fa-times-circle"></i>
                                    <p className="solicitud__dato-erroneo" id="errorDeMensaje-detalleSolicitud">
                                        El campo debe de contener solo letras.
                                    </p>

                                </div>
                            </div>

                            <div className="contenedor-fechaDeSolicitud">
                                <h3 className="campo-fechaDeSolicitud"><i class="fas fa-calendar-week"></i> Fecha de solicitud:</h3>
                                <div className="input-introducir-fechaDeSolicitud">
                                    <input 
                                        className="introducir-fechaDeSolicitud" 
                                        type="date" 
                                        name="fecha"
                                        id="fecha" >

                                    </input>

                                </div>
                            </div>

                            <div className="campos solicitud__datos" id="dato__responsable">
                                <h3 className="campo-responsableDeSolicitud"> <i class="fas fa-user"></i> Responsable de solicitud:</h3>
                                <div className="solicitud__datos-imputs">
                                    <input 
                                        className="introducir-responsableDeSolicitud"
                                        name="responsableSolicitud"
                                        id="responsableSolicitud"
                                        type="text" 
                                        placeholder="ingresar responsable de solicitud"
                                        onChange = {this.verificarCampos}>

                                    </input>

                                    <i class="solicitud__validacionCampos-Estados fas fa-times-circle"></i>
                                    <p className="solicitud__dato-erroneo" id="errorDeMensaje-responsableSolicitud">
                                        El campo debe de contener solo letras.
                                    </p>

                                </div> 
                            </div>

                            <div className="campos solicitud__datos" id="dato__monto">
                                <h3 className="campo-monto"> <i class="fas fa-dollar-sign"></i> Monto:   </h3>
                                <div className="solicitud__datos-imputs">
                                    <input 
                                        className="introducir-monto"
                                        name="monto"
                                        id="monto" 
                                        type="number" 
                                        placeholder="ingresar monto" 
                                        required pattern="[0-9]+" 
                                        onChange = {this.verificarCampos}>

                                    </input>
                                    <i class="solicitud__validacionCampos-Estados fas fa-times-circle"></i>
                                    <p className="solicitud__dato-erroneo" id="errorDeMensaje-monto">
                                        El campo debe de contener solo numeros.
                                    </p>

                                </div>
                            </div>

                            <div class="solicitud__mensaje" id="solicitud__mensaje">
                                <label>
                                    <i class="fas fa-exclamation-triangle"></i>
                                    <b>Error:</b> Llene los campos correctamente.
                                </label>
                            </div>

                            <div className="contendor-botonesDeRegistro">
                                <div className="boton-cancelarRegistro">
                                    <button className="cancelarRegistro" type="button" onClick={this.Alerta} >Cancelar</button>
                                </div>
                                <div className="boton-solicitarRegistro">
                                    <button className="solicitarRegistro" id="solicitar" type="button" onClick={this.Solicitar} >Solicitar</button>
                                </div>
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