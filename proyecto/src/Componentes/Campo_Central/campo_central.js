import './estilos_campo_central.css';
import Registro_Empresa from '../Registro_Empresa/registro_empresa';
import Formulario_ProductosServicios from '../Solicitud_productos-servicios/Formulario_productos-servicios'
import React from 'react';

class Campo_Central extends React.Component{
  constructor(props){
    super(props);
    this.state={
      estadoRegistroEmpresa:this.props.estadoRegistroEmpresa,
      estadoFormularioSolicitud:this.props.estadoFormularioSolicitud
    };
  }

  render(){
    return(
      <div className="principal" id="algo">
          {
            (this.state.estadoRegistroEmpresa)?
            <Registro_Empresa estadoRegistroEmpresa={this.state.estadoRegistroEmpresa}/>
            :
            ''
          }
      </div>  
    );
  }
}

export default Campo_Central;