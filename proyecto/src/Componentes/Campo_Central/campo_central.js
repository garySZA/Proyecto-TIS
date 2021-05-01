import './estilos_campo_central.css';
import Registro_Empresa from '../Registro_Empresa/registro_empresa';
import Formulario_ProductosServicios from '../Solicitud_productos-servicios.js/Formulario_productos-servicios'

function Campo_Central(props) {
  return (
    <div className="principal" id="algo">
            <Registro_Empresa estado={props.estado}/>
            {
              (this.props.mostrarFormularioProductosServicios)?
              <Formulario_ProductosServicios />:'' 
            }
    </div>  
  );
}

export default Campo_Central;