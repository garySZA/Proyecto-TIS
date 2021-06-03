import React,{useEffect,useState}   from 'react';
import './Home.css';

import { useHistory }               from 'react-router-dom';


import {items,loginRegister,start,footer} from './componets';

import { Menubar }                  from 'primereact/menubar';
import { PanelMenu }                from 'primereact/panelmenu';
import { Card } from 'primereact/card';


const Home = () =>{



    return(
        <div className="type-letter">
            <div className="p-grid">
                <div className="p-col-12 rowPanel">
                    <Menubar className="panelMenu"  start={start} end={loginRegister} />
                </div>
            </div>
            <div className="p-grid p-justify-between">
                <div className="p-col-3 margin-top">
                    <div className="card card-st">
                        <PanelMenu model={items} style={{ width: '22rem' }}/>
                    </div>
                </div>
                <div className="p-col-5 margin-top">
                    <div className="card card-st">
                        <Card className="card-title" title="BIENVENIDOS" >
                            <p className="p-m-0 card-Parrafo">
                                Esta plataforma ayuda a administra y gestionar los procesos de cotizaciones 
                                para las diferentes unidades administrativas de la Universiada Mayor de 
                                San Simón y poder adquirir los productos y/o servicios de las diferentes empresas.
                            </p>
                        </Card>
                    </div>
                 </div>
                <div className="p-col-3 margin-top">
                    <div className="card card-st">
                        <Card className="card-title" title="Soporte" footer={footer}>
                            <p className="p-m-0 card-Parrafo">
                                En caso de olvidar la información requerida para iniciar sesión comunicarse con 
                                los contactos que se muestran en el pie de página.
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="p-grid p-justify-between">
                <div className="p-col-12 margin-top">
                    <div className="card card-st">
                            <Card className="card-title" title="Soporte" footer={footer}>
                                <p className="p-m-0 card-Parrafo">
                                    En caso de olvidar la información requerida para iniciar sesión comunicarse con 
                                    los contactos que se muestran en el pie de página.
                                </p>
                            </Card>
                    </div>
                </div>
            </div>    
        </div>
    )
}   
export default Home;