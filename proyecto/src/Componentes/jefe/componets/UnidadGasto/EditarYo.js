import React, { useState }     from 'react';

import { Dialog }              from 'primereact/dialog';
import { Button }              from 'primereact/button';
import { InputText }           from 'primereact/inputtext';

import {updateRegisterUnitSpedingID}   from   '../../../../services/apiRegisterUnitSpeding';

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

    const [id,setId]                    = useState(props.actualUnidadGasto.idRegistroUnidad);
    const [facultad,setFacultad]        = useState(props.actualUnidadGasto.nombreFacultad);
    const [carrera,setCarrera]          = useState(props.actualUnidadGasto.nombreCarrera);
    const [unidad,setUnidad]            = useState(props.actualUnidadGasto.nombreUnidad);
    const [presupuesto,setPresupuesto]  = useState(props.actualUnidadGasto.presupuesto);
    const [jefe,setJefe]                = useState(props.actualUnidadGasto.jefeUnidad);
    const [secretaria,setSecretaria]    = useState(props.actualUnidadGasto.secretariaUnidad);
    const [telefono,setTelefono]        = useState(props.actualUnidadGasto.telefonoUnidad);
    const [idUsuario,setIdUsuario]      = useState(props.actualUnidadGasto.RegistroNuevoUsuario_idRegistroNuevoUsuario);



    const handleIdChange = ({ target:{ value}})=>{
        setId(value);
    };
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


    const onHide = (name,res) => {
        dialogFuncMap[`${name}`](false);
        const data = {
          idRegistroUnidad:                            `${id}`,
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
          console.log("Data Si");
          console.log(data);
          data.id = props.actualUnidadGasto.idRegistroUnidad;
          props.actualizarUnidadGasto(props.actualUnidadGasto.idRegistroUnidad, data);
          console.log(`el Id es ${data.idRegistroUnidad}`);
          console.log(data)  
          updateRegisterUnitSpedingID(data,idUsuario,data.idRegistroUnidad);
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
 
export default EditYo;