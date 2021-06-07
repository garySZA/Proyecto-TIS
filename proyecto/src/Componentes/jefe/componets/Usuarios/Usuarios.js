import React from 'react';
import  { useState, useEffect, useRef } from 'react';
import './Usuarios.css';

import { Menubar }                  from 'primereact/menubar';
import { Button }                   from 'primereact/button';
import { Card }                     from 'primereact/card';


import {
    getUsers,
    getUserID,
    createUser,
    updateUserID,
    deleteUserID
}   from   '../../../../services/apiUser';

import logo                         from './img/UMSS_logo.png';

const Usuarios = () =>{

    const start = <img alt="logo" src={logo} height="60" className="p-mr-2"></img>;

    const closeSesion = ()=>{
        return(
            <div>
                <Button label="CERRAR SESIÓN"    icon="pi  pi-fw pi-sign-out" className="p-button-rounded p-button-lg p-button-info p-button-text close-se type-letter " />
            </div>  
        )
    }

    const [usuarios,setUsuarios] = useState([]);

    useEffect(()=>{
        fetchUsuarios();

    },[])
   
    const fetchUsuarios = () =>{
        getUsers().then(json =>{
            if(json.error){
                console.log("Error");
            }else{
                setUsuarios(json.data);
                console.log("usuarios insertados")
            }
        })
    }
    
    const footer = (
        <div className="span-justify">
            <span >
                <Button label="EDITAR"   icon="pi pi-pencil" className="" />
                <Button label="ELIMINAR" icon="pi pi-trash" className="p-button-secondary p-ml-2" />
            </span>
        </div>
    );
    //Headers
    const header = (id)=>{
        return(
            <div className="span-justify type-bold">
                {`ID:${id}`}
            </div>
        )
    }

    return(
        <div>
            <div className="p-grid p-justify-center ">
                <div className="p-col-12 rowPanel">
                    <Menubar className="panelMenu"  start={start}  end={closeSesion}/>
                </div>
                {
                    usuarios&& usuarios.map((usuario,i)=>
                    <div className="m-card"> 
                        <div key = {i} >
                              <div className="p-grid p-justify-between margenes-card ">
                                  <div className="p-col-4">
                                        <Card className=" color-card type-letterE" title="" style={{ width: '25rem', marginBottom: '2em' }} header={header(usuario.idRegistroNuevoUsuario)} footer={footer}>
                                            <p className="p-m-0" style={{lineHeight: '1.5'}}>
                                                <strong>RolR:</strong>                  {usuario.RolR}              <br/>
                                                <strong>NombreUsuario:</strong>         {usuario.NombreUsuario}     <br/>
                                                <strong>ApellidoUsuario:</strong>       {usuario.ApellidoUsuario}   <br/>
                                                <strong>FechaDeNacimiento:</strong>     {usuario.FechaDeNacimiento} <br/>
                                                <strong>contraseñaUsuario:</strong>     {usuario.contraseñaUsuario} <br/>
                                                <strong>SexoUsuario:</strong>           {usuario.SexoUsuario}       <br/>
                                                <strong> CorreoC:</strong>              {usuario.CorreoC}           <br/>
                                                <strong>CiudadDireccion:</strong>       {usuario.CiudadDireccion}   <br/>
                                                <strong>PaisDireccion:</strong>         {usuario.PaisDireccion}     <br/>
                                                <strong>CalleDireccion:</strong>        {usuario.CalleDireccion}    <br/>
                                                <strong>TelefonoT:</strong>             {usuario.TelefonoT}         <br/>
                                            </p>
                                        </Card>
                                    </div>
                                </div> 
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default Usuarios;