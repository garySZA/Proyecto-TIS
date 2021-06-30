import React, { useState }  from 'react';

import { Dialog }           from 'primereact/dialog';
import { Button }           from 'primereact/button';
import { InputText }        from 'primereact/inputtext';

import {updateUserID}       from   '../../../../services/apiUser';

const EditYo = (props) => {

   

    const [displayBasic, setDisplayBasic] = useState(true);

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

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide(name,'No')} className="p-button-text" />
                <Button label="Si" icon="pi pi-check" onClick={() => onHide(name,'Si')} autoFocus />
            </div>
        );
    }

    const [id,setId]                          = useState(props.actualUsario.idRegistroNuevoUsuario);
    const [rol,setRol]                        = useState(props.actualUsario.RolR);
    const [nombre,setNombre]                  = useState(props.actualUsario.NombreUsuario);
    const [apellido,setApellido]              = useState(props.actualUsario.ApellidoUsuario);
    const [fechaNacimiento,setFechaNacimiento]= useState(props.actualUsario.FechaDeNacimiento);
    const [contraseña,setContraseña]          = useState(props.actualUsario.contraseñaUsuario);
    const [sexo,setSexo]                      = useState(props.actualUsario.SexoUsuario);
    const [correo,setCorreo]                  = useState(props.actualUsario.CorreoC);
    const [ciudad,setCiudad]                  = useState(props.actualUsario.CiudadDireccion);
    const [pais,setPais]                      = useState(props.actualUsario.PaisDireccion);
    const [calle,setCalle]                    = useState(props.actualUsario.CalleDireccion);
    const [telefono,setTelefono]              = useState(props.actualUsario.TelefonoT);



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
          console.log(data);
          data.id = props.actualUsario.idRegistroNuevoUsuario;
          props.actualizarUsuario(props.actualUsario.idRegistroNuevoUsuario, data);
          console.log(`el Id es ${data.idRegistroNuevoUsuario}`);
          console.log(data)  
          updateUserID(data,data.idRegistroNuevoUsuario);
          setDisplayBasic(false);
        }else{
          console.log("no");
          props.setEditando(false);
          setDisplayBasic(false);
        }
        
    }
  

    return (
          <div >
                
                <Dialog header="EDITAR USUARIO" visible={displayBasic} style={{ width: '35vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                <div className="p-d-flex p-flex-column">
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="RolR" type="text" value={rol} onChange={handleRolChange}/>
                            <label htmlFor="RolR">Rol</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="NombreUsuario" type="text" value={nombre} onChange={handleNombreChange}/>
                            <label htmlFor="NombreUsuario">Nombre(s)</label>
                        </span>
                    </div>
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="ApellidoUsuario" type="text" value={apellido} onChange={handleApellidoChange}/>
                            <label htmlFor="ApellidoUsuario">Apellido(s)</label>
                        </span>
                    </div>
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="FechaDeNacimiento" type="text" value={fechaNacimiento} onChange={handleFechaNacimientoChange}/>
                            <label htmlFor="FechaDeNacimiento">Fecha de Nacimiento</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="contraseñaUsuario" type="text" value={contraseña} onChange={handleContraseñaChange}/>
                            <label htmlFor="contraseñaUsuario">contraseña</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="SexoUsuario" type="text" value={sexo} onChange={handleSexoChange}/>
                            <label htmlFor="SexoUsuario">Sexo</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="CorreoC" type="text" value={correo} onChange={handleCorreoChange}/>
                            <label htmlFor="CorreoC">Correo</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="CiudadDireccion" type="text" value={ciudad} onChange={handleCiudadChange}/>
                            <label htmlFor="CiudadDireccion">Ciudad</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="PaisDireccion" type="text" value={pais} onChange={handlePaisChange}/>
                            <label htmlFor="PaisDireccion">Pais</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="CalleDireccion" type="text" value={calle} onChange={handleCalleChange}/>
                            <label htmlFor="CalleDireccion">Calle</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="TelefonoT" type="text" value={telefono} onChange={handleTelefonoChange}/>
                            <label htmlFor="TelefonoT">Telefono</label>
                        </span>
                    </div> 
                </div>        
                </Dialog>
        </div>
    );
}
 
export default EditYo;