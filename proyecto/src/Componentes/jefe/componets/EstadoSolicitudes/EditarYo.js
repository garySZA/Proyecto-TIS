import React, { useState }  from 'react';

import { Dialog }           from 'primereact/dialog';
import { Button }           from 'primereact/button';
import { InputText }        from 'primereact/inputtext';

import {updateInformARID}       from   '../../../../services/apiInformAR';

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

    const [id,setId]                            = useState(props.actualEstadoSolicitud.idIAR);
    const [nombre,setNombre]                    = useState(props.actualEstadoSolicitud.NombreJefeIRA);
    const [detalle,setDetalle]                  = useState(props.actualEstadoSolicitud.DetalleIAR);
    const [unidad,setUnidad]                    = useState(props.actualEstadoSolicitud.UnidadSolicitanteIRA);
    const [facultad,setFacultad]                = useState(props.actualEstadoSolicitud.FacultadSolicitanteIRA);
    const [carrera,setCarrera]                  = useState(props.actualEstadoSolicitud.CarreraSolicitanteIRA);
    const [idFormSolicitud,setIdFormSolicitud]  = useState(props.actualEstadoSolicitud.FormularioSolitud_idFormularioSolitud);



    const handleIdChange = ({ target:{ value}})=>{
        setId(value);
    };
    const handleNombreChange = ({ target:{ value}})=>{
        setNombre(value);
    };
    const handleDetalleChange = ({ target:{ value}})=>{
        setDetalle(value);
    };
    const handleUnidadChange = ({ target:{ value}})=>{
        setUnidad(value);
    };
    const handleFacultadChange = ({ target:{ value}})=>{
        setFacultad(value);
    };
    const handleCarreraChange = ({ target:{ value}})=>{
        setCarrera(value);
    };
    const handleIdFormSolicitudChange = ({ target:{ value}})=>{
        setIdFormSolicitud(value);
    };


    const onHide = (name,res) => {
        dialogFuncMap[`${name}`](false);
        const data = {
          idIAR:                                 `${id}`,
          NombreJefeIRA:                         `${nombre}`,
          DetalleIAR:                            `${detalle}`,
          UnidadSolicitanteIRA:                  `${unidad}`,
          FacultadSolicitanteIRA:                `${facultad}`,
          CarreraSolicitanteIRA:                 `${carrera}`,
          FormularioSolitud_idFormularioSolitud: idFormSolicitud,

        }
        if(res === 'Si'){
          console.log("Data Si");
          console.log(data);
          data.id = props.actualEstadoSolicitud.idIAR;
          props.actualizarEstadoSolicitud(props.actualEstadoSolicitud.idIAR, data);
          console.log(`el Id es ${data.idIAR}`);
          console.log(data)  
          updateInformARID(data,idFormSolicitud,data.idIAR);
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
                            <InputText className="input-margin" id="NombreJefeIRA" type="text" value={nombre} onChange={handleNombreChange}/>
                            <label htmlFor="NombreJefeIRA">Nombre de Jefe</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="DetalleIAR" type="text" value={detalle} onChange={handleDetalleChange}/>
                            <label htmlFor="DetalleIAR">Detalle</label>
                        </span>
                    </div>
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="UnidadSolicitanteIRA" type="text" value={unidad} onChange={handleUnidadChange}/>
                            <label htmlFor="UnidadSolicitanteIRA">Unidad</label>
                        </span>
                    </div>
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="FacultadSolicitanteIRA" type="text" value={facultad} onChange={handleFacultadChange}/>
                            <label htmlFor="FacultadSolicitanteIRA">Nombre de Facultad</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="CarreraSolicitanteIRA" type="text" value={carrera} onChange={handleCarreraChange}/>
                            <label htmlFor="CarreraSolicitanteIRA">Nombre de Carrera</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="FormularioSolitud_idFormularioSolitud" type="text" value={idFormSolicitud} onChange={handleIdFormSolicitudChange}/>
                            <label htmlFor="FormularioSolitud_idFormularioSolitud">idFormularioSolicitud</label>
                        </span>
                    </div> 
                </div>        
                </Dialog>
        </div>
    );
}
 
export default EditYo;