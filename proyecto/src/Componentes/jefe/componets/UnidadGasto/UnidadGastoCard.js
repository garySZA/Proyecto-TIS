import React                        from 'react'
import { Button }                   from 'primereact/button';
import { Card }                     from 'primereact/card';
import './UnidadGasto.css';
import { header }                   from './tools';

const UnidadGastoCard = (props) => (
     <div className=" p-grid p-justify-between margenes-card">
        {
            props.unidadGastos.length > 0 ? (
                props.unidadGastos.map(unidadGasto => (
                    <div className="m-card ">
                        <div className="p-col-4 ">
                            <div className="">
                            <Card className="color-card type-letterE" title="" style={{ width: '25rem', marginBottom: '2em' }} header={header(unidadGasto.idRegistroUnidad)}>
                                <p className="p-m-0" style={{lineHeight: '1.5'}}>
                                    <strong>nombreFacultad:</strong>                                {unidadGasto.nombreFacultad}    <br/>
                                    <strong>nombreCarrera:</strong>                                 {unidadGasto.nombreCarrera}     <br/>
                                    <strong>nombreUnidad:</strong>                                  {unidadGasto.nombreUnidad}      <br/>
                                    <strong>presupuesto:</strong>                                   {unidadGasto.presupuesto}       <br/>
                                    <strong>jefeUnidad:</strong>                                    {unidadGasto.jefeUnidad}        <br/>
                                    <strong>secretariaUnidad:</strong>                              {unidadGasto.secretariaUnidad}  <br/>
                                    <strong>telefonoUnidad:</strong>                                {unidadGasto.telefonoUnidad}    <br/>
                                    <strong>RegistroNuevoUsuario_idRegistroNuevoUsuario:</strong>   {unidadGasto.RegistroNuevoUsuario_idRegistroNuevoUsuario}   <br/>
                                </p>
                                <div className="span-justify m-span">
                                    <span >
                                        <Button label="EDITAR"   icon="pi pi-pencil" className=""                           onClick={() => {props.editarFila(unidadGasto)}}/>
                                        <Button label="ELIMINAR" icon="pi pi-trash"  className="p-button-secondary p-ml-2"  onClick={() =>  props.eliminandoUnidadGasto(unidadGasto.idRegistroUnidad)}/>
                                    </span>
                                </div>
                            </Card>
                            </div>
                        </div>
                    </div>    
                ))
                
            ) : (
                <tr>
                    <td colSpan={3}>No Existen Unidad de gasto</td>
                </tr>
            )
            
        }
  </div>
)

export default UnidadGastoCard