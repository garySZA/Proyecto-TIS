import React from 'react';
import  { useState, useEffect, useRef } from 'react';
import './UnidadGasto.css';

import { Menubar }                  from 'primereact/menubar';
import { Button }                   from 'primereact/button';
import { Card }                     from 'primereact/card';


import {
    getRegisterUnitSpeding,
    getRegisterUnitSpedingID,
    createRegisterUnitSpeding,
    updateRegisterUnitSpedingID,
    deleteRegisterUnitSpedingID
}   from   '../../../../services/apiRegisterUnitSpeding';

import logo                         from './img/UMSS_logo.png';

const UnidadGasto = () =>{

    const start = <img alt="logo" src={logo} height="60" className="p-mr-2"></img>;

    const closeSesion = ()=>{
        return(
            <div>
                <Button label="CERRAR SESIÓN"    icon="pi  pi-fw pi-sign-out" className="p-button-rounded p-button-lg p-button-info p-button-text close-se type-letter " />
            </div>  
        )
    }
    const [unidadGastos,setUnidadGastos] = useState([]);

    useEffect(()=>{
        fetchUnidadGastos();

    },[])
   
    const fetchUnidadGastos = () =>{
        getRegisterUnitSpeding().then(json =>{
            if(json.error){
                console.log("Error");
            }else{
                setUnidadGastos(json.data);
                console.log("Unidad de gastos insertados")
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
                    unidadGastos&& unidadGastos.map((unidadGasto,i)=>
                    <div className="m-card"> 
                        <div key = {i} >
                              <div className="p-grid p-justify-between margenes-card ">
                                  <div className="p-col-4">
                                        <Card className=" color-card type-letterE" title="" style={{ width: '25rem', marginBottom: '2em' }} header={header(unidadGasto.idRegistroUnidad)} footer={footer}>
                                            <p className="p-m-0" style={{lineHeight: '1.5'}}>
                                                <strong>nombreFacultad:</strong>                            {unidadGasto.nombreFacultad}    <br/>
                                                <strong>nombreCarrera:</strong>                             {unidadGasto.nombreCarrera}     <br/>
                                                <strong>nombreUnidad:</strong>                              {unidadGasto.nombreUnidad}      <br/>
                                                <strong>presupuesto:</strong>                               {unidadGasto.presupuesto}       <br/>
                                                <strong>jefeUnidad:</strong>                                {unidadGasto.jefeUnidad}        <br/>
                                                <strong>secretariaUnidad:</strong>                          {unidadGasto.secretariaUnidad}  <br/>
                                                <strong>telefonoUnidad:</strong>                           {unidadGasto.telefonoUnidad}    <br/>
                                                <strong>RegistroNuevoUsuario_idRegistroNuevoUsuario:</strong>       {unidadGasto.RegistroNuevoUsuario_idRegistroNuevoUsuario}   <br/>
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

export default UnidadGasto;