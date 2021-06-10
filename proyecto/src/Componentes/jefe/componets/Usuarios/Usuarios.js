import React from 'react';
import  { useState, useEffect, useRef } from 'react';
import './Usuarios.css';

import { Menubar }                      from 'primereact/menubar';
import { Button }                       from 'primereact/button';
import { Card }                         from 'primereact/card';

import UsuarioCard                      from './UsuarioCard';
import AgregarUsuarioCard               from './AgregarUsuarioCard';
import EditarYo                         from './EditarYo';

import { useHistory }                   from 'react-router-dom';

import { useParams }                    from 'react-router';


import {getUsers,deleteUserID}          from   '../../../../services/apiUser';

import logo                             from './img/UMSS_logo.png';

const Usuarios = () =>{

    const start = <img alt="logo" src={logo} height="60" className="p-mr-2"></img>;
    const history                    = useHistory();
    const {id} =  useParams();
    const [idDB,setIdDB] = useState(id);
    

    const closeSesion = ()=>{
        return(
            <div>
                <Button label="CERRAR SESIÓN"    icon="pi  pi-fw pi-sign-out"  className="p-button-rounded p-button-lg p-button-info p-button-text close-se type-letter " />
            </div>  
        )
    }

    const [usuarios,setUsuarios]     = useState([]);
    // Editar usuario
    const [editando, setEditando] = useState(false)

    useEffect(()=>{
        fetchUsuarios();

    },[])

    const fetchUsuarios = () =>{
        getUsers().then(json =>{
            if(json.error){
                console.log("Error");
            }else{
                setUsuarios(json.data);
                console.log("usuarios insertados")
            }
        })
    }


  const agregarUsuario = (usuario) => {
    console.log(usuario);
    setUsuarios([...usuarios,usuario]);
    //createUser(usuario);
  }

  // Eliminar usuario
  const eliminandoUsuario = (id) => {
    setUsuarios(usuarios.filter(usuario => usuario.idRegistroNuevoUsuario !== id))
    deleteUserID(id);
    console.log(`El ID es ${id}`);
    console.log("Eliminando");
  }



    const inicializarFormularioEstados = 
    { 
        idRegistroNuevoUsuario: 0, 
        RolR:                   '',
        NombreUsuario:          '',
        ApellidoUsuario:        '',
        FechaDeNacimiento:      '',
        contraseñaUsuario:      '',
        SexoUsuario:            '',
        CorreoC:                '',
        CiudadDireccion:        '',
        PaisDireccion:          '',
        CalleDireccion:         '',
        TelefonoT:              ''
    }

    const [actualUsario, setActualUsuario] = useState(inicializarFormularioEstados);

    const editarFila = (usuario) => {
      setEditando(true) 
      setActualUsuario(
        { 
          idRegistroNuevoUsuario: usuario.idRegistroNuevoUsuario, 
          RolR:                   usuario.RolR,
          NombreUsuario:          usuario.NombreUsuario,
          ApellidoUsuario:        usuario.ApellidoUsuario,
          FechaDeNacimiento:      usuario.FechaDeNacimiento,
          contraseñaUsuario:      usuario.contraseñaUsuario,
          SexoUsuario:            usuario.SexoUsuario,
          CorreoC:                usuario.CorreoC,
          CiudadDireccion:        usuario.CiudadDireccion,
          PaisDireccion:          usuario.PaisDireccion,
          CalleDireccion:         usuario.CalleDireccion,
          TelefonoT:              usuario.TelefonoT 
        })
    }

    const actualizarUsuario = (id, actualizarUsuario) => {
      setEditando(false);
      setUsuarios(usuarios.map(usuario => (usuario.idRegistroNuevoUsuario === id ? actualizarUsuario : usuario)));
    }
    
       
    return(
        <div>
            <div className="p-grid ">
                <div className="p-col-12 rowPanel">
                    <Menubar className="panelMenu"  start={start}  end={closeSesion}/>
                </div>
                {
                    editando?(
                        <div>
                            <EditarYo setEditando={setEditando} actualUsario={actualUsario} actualizarUsuario={actualizarUsuario}/>
                        </div>
                    ):(
                        <div className="p-grid m-botton-add">
                            <div className="p-col-12">
                                <AgregarUsuarioCard agregarUsuario={agregarUsuario} />
                            </div>
                        </div>
                    )
                }
                <UsuarioCard usuarios={usuarios} eliminandoUsuario={eliminandoUsuario} editarFila={editarFila} /> 

            </div>
        </div>
    )
}

export default Usuarios;