import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useParams }                from 'react-router';
import { useHistory }               from 'react-router-dom';
import './Jefe.css';

import { Menubar }                  from 'primereact/menubar';
import { Button }                   from 'primereact/button';
import { Card }                     from 'primereact/card';

import logo                         from './img/UMSS_logo.png';

const Jefe = () =>{

    const {id} =  useParams();
    const [idDB,setIdDB] = useState(id);
    const history        = useHistory();

    const start = <img alt="logo" src={logo} height="60" className="p-mr-2"></img>;

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
    const urlEmpresas=()=>{
        history.push(`/Jefe/${idDB}/Empresas`);
    }
    const urlSolicitudes=()=>{
        history.push(`/Jefe/${idDB}/Solicitud`);
    }
    const urlUsuario=()=>{
        history.push(`/Jefe/${idDB}/Usuario`);
    }
    const urlUnidadGasto=()=>{
        history.push(`/Jefe/${idDB}/UnidadGasto`);
    }
    const urlEstadoSolicitud=()=>{
        history.push(`/Jefe/${idDB}/EstadoSolicitudes`);
    }
    const urlRespuestaEmpresa=()=>{
        history.push(`/Jefe/${idDB}/RespuestasEmpresas`);
    }


    const footerEmpresas = (
        <span>
            <Button label="INGRESAR" icon="pi pi-check" onClick={urlEmpresas}/>
        </span>
    );
    const footerSolicitudes = (
        <span>
            <Button label="INGRESAR" icon="pi pi-check" onClick={urlSolicitudes}/>
        </span>
    );
    const footerUsuario = (
        <span>
            <Button label="INGRESAR" icon="pi pi-check" onClick={urlUsuario}/>
        </span>
    );
    const footerUnidadGasto = (
        <span>
            <Button label="INGRESAR" icon="pi pi-check" onClick={urlUnidadGasto}/>
        </span>
    );
    const footerEstadoSolicitud = (
        <span>
            <Button label="INGRESAR" icon="pi pi-check" onClick={urlEstadoSolicitud}/>
        </span>
    );
    const footerRespuestasEmpresa = (
        <span>
            <Button label="INGRESAR" icon="pi pi-check" onClick={urlRespuestaEmpresa}/>
        </span>
    );


    return(
        <div>
            <div className="p-grid p-justify-center ">
                <div className="p-col-12 rowPanel">
                    <Menubar className="panelMenu"  start={start}  end={closeSesion}/>
                </div>
            </div>
            <div className="p-grid p-justify-center ">
                    <div className="p-col-11">
                        <div className=" margin-card">   
                            <div className="p-d-flex p-flex-column p-jc-center">
                                <div className="p-d-flex p-flex-md-row p-jc-center">
                                    <div className="p-mr-2 p-order-3">                    
                                        <Card title="EMPRESAS" className="card-menu-top color-card type-letter" footer={footerEmpresas}>
                                         <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                                        </Card>
                                    </div>

                                    <div className="p-mr-2 p-order-3">                    
                                        <Card title="SOLICITUDES" className="card-menu-top color-card type-letter" footer={footerSolicitudes}>
                                         <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                                        </Card>
                                    </div>
                                    <div className="p-mr-2 p-order-3">                    
                                        <Card title="USUARIOS" className="card-menu-top color-card type-letter" footer={footerUsuario}>
                                         <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                                        </Card>
                                    </div>
                                </div>

                                <div className="p-d-flex p-flex-md-row p-jc-center">
                                    <div className="p-mr-2 p-order-3">                    
                                        <Card title="UNIDAD DE GASTO" className="card-menu-button color-card type-letter" footer={footerUnidadGasto}>
                                         <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                                        </Card>
                                    </div>

                                    <div className="p-mr-2 p-order-3">                    
                                        <Card title="ESTADO DE SOLICITUDES" className="card-menu-button color-card type-letter" footer={footerEstadoSolicitud}>
                                         <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                                        </Card>
                                    </div>
                                    <div className="p-mr-2 p-order-3">                    
                                        <Card title="RESPUESTAS EMPRESAS" className="card-menu-button color-card type-letter" footer={footerRespuestasEmpresa}>
                                         <p className="p-m-0" style={{lineHeight: '1.5'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                                        </Card>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
            </div>

            <div className="p-grid p-justify-center ">
                <div className="p-col-11 margin-card">
                    <div className="card color-card">

                    </div>    
                </div>    
            </div>

        </div>
        
    )
}
export default Jefe;