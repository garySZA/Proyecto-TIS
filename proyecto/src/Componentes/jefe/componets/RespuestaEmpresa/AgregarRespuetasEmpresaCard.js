import React            from 'react';
import {useState}       from 'react';
import './RespuestasEmpresa.css';

import { Dialog }       from 'primereact/dialog';
import { Button }       from 'primereact/button';
import { InputText }    from 'primereact/inputtext';

import { createAnswerBusiness}    from   '../../../../services/apiAnswerBusiness';

const AgregarRespuestasEmpresaCard = (props) => {

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

    const [nro,setNro]                          = useState(0);
    const [cantidad,setCantidad]                = useState(0);
    const [unidad,setUnidad]                    = useState(0);
    const [detalle,setDetalle]                  = useState("");
    const [unitario,setUnitario]                = useState(0);
    const [total,setTotal]                      = useState(0);
    const [idFormSolicitud,setidFormSolicitud]  = useState(0);




    const onHide = (name,res) => {
      dialogFuncMap[`${name}`](false);
      const data = {
        NroRE:                                 nro,
        CantidadRE:                            cantidad,
        UnidadRE:                              unidad,
        DetalleRE:                             `${detalle}`,
        UnitarioRE:                            unitario,
        TotalRE:                               total
      }
      if(res === 'Si'){
        console.log("Si");
        console.log(data);
        props.agregarRespuestaEmpresa(data);
        createAnswerBusiness(data,idFormSolicitud);
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

    const handleNroChange = ({ target:{ value}})=>{
        setNro(value);
    };
    const handleCantidadChange = ({ target:{ value}})=>{
        setCantidad(value);
    };
    const handleUnidadChange = ({ target:{ value}})=>{
        setUnidad(value);
    };
    const handleDetalleChange = ({ target:{ value}})=>{
        setDetalle(value);
    };
    const handleUnitarioChange = ({ target:{ value}})=>{
        setUnitario(value);
    };
    const handleTotalChange = ({ target:{ value}})=>{
        setTotal(value);
    };
    const handleFormSolicitudChange = ({ target:{ value}})=>{
        setidFormSolicitud(value);
    };

    return (
        <div >
            <Button label="AÑADIR RESPUESTA EMPRESA"   icon="pi  pi-fw pi-user-plus" className="p-button-rounded p-button-lg p-button-info p-button-text close-se type-letter btn-flot" onClick={() => onClick('displayBasic')}/>
            <Dialog header="AÑADIR RESPUESTA EMPRESA" visible={displayBasic} style={{ width: '35vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                <div className="p-d-flex p-flex-column">
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText id="NroRE" type="text" value={nro} onChange={handleNroChange}/>
                            <label htmlFor="NroRE">NroRE</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText id="CantidadRE" type="text" value={cantidad} onChange={handleCantidadChange}/>
                            <label htmlFor="CantidadRE">CantidadRE</label>
                        </span>
                    </div>
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText id="UnidadRE" type="text" value={unidad} onChange={handleUnidadChange}/>
                            <label htmlFor="UnidadRE">UnidadRE</label>
                        </span>
                    </div>
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText id="DetalleRE" type="text" value={detalle} onChange={handleDetalleChange}/>
                            <label htmlFor="DetalleRE">DetalleRE</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText id="UnitarioRE" type="text" value={unitario} onChange={handleUnitarioChange}/>
                            <label htmlFor="UnitarioRE">UnitarioRE</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText id="TotalRE" type="text" value={total} onChange={handleTotalChange}/>
                            <label htmlFor="TotalRE">TotalRE</label>
                        </span>
                    </div> 
                    <div className="p-mb-2">
                        <span className="p-float-label">
                            <InputText id="FormularioSolitud_idFormularioSolitud" type="text" value={idFormSolicitud} onChange={handleFormSolicitudChange}/>
                            <label htmlFor="FormularioSolitud_idFormularioSolitud">FormularioSolitud_idFormularioSolitud</label>
                        </span>
                    </div> 
                </div>            
            </Dialog>
        </div>
    );
}
 
export default AgregarRespuestasEmpresaCard;