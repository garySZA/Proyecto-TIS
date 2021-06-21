import React, {useState, useEffect} from 'react';
import './estilos-tarjeta-solicitudes.css'
import {Button} from 'reactstrap'
import jsPDF from 'jspdf'; 




function Tarjeta_Solicitudes(props){
    let detalless="";
    
    const {solicitud}=props;
    console.log(detalless);
    const { estadoSolicitud,DetalleSolitud,item,FechaDeSolicitud,responsableSolicitud,montoSolicitud,idFormularioSolitud}=solicitud;
    const fecha =FechaDeSolicitud.replace('T00:00:00.000Z', '');
 

    const urlObs = 'https://backendcompleto-sdc.herokuapp.com/api/inform/getInfAR';
    const [observaciones, setObservaciones] = useState([''])





    const printPDF=()=>{

       observaciones.map(obs=>{
        if(idFormularioSolitud==obs.FormularioSolitud_idFormularioSolitud){
            detalless=obs.DetalleIAR;
        }
        

       })
        
        
        var doc=new jsPDF('portrait','px','a4','false');
        
        doc.setFontSize(12);
        
        doc.setFont('fontStyle');
        doc.text(170,70, "Solicitudes de Empresas");
        doc.text(60,110,"Detalle: "+DetalleSolitud);
        doc.text(60,130,"Item: "+item);
        doc.text(60,150,"Fecha: "+fecha);
        doc.text(60,170,"Responsable: "+responsableSolicitud);
        doc.text(60,190,"Monto: "+montoSolicitud);
        doc.text(60,210,"Observaciones:   "+detalless);
        doc.text(143,270,"________________________");
        doc.text(200,290,"RVGC");
    
        doc.addPage();//previsualiza pdf en nuevo pestaña solo en chrome
        doc.save('Solicitud de Empresas.pdf');

    }
    
  
 console.log('obs',observaciones);
    const obtenerObservaciones = async () => {
        const response = await fetch(urlObs)
        const responseJSON = await response.json()
        setObservaciones(responseJSON)
    }

    useEffect(() => {
        obtenerObservaciones();
    },[])

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
                    
                    < footer className='mb-2' >
                        <div Tarjeta_Solicitudes style ={{textAlign:'center'}} ><br/>
                          <Button  onClick={printPDF} >Download PDF</Button>
                         </div>

                    </footer>
                        
                </div>
                

               :
            ''
          })
    )
}

export default Tarjeta_Solicitudes;