import React from 'react';
import  { useState, useEffect, useRef } from 'react';
import './RespuestasEmpresa.css';

import { Menubar }                  from 'primereact/menubar';
import { Button }                   from 'primereact/button';
import { Card }                     from 'primereact/card';

import {
    getAnswerBusiness,
    getAnswerBusinessID,
    createAnswerBusiness,
    updateAnswerBusinessID,
    deleteAnswerBusinessID
}   from   '../../../../services/apiAnswerBusiness';


import logo                         from './img/UMSS_logo.png';

const RespuestasEmpresa = () =>{


    const start = <img alt="logo" src={logo} height="60" className="p-mr-2"></img>;

    const closeSesion = ()=>{
        return(
            <div>
                <Button label="CERRAR SESIÓN"    icon="pi  pi-fw pi-sign-out" className="p-button-rounded p-button-lg p-button-info p-button-text close-se type-letter " />
            </div>  
        )
    }

    const [respuestaEmpresas,setRespuestaEmpresas] = useState([]);
        useEffect(()=>{
            fetchRespuestaEmpresas();
        },[])
    const fetchRespuestaEmpresas = () =>{
            getAnswerBusiness().then(json =>{
                if(json.error){
                    console.log("Error");
                }else{
                    setRespuestaEmpresas(json.data);
                    console.log("respuesta de empresa enviado")
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
                    respuestaEmpresas&& respuestaEmpresas.map((respuestaE,i)=>
                    <div className="m-card"> 
                        <div key = {i} >
                              <div className="p-grid p-justify-between margenes-card ">
                                  <div className="p-col-4">
                                        <Card className=" color-card type-letterE" title="" style={{ width: '25rem', marginBottom: '2em' }} 
                                        header={header(respuestaE.idrespuestasEmpresas)} footer={footer}>
                                            <p className="p-m-0" style={{lineHeight: '1.5'}}>
                                                <strong>NroRE:</strong>                                    {respuestaE.NroRE}               <br/>
                                                <strong> CantidadRE:</strong>                              {respuestaE.CantidadRE}          <br/>
                                                <strong>UnidadRE:</strong>                                 {respuestaE.UnidadRE}            <br/>
                                                <strong>DetalleRE:</strong>                                {respuestaE.DetalleRE}           <br/>
                                                <strong> UnitarioRE:</strong>                              {respuestaE.UnitarioRE}          <br/>
                                                <strong>TotalRE:</strong>                                  {respuestaE.TotalRE}             <br/>
                                                <strong>FormularioSolitud_idFormularioSolitud:</strong>    {respuestaE.FormularioSolitud_idFormularioSolitud}        <br/>
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

export default RespuestasEmpresa;