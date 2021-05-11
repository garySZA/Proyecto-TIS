import { Component } from 'react';
import './estilos_registro_empresa.css';
import axios from 'axios';

const expresiones = {
    nombreEmpresa: /^[a-zA-Z\_\-]{0,100}$/, // Letras
    rubro: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras
    telefonoEmpresa: /^\d{7,8}$/, // 7 a 8 digitos.
    correoEmpresa: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    nitEmpresa: /^\d{10}$/, // 10 digitos.
    nombrePersona: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras
    telPersona: /^\d{7,8}$/, // 7 a 8 digitos.
    ciPersona: /^\d{7,8}$/, // 7 a 8 digitos.
};
class Registro_Empresa extends Component{
    
    constructor(props){
        super(props)
        this.state={
            showMe:true,
            validoNombreEmpresa     : false,
            validoRubroEmpresa      : false,
            validoTelefonoEmpresa   : false,
            validoCorreoEmpresa     : false,
            validoNitEmpresa        : false,
            validoNombrePersona     : false,
            validoTelefonoPersona   : false,
            validoCiPersona         : false
        }
    }
    
    operation(){
        this.setState.showMe=true;
    }

    nombreCampos = ["nombreEmpresa", "rubro" ,"telefonoEmpresa", "correoEmpresa", "nitEmpresa", "nombrePersona", "telPersona", "ciPersona"];
    
    onChange = () => {
        this.nombreCampos.forEach((campo) => {
            var elemento = document.getElementById(campo);
            if(campo == "nombreEmpresa"){
                if(elemento.value ===""){
                    this.setState({
                        validoNombreEmpresa:false
                    })
                }else{
                    console.log("funciona");
                    if(expresiones.nombreEmpresa.test(elemento.value)){
                        this.setState({
                            validoNombreEmpresa:true
                        })
                        this.quitarEfectoError(campo);
                    }else{
                        this.setState({
                            validoNombreEmpresa:false
                        })
                        this.darEfectoError(campo)
                    }
                }
            }else if(campo == "rubro"){
                if(elemento.value ===""){
                    this.setState({
                        validoRubroEmpresa:false
                    })
                }else{
                    console.log("funciona");
                    if(expresiones.rubro.test(elemento.value)){
                        this.setState({
                            validoRubroEmpresa:true
                        })
                        this.quitarEfectoError(campo);
                    }else{
                        this.setState({
                            validoRubroEmpresa:false
                        })
                        this.darEfectoError(campo)
                    }
                }
            }else if(campo == "telefonoEmpresa"){
                if(elemento.value ===""){
                    this.setState({
                        validoTelefonoEmpresa:false
                    })
                }else{
                    console.log("funciona");
                    if(expresiones.telefonoEmpresa.test(elemento.value)){
                        this.setState({
                            validoTelefonoEmpresa:true
                        })
                        this.quitarEfectoError(campo);
                    }else{
                        this.setState({
                            validoTelefonoEmpresa:false
                        })
                        this.darEfectoError(campo)
                    }
                }
            }else if(campo == "correoEmpresa"){
                if(elemento.value ===""){
                    this.setState({
                        validoCorreoEmpresa:false
                    })
                }else{
                    console.log("funciona");
                    if(expresiones.correoEmpresa.test(elemento.value)){
                        this.setState({
                            validoCorreoEmpresa:true
                        })
                        this.quitarEfectoError(campo);
                    }else{
                        this.setState({
                            validoCorreoEmpresa:false
                        })
                        this.darEfectoError(campo)
                    }
                }
            }else if(campo == "nitEmpresa"){
                if(elemento.value ===""){
                    this.setState({
                        validoNitEmpresa:false
                    })
                }else{
                    console.log("funciona");
                    if(expresiones.nitEmpresa.test(elemento.value)){
                        this.setState({
                            validoNitEmpresa:true
                        })
                        this.quitarEfectoError(campo);
                    }else{
                        this.setState({
                            validoNitEmpresa:false
                        })
                        this.darEfectoError(campo)
                    }
                }
            }else if(campo == "nombrePersona"){
                if(elemento.value ===""){
                    this.setState({
                        validoNombrePersona:false
                    })
                }else{
                    console.log("funciona");
                    if(expresiones.nombrePersona.test(elemento.value)){
                        this.setState({
                            validoNombrePersona:true
                        })
                        this.quitarEfectoError(campo);
                    }else{
                        this.setState({
                            validoNombrePersona:false
                        })
                        this.darEfectoError(campo)
                    }
                }
            }else if(campo == "telPersona"){
                if(elemento.value ===""){
                    this.setState({
                        validoTelefonoPersona:false
                    })
                }else{
                    console.log("funciona");
                    if(expresiones.telPersona.test(elemento.value)){
                        this.setState({
                            validoTelefonoPersona:true
                        })
                        this.quitarEfectoError(campo);
                    }else{
                        this.setState({
                            validoTelefonoPersona:false
                        })
                        this.darEfectoError(campo)
                    }
                }
            }else{
                if(elemento.value ===""){
                    this.setState({
                        validoCiPersona:false
                    })
                }else{
                    console.log("funciona");
                    if(expresiones.ciPersona.test(elemento.value)){
                        this.setState({
                            validoCiPersona:true
                        })
                        this.quitarEfectoError(campo);
                    }else{
                        this.setState({
                            validoCiPersona:false
                        })
                        this.darEfectoError(campo)
                    }
                }
            }
            
        })
    }

