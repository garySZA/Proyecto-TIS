import React from 'react';
import  { useState, useEffect, useRef } from 'react';
import './RespuestasEmpresa.css';

import { Menubar }                  from 'primereact/menubar';
import { Button }                   from 'primereact/button';
import { Card }                     from 'primereact/card';

import RespuestaEmpresaCard          from './RespuestaEmpresaCard';
import AgregarRespuestasEmpresaCard  from './AgregarRespuetasEmpresaCard';
import EditarYo                      from './EditarYo';

import { useHistory }                       from 'react-router-dom';

import { useParams }                        from 'react-router';


import {getAnswerBusiness,deleteAnswerBusinessID}   from   '../../../../services/apiAnswerBusiness';


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
    const [editando, setEditando] = useState(false);

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

    const agregarRespuestaEmpresa = (respuestaEmpresa) => {
        console.log(respuestaEmpresa);
        setRespuestaEmpresas([...respuestaEmpresas,respuestaEmpresa]);
    }
    
    const eliminandoRespuestaEmpresa = (id) => {
      setRespuestaEmpresas(respuestaEmpresas.filter(respuestaEmpresa => respuestaEmpresa.idrespuestasEmpresas !== id))
      deleteAnswerBusinessID(id);
      console.log(`El ID es ${id}`);
      console.log("Eliminando");
    }
    
    
    
    const inicializarFormularioEstados = 
    { 
        idrespuestasEmpresas:                  0, 
        NroRE:                                 0,
        CantidadRE:                            0,
        UnidadRE:                              0,
        DetalleRE:                            '',
        UnitarioRE:                            0,
        TotalRE:                               0,
        FormularioSolitud_idFormularioSolitud: 0,
    }

    const [actualRespuestaEmpresa, setActualRespuestaEmpresa] = useState(inicializarFormularioEstados);

    const editarFila = (respuestaEmpresa) => {
      setEditando(true) 
      setActualRespuestaEmpresa(
        { 
          idrespuestasEmpresas:                  respuestaEmpresa.idrespuestasEmpresas, 
          NroRE:                                 respuestaEmpresa.NroRE,
          CantidadRE:                            respuestaEmpresa.CantidadRE,
          UnidadRE:                              respuestaEmpresa.UnidadRE,
          DetalleRE:                             respuestaEmpresa.DetalleRE,
          UnitarioRE:                            respuestaEmpresa.UnitarioRE,
          TotalRE:                               respuestaEmpresa.TotalRE,
          FormularioSolitud_idFormularioSolitud: respuestaEmpresa.FormularioSolitud_idFormularioSolitud,

        })
    }

    const actualizarRespuestaEmpresa = (id, actualizarRespuestaEmpresa) => {
      setEditando(false);
      setRespuestaEmpresas(respuestaEmpresas.map(respuestaEmpresa => (respuestaEmpresa.idrespuestasEmpresas === id ? actualizarRespuestaEmpresa : respuestaEmpresa)));
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
                            <EditarYo setEditando={setEditando} actualRespuestaEmpresa={actualRespuestaEmpresa} actualizarRespuestaEmpresa={actualizarRespuestaEmpresa}/>
                        </div>
                    ):(
                        <div className="p-grid m-botton-add">
                            <div className="p-col-12">
                                <AgregarRespuestasEmpresaCard agregarRespuestaEmpresa={agregarRespuestaEmpresa} />
                            </div>
                        </div>
                    )
                }
                <RespuestaEmpresaCard respuestaEmpresas={respuestaEmpresas} eliminandoRespuestaEmpresa={eliminandoRespuestaEmpresa} editarFila={editarFila} /> 
            </div>
        </div>
    )
}

export default RespuestasEmpresa;