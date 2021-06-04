import React,{useEffect,useState}   from 'react';
import './Home.css';
import rvgc                         from './img/rvgc_soft.png';

import { useHistory }               from 'react-router-dom';


import {items,start,footer} from './componets';

import { Menubar }                  from 'primereact/menubar';
import { PanelMenu }                from 'primereact/panelmenu';
import { Card } from 'primereact/card';
import { Button }                   from 'primereact/button';

const Home = () =>{
    const history                    = useHistory();


    const handleLogin=()=>{
        history.push('/Login');
    }


    const handleRegistrarse=()=>{
        history.push('/NewUser');
    }



    const loginRegister=()=>{
        return (
        <div>
            <Button label="INICIAR SESIÓN" icon="pi  pi-fw pi-user"      className="p-button-rounded p-button-lg p-button-info p-button-text loginRegister type-letter " onClick={handleLogin}/>
            <Button label="REGISTRARSE"    icon="pi  pi-fw pi-user-plus" className="p-button-rounded p-button-lg p-button-info p-button-text loginRegister type-letter " onClick={handleRegistrarse}/>
        </div>    
    
        )
    };







    

    

    return(
        <div className="type-letter">
            <div className="p-grid">
                <div className="p-col-12 rowPanel">
                    <Menubar className="panelMenu"  start={start} end={loginRegister} />
                </div>
            </div>
            <div className="p-grid p-justify-between type-letter-text">
                <div className="p-col-3 margin-top type-letter-text">
                    <div className="card card-st type-letter-text">
                        <PanelMenu className="type-letter-text" model={items}/>
                    </div>
                </div>
                <div className="p-col-5 margin-top ">
                    <div className="card card-st">
                        <Card className="card-title type-letter-text" title="BIENVENIDOS" >
                            <p className="p-m-0 card-Parrafo type-letter-text">
                                Esta plataforma ayuda a administra y gestionar los procesos de cotizaciones 
                                para las diferentes unidades administrativas de la Universiada Mayor de 
                                San Simón y poder adquirir los productos y/o servicios de las diferentes empresas.
                            </p>
                        </Card>
                    </div>
                 </div>
                <div className="p-col-3 margin-top">
                    <div className="card card-st type-letter-text">
                        <Card className="card-title type-letter-text" title="Soporte" footer={footer}>
                            <p className="p-m-0 card-Parrafo">
                                En caso de olvidar la información requerida para iniciar sesión comunicarse con 
                                los contactos que se muestran en el pie de página.
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="p-grid p-justify-between ">
                <div className="p-col-12 margin-top">
                    <div className="card card-st ">
                            <Card className="card-title type-letter-text" title="">
                                <div className="p-grid">
                                    <div className="p-col-4">
                                         <img className="imagen-rvgc" alt="Card" src={rvgc}/>
                                    </div>
                                    <div className="p-col-5">
                                        <p className="p-m-0 text-left">
                                            Dirección: Calle 16 de Julio entre Av. Heroínas #100
                                        </p>
                                        <p className="p-m-0 text-left">
                                            Email: rvgc.soft@gmail.com
                                        </p>
                                        <p className="p-m-0 text-left">
                                            Telefono: 72763276 - 77483376
                                        </p>
                                    </div>
                                </div>

                            </Card>
                    </div>
                </div>
            </div>    
        </div>
    )
}   
export default Home;