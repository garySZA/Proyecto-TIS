import React from 'react';
import {useState} from 'react';
import { useForm } from 'react-hook-form';

import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

const AgregarUsuarioCard = (props) => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        data.id = null
        console.log(data)
        props.addUser(data)
        e.target.reset();
    }

    const [displayBasic, setDisplayBasic] = useState(false);

    const [position, setPosition] = useState('center');
    
    const dialogFuncMap = {
      'displayBasic': setDisplayBasic,
  }
  
  const onClick = (name, position) => {
      dialogFuncMap[`${name}`](true);
  
      if (position) {
          setPosition(position);
      }
  }
  
  const onHide = (name,res) => {
      dialogFuncMap[`${name}`](false);
      const data = {
        idRegistroNuevoUsuario: 151212, 
        RolR:                   '23123',
        NombreUsuario:          '123123',
        ApellidoUsuario:        '121',
        FechaDeNacimiento:      'qqwd',
        contraseñaUsuario:      'asd',
        SexoUsuario:            'qwdq',
        CorreoC:                'asd',
        CiudadDireccion:        'asda',
        PaisDireccion:          'qw',
        CalleDireccion:         'asda',
        TelefonoT:              'qweqw'
      }
      if(res === 'Si'){
        console.log("Si");
        console.log(data);
        props.agregarUsuario(data);
      }else{
        console.log("no") 
      }
      
  }

  const renderFooter = (name) => {
    return (
        <div>
            <Button label="No" icon="pi pi-times" onClick={() => onHide(name,'No')} className="p-button-text" />
            <Button label="Si" icon="pi pi-check" onClick={() => onHide(name,'Si')} autoFocus />
        </div>
    );
    }
    return (
        <div >
                    <Button label="AÑADIR USUARIO"   icon="pi  pi-fw pi-user-plus" className="p-button-rounded p-button-lg p-button-info  close-se type-letter " onClick={() => onClick('displayBasic')}/>
                    <Dialog header="AÑADIR USUARIO" visible={displayBasic} style={{ width: '35vw' }} footer={renderFooter('displayBasic')} onHide={() => onHide('displayBasic')}>
                    <div className="p-d-flex p-flex-column">
                        <div className="p-mb-2">
                            <span className="p-float-label">
                                <InputText id="RolR" type="text"/>
                                <label htmlFor="RolR">RolR</label>
                            </span>
                        </div> 
                        <div className="p-mb-2">
                            <span className="p-float-label">
                                <InputText id="NombreUsuario" type="text"/>
                                <label htmlFor="NombreUsuario">NombreUsuario</label>
                            </span>
                        </div>
                        <div className="p-mb-2">
                            <span className="p-float-label">
                                <InputText id="FechaDeNacimiento" type="text"/>
                                <label htmlFor="FechaDeNacimiento">FechaDeNacimiento</label>
                            </span>
                        </div> 
                        <div className="p-mb-2">
                            <span className="p-float-label">
                                <InputText id="contraseñaUsuario" type="text"/>
                                <label htmlFor="contraseñaUsuario">contraseñaUsuario</label>
                            </span>
                        </div> 
                        <div className="p-mb-2">
                            <span className="p-float-label">
                                <InputText id="SexoUsuario" type="text"/>
                                <label htmlFor="SexoUsuario">SexoUsuario</label>
                            </span>
                        </div> 
                        <div className="p-mb-2">
                            <span className="p-float-label">
                                <InputText id="CorreoC" type="text"/>
                                <label htmlFor="CorreoC">CorreoC</label>
                            </span>
                        </div> 
                        <div className="p-mb-2">
                            <span className="p-float-label">
                                <InputText id="CiudadDireccion" type="text"/>
                                <label htmlFor="CiudadDireccion">CiudadDireccion</label>
                            </span>
                        </div> 
                        <div className="p-mb-2">
                            <span className="p-float-label">
                                <InputText id="PaisDireccion" type="text"/>
                                <label htmlFor="PaisDireccion">PaisDireccion</label>
                            </span>
                        </div> 
                        <div className="p-mb-2">
                            <span className="p-float-label">
                                <InputText id="CalleDireccion" type="text"/>
                                <label htmlFor="CalleDireccion">CalleDireccion</label>
                            </span>
                        </div> 
                        <div className="p-mb-2">
                            <span className="p-float-label">
                                <InputText id="TelefonoT" type="text"/>
                                <label htmlFor="TelefonoT">TelefonoT</label>
                            </span>
                        </div> 
                    </div>        
                    </Dialog>
        </div>
    );
}
 
export default AgregarUsuarioCard;