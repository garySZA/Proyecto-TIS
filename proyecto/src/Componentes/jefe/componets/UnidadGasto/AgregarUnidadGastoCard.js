import React            from 'react';
import {useState}       from 'react';
import './UnidadGasto.css';

import { Dialog }       from 'primereact/dialog';
import { Button }       from 'primereact/button';
import { InputText }    from 'primereact/inputtext';

import { createRegisterUnitSpeding}    from   '../../../../services/apiRegisterUnitSpeding';

const AgregarUnidadGastoCard = (props) => {

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

    const [facultad,setFacultad]        = useState("");
    const [carrera,setCarrera]          = useState("");
    const [unidad,setUnidad]            = useState("");
    const [presupuesto,setPresupuesto]  = useState("");
    const [jefe,setJefe]                = useState("");
    const [secretaria,setSecretaria]    = useState("");
    const [telefono,setTelefono]        = useState("");
    const [idUsuario,setIdUsuario]      = useState(0);


    const onHide = (name,res) => {
      dialogFuncMap[`${name}`](false);
      const data = {
        nombreFacultad:                              `${facultad}`,
        nombreCarrera:                               `${carrera}`,
        nombreUnidad:                                `${unidad}`,
        presupuesto:                                 `${presupuesto}`,
        jefeUnidad:                                  `${jefe}`,
        secretariaUnidad:                            `${secretaria}`,
        telefonoUnidad:                              `${telefono}`,
        RegistroNuevoUsuario_idRegistroNuevoUsuario: idUsuario
      }
      if(res === 'Si'){
        console.log("Si");
        console.log(data);
        props.agregarUnidadGasto(data);
        createRegisterUnitSpeding(data,idUsuario);
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

    const handleFacultadChange = ({ target:{ value}})=>{
        setFacultad(value);
    };
    const handleCarreraChange = ({ target:{ value}})=>{
        setCarrera(value);
    };
    const handleUnidadChange = ({ target:{ value}})=>{
        setUnidad(value);
    };
    const handlePresupuestoChange = ({ target:{ value}})=>{
        setPresupuesto(value);
    };
    const handleJefeChange = ({ target:{ value}})=>{
        setJefe(value);
    };
    const handleSecretariaPChange = ({ target:{ value}})=>{
        setSecretaria(value);
    };
    const handleTelefonoChange = ({ target:{ value}})=>{
        setTelefono(value);
    };
    const handleIdUsuarioChange = ({ target:{ value}})=>{
        setIdUsuario(value);
    };

    return (
        <div >
            <Button label="AÑADIR UNIDAD DE GASTO"   icon="pi  pi-fw pi-user-plus" className="p-button-rounded p-button-lg p-button-info p-button-text close-se type-letter btn-flot" onClick={() => onClick('displayBasic')}/>
            <Dialog header="AÑADIR UNIDAD DE GASTO" visible={displayBasic} style={{ width: '35vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
            <div className="p-d-flex p-flex-column">
            <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText id="nombreFacultad" type="text" value={facultad} onChange={handleFacultadChange}/>
                            <label htmlFor="nombreFacultad">nombreFacultad</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText id="nombreCarrera" type="text" value={carrera} onChange={handleCarreraChange}/>
                            <label htmlFor="nombreCarrera">nombreCarrera</label>
                        </span>
                    </div>
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText id="nombreUnidad" type="text" value={unidad} onChange={handleUnidadChange}/>
                            <label htmlFor="nombreUnidad">nombreUnidad</label>
                        </span>
                    </div>
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText id="presupuesto" type="text" value={presupuesto} onChange={handlePresupuestoChange}/>
                            <label htmlFor="presupuesto">presupuesto</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText id="jefeUnidad" type="text" value={jefe} onChange={handleJefeChange}/>
                            <label htmlFor="jefeUnidad">jefeUnidad</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText id="secretariaUnidad" type="text" value={secretaria} onChange={handleSecretariaPChange}/>
                            <label htmlFor="secretariaUnidad">secretariaUnidad</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText id="telefonoUnidad" type="text" value={telefono} onChange={handleTelefonoChange}/>
                            <label htmlFor="telefonoUnidad">telefonoUnidad</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText id="RegistroNuevoUsuario_idRegistroNuevoUsuario" type="text" value={idUsuario} onChange={handleIdUsuarioChange}/>
                            <label htmlFor="RegistroNuevoUsuario_idRegistroNuevoUsuario">RegistroNuevoUsuario_idRegistroNuevoUsuario</label>
                        </span>
                    </div> 
                </div>            
            </Dialog>
        </div>
    );
}
 
export default AgregarUnidadGastoCard;