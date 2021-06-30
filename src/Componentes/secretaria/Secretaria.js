import React from 'react';
import  { useState, useEffect}              from 'react';
import { useParams }                        from 'react-router';
import {getUserID}                          from   '../../services/apiUser';
import {updateUserID}                       from   '../../services/apiUser';
import './Secretaria.css';
import { useHistory }                       from 'react-router-dom';
import logo                                 from './img/UMSS_logo.png';
import { Menubar }                          from 'primereact/menubar';
import { menu }                             from './tools';
import { Button }                           from 'primereact/button';
import { Avatar }                           from 'primereact/avatar';
import { Dialog }                           from 'primereact/dialog';
import { InputText }        from 'primereact/inputtext';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Sidebar } from 'primereact/sidebar';

const Secretaria = () =>{
    const {id} =  useParams();
    const history                         = useHistory();
    const [visibleRight, setVisibleRight] = useState(false);
    const [usuario,setUsuario]            = useState([]);

    const [idUser,setIdUser]                  = useState("");
    const [rol,setRol]                        = useState("");
    const [nombre,setNombre]                  = useState("");
    const [apellido,setApellido]              = useState("");
    const [fechaNacimiento,setFechaNacimiento]= useState("");
    const [contraseña,setContraseña]          = useState("");
    const [sexo,setSexo]                      = useState("");
    const [correo,setCorreo]                  = useState("");
    const [ciudad,setCiudad]                  = useState("");
    const [pais,setPais]                      = useState("");
    const [calle,setCalle]                    = useState("");
    const [telefono,setTelefono]              = useState("");



    const [displayBasic, setDisplayBasic] = useState(false);

    const [position, setPosition] = useState('center');

    useEffect(()=>{
        fetchUsuario();
    },[])


    const fetchUsuario = () =>{
        getUserID(id).then(json =>{
            if(json.error){
                console.log("Error");
            }else{
                setUsuario(json.data);
                console.log(usuario);
            }
        })
    }
    useEffect(()=>{
        if(usuario.length>0){
            setIdUser         (usuario[0].idRegistroNuevoUsuario);
            setRol            (usuario[0].RolR)
            setNombre         (usuario[0].NombreUsuario);
            setApellido       (usuario[0].ApellidoUsuario);
            setFechaNacimiento(usuario[0].FechaDeNacimiento);
            setContraseña     (usuario[0].contraseñaUsuario);
            setSexo           (usuario[0].SexoUsuario);
            setCorreo         (usuario[0].CorreoC);
            setCiudad         (usuario[0].CiudadDireccion);
            setPais           (usuario[0].PaisDireccion);
            setCalle          (usuario[0].CalleDireccion);
            setTelefono       (usuario[0].TelefonoT);
        }   
    },[usuario]) 

    const start = ()=>{
        return( 
            <div>
                <img alt="logo" src={logo} height="60" className="p-mr-2"></img>;
            </div>       

        )
    };
    const handleHome=()=>{
        history.push("/");
    }

    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);
    
        if (position) {
            setPosition(position);
        }
    }

    const onHide = (name,res) => {
        dialogFuncMap[`${name}`](false);
        const data = {
            idRegistroNuevoUsuario: `${id}`,
            RolR:                   `${rol}`,
            NombreUsuario:          `${nombre}`,
            ApellidoUsuario:        `${apellido}`,
            FechaDeNacimiento:      `${fechaNacimiento}`,
            contraseñaUsuario:      `${contraseña}`,
            SexoUsuario:            `${sexo}`,
            CorreoC:                `${correo}`,
            CiudadDireccion:        `${ciudad}`,
            PaisDireccion:          `${pais}`,
            CalleDireccion:         `${calle}`,
            TelefonoT:              `${telefono}`
        }
        if(res === 'Si'){
          console.log("Data Si");
          updateUserID(data,data.idRegistroNuevoUsuario);
          
        }else{
          console.log("no");
          setDisplayBasic(false);
        }
        
    }

    const handleAvatar=()=>{
        setVisibleRight(true);
    };

    const dialogFuncMap = {
        'displayBasic': setDisplayBasic,
    }
    

  
    const renderFooter = (name) => {
          return (
              <div>
                  <Button label="No" icon="pi pi-times" onClick={() => onHide(name,'No')} className="p-button-text" />
                  <Button label="Si" icon="pi pi-check" onClick={() => onHide(name,'Si')} autoFocus />
              </div>
          );
    }



    const handleEdit=()=>{
        onClick('displayBasic');
  
    };


    const mostrar=()=>{
       return(
          <div className="p-d-flex p-jc-center type-letter">
            <div className="card">
                <div className="p-d-flex p-jc-center">
                    <Avatar icon="pi pi-user" className="p-mr-2" size="large" shape="circle"  style={{ backgroundColor: '#3a5795', color: '#ffffff' }}/>
                </div>
                <div className="p-d-flex p-jc-center">
                    <p style={{ textAlign: 'center'}}><strong >{nombre} {apellido}</strong></p>
                </div>
                <div className="p-d-flex p-jc-center">
                    <i className="pi pi-envelope" style={{'fontSize': '1.2em',marginTop:'0.2em',marginRight:'0.4em'}}></i>
                    <p style={{ textAlign: 'center'}}>{correo} </p>
                </div>
                <div className="p-d-flex p-jc-center">
                    <i className="pi pi-phone" style={{'fontSize': '1.2em',marginTop:'0.2em',marginRight:'0.4em'}}></i>
                    <p style={{ textAlign: 'center'}}>{telefono} </p>
                </div>
                <div className="p-d-flex p-jc-center">
                    <i className="pi pi-globe" style={{'fontSize': '1.2em',marginTop:'0.2em',marginRight:'0.4em'}}></i>
                    <p style={{ textAlign: 'center'}}>{pais} </p>
                </div>
                <div className="p-d-flex p-jc-center">
                    <i className="pi pi-map" style={{'fontSize': '1.2em',marginTop:'0.2em',marginRight:'0.4em'}}></i>
                    <p style={{ textAlign: 'center'}}>{ciudad} </p>
                </div>
                <div className="p-d-flex p-jc-center">
                    <i className="pi pi pi-home" style={{'fontSize': '1.2em',marginTop:'0.2em',marginRight:'0.4em'}}></i>
                    <p style={{ textAlign: 'center'}}>{calle} </p>
                </div>
                <div className="p-d-flex p-jc-center">
                    <i className="pi pi pi-user" style={{'fontSize': '1.2em',marginTop:'0.2em',marginRight:'0.4em'}}></i>
                    <p style={{ textAlign: 'center'}}>{sexo} </p>
                </div>

                
                
                <Button label="Editar mis Datos"    icon="pi  pi-fw pi-user-edit"  className="p-button-rounded p-button-lg p-button-info p-button-text type-letter" onClick={() => onClick('displayBasic')} style={{ color: '#3a5795' , marginTop:"0.0em"}}/>
                <Button label="Cerrar Sesion"       icon="pi  pi-fw pi-sign-out"   className="p-button-rounded p-button-lg p-button-info p-button-text type-letter" onClick={handleHome} style={{ color: '#3a5795' , marginTop:"6.5em"}}/>
            </div>  
          </div> 
       )  
    }


    const avatar =()=>{
        return(
            <div>
                <Avatar icon="pi pi-user" className="p-mr-2 " size="xlarge" shape="circle" onClick={handleAvatar} style={{ backgroundColor: '#3a5795', color: '#ffffff' }}/>
            </div>
        )
    };

    const handleRolChange = ({ target:{ value}})=>{
        setRol(value);
    };
    const handleNombreChange = ({ target:{ value}})=>{
        setNombre(value);
    };
    const handleApellidoChange = ({ target:{ value}})=>{
        setApellido(value);
    };
    const handleFechaNacimientoChange = ({ target:{ value}})=>{
        setFechaNacimiento(value);
    };
    const handleContraseñaChange = ({ target:{ value}})=>{
        setContraseña(value);
    };
    const handleSexoChange = ({ target:{ value}})=>{
        setSexo(value);
    };
    const handleCorreoChange = ({ target:{ value}})=>{
        setCorreo(value);
    };
    const handleCiudadChange = ({ target:{ value}})=>{
        setCiudad(value);
    };
    const handlePaisChange = ({ target:{ value}})=>{
        setPais(value);
    };
    const handleCalleChange = ({ target:{ value}})=>{
        setCalle(value);
    };
    const handleTelefonoChange = ({ target:{ value}})=>{
        setTelefono(value);
    };
    const editar=()=>{
        return(
            <div className="p-d-flex p-jc-center type-letter">
            <div className="card " style={{marginTop:'0.8em'}}>
                <div className="p-col-12 " style={{marginBottom:'0.8em'}}>
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user" style={{'fontSize': '1.8em' , color: '#3a5795'}}></i>
                        </span>
                        <span className="p-float-label">
                            <InputText className="input-margin type-letter-int" id="NombreUsuario" type="text" value={nombre} onChange={handleNombreChange}/>
                            <label htmlFor="NombreUsuario">Nombre(s)</label>
                        </span>
                    </div>
                </div>

                <div className="p-col-12" style={{marginBottom:'0.8em'}}>
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user" style={{'fontSize': '1.8em', color: '#3a5795'}}></i>
                        </span>
                        <span className="p-float-label">
                            <InputText className="input-margin type-letter-int" id="ApellidoUsuario" type="text" value={apellido} onChange={handleApellidoChange}/>
                            <label htmlFor="ApellidoUsuario">Apellido(s)</label>
                        </span>
                    </div>
                </div>

                <div className="p-col-12" style={{marginBottom:'0.8em'}}>
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-calendar" style={{'fontSize': '1.8em', color: '#3a5795'}}></i>
                        </span>
                        <span className="p-float-label">
                            <InputText className="input-margin type-letter-int" id="FechaDeNacimiento" type="text" value={fechaNacimiento} onChange={handleFechaNacimientoChange}/>
                            <label htmlFor="FechaDeNacimiento">Fecha de Nacimiento</label>
                        </span>
                    </div>
                </div>

                <div className="p-col-12" style={{marginBottom:'0.8em'}}>
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-lock" style={{'fontSize': '1.8em', color: '#3a5795'}}></i>
                        </span>
                        <span className="p-float-label">
                            <InputText className="input-margin type-letter-int" id="contraseñaUsuario" type="text" value={contraseña} onChange={handleContraseñaChange}/>
                            <label htmlFor="contraseñaUsuario">contraseña</label>
                        </span>
                    </div>
                </div>

                <div className="p-col-12" style={{marginBottom:'0.8em'}}>
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user" style={{'fontSize': '1.8em', color: '#3a5795'}}></i>
                        </span>
                        <span className="p-float-label">
                            <InputText className="input-margin type-letter-int" id="SexoUsuario" type="text" value={sexo} onChange={handleSexoChange}/>
                            <label htmlFor="SexoUsuario">Sexo</label>
                        </span>
                    </div>
                </div>

                <div className="p-col-12" style={{marginBottom:'0.8em'}}>
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-envelope" style={{'fontSize': '1.8em', color: '#3a5795'}}></i>
                        </span>
                        <span className="p-float-label">
                            <InputText className="input-margin type-letter-int" id="CorreoC" type="text" value={correo} onChange={handleCorreoChange}/>
                            <label htmlFor="CorreoC">Correo</label>
                        </span>
                    </div>
                </div>

                <div className="p-col-12" style={{marginBottom:'0.8em'}}>
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-map" style={{'fontSize': '1.8em', color: '#3a5795'}}></i>
                        </span>
                        <span className="p-float-label">
                            <InputText className="input-margin type-letter-int" id="CiudadDireccion" type="text" value={ciudad} onChange={handleCiudadChange}/>
                            <label htmlFor="CiudadDireccion">Ciudad</label>
                        </span>
                    </div>
                </div>

                <div className="p-col-12" style={{marginBottom:'0.8em'}}>
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-globe" style={{'fontSize': '1.8em', color: '#3a5795'}}></i>
                        </span>
                        <span className="p-float-label">
                            <InputText className="input-margin type-letter-int" id="PaisDireccion" type="text" value={pais} onChange={handlePaisChange}/>
                            <label htmlFor="PaisDireccion">Pais</label>
                        </span>
                    </div>
                </div>

                <div className="p-col-12" style={{marginBottom:'0.8em'}}>
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-home" style={{'fontSize': '1.8em', color: '#3a5795'}}></i>
                        </span>
                        <span className="p-float-label">
                            <InputText className="input-margin type-letter-int" id="CalleDireccion" type="text" value={calle} onChange={handleCalleChange}/>
                            <label htmlFor="CalleDireccion">Calle</label>
                        </span>
                    </div>
                </div>

                <div className="p-col-12" style={{marginBottom:'0.8em'}}>
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-phone" style={{'fontSize': '1.8em', color: '#3a5795'}}></i>
                        </span>
                        <span className="p-float-label">
                            <InputText className="input-margin type-letter-int" id="TelefonoT" type="text" value={telefono} onChange={handleTelefonoChange}/>
                            <label htmlFor="TelefonoT">Telefono</label>
                        </span>
                    </div>
                </div>

            </div>
        </div>    
        )
    };

    return(
        <div>
             <div className="p-grid p-justify-center ">
                <div className="p-col-12 rowPanel">
                    <Menubar className="panelMenu"  start={start} model={menu} end={avatar}/>
                </div>
                {
                    <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                    {
                        mostrar()
                    }  
                    </Sidebar>
                }
                {
                    <Dialog header="Mis datos" visible={displayBasic} style={{ width: '30vw',textAlign:'center' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')} className="type-letter">
                    {
                        editar()
                    }  
                    </Dialog>
                }
            </div> 
        </div>
    )
}
export default Secretaria;