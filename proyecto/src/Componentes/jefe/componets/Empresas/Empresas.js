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
                                                    <strong>nombreEmpresa:</strong>              {empresa.nombreEmpresa}   
                                                </p>
                                                <p className="p-m-0" style={{lineHeight: '1.5'}}>
                                                    <strong> rubroEmpresa:</strong>              {empresa.rubroEmpresa}
                                                </p>
                                                <p className="p-m-0" style={{lineHeight: '1.5'}}>
                                                    <strong>telefonoEmpresa:</strong>            {empresa.telefonoEmpresa}
                                                </p>
                                                <p className="p-m-0" style={{lineHeight: '1.5'}}>
                                                    <strong>correoEmpresa:</strong>              {empresa.correoEmpresa}
                                                </p>
                                                <p className="p-m-0" style={{lineHeight: '1.5'}}>
                                                    <strong> NITEmpresa:</strong>                {empresa.NITEmpresa}
                                                </p>
                                                <p className="p-m-0" style={{lineHeight: '1.5'}}>
                                                    <strong>NombrePersona:</strong>              {empresa.NombrePersona}
                                                </p>
                                                <p className="p-m-0" style={{lineHeight: '1.5'}}>
                                                    <strong> telefonoPersona:</strong>           {empresa.telefonoPersona}
                                                </p>
                                                <p className="p-m-0" style={{lineHeight: '1.5'}}>
                                                    <strong>ciPersona:</strong>                  {empresa.ciPersona}
                                                </p>
                                                <p className="p-m-0" style={{lineHeight: '1.5'}}>
                                                    <strong>RegistroNuevoUsuario_idRegistroNuevoUsuario:</strong>   {empresa.RegistroNuevoUsuario_idRegistroNuevoUsuario}
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