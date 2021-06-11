import React            from 'react';
import {useState}       from 'react';
import './Solicitudes.css';

import { Dialog }       from 'primereact/dialog';
import { Button }       from 'primereact/button';
import { InputText }    from 'primereact/inputtext';

import { createRegisterRequest}    from   '../../../../services/apiRegisterRequest';

const AgregarSolicitudCard = (props) => {

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
 
    const [item,setItem]                    = useState("");
    const [detalle,setDetalle]              = useState("");
    const [fecha,setFecha]                  = useState("");
    const [responsable,setResponsable]      = useState("");
    const [solicitud,setSolicitud]          = useState(0);
    const [estado,setEstado]                = useState("");
    const [idUnidadGasto,setIdUnidadGasto]  = useState(0);


    const onHide = (name,res) => {
      dialogFuncMap[`${name}`](false);
      const data = {
        item:                                 `${item}`,
        DetalleSolitud:                       `${detalle}`,
        FechaDeSolicitud:                     `${fecha}`,
        responsableSolicitud:                 `${responsable}`,
        montoSolicitud:                         solicitud,
        estadoSolicitud:                      `${estado}`,
        registroUnidadGasto_idRegistroUnidad:  idUnidadGasto
      }
      if(res === 'Si'){
        console.log("Si");
        console.log(data);
        props.agregarSolicitud(data);
        createRegisterRequest(data,idUnidadGasto);
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

    return (
        <div >
            <Button label="AÑADIR  NUEVA SOLICITUD"   icon="pi  pi-fw pi-user-plus" className="p-button-rounded p-button-lg p-button-info p-button-text close-se type-letter btn-flot" onClick={() => onClick('displayBasic')}/>
            <Dialog header="AÑADIR NUEVA SOLICITUD" visible={displayBasic} style={{ width: '35vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
            <div className="p-d-flex p-flex-column">
                <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText id="item" type="text" value={item} onChange={handleItemChange}/>
                            <label htmlFor="item">item</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText id="DetalleSolitud" type="text" value={detalle} onChange={handleDetalleChange}/>
                            <label htmlFor="DetalleSolitud">DetalleSolitud</label>
                        </span>
                    </div>
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText id="FechaDeSolicitud" type="text" value={fecha} onChange={handleFechaChange}/>
                            <label htmlFor="FechaDeSolicitud">FechaDeSolicitud</label>
                        </span>
                    </div>
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText id="responsableSolicitud" type="text" value={responsable} onChange={handleResponsableChange}/>
                            <label htmlFor="responsableSolicitud">responsableSolicitud</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText id="montoSolicitud" type="text" value={solicitud} onChange={handleSolicitudChange}/>
                            <label htmlFor="montoSolicitud">montoSolicitud</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText id="estadoSolicitud" type="text" value={estado} onChange={handleEstadoPChange}/>
                            <label htmlFor="estadoSolicitud">estadoSolicitud</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText id="registroUnidadGasto_idRegistroUnidad" type="text" value={idUnidadGasto} onChange={handleIdUnidadGastoPChange}/>
                            <label htmlFor="registroUnidadGasto_idRegistroUnidad">registroUnidadGasto_idRegistroUnidad</label>
                        </span>
                    </div>    
                </div>            
            </Dialog>
        </div>
    );
}
 
export default AgregarSolicitudCard;