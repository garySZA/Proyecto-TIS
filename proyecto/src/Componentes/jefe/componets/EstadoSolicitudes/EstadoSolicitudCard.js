import React                        from 'react'
import { Button }                   from 'primereact/button';
import { Card }                     from 'primereact/card';
import './EstadoSolicitudes.css';
import { header }                   from './tools';

const EstadoSolicitudCard = (props) => (
     <div className=" p-grid p-justify-between margenes-card">
        {
            props.informeAR.length > 0 ? (
                props.informeAR.map(estadoSolicitud => (
                    <div className="m-card ">
                        <div className="p-col-4 ">
                            <div className="">
                            <Card className="color-card type-letterE" title="" style={{ width: '25rem', marginBottom: '2em' }} header={header(estadoSolicitud.idIAR)}>
                            <p className="p-m-0" style={{lineHeight: '1.5'}}>
                                <strong>NombreJefeIRA:</strong>                            {estadoSolicitud.NombreJefeIRA}               <br/>
                                <strong> DetalleIAR:</strong>                              {estadoSolicitud.DetalleIAR}                  <br/>
                                <strong>UnidadSolicitanteIRA:</strong>                     {estadoSolicitud.UnidadSolicitanteIRA}        <br/>
                                <strong>FacultadSolicitanteIRA:</strong>                   {estadoSolicitud.FacultadSolicitanteIRA}      <br/>
                                <strong>CarreraSolicitanteIRA:</strong>                    {estadoSolicitud.CarreraSolicitanteIRA}       <br/>
                                <strong>FormularioSolitud_idFormularioSolitud:</strong>    {estadoSolicitud.FormularioSolitud_idFormularioSolitud}          <br/>
                            </p>
                            <div className="span-justify m-span">
                                <span >
                                    <Button label="EDITAR"   icon="pi pi-pencil" className=""                           onClick={() => {props.editarFila(estadoSolicitud)}}/>
                                    <Button label="ELIMINAR" icon="pi pi-trash"  className="p-button-secondary p-ml-2"  onClick={() =>  props.eliminandoEstadoSolicitud(estadoSolicitud.idIAR)}/>
                                </span>
                            </div>
                            </Card>
                            </div>
                        </div>
                    </div>    
                ))
                
            ) : (
                <tr>
                    <td colSpan={3}>No Existen Estados Solicitudes</td>
                </tr>
            )
            
        }
  </div>
)

export default EstadoSolicitudCard