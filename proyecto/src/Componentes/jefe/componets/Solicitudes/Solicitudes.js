import React from 'react';
import  { useState, useEffect, useRef } from 'react';
import './Solicitudes.css';

import { Menubar }                  from 'primereact/menubar';
import { Button }                   from 'primereact/button';
import { Card }                     from 'primereact/card';

import SolicitudCard                from './SolicitudCard';
import AgregarSolicitudCard         from './AgregarSolicitudCard';
import EditarYo                     from './EditarYo';

import { useHistory }               from 'react-router-dom';

import { useParams }                from 'react-router';


import {getRegisterRequest,deleteRegisterRequestID}   from   '../../../../services/apiRegisterRequest';


import logo                         from './img/UMSS_logo.png';

const Solicitudes = () =>{

    const start = <img alt="logo" src={logo} height="60" className="p-mr-2"></img>;

    const history                    = useHistory();

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

    const [editando, setEditando] = useState(false);
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


    const agregarSolicitud = (solicitud) => {
        console.log(solicitud);
        setSolicitudes([...solicitudes,solicitud]);
      }
    
    const eliminandoSolicitud = (id) => {
      setSolicitudes(solicitudes.filter(solicitud => solicitud.idFormularioSolitud !== id))
      deleteRegisterRequestID(id);
      console.log(`El ID es ${id}`);
      console.log("Eliminando");
    }
    
    
    
    const inicializarFormularioEstados = 
    { 
        idFormularioSolitud:                    0, 
        item:                                  '',
        DetalleSolitud:                        '',
        FechaDeSolicitud:                      '',
        responsableSolicitud:                  '',
        montoSolicitud:                         0,
        estadoSolicitud:                       '',
        registroUnidadGasto_idRegistroUnidad:   0,

    }

    const [actualSolicitud, setActualSolicitud] = useState(inicializarFormularioEstados);

    const editarFila = (solicitud) => {
      setEditando(true) 
      setActualSolicitud(
        { 
          idFormularioSolitud:                  solicitud.idFormularioSolitud, 
          item:                                 solicitud.item,
          DetalleSolitud:                       solicitud.DetalleSolitud,
          FechaDeSolicitud:                     solicitud.FechaDeSolicitud,
          responsableSolicitud:                 solicitud.responsableSolicitud,
          montoSolicitud:                       solicitud.montoSolicitud,
          estadoSolicitud:                      solicitud.estadoSolicitud,
          registroUnidadGasto_idRegistroUnidad: solicitud.registroUnidadGasto_idRegistroUnidad
        })
    }

    const actualizarSolicitud = (id, actualizarSolicitud) => {
      setEditando(false);
      setSolicitudes(solicitudes.map(solicitud => (solicitud.idFormularioSolitud === id ? actualizarSolicitud : solicitud)));
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
                            <EditarYo setEditando={setEditando} actualSolicitud={actualSolicitud} actualizarSolicitud={actualizarSolicitud}/>
                        </div>
                    ):(
                        <div className="p-grid m-botton-add">
                            <div className="p-col-12">
                                <AgregarSolicitudCard agregarSolicitud={agregarSolicitud} />
                            </div>
                        </div>
                    )
                }
                <SolicitudCard solicitudes={solicitudes} eliminandoSolicitud={eliminandoSolicitud} editarFila={editarFila} /> 
            </div>
        </div>
    )
}

export default Solicitudes;