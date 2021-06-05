import React,{useEffect,useState}   from 'react';
import {getUsers,createUser}                   from   '../../services/apiUser';
import './Login.css';
import logoUser                     from './img/avatarUser.png';
import { useHistory }               from 'react-router-dom';

import { Menubar }                  from 'primereact/menubar';
import { Avatar }                   from 'primereact/avatar';
import { InputText}                 from 'primereact/inputtext';
import { Password }                 from 'primereact/password';
import { Divider }                  from 'primereact/divider';
import { Checkbox }                 from 'primereact/checkbox';
import { Button }                   from 'primereact/button';


import logo                         from './img/UMSS_logo.png';

import * as yup                     from 'yup';
import {userSchema}                 from './userValidation';



const Login = () =>{
    const [usuario,setUsuario]       = useState([]);
    const [email,setEmail]           = useState("");
    const [password,setPassword]     = useState("");
    const [admin,setAdmin]           = useState(false);
    const [jefe,setJefe]             = useState(false);
    const [secretaria,setSecretaria] = useState(false);
    const [user,setUser]             = useState(false);
    const history                    = useHistory();
    const [checked, setChecked]      = useState(false);
    const [userDB,setUserDB]         = useState();

    useEffect(()=>{
        fetchUsuario();

    },[])
    useEffect(()=>{
    
    },[])


    const fetchUsuario = () =>{
        getUsers().then(json =>{
            if(json.error){
                console.log("Error");
            }else{
                setUsuario(json.data);
            }
        })
    } 


    const handleEmailChange = ({ target:{ value}})=>{
        setEmail(value);
    };

    const handlePasswordChange = ({ target:{ value}})=>{
        setPassword(value);
    };
    const handleFormSubmit = (event) =>{
        event.preventDefault();
        verificarUsuario();
        redireccionar();
 
    };
    useEffect(()=>{
        verificarUsuario();
        redireccionar();
    },[admin,jefe,secretaria,user])

    const verificarUsuario = ()=>{
        const copyEmail    = email.toLowerCase();
      
        if (usuario?.length) {
            usuario.map((u) => {
                // Cómo solo queremos los nombres, retornamos "name".
              
               if       (copyEmail === u.CorreoC.toLowerCase() && password === u.contraseñaUsuario && u.RolR ==='Administrador'.toLowerCase()) {
                    console.log('filtrado de datos administrador');
                    setAdmin(true);
                    setUserDB(u.idRegistroNuevoUsuario);
                    console.log(admin);
                
               }else if (copyEmail === u.CorreoC.toLowerCase() && password === u.contraseñaUsuario && u.RolR ==='Jefe'.toLowerCase()) {
                    console.log('filtrado de datos Jefe');
                    setJefe(true);
                    setUserDB(u.idRegistroNuevoUsuario);
                
                }else if (copyEmail === u.CorreoC.toLowerCase() && password === u.contraseñaUsuario && u.RolR ==='Secretaria'.toLowerCase()) {
                    console.log('filtrado de datos Secretaria');
                    setSecretaria(true);
                    setUserDB(u.idRegistroNuevoUsuario);
                
                }else if (copyEmail === u.CorreoC.toLowerCase() && password === u.contraseñaUsuario && u.RolR ==='Usuario'.toLowerCase()) {
                    console.log('filtrado de datos Usuario');
                    setUser(true);
                    setUserDB(u.idRegistroNuevoUsuario);
                
                }else{
                    setPassword("");
                
                }
            })
        }    
    };

    const redireccionar=() =>{
        console.log(admin);
        if(admin === true){
            console.log("Es admin");
            history.push('/Administrador');
        }else if(jefe === true){
            console.log("Es Jefe");
            history.push(`/Jefe/${userDB}`);
        }else if(secretaria === true){
            console.log("Es Secretaria");
            history.push('/Secretaria');
        }else if(user === true){
            console.log("Es Usuario");
            history.push('/Usuario');
        }
    };

    const start = <img alt="logo" src={logo} height="60" className="p-mr-2"></img>;
    const end   = <h1 className="end">Sistema de Cotizaciones</h1>;


    const header = <h6>Ingrese su Contraseña</h6>;
    const footer = (
        <React.Fragment>
            <Divider />
            <p className="p-mt-2">Sugerencias que tiene la contraseña</p>
            <ul className="p-pl-2 p-ml-2 p-mt-0" style={{lineHeight: '1.5'}}>
                <li>Al menos una minúscula</li>
                <li>Al menos una mayúscula</li>
                <li>Al menos un número</li>
                <li>Mínimo 7 caracteres</li>
            </ul>
        </React.Fragment>
    );

    const loginRegister=()=>{
        return (
        <div>
            <Button label="REGISTRARSE"    icon="pi  pi-fw pi-user-plus" className="p-button-rounded p-button-lg p-button-info p-button-text loginRegister type-letter " />
        </div>    
    
        )
    };



    return(
        <div>
            <div className="p-grid">
                <div className="p-col-12 rowPanel">
                    <Menubar className="panelMenu"  start={start}  end={loginRegister}/>
                </div>
            </div>
            <div className="p-grid">
                <div className="p-col">

                </div>
                <div className="p-col">
                    <div className="card picture-login  container-margen type-letter">
                        <form  onSubmit={handleFormSubmit}>
                            <div className="p-col text-title">
                                <label>Iniciar sesión</label>
                            </div>
                            <div className="p-col imagen-position">
                                <Avatar image={logoUser} className="p-mr-2 imagen"  shape="circle" />
                            </div>
                            <div className="p-col margin-top-items margin-position-input">
                                <span className="p-float-label p-input-icon-right">
                                    <i className="pi pi-envelope icon-email" />
                                    <InputText id="campoEmailLogin" className="p-email " value={email} onChange={handleEmailChange}   
                                    minlength="8" maxlength="40" required pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}" 
                                    title=" Soporta letras mayusculas, minusculas números y los caracteres especiales . _@ , tamaño mínimo: 8 a un tamaño máximo: 40"/>
                                    <label className="label-email" htmlFor="email">Correo electronico</label>
                                </span>
                            </div>
                            <div className="p-col margin-top-items margin-position-input">
                                <span className="p-float-label icon-password p-input-icon-right">    
                                    <Password id="campoContraseñaLogin" className="p-password" value={password} onChange={handlePasswordChange} toggleMask 
                                    minlength="7" maxlength="40" required pattern="[A-Za-z0-9./?\~!@#$%()+-*/]" title="tamaño mínimo: 7 a un tamaño máximo: 40"/>
                                    <label className="label-password" htmlFor="password">Contraseña</label>
                                </span>
                            </div>
                            <div className="p-col margin-top-items remember">
                                <div className="p-field-checkbox ">
                                    <Checkbox inputId="binary" checked={checked} onChange={e => setChecked(e.checked)} />
                                    <label htmlFor="binary">{checked ? 'Recuerdame Si' : 'Recuerdame no'}</label>
                                </div>
                            </div>
                            <div className="p-col button">
                                <Button className="" label="INGRESAR" icon="pi pi-check" iconPos="right" id="botonIngresarLogin" type="submit"/>
                            </div> 
                            <div className="p-col">

                            </div>                   
                        </form>
                    </div>
                </div>
                <div className="p-col">

                </div>
            </div>
        </div>
     
    )
}

export default Login;