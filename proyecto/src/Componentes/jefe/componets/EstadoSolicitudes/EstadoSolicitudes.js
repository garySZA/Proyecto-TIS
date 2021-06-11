import React from 'react';
import  { useState, useEffect, useRef } from 'react';
import './EstadoSolicitudes.css';

import { Menubar }                      from 'primereact/menubar';
import { Button }                       from 'primereact/button';
import { Card }                         from 'primereact/card';

import EstadoSolicitudCard              from './EstadoSolicitudCard';
import AgregarEstadoSolicitudCard       from './AgregarEstadoSolicitudCard';
import EditarYo                         from './EditarYo';

import { useHistory }                   from 'react-router-dom';

import { useParams }                    from 'react-router';

import {getInformAR,deleteInformARID}   from   '../../../../services/apiInformAR';

import logo                             from './img/UMSS_logo.png';




const EstadoSolicitudes = () =>{

    const start = <img alt="logo" src={logo} height="60" className="p-mr-2"></img>;

    const closeSesion = ()=>{
        return(
            <div>
                <Button label="CERRAR SESIÓN"    icon="pi  pi-fw pi-sign-out" className="p-button-rounded p-button-lg p-button-info p-button-text close-se type-letter " />
            </div>  
        )
    }



    const [informeAR,setInformeAR] = useState([]);
     // Editar usuario
    const [editando, setEditando] = useState(false);

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
    const agregarEstadoSolicitud = (estadoSolicitud) => {
        console.log(estadoSolicitud);
        setInformeAR([...informeAR,estadoSolicitud]);
    }

    const eliminandoEstadoSolicitud = (id) => {
      setInformeAR(informeAR.filter(estadoSolicitud => estadoSolicitud.idIAR !== id))
      deleteInformARID(id);
      console.log(`El ID es ${id}`);
      console.log("Eliminando");
    }



    const inicializarFormularioEstados = 
    { 
        idIAR:                                 0, 
        NombreJefeIRA:                        '',
        DetalleIAR:                           '',
        UnidadSolicitanteIRA:                 '',
        FacultadSolicitanteIRA:               '',
        CarreraSolicitanteIRA:                '',
        FormularioSolitud_idFormularioSolitud: 0,
    }

    const [actualEstadoSolicitud, setActualEstadoSolicitud] = useState(inicializarFormularioEstados);

    const editarFila = (estadoSolicitud) => {
      setEditando(true) 
      setActualEstadoSolicitud(
      { 
          idIAR:                                 estadoSolicitud.idIAR, 
          NombreJefeIRA:                         estadoSolicitud.NombreJefeIRA,
          DetalleIAR:                            estadoSolicitud.DetalleIAR,
          UnidadSolicitanteIRA:                  estadoSolicitud.UnidadSolicitanteIRA,
          FacultadSolicitanteIRA:                estadoSolicitud.FacultadSolicitanteIRA,
          CarreraSolicitanteIRA:                 estadoSolicitud.CarreraSolicitanteIRA,
          FormularioSolitud_idFormularioSolitud: estadoSolicitud.FormularioSolitud_idFormularioSolitud  
      })
    }

    const actualizarEstadoSolicitud = (id, actualizarEstadoSolicitud) => {
      setEditando(false);
      setInformeAR(informeAR.map(estadoSolicitud => (estadoSolicitud.idIAR === id ? actualizarEstadoSolicitud : estadoSolicitud)));
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
                            <EditarYo setEditando={setEditando} actualEstadoSolicitud={actualEstadoSolicitud} actualizarEstadoSolicitud={actualizarEstadoSolicitud}/>
                        </div>
                    ):(
                        <div className="p-grid m-botton-add">
                            <div className="p-col-12">
                                <AgregarEstadoSolicitudCard agregarEstadoSolicitud={agregarEstadoSolicitud} />
                            </div>
                        </div>
                    )
                }
                <EstadoSolicitudCard informeAR={informeAR} eliminandoEstadoSolicitud={eliminandoEstadoSolicitud} editarFila={editarFila} /> 
            </div>
        </div>
    )
}

export default EstadoSolicitudes;