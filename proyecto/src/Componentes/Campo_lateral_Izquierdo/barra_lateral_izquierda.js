import './estilos_barra_lateral_izquierda.css';
import Botones from './botones';
import Campo_Central from '../Campo_Central/campo_central'
import React from 'react';


class BarraLateral extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mostrarRegistroEmpresa: false
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

  render(){
    return(
      <div>
      <div className="dinamico">
        <div className="opciones">
            
            <button className="registro-empresa" onClick={()=>this.operation2()}>Registrar Empresa</button>
        </div>
        {
          (this.state.mostrarRegistroEmpresa)?
          <Campo_Central estado={this.state.mostrarRegistroEmpresa}/>
          :
          ''   
        }
    </div>
    </div>
    );
  }
}


export default BarraLateral;