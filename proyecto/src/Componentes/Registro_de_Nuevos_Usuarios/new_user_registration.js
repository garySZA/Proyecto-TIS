import {Component} from 'react';
import './styles.css';



class RegistroDeNuevosUsuarios extends Component{
    constructor(props){
        super(props)
        this.state = {
            showMe:true
        }
    }
    operation(){
        
        this.setState.showMe = true;
    }




    render(){
        return(
<div>
     {this.state.showMe? (

<form className="Formulario">


                
    <div className="contenedor_de_registro">



                 <div className="titulo_registro">
                     <h1 className="titulo_registro_usuario">Registro de nuevos Usuarios</h1>
                 </div>


       <div className="Introducir_nombre" >
                <div className="icono_de_nombre">
                   <i className="fas fa-user icon"></i> 
                </div>
                     <input className="Introducir_nombre_input" placeholder="Ingrese su nombre completo"></input>
                         <h2>Nombres</h2>
      </div>  


       <div className="Introducir_apellidos">
                  <div className="icono_de_apellido">
                     <i className="fas fa-user icon"></i> 
                 </div>
                       <h2>Apellidos</h2>
                           <input className ="Introducir_Apellidos_input" placeholder="Ingrese sus Apellidos"></input>
       </div>

       <div className="fecha_de_nacimiento">
                         <div className="icono_de_calendario" >
                             <i className="fas fa-calendar-alt"></i>
                         </div>
                             <h2>Fecha de Nacimiento</h2>
                                  <input className="fecha_de_nacimiento_input" type="date" name="fecha"></input>
       </div>


       <div className="Introducir_Direccion">
                         <div className="icono_de_domicilio">
                               <i className="fas fa-home"></i>
                         </div>
                              <h2>Dirección</h2>
                                  <input className="Introducir_direccion_input" placeholder="Introducir Direccion "></input>
       </div>


       <div className="Introducir_Telefono">
                         <div className="icono_de_telefono">
                           <i className="fas fa-phone"></i>
                        </div>
                            <h2>Teléfono</h2>
                                 <input className="Introducir_telefono_input" placeholder="Introducir Telefono"></input>   
       </div>
         

       <div className="Seleccionar_Tipo">
           <div className="icono_de_tipo">
               <i className="fas fa-user icon"></i> 
           </div>
            <h2>Tipo</h2> 
                    <form>
                      <div className="caja_de_seleccion_de_tipo">
                          <select>
                              <option disabled selected>seleccione un tipo</option>
                              <option>secretario</option>
                              <option>administrador</option>
                              <option>jefe</option>
                          </select>
                        </div>
                    </form>
                
        </div>


       <div className="Introdicir_Email">
                <div className="icono_de_email">
                  <i className="fas fa-envelope icon"></i>
                </div>
                      <h2>Email</h2>
                           <input className="introducir_Email_input" placeholder="Introducir correo electronico"></input>
       </div>


       <div className="Introducir_Contraseña">
                  <div className="icono_de_contraseña">
                     <i className="fas fa-key icon"></i>
                  </div>
                       <h2>Contraseña</h2>
                            <div className="introducir_contraseña_input">
                                 <input type="password" placeholder="Introducir Contraseña"></input>
                            </div>
       </div>



       <div className="Bottones_de_Registro" >
              <div className="terminar_Registro">
                 <button className="terminar_registro_button">Registrarme</button>
              </div>


              <div className="Cancelar_Registro">
                 <button className="cancelar_registro_button">Cancelar</button>
              </div>

                <div className="comentarios">
                         <p>Al registrarte aceptas nuestras condiciones de uso y politica de privacidad</p>
                        <div className="iniciar_sesion_comentario">
                            <p>¿Ya tienes una cuenta? <a className="link" href="loginvista.html">Iniciar Sesion</a> </p>
                        </div>
                </div>
          </div>
         </div>
       </form>
     ):(<div></div>)}
     </div>
   );
  }
}

export default RegistroDeNuevosUsuarios;
