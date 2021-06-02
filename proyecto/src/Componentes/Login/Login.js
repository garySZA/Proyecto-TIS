import React,{useEffect,useState}   from 'react';
import {getUsuario}                 from   '../../services/apiUsuario';
import './Login.css';
import logoUser                     from './img/avatarUser.png';
import correoIcono                  from './img/correo.png';
import passwordIcono                from './img/password.png';
import { useHistory }               from 'react-router-dom';

import { Menubar }                  from 'primereact/menubar';
import { Avatar }                   from 'primereact/avatar';
import { InputText}                 from 'primereact/inputtext';
import { Password }                 from 'primereact/password';
import { Divider }                  from 'primereact/divider';
import { Checkbox }                 from 'primereact/checkbox';


import logo                         from './img/UMSS_logo.png';

import * as yup                     from 'yup';
import {userSchema}                 from './userValidation';

import { Row, Button, Col,Image, Container,Form,Card} from 'react-bootstrap';


const Login = () =>{
    const [usuario,setUsuario]       = useState([]);
    const [email,setEmail]           = useState("");
    const [password,setPassword]     = useState("");
    const [admin,setAdmin]           = useState(false);
    const [jefe,setJefe]             = useState(false);
    const [secretaria,setSecretaria] = useState(false);
    const [user,setUser]             = useState(false);
    const history                    = useHistory();


    useEffect(()=>{
        fetchUsuario();
    },[])

    const fetchUsuario = () =>{
        getUsuario().then(json =>{
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
              
               if       (copyEmail === u.Correo.toLowerCase() && password === u.contraseña && u.rol ==='Administrador') {
                    console.log('filtrado de datos administrador');
                    setAdmin(true);
                    console.log(admin);
                
               }else if (copyEmail === u.Correo.toLowerCase() && password === u.contraseña && u.rol ==='Jefe') {
                    console.log('filtrado de datos Jefe');
                    setJefe(true);
                
                }else if (copyEmail === u.Correo.toLowerCase() && password === u.contraseña && u.rol ==='Secretaria') {
                    console.log('filtrado de datos Secretaria');
                    setSecretaria(true);
                
                }else if (copyEmail === u.Correo.toLowerCase() && password === u.contraseña && u.rol ==='Usuario') {
                    console.log('filtrado de datos Usuario');
                    setUser(true);
                
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
            history.push('/Jefe');
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

    const [value3, setValue3] = useState('');
    const [value2, setValue2] = useState('');


    const header = <h6>Pick a password</h6>;
    const footer = (
        <React.Fragment>
            <Divider />
            <p className="p-mt-2">Suggestions</p>
            <ul className="p-pl-2 p-ml-2 p-mt-0" style={{lineHeight: '1.5'}}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );

    const passwordHeader = <h6>Pick a password</h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="p-mt-2">Suggestions</p>
            <ul className="p-pl-2 p-ml-2 p-mt-0" style={{ lineHeight: '1.5' }}>
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </React.Fragment>
    );
  

    return(
        <Container fluid >  
          <Row className="rowPanel" xs={12}>
             <Menubar className="panelMenu"  start={start}  end={end}/>
          </Row>

          <Row xs={12}>
            <Col className = "" xs={4}></Col>
            <Col className = "" xs={4}>
                <Card className="card picture-login  container-margen type-letter" onSubmit={handleFormSubmit}>
                    <Row className="text-title" >
                        <Form.Label>Iniciar sesión</Form.Label>
                    </Row>
                    <Row className="">
                        <Avatar image={logoUser} className="p-mr-2 imagen"  shape="circle" />
                    </Row>

                    <Row className="boton-ingreso">
                        <span className="p-float-label p-input-icon-right">
                            <i className="pi pi-envelope" />
                            <InputText id="email" value={value2} onChange={(e) => setValue2(e.target.value)} />
                            <label htmlFor="email">Correo electronico</label>
                        </span>
                    </Row>

                    <Row className="boton-ingreso">
                        <span className="p-float-label boton-ingreso">    
                            <Password className="p-password boton-ingreso"value={value3} onChange={(e) => setValue3(e.target.value)} toggleMask />
                            <label htmlFor="password">Contraseña</label>
                        </span>
                    </Row>

                    <Form className="" >

                        <Row className="">


                        </Row>
                        <Form.Group className="margen-entrada" >
                            <Row className="borde-texto">
                                <Form.Label>Correo electronico</Form.Label>
                            </Row>
                            <Row>
                                <Col className="icono">
                                    <Image src={correoIcono} alt="" rounded />
                                </Col>
                                <Col>
                                <Form.Control className="entrada" id ="campoEmailLogin" type="email" placeholder="Ejemplo@gmail.com" value={email} onChange={handleEmailChange} 
                                    minlength="8" maxlength="40" required pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}" 
                                    title=" Soporta letras mayusculas, minusculas números y los caracteres especiales . _@ , tamaño mínimo: 8 a un tamaño máximo: 40"/>
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Group className="margen-entrada">
                            <Row className="borde-texto">
                                <Form.Label>Contraseña</Form.Label>
                            </Row>
                            <Row>
                                <Col className="icono">
                                    <Image src={passwordIcono} alt="" rounded />
                                </Col>
                                <Col>
                                    <Form.Control className="entrada" id="campoContraseñaLogin" type="password" placeholder="************" value={password} onChange={handlePasswordChange}
                                    minlength="7" maxlength="40" required pattern="[A-Za-z0-9./?\~!@#$%()+-*/]" title="tamaño mínimo: 7 a un tamaño máximo: 40"/>
                                </Col>
                            </Row>  
                        </Form.Group>
                        <Row  className="recuerdame margen-entrada">
                            <Form.Check type="checkbox" label="Recuerdame" />
                        </Row>

                        <Form.Group className="boton-ingreso margen-entrada">
                            <Button className="boton"  id="botonIngresarLogin"  size="lg" variant="primary" type="submit">
                                INGRESAR
                            </Button>
                        </Form.Group>
                    </Form>
                </Card>
            </Col>
            <Col className = "" xs={4}></Col>
          </Row>
          <Row className=" fondo-heder-footer tipo-letra" xs={12}></Row>  
        </Container>
    )
}

export default Login;