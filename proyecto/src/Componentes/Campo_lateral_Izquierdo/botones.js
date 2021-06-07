import { Component } from 'react';
import './estilos_botones.css';
import Registro_Empresa from '../Registro_Empresa/registro_empresa';

class Botones extends Component{
  constructor() {
    super()
    this.state={
      showMe:true
    }
  }

  operation(){
    if(document.getElementById("algo").style.display=="none"){
      document.getElementById("algo").style.display="block";
      document.getElementById("algo").style.display="block";
    }else{
      document.getElementById("algo").style.display="none";
      document.getElementById("algo").style.display="none";
    }
  }

  operation2(){
    Registro_Empresa.operation();
  }

  render(){
    return (
      <div className="contenedor-botones-barra-izquierda">
              <button className="registro-empresa"  id ="botonRegistroEmpresa"  onClick={()=>this.operation2()}>Registrar Empresa</button>
              
      </div>
    );
  }
}

export default Botones;