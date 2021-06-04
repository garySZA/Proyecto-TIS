import React from 'react';
import './Jefe.css';
import { Menubar }                  from 'primereact/menubar';
import { Button }                   from 'primereact/button';
import  { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';


import logo                         from './img/UMSS_logo.png';

const Jefe = () =>{
    const [selectedCity1, setSelectedCity1] = useState(null);

    const start = <img alt="logo" src={logo} height="60" className="p-mr-2"></img>;

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const onCityChange = (e) => {
        setSelectedCity1(e.value);
    }


    const closeSesion = ()=>{
        return(
            <div>
                <Button label="CERRAR SESIÓN"    icon="pi  pi-fw pi-sign-out" className="p-button-rounded p-button-lg p-button-info p-button-text close-se type-letter " />
            </div>  
        )
    }

    return(
        <div>
            <div className="p-grid">
                <div className="p-col-12 rowPanel">
                    <Menubar className="panelMenu"  start={start}  end={closeSesion}/>
                </div>
            </div>
            <div className="p-grid p-justify-between ">
                    <div className="p-col-4 margin-card">
                        <div className="card color-card">
                            <h5>Basic</h5>
                            <Dropdown className="drop-down"value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Select a City" />
                        </div>
                    </div>
                    <div className="p-col-7 margin-card">
                        <div className="card color-card">
                            <Button label="CERRAR SESIÓN"    icon="pi  pi-fw pi-sign-out" className="p-button-rounded p-button-lg p-button-info p-button-text type-letter " />
                            <Button label="CERRAR SESIÓN"    icon="pi  pi-fw pi-sign-out" className="p-button-rounded p-button-lg p-button-info p-button-text type-letter " />
                            <Button label="CERRAR SESIÓN"    icon="pi  pi-fw pi-sign-out" className="p-button-rounded p-button-lg p-button-info p-button-text  type-letter " />  
                            <Button label="CERRAR SESIÓN"    icon="pi  pi-fw pi-sign-out" className="p-button-rounded p-button-lg p-button-info p-button-text  type-letter " />  
                            <Button label="CERRAR SESIÓN"    icon="pi  pi-fw pi-sign-out" className="p-button-rounded p-button-lg p-button-info p-button-text  type-letter " />       
                        </div>
                    </div>
            </div>
            <div className="p-grid p-justify-between ">
                <div className="p-col-12 margin-card">
                    <div className="card color-card">
                        <Button label="CERRAR SESIÓN"    icon="pi  pi-fw pi-sign-out" className="p-button-rounded p-button-lg p-button-info p-button-text type-letter " />
                    </div>    
                </div>    
            </div>

        </div>
        
    )
}
export default Jefe;