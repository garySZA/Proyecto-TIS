import axios from 'axios';

 export const getUsuario = () =>{
     return axios.get('https://backend-sistemade-cotizacion.herokuapp.com/api/usuario');
 }