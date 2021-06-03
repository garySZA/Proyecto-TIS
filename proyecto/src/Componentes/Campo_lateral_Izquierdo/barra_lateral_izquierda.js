import './estilos_barra_lateral_izquierda.css';
import './estilos_botones.css';
import Registro_Empresa from '../Registro_Empresa/registro_empresa'
import React from 'react';
import './estilos_botones.css';
import '../Campo_Central/estilos_campo_central.css'
import './estilos_botones.css'

//importacion de formulario de solicitud de productos y servicios
import Formulario_ProductosServicios from '../Solicitud_productos-servicios/Formulario_productos-servicios'

//importacion de formulario de registro de nuevos usuarios
import RegistroDeNuevosUsuarios from '../Registro_de_Nuevos_Usuarios/new_user_registration'

//importacion del formulario de registro de unidades de gasto
import Registro_Unidad_Gasto from '../Registro_Unidades_De_Gasto/formulario_registro_unidadesDeGasto'


class BarraLateral extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mostrarRegistroEmpresa: false,
      mostrarFormularioProductosServicios :false,
      mostrarFormularioDeUsuariosNuevos:false,
      mostrarregistroUnidadGasto: false
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
        mostrarFormularioProductosServicios: false, 
        mostrarFormularioDeUsuariosNuevos: false,
        mostrarregistroUnidadGasto: false
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
        mostrarFormularioDeUsuariosNuevos:false,
        mostrarRegistroEmpresa: false,
        mostrarregistroUnidadGasto: false
      })     
    }
  }

  operation4 = () =>{
    if(this.state.mostrarFormularioDeUsuariosNuevos == true){
      this.setState({
        mostrarFormularioDeUsuariosNuevos: false
      }) 
    }else{
      this.setState({
        mostrarFormularioDeUsuariosNuevos: true,
        mostrarFormularioProductosServicios:false,
        mostrarRegistroEmpresa: false,
        mostrarregistroUnidadGasto: false
      })     
    }
  }

  operation5 = () => {
    if(this.state.mostrarregistroUnidadGasto == true){
      this.setState({
        mostrarregistroUnidadGasto: false
      })
    }else {
      this.setState({
        mostrarregistroUnidadGasto: true,
        mostrarFormularioDeUsuariosNuevos: false,
        mostrarFormularioProductosServicios: false,
        mostrarRegistroEmpresa: false
      })
    }
  }


  render(){
    return(
      <div>
      <div className="dinamico">
        <div className="opciones">
            
            <button className="registro-empresa"    id ="botonRegistroEmpresa"  onClick={()=>this.operation2()}>Registrar Empresa</button>
            <button className="registro-empresa"   id="botonRegistroSolicitud"   onClick={()=>this.operation3()}>Registro de solicitud</button>
            <button className="registro-empresa"  id="botonRegistroNuevoUsuario"   onClick={()=>this.operation4()}>Registrar Nuevo Usuario</button>
            <button className="registro-empresa"  id="botonRegistroUnidadDeGasto"   onClick={()=>this.operation5()}>Registrar Unidad de Gasto</button>
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
            <Formulario_ProductosServicios estadoFormularioProductosServicios={this.state.mostrarFormularioProductosServicios}/>
            :
            ''
          }
          {
            (this.state.mostrarFormularioDeUsuariosNuevos)?
            <RegistroDeNuevosUsuarios />
            :
            ''
          }
          {
            (this.state.mostrarregistroUnidadGasto)?
            <Registro_Unidad_Gasto estadoRegistroUnidadGasto={this.state.mostrarregistroUnidadGasto}/>
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