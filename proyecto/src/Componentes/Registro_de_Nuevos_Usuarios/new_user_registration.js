import {Component} from 'react';
import './styles.css';
import axios from 'axios';
import swal from 'sweetalert2';
import {Col, Container, Row} from 'react-bootstrap';
import React from 'react';
import { Menubar }  from 'primereact/menubar';
import logo  from './img/UMSS_logo.png';
import { Button }  from 'primereact/button';


const expresiones = {
    nombreNuevoUsuarios: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras
    apellidoNuevoUsuarios:/^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras
    /*fechaNacimientoNuevoUsuario: required=,  */
    paisNuevoUsuarios: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, 
    ciudadNuevoUsuarios: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, 
    direccionNuevoUsuarios:/^[a-zA-Z0-9_.+-+#\_\-\s]{0,100}$/, // Letras,numeros,simbNumeral,barra baja y barra media
    telefonoNuevoUsuarios: /^\d{7,8}$/, // 7 a 8 digitos.
    /*seleccionTipoNuevoUsuario:required='',  */
    //sexoNuevoUsuarios
    emailNuevoUsuarios:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    contraseñaNuevoUsuarios:/^.{8,12}$/, // de 8 a 12 digitos

};



class RegistroDeNuevosUsuarios extends Component{
    constructor(props){
        super(props)
        this.state = {
            showMe:true,

            validoNombreUsuario    :false,
            validoApellidoUsuario  :false,
            //validoFechaDeNacimiento :false,
            validoPaisUsuario:false,
            validoCiudadUsuario:false,
            validoDireccionDeUsuario:false,
            validoTelefonoDeUsuario :false,
            //validoTipoDeUsuario:false,
            //validoSexoUsuario:fase,
            validoEmailDeUsuario    :false,
            validoContraseñaUsuario :false,
            camposVacios            : true,
        }
    }


    operation(){
        
        this.setState.showMe = true;
    }
     
    nombreCampos = ["nombreNuevoUsuario","apellidoNuevoUsuario","paisNuevoUsuario","ciudadNuevoUsuario","direccionNuevoUsuario","telefonoNuevoUsuario","emailNuevoUsuario", "contraseñaNuevoUsuario"];
    
    onChange = () => {
        this.nombreCampos.forEach((campo) => {
            this.verificarCamposVacios();
            var elemento = document.getElementById(campo);

            /*console.log(campo)*/
            if(campo == "nombreNuevoUsuario"){
                if(elemento.value ===""){
                    this.setState({
                        validoNombreUsuario:false
                    })
                }else{
                    console.log("funciona");
                    if(expresiones.nombreNuevoUsuarios.test(elemento.value)){
                        this.setState({
                            validoNombreUsuario:true
                        })
                        this.quitarEfectoError(campo);
                    }else{
                        this.setState({
                            validoNombreUsuario:false
                        })
                        this.darEfectoError(campo)
                    }
                }



            }else if(campo == "apellidoNuevoUsuario"){
                if(elemento.value ===""){
                    this.setState({
                        validoApellidoUsuario:false
                    })
                }else{
                    console.log("funciona");
                    if(expresiones.apellidoNuevoUsuarios.test(elemento.value)){
                        this.setState({
                            validoApellidoUsuario:true
                        })
                        this.quitarEfectoError(campo);
                    }else{
                        this.setState({
                            validoApellidoUsuario:false
                        })
                        this.darEfectoError(campo)
                    }
                }
           /* }else if(campo == "fechaNacimientoNuevoUsuario"){
                if(elemento.value ===""){
                    this.setState({
                        validoFechaDeNacimiento:false
                    })
                }else{
                    console.log("funciona");
                    if(expresiones.fechaNacimientoNuevoUsuarios.test(elemento.value)){
                        this.setState({
                            validoFechaDeNacimiento:true
                        })
                        this.quitarEfectoError(campo);
                    }else{
                        this.setState({
                            validoFechaDeNacimiento:false
                        })
                        this.darEfectoError(campo)
                    }
                }*/
                

            }else if(campo == "paisNuevoUsuario"){
                if(elemento.value ===""){
                    this.setState({
                        validoPaisUsuario:false,
                    })
                }else{
                    console.log("funciona");
                    if(expresiones.paisNuevoUsuarios.test(elemento.value)){
                        this.setState({
                            validoPaisUsuario:true
                        })
                        this.quitarEfectoError(campo);
                    }else{
                        this.setState({
                            validoPaisUsuario:false
                        })
                        this.darEfectoError(campo)
                    }
                }



               
                
            }else if(campo == "ciudadNuevoUsuario"){
                if(elemento.value ===""){
                    this.setState({
                        validoCiudadUsuario:false,
                    })
                }else{
                    console.log("funciona");
                    if(expresiones.ciudadNuevoUsuarios.test(elemento.value)){
                        this.setState({
                            validoCiudadUsuario:true
                        })
                        this.quitarEfectoError(campo);
                    }else{
                        this.setState({
                            validoCiudadUsuario:false
                        })
                        this.darEfectoError(campo)
                    }
                }








            }else if(campo == "direccionNuevoUsuario"){
                if(elemento.value ===""){
                    this.setState({
                          validoDireccionDeUsuario:false,
                    })
                }else{
                    console.log("funciona");
                    if(expresiones.direccionNuevoUsuarios.test(elemento.value)){
                        this.setState({
                            validoDireccionDeUsuario:true
                        })
                        this.quitarEfectoError(campo);
                    }else{
                        this.setState({
                            validoDireccionDeUsuario:false
                        })
                        this.darEfectoError(campo)
                    }
                }
            }else if(campo == "telefonoNuevoUsuario"){
                if(elemento.value ===""){
                    this.setState({
                        validoTelefonoDeUsuario:false
                    })
                }else{
                    console.log("funciona");
                    if(expresiones.telefonoNuevoUsuarios.test(elemento.value)){
                        this.setState({
                            validoTelefonoDeUsuario:true
                        })
                        this.quitarEfectoError(campo);
                    }else{
                        this.setState({
                            validoTelefonoDeUsuario:false
                        })
                        this.darEfectoError(campo)
                    }
                }
           /* }else if(campo == "seleccionTipoNuevoUsuario"){
                if(elemento.value ===""){
                    this.setState({
                        validoTipoDeUsuario:false
                    })
                }else{
                    console.log("funciona");
                    if(expresiones.seleccionTipoNuevoUsuarios.test(elemento.value)){
                        this.setState({
                            validoTipoDeUsuario:true
                        })
                        this.quitarEfectoError(campo);
                    }else{
                        this.setState({
                            validoTipoDeUsuario:false
                        })
                        this.darEfectoError(campo)
                    }
                }*/



                /* }else if(campo == "sexoNuevoUsuario"){
                if(elemento.value ===""){
                    this.setState({
                        validoSexoUsuario:false
                    })
                }else{
                    console.log("funciona");
                    if(expresiones.sexoNuevoUsuarios.test(elemento.value)){
                        this.setState({
                            validoSexoUsuario:true
                        })
                        this.quitarEfectoError(campo);
                    }else{
                        this.setState({
                            validoSexoUsuario:false
                        })
                        this.darEfectoError(campo)
                    }
                }*/





            }else if(campo == "emailNuevoUsuario"){
                if(elemento.value ===""){
                    this.setState({
                        validoEmailDeUsuario:false
                    })
                }else{
                    console.log("funciona");
                    if(expresiones.emailNuevoUsuarios.test(elemento.value)){
                        this.setState({
                            validoEmailDeUsuario:true
                        })
                        this.quitarEfectoError(campo);
                    }else{
                        this.setState({
                            validoEmailDeUsuario:false
                        })
                        this.darEfectoError(campo)
                    }
                }
            }else{
                if(elemento.value ==="contraseñaNuevoUsuario"){
                    this.setState({
                        validoContraseñaUsuario:false
                    })
                }else{
                    console.log("funciona");
                    if(expresiones.contraseñaNuevoUsuarios.test(elemento.value)){
                        this.setState({
                            validoContraseñaUsuario:true
                        })
                        this.quitarEfectoError(campo);
                    }else{
                        this.setState({
                            validoContraseñaUsuario:false
                        })
                        this.darEfectoError(campo)
                    }
                }}
            
        })
    }





     
      //Funcion para el boton de registrar , que mande los datos a la Bd si ha sido llenado correctamente
    



    quitarEfectoError(etiqueta){
        document.getElementById(etiqueta).classList.remove("input-error");
        document.getElementById(`mensajeError-${etiqueta}`).classList.remove("formularioNuevoUsuario__input-error-activo");
    }

    darEfectoError(etiqueta){
        document.getElementById(etiqueta).classList.add("input-error");
        document.getElementById(`mensajeError-${etiqueta}`).classList.add("formularioNuevoUsuario__input-error-activo");
    }

    verificar = () =>{
        if(this.state.validoNombreUsuario == true && this.state.validoApellidoUsuario == true &&  this.state.validoDireccionDeUsuario == true && this.state.validoTelefonoDeUsuario == true &&  this.state.validoEmailDeUsuario == true && this.state.validoContraseñaUsuario == true){
            console.log("registrarNU");
            this.nombreCampos.forEach((campo) => {
                console.log(document.getElementById(campo).value)
            })

        
           


            axios.post('https://backendcompleto-sdc.herokuapp.com/api/user/createUser',{
                //idRegistroNuevoUsuario
                
                NombreUsuario:document.getElementById("nombreNuevoUsuario").value,
                ApellidoUsuario:document.getElementById("apellidoNuevoUsuario").value,
                FechaDeNacimiento:document.getElementById("fechaNacimientoNuevoUsuario").value,
                PaisDireccion:document.getElementById("paisNuevoUsuario").value,
                CiudadDireccion:document.getElementById("ciudadNuevoUsuario").value,
                CalleDireccion:document.getElementById("direccionNuevoUsuario").value,
                TelefonoT:document.getElementById("telefonoNuevoUsuario").value,
                RolR:document.getElementById("seleccionTipoNuevoUsuario").value,
                SexoUsuario:document.getElementById("sexoNuevoUsuario").value,
                CorreoC:document.getElementById("emailNuevoUsuario").value,
                contraseñaUsuario:document.getElementById("contraseñaNuevoUsuario").value, 
                
                
            }).then(Responde =>{
                console.log('el usuario ha sido registrado correctamente',Responde.data);
            }).catch(error=>{console.log(error);
           });
           document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-activo");
        }else{
            console.log("datos llenados incorrectamente");
            document.getElementById("formulario__mensaje").classList.add("formularioNuevoUsuario__input-error-activo");
        }
        }


        limpiarCampos = () =>{
            this.nombreCampos.forEach((campo) => {
                document.getElementById(campo).value ="";
            })
        }
    
        notificacionAdvertencia = () =>{
            if(!this.state.camposVacios){
                swal.fire({
                    title:      'Advertencia',
                    text:       'Los campos llenados serán vaciados!',
                    icon:       'warning',
                    showDenyButton:     'true',
                    confirmButtonText:  `Aceptar`,
                    denyButtonText:     `Cancelar`,
                    timer:              5000,
                    timerProgressBar:   'true'
                }).then((respuesta) => {
                    if(respuesta.isConfirmed){
                        this.limpiarCampos();
                    }else if(respuesta.isDenied){
        
                    }
                })
            }
        }
    
        verificarCamposVacios(){
            this.nombreCampos.forEach((campo) => {
                if(document.getElementById(campo) === ""){
                    this.setState({
                        camposVacios: true
                    })
                }else{
                    this.setState({
                        camposVacios: false
                    })
                }
            })
        }
    






    render(){
        const start = <img alt="logo" src={logo} height="60"  className="p-mr-2"></img>;
        
        const closeSesion= ()=>{
                  return(
                    <div>
                    <Button label="CERRAR SESION"    icon="pi  pi-fw pi-sign-out" className="p-button-rounded p-button-lg p-button-info p-button-text closeSesion type-letter " />
                    </div>    
            
                  )

        }

        return(


        <div>


                <div className="p-grid" >
                    <div className=" p-col -12   rowPanel"  ></div>
                    <Menubar className="panelMenu" start={start}    />                 
                </div>




                <div className="p-grid">
 

                    <div className="p-col   space-top" ></div>



                    <div className="p-col   space-top" >
                        
                        
                      <div className="card ppicture-login  container-margen type-letter">  
                            <div>

                                          <div className="contenedorTitulo_RegistroUsuario">
                                            <h1 className="titulo_registro_usuario">Registro de nuevos Usuarios</h1>
                                         </div>


                                  <div className="contenedorFormulario-RegistroUsuario" id="mostrarRegitroUsuario">

                            



                                            <div className="contenedorCampos_registro-usuario">

                                                <div className="elementosFormularioUsuarios__grupo"id="grupo_NombreUsuario" >
                                                       <div className="contenedorElementosNuevosUsuarios_subtitulos">
                                                           <i className="fas fa-user icon"></i> 
                                                          <label for="nombre-nuevo-usuario"className="subtituloNU">Nombres</label>
                                                       </div>

                                                        <div className="formularioNuevoUsuario__grupo-input">
                                                           <input 
                                                             type="text" 
                                                             className="ingreso"
                                                             name="nombreNuevoUsuario"
                                                             id="nombreNuevoUsuario" 
                                                             placeholder="Ingrese su nombre completo"  
                                                             onChange={this.onChange}  
                                                             ></input>    

                                      
                                                            <p className="formularioNuevoUsuario__input-error"
                                                            id="mensajeError-nombreNuevoUsuario">
                                                             El nombre debe contener solo letras
                                                            </p>
                                                        </div>  
                                               </div>





                                               <div className="elementosFormularioUsuarios__grupo" id="grupo_ApellidoUsuario">
                                                    <div className="contenedorElementosNuevosUsuarios_subtitulos">
                                                        <i className="fas fa-user icon"></i> 
                                                        <label for="apellido-nuevo-usuario" className="subtituloNU">Apellidos</label>
                                                    </div>
                                                     <div class="formularioNuevoUsuario__grupo-input" >
                                                          <input 
                                                             type="text"
                                                             className="ingreso"
                                                             name="apellidoNuevoUsuario"
                                                             id="apellidoNuevoUsuario"
                                                             placeholder="Ingrese sus Apellidos" 
                                                              onChange={this.onChange}   
                                                           ></input>

                                   
                                                          <p className="formularioNuevoUsuario__input-error"
                                                             id="mensajeError-apellidoNuevoUsuario">
                                                             Los apellidos deben contener solo letras
                                                          </p>
                                                     </div>
                                                 </div>




                                                 <div className="elementosFormularioUsuarios__grupo" id="grupo_FechaNacimientoUsuario">
                                                    <div className="contenedorElementosNuevosUsuarios_subtitulos" >
                                                       <i className="fas fa-calendar-alt"></i>
                                                       <label for="calendario-nuevo-usuario" className="subtituloNU">Fecha de Nacimiento</label>
                                                    </div>

                                                    <div class="formularioNuevoUsuario__grupo-input" >
                                                      <input  
                                                    
                                                        type = 'date'
                                                        className="ingreso"
                                                        name="fechaNacimientoNuevoUsuario"
                                                        id="fechaNacimientoNuevoUsuario"
                                                        name="fecha"
                                                        onChange={this.onChange}
                                                      ></input>
                                                      <p className="formularioNuevoUsuario__input-error"
                                                        id="mensajeError-fechaNacimientoNuevoUsuario">
                                                         debe introducir fecha
                                                         </p>

                                                        </div>
                                                 </div>




                                                 <div className="elementosFormularioUsuarios__grupo"id="grupo_PaisUsuario" >
                                                       <div className="contenedorElementosNuevosUsuarios_subtitulos">
                                                       <i class="fas fa-globe-americas"></i>
                                                          <label for="pais-nuevo-usuario"className="subtituloNU">Pais</label>
                                                       </div>

                                                        <div className="formularioNuevoUsuario__grupo-input">
                                                           <input 
                                                             type="text" 
                                                             className="ingreso"
                                                             name="paisNuevoUsuario"
                                                             id="paisNuevoUsuario" 
                                                             placeholder="Ingrese su nombre completo"  
                                                             onChange={this.onChange}  
                                                             ></input>    

                                      
                                                            <p className="formularioNuevoUsuario__input-error"
                                                            id="mensajeError-paisNuevoUsuario">
                                                             El pais debe contener solo letras
                                                            </p>
                                                        </div>  
                                               </div>






                                               <div className="elementosFormularioUsuarios__grupo"id="grupo_CiudadUsuario" >
                                                       <div className="contenedorElementosNuevosUsuarios_subtitulos">
                                                           <i class="fas fa-city"></i>
                                                          <label for="ciudad-nuevo-usuario"className="subtituloNU">Ciudad</label>
                                                       </div>

                                                        <div className="formularioNuevoUsuario__grupo-input">
                                                           <input 
                                                             type="text" 
                                                             className="ingreso"
                                                             name="ciudadNuevoUsuario"
                                                             id="ciudadNuevoUsuario" 
                                                             placeholder="Ingrese su nombre completo"  
                                                             onChange={this.onChange}  
                                                             ></input>    

                                      
                                                            <p className="formularioNuevoUsuario__input-error"
                                                            id="mensajeError-ciudadNuevoUsuario">
                                                             El nombre debe contener solo letras
                                                            </p>
                                                        </div>  
                                               </div>









                                                  <div className="elementosFormularioUsuarios__grupo" id="grupo_DireccionUsuario">
                                                     <div className="contenedorElementosNuevosUsuarios_subtitulos">
                                                          <i className="fas fa-home"></i>
                                                          <label for="direccion-nuevo-usuario" className="subtituloNU">Direccion</label>
                                                  </div>
                                
                                                  <div class="formularioNuevoUsuario__grupo-input" >
                                                    <input 
                                                      type= "text" 
                                                      className="ingreso"
                                                      name="direccionNuevoUsuario"
                                                      id="direccionNuevoUsuario"
                                                      placeholder="Introducir Direccion"
                                                      onChange={this.onChange} 
                                                    ></input>
                                   
                                                    <p className="formularioNuevoUsuario__input-error"
                                                      id="mensajeError-direccionNuevoUsuario">
                                                       La direccion debe contener solo letras
                                                   </p>
                                                </div>
                                             </div>






                                               <div className="elementosFormularioUsuarios__grupo" id="grupo_TelefonoUsuario">
                                                 <div className="contenedorElementosNuevosUsuarios_subtitulos" >
                                                     <i className="fas fa-phone"></i>
                                                     <label for="telefono-nuevo-usuario" className="subtituloNU">Teléfono</label>
                                                 </div>
                                 
                                                    <div class="formularioNuevoUsuario__grupo-input" >
                                                      <input 
                                                      type ="text" 
                                                      className="ingreso"
                                                      name="telefonoNuevoUsuario"
                                                      id="telefonoNuevoUsuario"
                                                      placeholder="Introducir telefono" 
                                                      onChange={this.onChange}           
                                                     ></input>   
                                   
                                                   <p className="formularioNuevoUsuario__input-error"
                                                    id="mensajeError-telefonoNuevoUsuario">
                                                     su numero de telefono es incorrecto
                                                   </p>
                                                  </div>
                                                </div>



                            




                                                <div className="elementosFormularioUsuarios__grupo" id="grupo_TipoUsuario">
                                                     <div className="contenedorElementosNuevosUsuarios_subtitulos" >
                                                       <i className="fas fa-user icon"></i> 
                                                       <label for="tipo-nuevo-usuario" className="subtituloNU">Tipo</label>
                                                     </div>
                         
                               
                                                    <div class="formularioNuevoUsuario__grupo-input" >
                                
                                                         <select type="selection"
                                                          className="ingreso"
                                                          name="seleccionTipoNuevoUsuario"
                                                          id="seleccionTipoNuevoUsuario">
                                                              <option disabled selected>seleccione un Rol</option>
                                                              <option>usuario</option>
                                                              <option>secretario</option>
                                                              <option>administrador</option>
                                                              <option>jefe</option>
                                                           onChange={this.onChange}
                                                         </select>

                                            
                                                        <p className="formularioNuevoUsuario__input-error"
                                                        id="mensajeError-tipoNuevoUsuario">
                                                        seleccione una opcion
                                                          </p>    
                                                     </div>
                                                </div>







                                                <div className="elementosFormularioUsuarios__grupo" id="grupo_SexoUsuario">
                                                     <div className="contenedorElementosNuevosUsuarios_subtitulos" >
                                                       <i className="fas fa-user icon"></i> 
                                                       <label for="sexo-nuevo-usuario" className="subtituloNU">Sexo</label>
                                                     </div>
                         
                               
                                                    <div class="formularioNuevoUsuario__grupo-input" >
                                
                                                         <select type="selection"
                                                          className="ingreso"
                                                          name="sexoNuevoUsuario"
                                                          id="sexoNuevoUsuario">
                                                              <option disabled selected>seleccione su sexo</option>
                                                              <option>masculino</option>
                                                              <option>femenino</option>
                                                           onChange={this.onChange}
                                                         </select>

                                            
                                                        <p className="formularioNuevoUsuario__input-error"
                                                        id="mensajeError-sexoNuevoUsuario">
                                                        seleccione una opcion
                                                          </p>    
                                                     </div>
                                                </div>





                                                <div className="elementosFormularioUsuarios__grupo" id="grupo_EmailUsuario">
                                                    <div className="contenedorElementosNuevosUsuarios_subtitulos" >
                                                          <i className="fas fa-envelope icon"></i>
                                                          <label for="email-nuevo-usuario" className="subtituloNU">Email</label>
                                                    </div>

                                                     <div class="formularioNuevoUsuario__grupo-input" >
                                                                <input 
                                                                 type="text"
                                                                 className="ingreso"
                                                                 name="emailNuevoUsuario"
                                                                 id="emailNuevoUsuario"
                                                                 placeholder="Introducir correo electronico" 
                                                                 onChange={this.onChange}
                                                                ></input>
                                    
                                                              <p className="formularioNuevoUsuario__input-error"
                                                                id="mensajeError-emailNuevoUsuario">
                                                                 ingrese los datos correctamente
                                                                </p>
                                                     </div>
                                              </div>




                                              <div className="elementosFormularioUsuarios__grupo" id="grupo_ContraseniaUsuario">
                                                <div className="contenedorElementosNuevosUsuarios_subtitulos" >
                                                   <i className="fas fa-key icon"></i>
                                                   <label for="email-nuevo-usuario" className="subtituloNU">Contraseña</label>
                                                 </div>
                             
                                                  <div class="formularioNuevoUsuario__grupo-input" >
                                                      <input 
                                                           type="password"
                                                           className="ingreso"
                                                           name="contraseñaNuevoUsuario"                                                    
                                                           id="contraseñaNuevoUsuario" 
                                                           placeholder="Introducir Contraseña"
                                                           
                                                           onChange={this.onChange}
                                                      ></input>
                                     
                                                       <p className="formularioNuevoUsuario__input-error"
                                                         id="mensajeError-contraseñaNuevoUsuario">
                                                          ingrese más de 7 carácteres
                                                       </p>
                                                   </div>
                                               </div>



                                                    <div class="formulario__mensaje" id="formulario__mensaje">
                                                     <p>
                                                      <i class="fas fa-exclamation-triangle"></i>
                                                      <b>Error:</b> Por favor
                                                        llena el formulario correctamente.
                                                     </p>
                                                       </div>

                                                        <div className="contenedor-botoncito formulario__grupo formulario__grupo-btn-enviar">
                                                        <button className="botoncito-cancelar botoncito" onClick={this.notificacionAdvertencia}>Cancelar</button>
                                                        <button className="botoncito-registrar botoncito formulario__btn" id="registrarNU" onClick={this.verificar}>Registrar</button>
                                                       </div>


                                                       <div className="mensaje-exito">
                                                        <p class="formulario__mensaje-exito" id="formulario__mensaje-exito">
                                                        ¡El formulario ha sido registrado con exito!
                                                        </p>
                                                       </div>



                                            </div>
                                </div>

                           </div>    

                        </div>
                     



                  
                 </div>

                 <div className="p-col   space-top"></div>
            </div>

     </div>
   );
  }
}

export default RegistroDeNuevosUsuarios;
                                       /*<div className="comentarios_Formulario-Registro">
                                                       <p>Al registrarte aceptas nuestras condiciones de uso y politica de privacidad</p>
                                                       <div className="iniciar_sesion_comentario">
                                                            <p>¿Ya tienes una cuenta? <a className="link" href="loginvista.html">Iniciar Sesion</a> </p>
                                                       </div>
                                                  </div>    */
