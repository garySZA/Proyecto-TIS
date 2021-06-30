import React from 'react';



const Fila=({persona})=>{
    console.log('persona',persona);
 return (
    <tr>
      
    <td>{persona.Estado}</td>
    <td>{persona.Nombre}</td>
    <td>{persona.Fecha}</td>
   
  </tr>

 )
  
    }


    export default Fila;