import React,{useEffect,useState} from 'react';
import {getUsuario} from   '../../services/apiUsuario';
import './Login.css';
import logo from './img/logo.png';
import correoIcono from './img/correo.png';
import passwordIcono from './img/password.png';
import { useHistory } from 'react-router-dom';

import * as yup from 'yup';
import {userSchema} from './userValidation';

import { Row, Button, Col,Image, Container,Form} from 'react-bootstrap';
import Administrador from '../administrador/Administrador';

const Login = () =>{
    const [usuario,setUsuario]        = useState([]);
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
   
        if (usuario?.length) {
            const filteredData = usuario.filter((value)=>{

                if (email.toLowerCase() === value.Correo.toLowerCase() && password === value.contraseña && value.rol ==='Administrador') {
                    console.log('filtrado de datos administrador');
                    setAdmin(true);
                }else if (email.toLowerCase() === value.Correo.toLowerCase() && password === value.contraseña && value.rol ==='Jefe') {
                    console.log('filtrado de datos Jefe');
                    setJefe(true);
                }else if (email.toLowerCase() === value.Correo.toLowerCase() && password === value.contraseña && value.rol ==='Secretaria') {
                    console.log('filtrado de datos Secretaria');
                    setSecretaria(true);
                }else if (email.toLowerCase() === value.Correo.toLowerCase() && password === value.contraseña && value.rol ==='Usuario') {
                    console.log('filtrado de datos Usuario');
                    setUser(true);
                }else{
                    setPassword("");
                }

            });
        }
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

    return(
        <Container className="container-margen" fluid >  
          <Row  className=" fondo-heder-footer tipo-letra"></Row>  
          <Row >
            <Col className = ""></Col>
            <Col className = "Cuadro-login">
                <Form className="tipo-letra" onSubmit={handleFormSubmit}>
                    <Row className="texto-centro tamaño-letra-titulo alineacion-titulo">
                        <Form.Label>Iniciar sesión</Form.Label>
                    </Row>

                    <Row className="imagen">
                         <Image src={logo} alt="" roundedCircle />
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
                                minlength="8" maxlength="40" required pattern="[A-Za-z0-9._@]" title=" Soporta letras mayusculas, minusculas números y los caracteres especiales . _ @ , tamaño mínimo: 8 a un tamaño máximo: 40"/>
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
            </Col>
            <Col className = ""></Col>
          </Row>
          <Row className=" fondo-heder-footer tipo-letra"></Row>  
        </Container>
    )
}

export default Login;