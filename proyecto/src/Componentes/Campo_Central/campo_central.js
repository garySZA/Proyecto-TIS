import './estilos_campo_central.css';
import Registro_Empresa from '../Registro_Empresa/registro_empresa';

function Campo_Central(props) {
  return (
    <div className="principal" id="algo">
            <Registro_Empresa estado={props.estado}/>
    </div>  
  );
}

export default Campo_Central;