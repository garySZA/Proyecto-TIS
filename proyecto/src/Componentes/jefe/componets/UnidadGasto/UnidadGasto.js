import React from 'react';
import  { useState, useEffect, useRef } from 'react';
import './UnidadGasto.css';

import { Menubar }                  from 'primereact/menubar';
import { Button }                   from 'primereact/button';
import { Card }                     from 'primereact/card';

import UnidadGastoCard              from './UnidadGastoCard';
import AgregarUnidadGastoCard       from './AgregarUnidadGastoCard';
import EditarYo                     from './EditarYo';

import { useHistory }                       from 'react-router-dom';

import { useParams }                        from 'react-router';

import {getRegisterUnitSpeding,deleteRegisterUnitSpedingID}   from   '../../../../services/apiRegisterUnitSpeding';

import logo                         from './img/UMSS_logo.png';

const UnidadGasto = () =>{

    const start = <img alt="logo" src={logo} height="60" className="p-mr-2"></img>;

    const history        = useHistory();

    const handleHome=()=>{
        history.push("/");
    }

    const closeSesion = ()=>{
        return(
            <div>
                <Button label="CERRAR SESIÓN"    icon="pi  pi-fw pi-sign-out" className="p-button-rounded p-button-lg p-button-info p-button-text close-se type-letter " onClick={handleHome}/>
            </div>  
        )
    }

    const [unidadGastos,setUnidadGastos] = useState([]);
    const [editando, setEditando] = useState(false);

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
    
    const agregarUnidadGasto = (unidadGasto) => {
        console.log(unidadGasto);
        setUnidadGastos([...unidadGastos,unidadGasto]);
      }
    
    const eliminandoUnidadGasto = (id) => {
      setUnidadGastos(unidadGastos.filter(unidadGasto => unidadGasto.idRegistroUnidad !== id))
      deleteRegisterUnitSpedingID(id);
      console.log(`El ID es ${id}`);
      console.log("Eliminando");
    }
    
    
    
    const inicializarFormularioEstados = 
    { 
        idRegistroUnidad:                            0, 
        nombreFacultad:                             '',
        nombreCarrera:                              '',
        nombreUnidad:                               '',
        presupuesto:                                '',
        jefeUnidad:                                 '',
        secretariaUnidad:                           '',
        telefonoUnidad:                             '',
        RegistroNuevoUsuario_idRegistroNuevoUsuario: 0,
    }

    const [actualUnidadGasto, setActualUnidadGasto] = useState(inicializarFormularioEstados);

    const editarFila = (solicitud) => {
      setEditando(true) 
      setActualUnidadGasto(
        { 
          idRegistroUnidad:                            solicitud.idRegistroUnidad, 
          nombreFacultad:                              solicitud.nombreFacultad,
          nombreCarrera:                               solicitud.nombreCarrera,
          nombreUnidad:                                solicitud.nombreUnidad,
          presupuesto:                                 solicitud.presupuesto,
          jefeUnidad:                                  solicitud.jefeUnidad,
          secretariaUnidad:                            solicitud.secretariaUnidad,
          telefonoUnidad:                              solicitud.telefonoUnidad,
          RegistroNuevoUsuario_idRegistroNuevoUsuario: solicitud.RegistroNuevoUsuario_idRegistroNuevoUsuario
        })
    }

    const actualizarUnidadGasto = (id, actualizarUnidadGasto) => {
      setEditando(false);
      setUnidadGastos(unidadGastos.map(unidadGasto => (unidadGasto.idRegistroUnidad === id ? actualizarUnidadGasto : unidadGasto)));
    }

    return(
        <div>
            <div className="p-grid p-justify-center ">
                <div className="p-col-12 rowPanel">
                    <Menubar className="panelMenu"  start={start}  end={closeSesion}/>
                </div>
                {
                    editando?(
                        <div>
                            <EditarYo setEditando={setEditando} actualUnidadGasto={actualUnidadGasto} actualizarUnidadGasto={actualizarUnidadGasto}/>
                        </div>
                    ):(
                        <div className="p-grid m-botton-add">
                            <div className="p-col-12">
                                <AgregarUnidadGastoCard agregarUnidadGasto={agregarUnidadGasto} />
                            </div>
                        </div>
                    )
                }
                <UnidadGastoCard unidadGastos={unidadGastos} eliminandoUnidadGasto={eliminandoUnidadGasto} editarFila={editarFila} /> 
            </div>
        </div>
    )
}

export default UnidadGasto;