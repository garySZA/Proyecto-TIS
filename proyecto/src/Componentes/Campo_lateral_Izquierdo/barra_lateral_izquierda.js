import './estilos_barra_lateral_izquierda.css';
import Botones from './botones';
import Registro_Empresa from '../Registro_Empresa/registro_empresa'
import React from 'react';
import '../Campo_Central/estilos_campo_central.css'

//importacion de formulario de solicitud de productos y servicios
import Formulario_ProductosServicios from '../Solicitud_productos-servicios/Formulario_productos-servicios'


class BarraLateral extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mostrarRegistroEmpresa: false,
      mostrarFormularioProductosServicios :false
    };
  }

  operation2 = () =>{
    if(this.state.mostrarRegistroEmpresa == true){
      this.setState({
        mostrarRegistroEmpresa: false
      })
      console.log("true");
      console.log(this.state.mostrarRegistroEmpresa);
    }else{
      this.setState({
        mostrarRegistroEmpresa: true,
        mostrarFormularioProductosServicios: false
      })
      console.log("false");
      console.log(this.state.mostrarRegistroEmpresa);
    }
  }

  operation3 = () =>{
    if(this.state.mostrarFormularioProductosServicios == true){
      this.setState({
        mostrarFormularioProductosServicios: false
      }) 
    }else{
      this.setState({
        mostrarFormularioProductosServicios: true,
        mostrarRegistroEmpresa: false
      })     
    }
  }

  render(){
    return(
      <div>
      <div className="dinamico">
        <div className="opciones">
            
            <button className="registro-empresa" onClick={()=>this.operation2()}>Registrar Empresa</button>

            <button className="registro-empresa" onClick={()=>this.operation3()}>Registro de solicitud</button>
        </div>
        <div className="principal" id="algo">
          {
            (this.state.mostrarRegistroEmpresa)?
            <Registro_Empresa estadoRegistroEmpresa={this.state.mostrarRegistroEmpresa}/>
            :
            ''
          }
          {
            (this.state.mostrarFormularioProductosServicios)?
            <Formulario_ProductosServicios />
            :
            ''
          }
      </div>
    </div>
    </div>
    );
  }
}


export default BarraLateral;