import './estilos_barra_lateral_izquierda.css';
import Botones from './botones';
import Campo_Central from '../Campo_Central/campo_central'
import React from 'react';


class BarraLateral extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mostrarRegistroEmpresa: false , mostrarFormularioProductosServicios :false
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
        mostrarRegistroEmpresa: true
      })
      console.log("false");
      console.log(this.state.mostrarRegistroEmpresa);
    }
  }

  operation3 = () =>{
    if(this.state.mostrarFormularioProductosServicios == true){
      this.setState({
        mostrarRegistroEmpresa: false
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
        {
          (this.state.mostrarRegistroEmpresa)?
          <Campo_Central estado={this.state.mostrarRegistroEmpresa}/>
          :
          ''   
        }
        {
          (this.state.mostrarFormularioProductosServicios)?
          <Campo_Central />
          :
          ''   
        }
    </div>
    </div>
    );
  }
}


export default BarraLateral;