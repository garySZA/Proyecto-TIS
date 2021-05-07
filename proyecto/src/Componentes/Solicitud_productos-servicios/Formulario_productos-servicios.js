
import {Component} from 'react';
import './Estilos_formulario_productos-servicios.css';


class Formulario_ProductosServicios extends Component{

    constructor(props){
        super(props)
        this.state = {
            showMe:true
        }
    }

    operation(){
        alert("mensaje de alerta");
        this.setState.showMe = true;
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
                            <div className="contenedor-detalle">
                                <h2 className="campo-detalle"> <i class="fas fa-book"></i> Detalle:</h2>
                                <div className="input-introducir-detalle">
                                    <textarea className="introducir-detalleDeRegistro" type="text" placeholder="Ingresar detalle de solicitud..." maxlength="200"></textarea>
                                </div>
                            </div>
                            <div className="contenedor-fechaDeSolicitud">
                                <h2 className="campo-fechaDeSolicitud"><i class="fas fa-calendar-week"></i> Fecha de solicitud:</h2>
                                <div className="input-introducir-fechaDeSolicitud">
                                    <input className="introducir-fechaDeSolicitud" type="date" name="fecha" ></input>
                                </div>
                            </div>
                            <div className="contenedro-responsableDeSolicitud">
                                <h2 className="campo-responsableDeSolicitud"> <i class="fas fa-user"></i> Responsable de solicitud:</h2>
                                <div className="input-introducir-responsableDeSolicitud">
                                    <input className="introducir-responsableDeSolicitud" type="text" placeholder="ingresar responsable de solicitud"></input>
                                </div> 
                            </div>
                            <div className="contenedor-monto">
                                <h2 className="campo-monto"> <i class="fas fa-dollar-sign"></i> Monto:   </h2>
                                <div className="input-introducir-monto">
                                    <input className="introducir-monto" type="number" placeholder="ingresar monto" required pattern="[0-9]+" ></input>
                                </div>
                            </div>
                            <div className="contendor-botonesDeRegistro">
                                <div className="boton-cancelarRegistro">
                                    <button className="cancelarRegistro" type="button" onClick="alert('se cancelo el registro')" >Cancelar</button>
                                </div>
                                <div className="boton-solicitarRegistro">
                                    <button className="solicitarRegistro">Solicitar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ):(<div></div>)}
            </div>
        );
    }
}

export default Formulario_ProductosServicios;