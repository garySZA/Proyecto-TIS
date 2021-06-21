import React, { useState }     from 'react';

import { Dialog }              from 'primereact/dialog';
import { Button }              from 'primereact/button';
import { InputText }           from 'primereact/inputtext';

import {updateAddBusinessID}   from   '../../../../services/apiAddBusiness';

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

    const [id,setId]                = useState(props.actualEmpresa.idRegistroEmpresa);
    const [nombre,setNombre]        = useState(props.actualEmpresa.nombreEmpresa);
    const [rubro,setRubro]          = useState(props.actualEmpresa.rubroEmpresa);
    const [telefono,setTelefono]    = useState(props.actualEmpresa.telefonoEmpresa);
    const [correo,setCorreo]        = useState(props.actualEmpresa.correoEmpresa);
    const [nit,setNit]              = useState(props.actualEmpresa.NITEmpresa);
    const [nombreP,setNombreP]      = useState(props.actualEmpresa.NombrePersona);
    const [telefonoP,setTelefonoP]  = useState(props.actualEmpresa.telefonoPersona);
    const [ciPersona,setCiPersona]  = useState(props.actualEmpresa.ciPersona);
    const [idUsuario,setIdUsuario]  = useState(props.actualEmpresa.RegistroNuevoUsuario_idRegistroNuevoUsuario);


    const handleIdChange = ({ target:{ value}})=>{
        setId(value);
    };
    const handleNombreChange = ({ target:{ value}})=>{
        setNombre(value);
    };
    const handleRubroChange = ({ target:{ value}})=>{
        setRubro(value);
    };
    const handleTelefonoChange = ({ target:{ value}})=>{
        setTelefono(value);
    };
    const handleCorreoChange = ({ target:{ value}})=>{
        setCorreo(value);
    };
    const handleNitChange = ({ target:{ value}})=>{
        setNit(value);
    };
    const handleNombrePChange = ({ target:{ value}})=>{
        setNombreP(value);
    };
    const handleTelefonoPChange = ({ target:{ value}})=>{
        setTelefonoP(value);
    };
    const handleCiPersonaChange = ({ target:{ value}})=>{
        setCiPersona(value);
    };
    const handleIdUsuarioChange = ({ target:{ value}})=>{
        setIdUsuario(value);
    };


    const onHide = (name,res) => {
        dialogFuncMap[`${name}`](false);
        const data = {
          idRegistroEmpresa:                          `${id}`,
          nombreEmpresa:                              `${nombre}`,
          rubroEmpresa:                               `${rubro}`,
          telefonoEmpresa:                            `${telefono}`,
          correoEmpresa:                              `${correo}`,
          NITEmpresa:                                 `${nit}`,
          NombrePersona:                              `${nombreP}`,
          telefonoPersona:                            `${telefonoP}`,
          ciPersona:                                  `${ciPersona}`,
          RegistroNuevoUsuario_idRegistroNuevoUsuario: idUsuario
        }
        if(res === 'Si'){
          console.log("Data Si");
          console.log(data);
          data.id = props.actualEmpresa.idRegistroEmpresa;
          props.actualizarEmpresa(props.actualEmpresa.idRegistroEmpresa, data);
          console.log(`el Id es ${data.idRegistroEmpresa}`);
          console.log(data)  
          updateAddBusinessID(data,idUsuario,data.idRegistroEmpresa);
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
                    <u className="input-margin"><strong>Datos de la empresa</strong> <br/></u>
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="nombreEmpresa" type="text" value={nombre} onChange={handleNombreChange}/>
                            <label htmlFor="nombreEmpresa">Nombre de Empresa</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="rubroEmpresa" type="text" value={rubro} onChange={handleRubroChange}/>
                            <label htmlFor="rubroEmpresa">Rubro</label>
                        </span>
                    </div>
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="telefonoEmpresa" type="text" value={telefono} onChange={handleTelefonoChange}/>
                            <label htmlFor="telefonoEmpresa">Telefono</label>
                        </span>
                    </div>
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="correoEmpresa" type="text" value={correo} onChange={handleCorreoChange}/>
                            <label htmlFor="correoEmpresa">Correo</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="NITEmpresa" type="text" value={nit} onChange={handleNitChange}/>
                            <label htmlFor="NITEmpresa">NIT</label>
                        </span>
                    </div> 
                    <u className="input-margin"><strong>Datos persona encargada</strong> <br/></u>
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="NombrePersona" type="text" value={nombreP} onChange={handleNombrePChange}/>
                            <label htmlFor="NombrePersona">Nombre</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="telefonoPersona" type="text" value={telefonoP} onChange={handleTelefonoPChange}/>
                            <label htmlFor="telefonoPersona">Telefono</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="ciPersona" type="text" value={ciPersona} onChange={handleCiPersonaChange}/>
                            <label htmlFor="ciPersona">CI</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="RegistroNuevoUsuario_idRegistroNuevoUsuario" type="text" value={idUsuario} onChange={handleIdUsuarioChange}/>
                            <label htmlFor="RegistroNuevoUsuario_idRegistroNuevoUsuario">idUsuario</label>
                        </span>
                    </div> 
                </div>        
                </Dialog>
        </div>
    );
}
 
export default EditYo;