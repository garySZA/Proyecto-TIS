import React, { useState }     from 'react';

import { Dialog }              from 'primereact/dialog';
import { Button }              from 'primereact/button';
import { InputText }           from 'primereact/inputtext';

import {updateAnswerBusinessID}   from   '../../../../services/apiAnswerBusiness';

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

    const [id,setId]                            = useState(props.actualRespuestaEmpresa.idrespuestasEmpresas);
    const [nro,setNro]                          = useState(props.actualRespuestaEmpresa.NroRE);
    const [cantidad,setCantidad]                = useState(props.actualRespuestaEmpresa.CantidadRE);
    const [unidad,setUnidad]                    = useState(props.actualRespuestaEmpresa.UnidadRE);
    const [detalle,setDetalle]                  = useState(props.actualRespuestaEmpresa.DetalleRE);
    const [unitario,setUnitario]                = useState(props.actualRespuestaEmpresa.UnitarioRE);
    const [total,setTotal]                      = useState(props.actualRespuestaEmpresa.TotalRE);
    const [idFormSolicitud,setidFormSolicitud]  = useState(props.actualRespuestaEmpresa.FormularioSolitud_idFormularioSolitud);



    const handleIdChange = ({ target:{ value}})=>{
        setId(value);
    };
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

    const onHide = (name,res) => {
        dialogFuncMap[`${name}`](false);
        const data = {
            idrespuestasEmpresas:                  id,
            NroRE:                                 nro,
            CantidadRE:                            cantidad,
            UnidadRE:                              unidad,
            DetalleRE:                            `${detalle}`,
            UnitarioRE:                            unitario,
            TotalRE:                               total,
            FormularioSolitud_idFormularioSolitud: idFormSolicitud
        }
        if(res === 'Si'){
          console.log("Data Si");
          console.log(data);
          data.id = props.actualRespuestaEmpresa.idrespuestasEmpresas;
          props.actualizarRespuestaEmpresa(props.actualRespuestaEmpresa.idrespuestasEmpresas, data);
          console.log(`el Id es ${data.idrespuestasEmpresas}`);
          console.log(data)  
          updateAnswerBusinessID(data,idFormSolicitud,data.idrespuestasEmpresas);
          setDisplayBasic(false);
        }else{
          console.log("no");
          props.setEditando(false);
          setDisplayBasic(false);
        }
        
    }
  

    return (
          <div >
                
                <Dialog header="EDITAR RESPUESTA EMPRESAS" visible={displayBasic} style={{ width: '35vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
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
 
export default EditYo;