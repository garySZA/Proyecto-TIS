import React from 'react';
import  { useState, useEffect, useRef } from 'react';
import './Solicitudes.css';

import { Menubar }                  from 'primereact/menubar';
import { Button }                   from 'primereact/button';
import { Card }                     from 'primereact/card';

import {
    getRegisterRequest,
    getRegisterRequestID,
    createRegisterRequest,
    updateRegisterRequestID,
    deleteRegisterRequestID
}   from   '../../../../services/apiRegisterRequest';


import logo                         from './img/UMSS_logo.png';

const Solicitudes = () =>{

    const start = <img alt="logo" src={logo} height="60" className="p-mr-2"></img>;

    const closeSesion = ()=>{
        return(
            <div>
                <Button label="CERRAR SESIÓN"    icon="pi  pi-fw pi-sign-out" className="p-button-rounded p-button-lg p-button-info p-button-text close-se type-letter " />
            </div>  
        )
    }

    const [solicitudes,setSolicitudes] = useState([]);
        useEffect(()=>{
            fetchSolicitudes();
        },[])
    const fetchSolicitudes = () =>{
            getRegisterRequest().then(json =>{
                if(json.error){
                    console.log("Error");
                }else{
                    setSolicitudes(json.data);
                    console.log("Solicitud enviada")
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
                    solicitudes&& solicitudes.map((solicitud,i)=>
                    <div className="m-card"> 
                        <div key = {i} >
                              <div className="p-grid p-justify-between margenes-card ">
                                  <div className="p-col-4">
                                        <Card className=" color-card type-letterE" title="" style={{ width: '25rem', marginBottom: '2em' }} 
                                        header={header(solicitud.idFormularioSolitud)} footer={footer}>
                                            <p className="p-m-0" style={{lineHeight: '1.5'}}>
                                                <strong>item:</strong>                                         {solicitud.item}                     <br/>
                                                <strong> DetalleSolitud:</strong>                              {solicitud.DetalleSolitud}           <br/>
                                                <strong>FechaDeSolicitud:</strong>                             {solicitud.FechaDeSolicitud}         <br/>
                                                <strong>responsableSolicitud:</strong>                         {solicitud.responsableSolicitud}     <br/>
                                                <strong> montoSolicitud:</strong>                              {solicitud.montoSolicitud}           <br/>
                                                <strong>estadoSolicitud:</strong>                              {solicitud.estadoSolicitud}          <br/>
                                                <strong> registroUnidadGasto_idRegistroUnidad:</strong>        {solicitud.registroUnidadGasto_idRegistroUnidad}  <br/>
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

export default Solicitudes;