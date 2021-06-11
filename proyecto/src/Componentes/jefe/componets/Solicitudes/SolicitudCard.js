import React                        from 'react'
import { Button }                   from 'primereact/button';
import { Card }                     from 'primereact/card';
import './Solicitudes.css';
import { header }                   from './tools';

const SolicitudCard = (props) => (
     <div className=" p-grid p-justify-between margenes-card">
        {
            props.solicitudes.length > 0 ? (
                props.solicitudes.map(solicitud => (
                    <div className="m-card ">
                        <div className="p-col-4 ">
                            <div className="">
                            <Card className="color-card type-letterE" title="" style={{ width: '25rem', marginBottom: '2em' }} header={header(solicitud.idFormularioSolitud)}>
                                <p className="p-m-0" style={{lineHeight: '1.5'}}>
                                        <strong>Item:</strong>                               {solicitud.item}                     <br/>
                                        <strong>Detalle:</strong>                            {solicitud.DetalleSolitud}           <br/>
                                        <strong>Fecha de Solicitud:</strong>                 {solicitud.FechaDeSolicitud}         <br/>
                                        <strong>responsable de Solicitud:</strong>           {solicitud.responsableSolicitud}     <br/>
                                        <strong>Monto:</strong>                              {solicitud.montoSolicitud}           <br/>
                                        <strong>Estado:</strong>                             {solicitud.estadoSolicitud}          <br/>
                                        <strong>idRegistroUnidad:</strong>                   {solicitud.registroUnidadGasto_idRegistroUnidad}  <br/>
                                </p>
                                <div className="span-justify m-span">
                                    <span >
                                        <Button label="EDITAR"   icon="pi pi-pencil" className=""                           onClick={() => {props.editarFila(solicitud)}}/>
                                        <Button label="ELIMINAR" icon="pi pi-trash"  className="p-button-secondary p-ml-2"  onClick={() =>  props.eliminandoSolicitud(solicitud.idFormularioSolitud)}/>
                                    </span>
                                </div>
                            </Card>
                            </div>
                        </div>
                    </div>    
                ))
                
            ) : (
                <tr>
                    <td colSpan={3}>No Existen Solicitudes</td>
                </tr>
            )
            
        }
  </div>
)

export default SolicitudCard