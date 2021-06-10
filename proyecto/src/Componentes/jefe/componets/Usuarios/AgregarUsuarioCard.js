import React            from 'react';
import {useState}       from 'react';
import './Usuarios.css';

import { Dialog }       from 'primereact/dialog';
import { Button }       from 'primereact/button';
import { InputText }    from 'primereact/inputtext';

import { createUser}    from   '../../../../services/apiUser';

const AgregarUsuarioCard = (props) => {

    const [displayBasic, setDisplayBasic] = useState(false);

    const [position, setPosition] = useState('center');
    
    const dialogFuncMap = {
      'displayBasic': setDisplayBasic,
    }
  
    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);
    
        if (position) {
            setPosition(position);
        }
    }
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



    const onHide = (name,res) => {
      dialogFuncMap[`${name}`](false);
      const data = {
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
        console.log("Si");
        console.log(data);
        props.agregarUsuario(data);
        createUser(data)
      }else{
        console.log("no") 
      }
      
    }

  const renderFooter = (name) => {
    return (
        <div>
            <Button label="No" icon="pi pi-times" onClick={() => onHide(name,'No')} className="p-button-text" />
            <Button label="Si" icon="pi pi-check" onClick={() => onHide(name,'Si')} autoFocus />
        </div>
    );
    }

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

    return (
        <div >
            <Button label="AÑADIR USUARIO"   icon="pi  pi-fw pi-user-plus" className="p-button-rounded p-button-lg p-button-info p-button-text close-se type-letter btn-flot" onClick={() => onClick('displayBasic')}/>
            <Dialog header="AÑADIR USUARIO" visible={displayBasic} style={{ width: '35vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
            <div className="p-d-flex p-flex-column">
                <div className="p-mb-2">
                    <span className="p-float-label">
                        <InputText id="RolR" type="text" value={rol} onChange={handleRolChange}/>
                        <label htmlFor="RolR">RolR</label>
                    </span>
                </div> 
                <div className="p-mb-2">
                    <span className="p-float-label">
                        <InputText id="NombreUsuario" type="text" value={nombre} onChange={handleNombreChange}/>
                        <label htmlFor="NombreUsuario">NombreUsuario</label>
                    </span>
                </div>
                <div className="p-mb-2">
                    <span className="p-float-label">
                        <InputText id="ApellidoUsuario" type="text" value={apellido} onChange={handleApellidoChange}/>
                        <label htmlFor="ApellidoUsuario">ApellidoUsuario</label>
                    </span>
                </div>
                <div className="p-mb-2">
                    <span className="p-float-label">
                        <InputText id="FechaDeNacimiento" type="text" value={fechaNacimiento} onChange={handleFechaNacimientoChange}/>
                        <label htmlFor="FechaDeNacimiento">FechaDeNacimiento</label>
                    </span>
                </div> 
                <div className="p-mb-2">
                    <span className="p-float-label">
                        <InputText id="contraseñaUsuario" type="text" value={contraseña} onChange={handleContraseñaChange}/>
                        <label htmlFor="contraseñaUsuario">contraseñaUsuario</label>
                    </span>
                </div> 
                <div className="p-mb-2">
                    <span className="p-float-label">
                        <InputText id="SexoUsuario" type="text" value={sexo} onChange={handleSexoChange}/>
                        <label htmlFor="SexoUsuario">SexoUsuario</label>
                    </span>
                </div> 
                <div className="p-mb-2">
                    <span className="p-float-label">
                        <InputText id="CorreoC" type="text" value={correo} onChange={handleCorreoChange}/>
                        <label htmlFor="CorreoC">CorreoC</label>
                    </span>
                </div> 
                <div className="p-mb-2">
                    <span className="p-float-label">
                        <InputText id="CiudadDireccion" type="text" value={ciudad} onChange={handleCiudadChange}/>
                        <label htmlFor="CiudadDireccion">CiudadDireccion</label>
                    </span>
                </div> 
                <div className="p-mb-2">
                    <span className="p-float-label">
                        <InputText id="PaisDireccion" type="text" value={pais} onChange={handlePaisChange}/>
                        <label htmlFor="PaisDireccion">PaisDireccion</label>
                    </span>
                </div> 
                <div className="p-mb-2">
                    <span className="p-float-label">
                        <InputText id="CalleDireccion" type="text" value={calle} onChange={handleCalleChange}/>
                        <label htmlFor="CalleDireccion">CalleDireccion</label>
                    </span>
                </div> 
                <div className="p-mb-2">
                    <span className="p-float-label">
                        <InputText id="TelefonoT" type="text" value={telefono} onChange={handleTelefonoChange}/>
                        <label htmlFor="TelefonoT">TelefonoT</label>
                    </span>
                </div> 
            </div>        
            </Dialog>
        </div>
    );
}
 
export default AgregarUsuarioCard;