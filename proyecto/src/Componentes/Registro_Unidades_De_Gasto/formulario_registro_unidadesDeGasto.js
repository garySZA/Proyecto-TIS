import { Component } from "react";
import { Card, Label } from "reactstrap";

import './formulario_registro_unidadesDeGasto.css';

import 'primeflex/primeflex.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';





class Registro_Unidad_Gasto extends Component {
    constructor(props){
        super(props)
        this.state = {
            showMe:true,
            seleccionarFacultad: null,
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            value6: '',
        };
        this.cities = [
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

        this.onCityChange = this.onCityChange.bind(this);
    }

    onCityChange(e) {
        this.setState({ seleccionarFacultad: e.value });
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
                                        options={this.cities} 
                                        onChange={this.onCityChange} 
                                        optionLabel="name" 
                                        placeholder="Seleccione una Facultad" >
                                    </Dropdown>         
                                    <i class="solicitud__validacionCampos-Estados"></i>
                                    <p className="solicitud__dato-erroneo" id="errorDeMensaje-item">
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
                                    <select
                                        className="entradas"
                                        name="nombreCarrera"
                                        id="nombreCarrera" 
                                        type="selection" 
                                        onChange = {this.verificarCampos}>
                                            <option disabled selected>Seleccione una Carrera</option>
                                            <option>Fac. Arquitectura Y Ciencias Del Habitat</option>
                                    </select>
                                    <i class="solicitud__validacionCampos-Estados"></i>
                                    <p className="solicitud__dato-erroneo" id="errorDeMensaje-detalleSolicitud">
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
                                        type="text"
                                        required=""
                                        value={this.state.value2} 
                                        onChange={(e) => this.setState({value2: e.target.value})} 
                                        onChange = {this.verificarCampos}>
                                    </InputText>
                                    <label htmlFor="username"> Ingresar la Unidad Administrativa. </label>

                                    <i class="solicitud__validacionCampos-Estados"></i>
                                    <p className="solicitud__dato-erroneo" id="errorDeMensaje-responsableSolicitud">
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
                                        type="number"
                                        required=""
                                        value={this.state.value3} 
                                        onChange={(e) => this.setState({value3: e.target.value})} 
                                        onChange = {this.verificarCampos}>
                                    </InputText>
                                    <label htmlFor="username"> Ingresar el presupuesto destinado. </label>

                                    <i class="solicitud__validacionCampos-Estados"></i>
                                    <p className="solicitud__dato-erroneo" id="errorDeMensaje-responsableSolicitud">
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
                                        type="text"
                                        required=""
                                        value={this.state.value4} 
                                        onChange={(e) => this.setState({value4: e.target.value})} 
                                         onChange = {this.verificarCampos}>
                                    </InputText>
                                    <label htmlFor="username"> Ingresar nombre completo de Jefe. </label>

                                    <i class="solicitud__validacionCampos-Estados"></i>
                                    <p className="solicitud__dato-erroneo" id="errorDeMensaje-monto">
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
                                        type="text"
                                        required=""
                                        value={this.state.value5} 
                                        onChange={(e) => this.setState({value5: e.target.value})} 
                                         onChange = {this.verificarCampos}>
                                    </InputText>
                                    <label htmlFor="username"> Ingresar nombre completo de Secretaria. </label>

                                    <i class="solicitud__validacionCampos-Estados"></i>
                                    <p className="solicitud__dato-erroneo" id="errorDeMensaje-monto">
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
                                        type="number"
                                        required pattern="[0-9]+"
                                        value={this.state.value6} 
                                        onChange={(e) => this.setState({value6: e.target.value})} 
                                         onChange = {this.verificarCampos}>
                                    </InputText>
                                    <label htmlFor="username"> Ingresar numero de Telefono. </label>

                                    <i class="solicitud__validacionCampos-Estados"></i>
                                    <p className="solicitud__dato-erroneo" id="errorDeMensaje-monto">
                                        El campo debe de contener entre 7 a 8 digitos.
                                    </p>
                                </span>
                            </div>

                            <div class="solicitud__mensaje" id="solicitud__mensaje">
                                <label>
                                    <i class="fas fa-exclamation-triangle"></i>
                                    <b>Error:</b> Llene los campos correctamente.
                                </label>
                            </div>
                            <div className="p-col-12 contendor-botonesDeRegistro solicitud__datos solicitud__datos-botonsolicitar">
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
            </div>);
    }
}

export default Registro_Unidad_Gasto;