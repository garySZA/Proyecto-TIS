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
                                <u><strong>Datos de la empresa</strong> <br/></u>
                                <strong>Nombre de Empresa:</strong>         {empresa.nombreEmpresa}    <br/>
                                <strong>Rubro:</strong>                     {empresa.rubroEmpresa}     <br/>
                                <strong>Telefono:</strong>                  {empresa.telefonoEmpresa}  <br/>
                                <strong>Correo:</strong>                    {empresa.correoEmpresa}    <br/>
                                <strong>NIT:</strong>                       {empresa.NITEmpresa}       <br/>
                                <u><strong>Datos persona encargada</strong> <br/></u>
                                <strong>Nombre:</strong>                    {empresa.NombrePersona}    <br/>
                                <strong>Telefono:</strong>                  {empresa.telefonoPersona}  <br/>
                                <strong>CI:</strong>                        {empresa.ciPersona}        <br/>
                                <strong>idUsuario:</strong>                 {empresa.RegistroNuevoUsuario_idRegistroNuevoUsuario} <br/>
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