    quitarEfectoError(etiqueta){
        document.getElementById(etiqueta).classList.remove("input-error");
        document.getElementById(`mensajeError-${etiqueta}`).classList.remove("formulario__input-error-activo");
    }

    darEfectoError(etiqueta){
        document.getElementById(etiqueta).classList.add("input-error");
        document.getElementById(`mensajeError-${etiqueta}`).classList.add("formulario__input-error-activo");
    }

    verificar = () =>{
        if(this.state.validoNombreEmpresa == true && this.state.validoRubroEmpresa == true && this.state.validoTelefonoEmpresa == true && this.state.validoCorreoEmpresa == true && this.state.validoNitEmpresa == true && this.state.validoNombrePersona==true && this.state.validoTelefonoPersona == true && this.state.validoCiPersona == true){
            console.log("registrar");
            this.nombreCampos.forEach((campo) => {
                console.log(document.getElementById(campo).value)
            })
            //realizando un Post a la api mediante axios
            axios.post('http://localhost:8080/api/empresas',{
                nombreEmpresa: document.getElementById("nombreEmpresa").value,
                rubro: document.getElementById("rubro").value,
                telefonoEmpresa: document.getElementById("telefonoEmpresa").value,
                correoEmpresa : document.getElementById("correoEmpresa").value,
                nit : document.getElementById("nitEmpresa").value,
                nombreEncargado : document.getElementById("nombrePersona").value,
                telefonoEncargado : document.getElementById("telPersona").value,
                ciEncargado : document.getElementById("ciPersona").value
            }).then(response => {
                console.log('Empresa añadida: ', response.data);
            }).catch(e => {
                console.log(e);
            });

            document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-activo");
        }else{
            console.log("datos llenados incorrectamente");
            document.getElementById("formulario__mensaje").classList.add("formulario__input-error-activo");
        }
    }

