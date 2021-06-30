import React            from 'react';
import {useState}       from 'react';
import './Empresas.css';

import { Dialog }       from 'primereact/dialog';
import { Button }       from 'primereact/button';
import { InputText }    from 'primereact/inputtext';

import { createAddBusiness}    from   '../../../../services/apiAddBusiness';

const AgregarEmpresaCard = (props) => {

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
    const [nombre,setNombre]        = useState("");
    const [rubro,setRubro]          = useState("");
    const [telefono,setTelefono]    = useState("");
    const [correo,setCorreo]        = useState("");
    const [nit,setNit]              = useState("");
    const [nombreP,setNombreP]      = useState("");
    const [telefonoP,setTelefonoP]  = useState("");
    const [ciPersona,setCiPersona]  = useState("");
    const [idUsuario,setIdUsuario]  = useState(0);


    const onHide = (name,res) => {
      dialogFuncMap[`${name}`](false);
      const data = {
        nombreEmpresa:                              `${nombre}`,
        rubroEmpresa:                               `${rubro}`,
        telefonoEmpresa:                            `${telefono}`,
        correoEmpresa:                              `${correo}`,
        NITEmpresa:                                 `${nit}`,
        NombrePersona:                              `${nombreP}`,
        telefonoPersona:                            `${telefonoP}`,
        ciPersona:                                  `${ciPersona}`
      }
      if(res === 'Si'){
        console.log("Si");
        console.log(data);
        props.agregarEmpresa(data);
        createAddBusiness(data,idUsuario);
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

    return (
        <div >
            <Button label="AÑADIR EMPRESA"   icon="pi  pi-fw pi-user-plus" className="p-button-rounded p-button-lg p-button-info p-button-text close-se type-letter btn-flot" onClick={() => onClick('displayBasic')}/>
            <Dialog header="AÑADIR EMPRESA" visible={displayBasic} style={{ width: '35vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
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
                    <u className="input-margin" ><strong>Datos persona encargada</strong> <br/></u>
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
 
export default AgregarEmpresaCard;