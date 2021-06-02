import './estilos_barra_lateral_izquierda.css';
import './estilos_botones.css';
import Registro_Empresa from '../Registro_Empresa/registro_empresa'
import React from 'react';
import './estilos_botones.css';
import '../Campo_Central/estilos_campo_central.css'
import './estilos_botones.css'
import Mostrar_tarjetas from '../Mostrar_Tarjetas/Mostrar_tarjetas'
import axios from 'axios'

//importacion de formulario de solicitud de productos y servicios
import Formulario_ProductosServicios from '../Solicitud_productos-servicios/Formulario_productos-servicios'

//importacion de formulario de registro de nuevos usuarios
import RegistroDeNuevosUsuarios from '../Registro_de_Nuevos_Usuarios/new_user_registration'

class BarraLateral extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mostrarRegistroEmpresa: false,
      mostrarFormularioProductosServicios :false,
      mostrarFormularioDeUsuariosNuevos:false,
      mostrarEmpresas: false 
    };

    this.listaEmpresas = [];
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
        mostrarEmpresas: false
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
        mostrarEmpresas: false
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
        mostrarEmpresas: false
      })     
    }
  }

  operation5 = () =>{

    axios.get('https://proyecto-tis.herokuapp.com/api/empresas')
        .then(response => {
            this.listaEmpresas = response.data[0];
        })

    if(this.state.mostrarEmpresas == true){
      this.setState({
        mostrarEmpresas: false
      }) 
    }else{
      this.setState({
        mostrarFormularioDeUsuariosNuevos: false,
        mostrarFormularioProductosServicios:false,
        mostrarRegistroEmpresa: false,
        mostrarEmpresas: true
      })     
    }
  }

  onChange = () =>{
    axios.get('https://proyecto-tis.herokuapp.com/api/empresas')
        .then(response => {
            this.listaEmpresas = response.data[0];
            console.log(this.listaEmpresas.nombreEmpresa)
        })
  }


  render(){
    return(
      <div>
      <div className="dinamico">
        <div className="opciones">
            
            <button className="registro-empresa"    id ="botonRegistroEmpresa"  onClick={()=>this.operation2()}>Registrar Empresa</button>
            <button className="registro-empresa"   id="botonRegistroSolicitud"   onClick={()=>this.operation3()}>Registro de solicitud</button>
            <button className="registro-empresa"  id="botonRegistroNuevoUsuario"   onClick={()=>this.operation4()}>Registrar Nuevo Usuario</button>
            <button className="registro-empresa"  id="botonRegistroNuevoUsuario"   onClick={()=>this.operation5()}>Ver Empresas</button>
        </div>
        <div className="principal" id="algo" onChange={this.onChange}>
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
            (this.state.mostrarEmpresas)?
            <Mostrar_tarjetas lista = {this.listaEmpresas} onChange={this.onChange}/>
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