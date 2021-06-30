import React from 'react';
import  { useState, useEffect} from 'react';
import './Usuario.css';

import logo                                 from './img/UMSS_logo.png';
import { Menubar }                          from 'primereact/menubar';
import { menu }                             from './tools';
import { Button }                           from 'primereact/button';
import { Avatar }                           from 'primereact/avatar';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Sidebar } from 'primereact/sidebar';


const Usuario = () =>{
    const [visibleRight, setVisibleRight] = useState(false);

    const start = ()=>{
        return( 
            <div>
                <img alt="logo" src={logo} height="60" className="p-mr-2"></img>;
            </div>       

        )
    };
    const [user,setUser] = useState("John");

    const handleAvatar=()=>{
        setVisibleRight(true);
    };



    const avatar =()=>{
        return(
            <div>
                <Avatar icon="pi pi-user" className="p-mr-2 " size="xlarge" shape="circle" onClick={handleAvatar} style={{ backgroundColor: '#3a5795', color: '#ffffff' }}/>
            </div>
        )
    };

    return(
        <div>
             <div className="p-grid p-justify-center ">
                <div className="p-col-12 rowPanel">
                    <Menubar className="panelMenu"  start={start} model={menu} end={avatar}/>
                </div>
                {
                    <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                        <div>
                            <h3>Antonio Roman</h3>
                            <h5>Perfil</h5>
                        </div>
                        
                    </Sidebar>
                }
            </div> 
        </div>
    )
}
export default Usuario;