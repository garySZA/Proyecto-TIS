import {Component} from 'react';
import './styles.css';
import axios from 'axios';



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




     
      //Funcion para el boton de registrar , que mande los datos a la Bd si ha sido llenado correctamente
      ValidarBoton=()=>{
        axios.post('http://localhost:3050/add',{
           nombreUsuario:document.getElementById("nombres").value,
            apellidoUsuario:document.getElementById("apellidos").value,
            fechaDeNacimiento:document.getElementById("fechaNacimiento").value,
            direccion:document.getElementById("introducirDireccion"),
            telefono:document.getElementById("intruducirTelefono").value,
            tipo:document.getElementById("seleccionTipo").value,
            email:document.getElementById("introducirEmal"),
            constraseña:document.getElementById("introducirContraseña").value 
        }).then(Responde =>{
            console.log('el usuario ha sido registrado correctamente',Responde.data);
        }).catch(error=>{console.log(error);
       });
    }







    render(){
        return(
<div>
     {this.state.showMe? (




<form className="Formulario">

                 <div className="titulo_registro">
                     <h1 className="titulo_registro_usuario">Registro de nuevos Usuarios</h1>
                 </div>
                




    <div className="contenedor_registro-usuario">

                <div className="Introducir_nombre" >
                     <div className="icono_de_nombre">
                         <i className="fas fa-user icon"></i> 
               </div>
                              <h2 type="text">Nombres</h2>
                                <input className="Introducir_nombre_input" 
                                    id="nombres" 
                                    placeholder="Ingrese su nombre completo"    
                                    required="" pattern="[a-zA-Z]+"  
                                ></input>                   
                </div>  





                <div className="Introducir_apellidos">
                      <div className="icono_de_apellido">
                         <i className="fas fa-user icon"></i> 
                     </div>
                       <h2 type="text">Apellidos</h2>
                           <input className="Introducir_apellidos_input"
                               id="apellidos"
                               placeholder="Ingrese sus Apellidos"    
                               required="" 
                               pattern="[a-zA-Z]+" 
                             ></input>
                </div>




                <div className="fecha_de_nacimiento">
                         <div className="icono_de_calendario" >
                             <i className="fas fa-calendar-alt"></i>
                         </div>
                             <h2 type="text">Fecha de Nacimiento</h2>
                                  <input type="date"
                                      id="fechaNacimiento"
                                      name="fecha"
                                  ></input>
                </div>





                 <div className="Introducir_Direccion">
                         <div className="icono_de_domicilio">
                               <i className="fas fa-home"></i>
                         </div>
                              <h2 type="text">Dirección</h2>
                                  <input className= "Introducir_Direccion_Input" 
                                      id="introducirDireccion"
                                      placeholder="Introducir Direccionrequired " 
                                      >
                                  </input>
                </div>






                <div className="Introducir_Telefono">
                         <div className="icono_de_telefono">
                           <i className="fas fa-phone"></i>
                        </div>
                            <h2 type="text">Teléfono</h2>
                                 <input className ="Introducir_Telefono_input" 
                                    id="intruducirTelefono"
                                    placeholder="Introducir telefono"
                                    required="" 
                                    pattern="[0-9]+" 
                                    minLength="7" maxLength="8"
                                ></input>   
                 </div>
         




                <div className="Seleccionar_Tipo">
                      <div className="icono_de_tipo">
                           <i className="fas fa-user icon"></i> 
                      </div>
                                <h2 type="text">Tipo</h2> 
                                      <form>
                                            <div className="caja_de_seleccion_de_tippo">
                                               <select type="selection"
                                                           id="seleccionTipo">
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
                                  <h2 type="text">Email</h2>
                                          <input className="introducir_email_input"
                                             id="introducirEmal"
                                             placeholder="Introducir correo electronico" 
                                           ></input>
               </div>



                <div className="Introducir_Contraseña">
                         <div className="icono_de_contraseña">
                               <i className="fas fa-key icon"></i>
                         </div>
                                   <h2 >Contraseña</h2>
                                       <div className="introducir_contraseña_input">
                                              <input type="password"
                                                  id="introducirContraseña" 
                                                  placeholder="Introducir Contraseña"></input>
                                       </div>
                </div>
         </div>




                <div className="comentarios_Formulario-Registro">
                             <p>Al registrarte aceptas nuestras condiciones de uso y politica de privacidad</p>
                             <div className="iniciar_sesion_comentario">
                               <p>¿Ya tienes una cuenta? <a className="link" href="loginvista.html">Iniciar Sesion</a> </p>
                             </div>
                </div>





                <div className="BotonesDeRegistroUsuario" >
                         <div className="BotonRegistrarUsuarioNuevo">
                         <button onClick={this.ValidarBoton} className="BotonRegistroNuevoUsuario">Registrar</button>
                         </div>


                         <div className="BotonCancelarRegistroUsuarioNuevo">
                             <button className="BotonCancelarRegistroNuevoUsuario">Cancelar</button>
                        </div>
                 </div>

       </form>
     ):(<div></div>)}
     </div>
   );
  }
}

export default RegistroDeNuevosUsuarios;
