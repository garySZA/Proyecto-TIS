import React from 'react';
import  { useState, useEffect, useRef } from 'react';
import './EstadoSolicitudes.css';

import { Menubar }                  from 'primereact/menubar';
import { Button }                   from 'primereact/button';
import { Card }                     from 'primereact/card';

import {
    getInformAR,
    getInformARID,
    createInformAR,
    updateInformARID,
    deleteInformARID
}   from   '../../../../services/apiInformAR';


import logo                         from './img/UMSS_logo.png';

const Informes = () =>{

    const start = <img alt="logo" src={logo} height="60" className="p-mr-2"></img>;

    const closeSesion = ()=>{
        return(
            <div>
                <Button label="CERRAR SESIÓN"    icon="pi  pi-fw pi-sign-out" className="p-button-rounded p-button-lg p-button-info p-button-text close-se type-letter " />
            </div>  
        )
    }

    const [informeAR,setInformeAR] = useState([]);
        useEffect(()=>{
            fetchInformerAR();
        },[])
    const fetchInformerAR = () =>{
            getInformAR().then(json =>{
                if(json.error){
                    console.log("Error");
                }else{
                    setInformeAR(json.data);
                    console.log("Informe aprovacion o rechazo enviado")
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
                    informeAR&& informeAR.map((informe,i)=>
                    <div className="m-card"> 
                        <div key = {i} >
                              <div className="p-grid p-justify-between margenes-card ">
                                  <div className="p-col-4">
                                        <Card className=" color-card type-letterE" title="" style={{ width: '25rem', marginBottom: '2em' }} 
                                        header={header(informe.idIAR)} footer={footer}>
                                            <p className="p-m-0" style={{lineHeight: '1.5'}}>
                                                <strong>NombreJefeIRA:</strong>                            {informe.NombreJefeIRA}               <br/>
                                                <strong> DetalleIAR:</strong>                              {informe.DetalleIAR}                  <br/>
                                                <strong>UnidadSolicitanteIRA:</strong>                     {informe.UnidadSolicitanteIRA}        <br/>
                                                <strong>FacultadSolicitanteIRA:</strong>                   {informe.FacultadSolicitanteIRA}      <br/>
                                                <strong> CarreraSolicitanteIRA:</strong>                   {informe.CarreraSolicitanteIRA}       <br/>
                                                <strong>FormularioSolitud_idFormularioSolitud:</strong>    {informe.FormularioSolitud_idFormularioSolitud}          <br/>
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

export default Informes;