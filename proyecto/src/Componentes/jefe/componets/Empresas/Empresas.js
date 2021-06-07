import React from 'react';
import  { useState, useEffect, useRef } from 'react';
import './Empresas.css';

import { Menubar }                  from 'primereact/menubar';
import { Button }                   from 'primereact/button';
import { Card }                     from 'primereact/card';


import {
    getAddBusiness,
    getAddBusinessID,
    createAddBusiness,
    updateAddBusinessID,
    deleteAddBusinessID
}   from   '../../../../services/apiAddBusiness';


import logo                         from './img/UMSS_logo.png';

const Empresas = () =>{

    const start = <img alt="logo" src={logo} height="60" className="p-mr-2"></img>;

    const closeSesion = ()=>{
        return(
            <div>
                <Button label="CERRAR SESIÓN"    icon="pi  pi-fw pi-sign-out" className="p-button-rounded p-button-lg p-button-info p-button-text close-se type-letter " />
            </div>  
        )
    }
    const [empresas,setEmpresas] = useState([]);

    useEffect(()=>{
        fetchEmpresa();

    },[])
   
    const fetchEmpresa = () =>{
        getAddBusiness().then(json =>{
            if(json.error){
                console.log("Error");
            }else{
                setEmpresas(json.data);
                console.log("Empresas insertadas")
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
                        empresas&& empresas.map((empresa,i)=>
                        <div className="m-card"> 
                            <div key = {i} >
                                  <div className="p-grid p-justify-between margenes-card ">
                                      <div className="p-col-4">
                                            <Card className=" color-card type-letterE" title="" style={{ width: '25rem', marginBottom: '2em' }} header={header(empresa.idRegistroEmpresa)} footer={footer}>
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

export default Empresas;