import React, { useState }     from 'react';

import { Dialog }              from 'primereact/dialog';
import { Button }              from 'primereact/button';
import { InputText }           from 'primereact/inputtext';

import {updateRegisterRequestID}   from   '../../../../services/apiRegisterRequest';

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

    const [id,setId]                        = useState(props.actualSolicitud.idFormularioSolitud);
    const [item,setItem]                    = useState(props.actualSolicitud.item);
    const [detalle,setDetalle]              = useState(props.actualSolicitud.DetalleSolitud);
    const [fecha,setFecha]                  = useState(props.actualSolicitud.FechaDeSolicitud);
    const [responsable,setResponsable]      = useState(props.actualSolicitud.responsableSolicitud);
    const [solicitud,setSolicitud]          = useState(props.actualSolicitud.montoSolicitud);
    const [estado,setEstado]                = useState(props.actualSolicitud.estadoSolicitud);
    const [idUnidadGasto,setIdUnidadGasto]  = useState(props.actualSolicitud.registroUnidadGasto_idRegistroUnidad);



    const handleIdChange = ({ target:{ value}})=>{
        setId(value);
    };
    const handleItemChange = ({ target:{ value}})=>{
        setItem(value);
    };
    const handleDetalleChange = ({ target:{ value}})=>{
        setDetalle(value);
    };
    const handleFechaChange = ({ target:{ value}})=>{
        setFecha(value);
    };
    const handleResponsableChange = ({ target:{ value}})=>{
        setResponsable(value);
    };
    const handleSolicitudChange = ({ target:{ value}})=>{
        setSolicitud(value);
    };
    const handleEstadoPChange = ({ target:{ value}})=>{
        setEstado(value);
    };
    const handleIdUnidadGastoPChange = ({ target:{ value}})=>{
        setIdUnidadGasto(value);
    };
    


    const onHide = (name,res) => {
        dialogFuncMap[`${name}`](false);
        const data = {
            idFormularioSolitud:                  `${id}`,
            item:                                 `${item}`,
            DetalleSolitud:                       `${detalle}`,
            FechaDeSolicitud:                     `${fecha}`,
            responsableSolicitud:                 `${responsable}`,
            montoSolicitud:                        solicitud,
            estadoSolicitud:                      `${estado}`,
            registroUnidadGasto_idRegistroUnidad:  idUnidadGasto
        }
        if(res === 'Si'){
          console.log("Data Si");
          console.log(data);
          data.id = props.actualSolicitud.idFormularioSolitud;
          props.actualizarSolicitud(props.actualSolicitud.idFormularioSolitud, data);
          console.log(`el Id es ${data.idFormularioSolitud}`);
          console.log(data)  
          updateRegisterRequestID(data,idUnidadGasto,data.idFormularioSolitud);
          setDisplayBasic(false);
        }else{
          console.log("no");
          props.setEditando(false);
          setDisplayBasic(false);
        }
        
    }
  

    return (
          <div >
                
                <Dialog header="EDITAR FORMULARIO DE SOLICITUD" visible={displayBasic} style={{ width: '35vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                <div className="p-d-flex p-flex-column">
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="item" type="text" value={item} onChange={handleItemChange}/>
                            <label htmlFor="item">Item</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="DetalleSolitud" type="text" value={detalle} onChange={handleDetalleChange}/>
                            <label htmlFor="DetalleSolitud">Detalle</label>
                        </span>
                    </div>
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="FechaDeSolicitud" type="text" value={fecha} onChange={handleFechaChange}/>
                            <label htmlFor="FechaDeSolicitud">Fecha de Solicitud</label>
                        </span>
                    </div>
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="responsableSolicitud" type="text" value={responsable} onChange={handleResponsableChange}/>
                            <label htmlFor="responsableSolicitud">Responsable</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="montoSolicitud" type="text" value={solicitud} onChange={handleSolicitudChange}/>
                            <label htmlFor="montoSolicitud">Monto</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="estadoSolicitud" type="text" value={estado} onChange={handleEstadoPChange}/>
                            <label htmlFor="estadoSolicitud">Estado</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText className="input-margin" id="registroUnidadGasto_idRegistroUnidad" type="text" value={idUnidadGasto} onChange={handleIdUnidadGastoPChange}/>
                            <label htmlFor="registroUnidadGasto_idRegistroUnidad">idRegistroUnidad</label>
                        </span>
                    </div> 
                </div>        
                </Dialog>
        </div>
    );
}
 
export default EditYo;