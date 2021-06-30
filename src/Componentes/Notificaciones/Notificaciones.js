
import { Divider } from 'primereact/divider';
import React,{useState,useEffect} from 'react';

import Fila from './Item'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';






const array=[
  
    {
      Nombre :'Compra de Escritorios',
      Estado:'Aprobado',
     Fecha:'02-03-2021'
},

{ 
  Nombre :'Compra de insumos de limpieza',
   Estado:'Reprobado',
Fecha:'27-05-2021'
},

{
  Nombre :'Compra de ventiladores',
  Estado:'Aprobado',
  Fecha:'01-03-2021'
},

{
  Nombre :'Compra de pantallas para los laboratorios',
  Estado:'Reprobado',
Fecha:'02-01-2021'
},
{
  Nombre :'Compra de pintura',
  Estado:'Aprobado',
  Fecha:'05-08-2020'
},

{
  Nombre :'Compra de focos',
  Estado:'Reprobado',
Fecha:'02-03-2020'
},
{
  Nombre :'Compra de mesas de plastico',
  Estado:'Aprobado',
  Fecha:'23-03-2019'
},

{
  Nombre :'Compra de pizzarras acrilicas',
  Estado:'Reprobado',
Fecha:'02-09-2018'
},
{
  Nombre :'Compra de mesas',
  Estado:'Aprobado',
  Fecha:'07-08-2018'
},

{
  Nombre :'compra de marcadores',
  Estado:'Reprobado',
Fecha:'06-07-2018'
},
{
  Nombre :'Compra de sillas',
  Estado:'Aprobado',
  Fecha:'05-03-2015'
},

{
  Nombre :'Compra de mesas',
  Estado:'Reprobado',
Fecha:'02-03-2012'
}






];

const Notificaciones=()=>{

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);



     const idUsuario="7000001";
    const url = `https://backendcompleto-sdc.herokuapp.com/api/notification/${idUsuario} `
    

    const [notificaciones, setNotificaciones] = useState([]);
    /*const fetchApi = async () =>{
        const response = await fetch(url)
        const responseJSON = await response.json()
        setNotificaciones(responseJSON)
    }*/

 


 
    useEffect(async() => {
    
        const response = await fetch(url)
        const responseJSON = await response.json()
        console.log(responseJSON)
        if(responseJSON){
      //console.log("hola")
      setNotificaciones(responseJSON)
        }
    }, [])
   
    const cantidad_notificaciones=notificaciones.length;


    const [showNotifi,setShowNotifi]=useState(true);

 





    //console.log('array',array);

return(

   
 <div>
   



  <div className="float-end px-3 py-2" >
<Dropdown isOpen={dropdownOpen} toggle={toggle}>
  
  <DropdownToggle className="btn btn-primary"  onClick={()=>{setShowNotifi(false)}} >
  

    <button type="button" class="btn btn-primary position-relative" >
    <i className="fas fa-bell" >

    </i>
 {showNotifi &&( <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cantidad_notificaciones}
    
  </span>)}
</button>

    
  </DropdownToggle >
  
  <DropdownMenu right>
    {notificaciones.map(noti=>{
      return(

        <>
      <DropdownItem >{noti.DetalleNotificacion}</DropdownItem>
      {/* <DropdownItem header>{noti.DetalleNotificacion}</DropdownItem> */}
      <DropdownItem divider/>
      </>
      )

    })
      }
  <DropdownItem  > <a href=" "> </a> mostrar todos</DropdownItem>
  </DropdownMenu>
</Dropdown>
</div>






<table className="table table-striped " >
  <thead>
    <tr>
     
      <th scope="col">Estado</th>
      <th scope="col"> Nombre de la Solicitud</th>
      <th scope="col">Fecha</th>
     
    </tr>
  </thead>
  <tbody>
    
  {
      array.map((persona)=>(
    <Fila persona={persona}/>
  

      ))
  }

  </tbody>

</table>
</div>



)
}
export default Notificaciones;
