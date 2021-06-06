import React from 'react';
import './Empresas.css';

import { Menubar }                  from 'primereact/menubar';
import { Button }                   from 'primereact/button';


import logo                         from './img/UMSS_logo.png';

const Empresas = () =>{

    const start = <img alt="logo" src={logo} height="60" className="p-mr-2"></img>;

    const closeSesion = ()=>{
        return(
            <div>
                <Button label="CERRAR SESIÓN"    icon="pi  pi-fw pi-sign-out" className="p-button-rounded p-button-lg p-button-info p-button-text close-se type-letter " />
            </div>  
        )
    }

    return(
        <div>
            <div className="p-grid p-justify-center ">
                <div className="p-col-12 rowPanel">
                    <Menubar className="panelMenu"  start={start}  end={closeSesion}/>
                </div>
                <div className="p-grid p-justify-center ">
                    <div className="p-col-11">
                        <div    className="card margin-card color-card">
                               <h1>Empresas</h1> 
                        </div>
                    </div>
                </div>     
            </div>
        </div>
    )
}

export default Empresas;