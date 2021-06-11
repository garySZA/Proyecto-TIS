import React                        from 'react'
import { Button }                   from 'primereact/button';
import { Card }                     from 'primereact/card';
import './Usuarios.css';
import { header }                   from './tools';

const UsuarioCard = (props) => (
     <div className=" p-grid p-justify-between margenes-card">
        {
            props.usuarios.length > 0 ? (
                props.usuarios.map(usuario => (
                    <div className="m-card ">
                        <div className="p-col-4 ">
                            <div className="">
                            <Card className="color-card type-letterE" title="" style={{ width: '25rem', marginBottom: '2em' }} header={header(usuario.idRegistroNuevoUsuario)}>
                            <p className="p-m-0" style={{lineHeight: '1.5'}}>
                                <strong>Rol:</strong>                   {usuario.RolR}              <br/>
                                <strong>Nombre(s):</strong>             {usuario.NombreUsuario}     <br/>
                                <strong>Apellido(s):</strong>           {usuario.ApellidoUsuario}   <br/>
                                <strong>Fecha de Nacimiento:</strong>   {usuario.FechaDeNacimiento} <br/>
                                <strong>contraseña:</strong>            {usuario.contraseñaUsuario} <br/>
                                <strong>Sexo:</strong>                  {usuario.SexoUsuario}       <br/>
                                <strong>Correo:</strong>                {usuario.CorreoC}           <br/>
                                <strong>Ciudad:</strong>                {usuario.CiudadDireccion}   <br/>
                                <strong>Pais:</strong>                  {usuario.PaisDireccion}     <br/>
                                <strong>Calle:</strong>                 {usuario.CalleDireccion}    <br/>
                                <strong>Telefono:</strong>              {usuario.TelefonoT}         <br/>
                            </p>
                            <div className="span-justify m-span">
                                <span >
                                    <Button label="EDITAR"   icon="pi pi-pencil" className=""                           onClick={() => {props.editarFila(usuario)}}/>
                                    <Button label="ELIMINAR" icon="pi pi-trash"  className="p-button-secondary p-ml-2"  onClick={() =>  props.eliminandoUsuario(usuario.idRegistroNuevoUsuario)}/>
                                </span>
                            </div>
                            </Card>
                            </div>
                        </div>
                    </div>    
                ))
                
            ) : (
                <tr>
                    <td colSpan={3}>No Existen Usuarios</td>
                </tr>
            )
            
        }
  </div>
)

export default UsuarioCard