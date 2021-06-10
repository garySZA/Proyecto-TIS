import React from 'react';
import  { useState, useEffect, useRef } from 'react';
import './Empresas.css';

import { Menubar }                          from 'primereact/menubar';
import { Button }                           from 'primereact/button';
import { Card }                             from 'primereact/card';
        
        
import EmpresaCard                          from './EmpresaCard';
import AgregarEmpresaCard                   from './AgregarEmpresaCard';
import EditarYo                             from './EditarYo';

import { useHistory }                       from 'react-router-dom';

import { useParams }                        from 'react-router';


import {getAddBusiness,deleteAddBusinessID}  from   '../../../../services/apiAddBusiness';


import logo                         from './img/UMSS_logo.png';

const Empresas = () =>{

    const start = <img alt="logo" src={logo} height="60" className="p-mr-2"></img>;
    const history                    = useHistory();
    const {id}                       = useParams();
    const [idDB,setIdDB]             = useState(id);
    

    const closeSesion = ()=>{
        return(
            <div>
                <Button label="CERRAR SESIÓN"    icon="pi  pi-fw pi-sign-out"  className="p-button-rounded p-button-lg p-button-info p-button-text close-se type-letter " />
            </div>  
        )
    }

    const [editando, setEditando] = useState(false);
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
    
    const agregarEmpresa = (empresa) => {
        console.log(empresa);
        setEmpresas([...empresas,empresa]);
      }
    
    const eliminandoEmpresa = (id) => {
      setEmpresas(empresas.filter(empresa => empresa.idRegistroEmpresa !== id))
      deleteAddBusinessID(id);
      console.log(`El ID es ${id}`);
      console.log("Eliminando");
    }
    
    
    
    const inicializarFormularioEstados = 
    { 
        idRegistroEmpresa:                           0, 
        nombreEmpresa:                              '',
        rubroEmpresa:                               '',
        telefonoEmpresa:                            '',
        correoEmpresa:                              '',
        NITEmpresa:                                 '',
        NombrePersona:                              '',
        telefonoPersona:                            '',
        ciPersona:                                  '',
        RegistroNuevoUsuario_idRegistroNuevoUsuario: 0,
    }

    const [actualEmpresa, setActualEmpresa] = useState(inicializarFormularioEstados);

    const editarFila = (empresa) => {
      setEditando(true) 
      setActualEmpresa(
        { 
          idRegistroEmpresa:                           empresa.idRegistroEmpresa, 
          nombreEmpresa:                               empresa.nombreEmpresa,
          rubroEmpresa:                                empresa.rubroEmpresa,
          telefonoEmpresa:                             empresa.telefonoEmpresa,
          correoEmpresa:                               empresa.correoEmpresa,
          NITEmpresa:                                  empresa.NITEmpresa,
          NombrePersona:                               empresa.NombrePersona,
          telefonoPersona:                             empresa.telefonoPersona,
          ciPersona:                                   empresa.ciPersona,
          RegistroNuevoUsuario_idRegistroNuevoUsuario: empresa.RegistroNuevoUsuario_idRegistroNuevoUsuario,
        })
    }

    const actualizarEmpresa = (id, actualizarEmpresa) => {
      setEditando(false);
      setEmpresas(empresas.map(empresa => (empresa.idRegistroEmpresa === id ? actualizarEmpresa : empresa)));
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
                            <EditarYo setEditando={setEditando} actualEmpresa={actualEmpresa} actualizarEmpresa={actualizarEmpresa}/>
                        </div>
                    ):(
                        <div className="p-grid m-botton-add">
                            <div className="p-col-12">
                                <AgregarEmpresaCard agregarEmpresa={agregarEmpresa} />
                            </div>
                        </div>
                    )
                }
                <EmpresaCard empresas={empresas} eliminandoEmpresa={eliminandoEmpresa} editarFila={editarFila} /> 
            </div>   
        </div>
        
    )
}

export default Empresas;