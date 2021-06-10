import React                        from 'react'
import { Button }                   from 'primereact/button';
import { Card }                     from 'primereact/card';
import './Empresas.css';
import { header }                   from './tools';

const EmpresaCard = (props) => (
     <div className=" p-grid p-justify-between margenes-card">
        {
            props.empresas.length > 0 ? (
                props.empresas.map(empresa => (
                    <div className="m-card ">
                        <div className="p-col-4 ">
                            <div className="">
                            <Card className="color-card type-letterE" title="" style={{ width: '25rem', marginBottom: '2em' }} header={header(empresa.idRegistroEmpresa)}>
                            <p className="p-m-0" style={{lineHeight: '1.5'}}>
                                <strong>nombreEmpresa:</strong>              {empresa.nombreEmpresa}    <br/>
                                <strong> rubroEmpresa:</strong>              {empresa.rubroEmpresa}     <br/>
                                <strong>telefonoEmpresa:</strong>            {empresa.telefonoEmpresa}  <br/>
                                <strong>correoEmpresa:</strong>              {empresa.correoEmpresa}    <br/>
                                <strong> NITEmpresa:</strong>                {empresa.NITEmpresa}       <br/>
                                <strong>NombrePersona:</strong>              {empresa.NombrePersona}    <br/>
                                <strong> telefonoPersona:</strong>           {empresa.telefonoPersona}  <br/>
                                <strong>ciPersona:</strong>                  {empresa.ciPersona}        <br/>
                                <strong>RegistroNuevoUsuario_idRegistroNuevoUsuario:</strong>   {empresa.RegistroNuevoUsuario_idRegistroNuevoUsuario} <br/>
                            </p>
                            <div className="span-justify m-span">
                                <span >
                                    <Button label="EDITAR"   icon="pi pi-pencil" className=""                           onClick={() => {props.editarFila(empresa)}}/>
                                    <Button label="ELIMINAR" icon="pi pi-trash"  className="p-button-secondary p-ml-2"  onClick={() =>  props.eliminandoEmpresa(empresa.idRegistroEmpresa)}/>
                                </span>
                            </div>
                            </Card>
                            </div>
                        </div>
                    </div>    
                ))
                
            ) : (
                <tr>
                    <td colSpan={3}>No Existen Empresas</td>
                </tr>
            )
            
        }
  </div>
)

export default EmpresaCard