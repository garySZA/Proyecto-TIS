import React                        from 'react'
import { Button }                   from 'primereact/button';
import { Card }                     from 'primereact/card';
import './RespuestasEmpresa.css';
import { header }                   from './tools';

const RespuestaEmpresaCard = (props) => (
     <div className=" p-grid p-justify-between margenes-card">
        {
            props.respuestaEmpresas.length > 0 ? (
                props.respuestaEmpresas.map(respuestaEmpresa => (
                    <div className="m-card ">
                        <div className="p-col-4 ">
                            <div className="">
                            <Card className="color-card type-letterE" title="" style={{ width: '25rem', marginBottom: '2em' }} header={header(respuestaEmpresa.idrespuestasEmpresas)}>
                                <p className="p-m-0" style={{lineHeight: '1.5'}}>
                                    <strong>Numero:</strong>                                 {respuestaEmpresa.NroRE}               <br/>
                                    <strong>Cantidad:</strong>                               {respuestaEmpresa.CantidadRE}          <br/>
                                    <strong>Unidad:</strong>                                 {respuestaEmpresa.UnidadRE}            <br/>
                                    <strong>Detalle:</strong>                                {respuestaEmpresa.DetalleRE}           <br/>
                                    <strong>Unitario:</strong>                               {respuestaEmpresa.UnitarioRE}          <br/>
                                    <strong>Total:</strong>                                  {respuestaEmpresa.TotalRE}             <br/>
                                    <strong>idFormularioSolitud:</strong>                    {respuestaEmpresa.FormularioSolitud_idFormularioSolitud}        <br/>
                                </p>
                                <div className="span-justify m-span">
                                    <span >
                                        <Button label="EDITAR"   icon="pi pi-pencil" className=""                           onClick={() => {props.editarFila(respuestaEmpresa)}}/>
                                        <Button label="ELIMINAR" icon="pi pi-trash"  className="p-button-secondary p-ml-2"  onClick={() =>  props.eliminandoRespuestaEmpresa(respuestaEmpresa.idrespuestasEmpresas)}/>
                                    </span>
                                </div>
                            </Card>
                            </div>
                        </div>
                    </div>    
                ))
                
            ) : (
                <tr>
                    <td colSpan={3}>No Existen Respuesta de Empresas</td>
                </tr>
            )
            
        }
  </div>
)

export default RespuestaEmpresaCard