import { Component } from 'react';
import './estilos_botones.css';

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

  render(){
    return (
      <div className="contenedor-botones-barra-izquierda">
              <button className="registro-empresa" onClick={()=>this.operation()}>Registrar Empresa</button>
              
      </div>
    );
  }
}

export default Botones;