    render(){
        return(
            <div >
                {this.state.showMe ? (
                    <div className="contenedor-empresa" id="mostrar-registro-empresa">
                    <div className="contenedor-titulo">
                        <h2 className="titulo-registro-empresa">
                            Registro de Empresa
                        </h2>
                    </div>
                    <div className="contenedor-campos formulario">

                        <div className="elementos formulario__grupo" id="grupo__usuario">
                            <div className="contenedor-elementos-subtitulo">
                                <i className="fas fa-building"></i>
                                <label for="nombre-empresa" className="subtitulo">Nombre de empresa:</label>
                            </div>
                            <div className="formulario__grupo-input ">
                            <input 
                                type="text" 
                                className="inputs"
                                name="nombreEmpresa"
                                id="nombreEmpresa" 
                                placeholder="Ingrese nombre aquí"
                                onChange={this.onChange}>

                            </input>
                            <i class="formulario__validacion-estado fas fa-times-circle"></i>
                            <p className="formulario__input-error" id="mensajeError-nombreEmpresa">
                                El nombre debe contener solo letras
                            </p>
                            </div>
                        </div>

                        <div className="elementos formulario__grupo" id="grupo__rubro">
                            <div className="contenedor-elementos-subtitulo">
                                <i className="fas fa-briefcase"></i>
                                <label for="nombre-empresa" className="subtitulo">Rubro de empresa:</label>
                            </div>
                            <div className="formulario__grupo-input">
                                <input 
                                    type="text" 
                                    className="inputs"
                                    name="rubro" 
                                    id="rubro"
                                    placeholder="Ingrese rubro aquí"
                                    onChange={this.onChange}>
                                </input>
                                <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                <p className="formulario__input-error" id="mensajeError-rubro">
                                    El rubro de la empresa debe contener entre 0 y 70 caracteres
                                </p>
                            </div>
                        </div>

                        <div className="elementos formulario__grupo" id="grupo__telefonoEmpresa">
                            <div className="contenedor-elementos-subtitulo">
                                <i className="fas fa-phone"></i>
                                <label for="nombre-empresa" className="subtitulo">Telefono de empresa:</label>
                            </div>
                            <div className="formulario__grupo-input">
                                <input 
                                    type="text" 
                                    className="inputs" 
                                    name="telefonoEmpresa"
                                    id="telefonoEmpresa"
                                    placeholder="Ingrese teléfono aquí"
                                    onChange={this.onChange}>
                                </input>
                                <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                <p className="formulario__input-error" id="mensajeError-telefonoEmpresa">
                                El telefono solo puede contener numeros y el maximo son 8 dígitos.
                                </p>
                            </div>
                        </div>

                        <div className="elementos formulario__grupo" id="grupo__correoEmpresa">
                            <div className="contenedor-elementos-subtitulo">
                                <i className="fas fa-at"></i>
                                <label className="nombre-empresa" className="subtitulo">Correo electrónico de empresa:</label>
                            </div>
                            <div className="formulario__grupo-input">
                                <input 
                                    type="text" 
                                    className="inputs"
                                    name="correoEmpresa"
                                    id="correoEmpresa" 
                                    placeholder="Ingrese correo aquí"
                                    onChange={this.onChange}>
                                </input>
                                <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                <p className="formulario__input-error" id="mensajeError-correoEmpresa">
                                El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.
                                </p>
                            </div>
                        </div>

                        <div className="elementos formulario__grupo" id="grupo__nitEmpresa">
                            <div className="contenedor-elementos-subtitulo">
                                <i className="fas fa-hashtag"></i>
                                <label for="nombre-empresa" className="subtitulo">NIT de empresa:</label>
                            </div>
                            <div className="formulario__grupo-input">
                                <input 
                                    type="text" 
                                    className="inputs" 
                                    name="nitEmpresa"
                                    id="nitEmpresa"
                                    placeholder="Ingrese nit aquí"
                                    onChange={this.onChange}>
                                </input>
                                <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                <p class="formulario__input-error" id="mensajeError-nitEmpresa">
                                    El nit de la empresa solo puede contener 10 dígitos.
                                </p>
                            </div>
                        </div>

                        <div className="elementos formulario__grupo" id="grupo__nombrePersona">
                            <div className="contenedor-elementos-subtitulo">
                                <i className="fas fa-user"></i>
                                <label for="nombre-empresa" className="subtitulo">Nombre de persona encargada:</label>
                            </div>
                            <div className="formulario__grupo-input">
                                <input 
                                    type="text" 
                                    className="inputs" 
                                    name="nombrePersona"
                                    id="nombrePersona"
                                    placeholder="Ingrese nombre aquí"
                                    onChange={this.onChange}>
                                </input>
                                <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                <p class="formulario__input-error" id="mensajeError-nombrePersona">
                                    El nombre solo puede contener 40 letras y espacios.
                                </p>
                            </div>
                        </div>

                        <div className="elementos formulario__grupo" id="grupo__telefonoPersona">
                            <div className="contenedor-elementos-subtitulo">
                                <i className="fas fa-phone"></i>
                                <label for="nombre-empresa" className="subtitulo">Telefono de persona encargada:</label>
                            </div>
                            <div className="formulario__grupo-input">
                                <input 
                                    type="text" 
                                    className="inputs" 
                                    name="telefonoPersona"
                                    id="telPersona"
                                    placeholder="Ingrese teléfono aquí"
                                    onChange={this.onChange}>
                                </input>
                                <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                <p class="formulario__input-error" id="mensajeError-telPersona">
                                    El telefono solo puede contener entre 7 y 8 digitos
                                </p>
                            </div>
                        </div>

                        <div className="elementos formulario__grupo" id="grupo__ciPersona">
                            <div className="contenedor-elementos-subtitulo">
                                <i className="fas fa-hashtag"></i>
                                <label for="nombre-empresa" className="subtitulo">CI de persona encargada:</label>
                            </div>
                            <div className="formulario__grupo" id="grupo-input">
                                <input 
                                    type="text" 
                                    className="inputs" 
                                    name="ciPersona"
                                    id="ciPersona"
                                    placeholder="Ingrese ci aquí"
                                    onChange={this.onChange}>
                                </input>
                                <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                <p class="formulario__input-error" id="mensajeError-ciPersona">
                                    El ci solo puede contener números.
                                </p>
                            </div>
                        </div>

                        <div class="formulario__mensaje" id="formulario__mensaje">
                            <p>
                                <i class="fas fa-exclamation-triangle"></i>
                                <b>Error:</b> Por favor
                                rellena el formulario correctamente.
                            </p>
                        </div>

                        <div className="contenedor-botones formulario__grupo formulario__grupo-btn-enviar">
                            <button className="boton-cancelar boton">Cancelar</button>
                            <button className="boton-registrar boton formulario__btn" id="registrar" onClick={this.verificar}>Registrar</button>
                        </div>
                        <div className="mensaje-exito">
                            <p class="formulario__mensaje-exito" id="formulario__mensaje-exito">
                                ¡Formulario enviado exitosamente!
                            </p>
                        </div>
                    </div>
                </div>
                ):(<div></div>)}
            </div>
        );
    }
}

export default Registro_Empresa;