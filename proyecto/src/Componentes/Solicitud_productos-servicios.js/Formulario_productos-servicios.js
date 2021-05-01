
import {Component} from 'react';
import './Estilos_formulario_productos-servicios.css';


class Formulario_ProductosServicios extends Component{

    constructor(props){
        super(props)
        this.state = {
            showMe:props.estado
        }
    }

    operation(){
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
                                <h2 className="campo-detalle">Detalle:</h2>
                                <div className="input-introducir-detalle">
                                    <textarea className="introducir-detalleDeRegistro" type="text" placeholder="Ingresar detalle de solicitud..." maxlength="200"></textarea>
                                </div>
                            </div>
                            <div className="contenedor-fechaDeSolicitud">
                                <h2 className="campo-fechaDeSolicitud">Fecha de solicitud:</h2>
                                <div className="input-introducir-fechaDeSolicitud">
                                    <input className="introducir-fechaDeSolicitud" type="date" name="fecha" ></input>
                                </div>
                            </div>
                            <div className="contenedro-responsableDeSolicitud">
                                <h2 className="campo-responsableDeSolicitud">Responsable de solicitud:</h2>
                                <div className="input-introducir-responsableDeSolicitud">
                                    <input className="introducir-responsableDeSolicitud" type="text" placeholder="ingresar responsable de solicitud"></input>
                                </div> 
                            </div>
                            <div className="contenedor-monto">
                                <h2 className="campo-monto">Monto: <i class="fas fa-money-bill"> </i> </h2>
                                <div className="input-introducir-monto">
                                    <input className="introducir-monto" type="number" placeholder="ingresar monto" ></input>
                                </div>
                            </div>
                            <div className="contendor-botonesDeRegistro">
                                <div className="boton-cancelarRegistro">
                                    <button className="cancelarRegistro" type="button">Cancelar</button>
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