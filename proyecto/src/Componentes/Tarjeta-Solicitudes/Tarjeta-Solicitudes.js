import React, {useState, useEffect} from 'react';
import './estilos-tarjeta-solicitudes.css'
import {Button} from 'reactstrap'
import jsPDF from 'jspdf'; 


function Tarjeta_Solicitudes(props){
    
    const {solicitud}=props;
    
    const { estadoSolicitud,DetalleSolitud,item,FechaDeSolicitud,responsableSolicitud,montoSolicitud}=solicitud;
    const fecha =FechaDeSolicitud.replace('T00:00:00.000Z', '');
 
    const printPDF=()=>{


        
        var doc=new jsPDF('portrait','px','a4','false');
        
        doc.text(150,70, "Solicitudes de Empresas");
        doc.text(60,110,"Detalle: "+DetalleSolitud);
        doc.text(60,130,"Item: "+item);
        doc.text(60,150,"Fecha: "+fecha);
        doc.text(60,170,"Responsable: "+responsableSolicitud);
        doc.text(60,190,"Monto: "+montoSolicitud);
        doc.text(143,230,"________________________");
        doc.text(200,250,"RVGC");
        
        doc.addPage();//previsualiza pdf en nuevo pestaña solo en chrome
        doc.save('Solicitud de Empresas.pdf');

        
       

    
    }
    
    return(
        !observaciones? 'Cargando':
        observaciones.map(obs => {
            return (props.solicitud.idFormularioSolitud == obs.FormularioSolitud_idFormularioSolitud)?
                <div className={props.estadoCaja}>
                    <div className={props.estadoTitulo}>
                        <label className="estado-solicitud">{props.solicitud.estadoSolicitud}</label>
                    </div>

                    <div className="contenedor-campos-solicitud">
                        <label className = "subtitulos-solicitud">Detalle:</label>
                        <div className="contenido-de-solicitudes">
                            <label className="etiqueta-contenido-solicitud">{props.solicitud.DetalleSolitud}</label>
                        </div>
                        <label className = "subtitulos-solicitud">Item:</label>
                        <div className="contenido-de-solicitudes">
                            <label className="etiqueta-contenido-solicitud">{props.solicitud.item}</label>
                        </div>
                        <label className = "subtitulos-solicitud">Fecha de Solicitud:</label>
                        <div className="contenido-de-solicitudes">
                            <label className="etiqueta-contenido-solicitud">{props.solicitud.FechaDeSolicitud.replace('T00:00:00.000Z', '')}</label>
                        </div>
                        <label className = "subtitulos-solicitud">Responsable:</label>
                        <div className="contenido-de-solicitudes">
                            <label className="etiqueta-contenido-solicitud">{props.solicitud.responsableSolicitud}</label>
                        </div>
                        <label className = "subtitulos-solicitud">Monto:</label>
                        <div className="contenido-de-solicitudes">
                            <label className="etiqueta-contenido-solicitud">{props.solicitud.montoSolicitud}Bs.</label>
                        </div>
                        <label className = "subtitulos-solicitud">Observaciones:</label>
                        <div className="contenido-de-solicitudes">
                            <label className="etiqueta-contenido-solicitud">{obs.DetalleIAR}</label>
                        </div>
                    </div>
                    
                <div className="tamanio-Botocito" style ={{textAlign:'center'}} ><br/>
               <Button onClick={printPDF} >Download PDF</Button>
                </div>

                </div>

               :
            ''
          })
    )
}

export default Tarjeta_Solicitudes;