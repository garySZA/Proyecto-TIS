import React, { Component } from 'react';
import {Button} from 'reactstrap';
import jsPDF from 'jspdf'; 
import logo from './image/a.png';





class GenerarPdf extends Component{
    
pdfGenerate=()=>{
    var doc=new jsPDF('landscape','px','a4','false');
    doc.addImage(logo,'PNG',65,20,400,400);
    doc.addPage() //previsualiza pdf en nuevo pestaña
    doc.save('a.pdf');
    doc.setFont('Helvertica','bold');
    
    doc.text(60,60,' solicitudes de Cotizacones para empresas')//escribe letras en el doc
    doc.text(60,80,'nombre :');
    doc.text(60,80,'observaciones:')
    doc.text(60,60,'firma');
    
    doc.text(100,60,' .......................');
    doc.text(100,60,'........................');
    doc.text(120,100,'_________________________');
   
}
    render(){
        return(
            <div style={{textAlign:'center'}} ><br/>
               <Button onClick={this.pdfGenerate}>Download PDF</Button>
            </div>
        );
    }
}

export default GenerarPdf;
