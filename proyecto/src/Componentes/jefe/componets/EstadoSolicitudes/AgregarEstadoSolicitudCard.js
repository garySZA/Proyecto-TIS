import React            from 'react';
import {useState}       from 'react';
import './EstadoSolicitudes.css';

import { Dialog }       from 'primereact/dialog';
import { Button }       from 'primereact/button';
import { InputText }    from 'primereact/inputtext';

import { createInformAR}    from   '../../../../services/apiInformAR';

const AgregarEstadoSolicitudCard = (props) => {

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

    const [nombre,setNombre]                    = useState("");
    const [detalle,setDetalle]                  = useState("");
    const [unidad,setUnidad]                    = useState("");
    const [facultad,setFacultad]                = useState("");
    const [carrera,setCarrera]                  = useState("");
    const [idFormSolicitud,setIdFormSolicitud]  = useState(0);



    const onHide = (name,res) => {
      dialogFuncMap[`${name}`](false);
      const data = {
          NombreJefeIRA:                         `${nombre}`,
          DetalleIAR:                            `${detalle}`,
          UnidadSolicitanteIRA:                  `${unidad}`,
          FacultadSolicitanteIRA:                `${facultad}`,
          CarreraSolicitanteIRA:                 `${carrera}`,
      }
      if(res === 'Si'){
        console.log("Si");
        console.log(data);
        props.agregarEstadoSolicitud(data);
        createInformAR(data,idFormSolicitud)
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

    return (
        <div >
            <Button label="AÑADIR UN ESTADO DE SOLICITUD"   icon="pi  pi-fw pi-user-plus" className="p-button-rounded p-button-lg p-button-info p-button-text close-se type-letter btn-flot" onClick={() => onClick('displayBasic')}/>
            <Dialog header="AÑADIR UN ESTADO DE SOLICITUD" visible={displayBasic} style={{ width: '35vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
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
 
export default AgregarEstadoSolicitudCard;