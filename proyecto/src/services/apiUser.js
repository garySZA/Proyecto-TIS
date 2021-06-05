import axios from 'axios';

 export const getUsers = () =>{
     return axios.get('https://backendcompleto-sdc.herokuapp.com/api/user/getUser');
 }

 export const getUserID =(id) =>{
     return axios.get(`https://backendcompleto-sdc.herokuapp.com/api/user/${id}`);
 }



 export const createUser=(data)=>{
    return axios.post('https://backendcompleto-sdc.herokuapp.com/api/user/createUser', 
      {
         RolR:               `${data.RolR}`,
         NombreUsuario:      `${data.NombreUsuario}`,
         ApellidoUsuario:    `${data.ApellidoUsuario}`,
         FechaDeNacimiento:  `${data.FechaDeNacimiento}`,
         contraseñaUsuario:  `${data.contraseñaUsuario}`,
         SexoUsuario:        `${data.SexoUsuario}`,
         CorreoC:            `${data.CorreoC}`,
         CiudadDireccion:    `${data.CiudadDireccion}`,
         PaisDireccion:      `${data.PaisDireccion}`,
         CalleDireccion:     `${data.CalleDireccion}`,
         TelefonoT:          `${data.TelefonoT}`
      }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
 }

export const updateUserID =(id,data) =>{
    return axios.post(`https://backendcompleto-sdc.herokuapp.com/api/user/updateUser/${id}`, 
    {
       RolR:               `${data.RolR}`,
       NombreUsuario:      `${data.NombreUsuario}`,
       ApellidoUsuario:    `${data.ApellidoUsuario}`,
       FechaDeNacimiento:  `${data.FechaDeNacimiento}`,
       contraseñaUsuario:  `${data.contraseñaUsuario}`,
       SexoUsuario:        `${data.SexoUsuario}`,
       CorreoC:            `${data.CorreoC}`,
       CiudadDireccion:    `${data.CiudadDireccion}`,
       PaisDireccion:      `${data.PaisDireccion}`,
       CalleDireccion:     `${data.CalleDireccion}`,
       TelefonoT:          `${data.TelefonoT}`
    }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const getUserID =(id) =>{
    return axios.delete(`https://backendcompleto-sdc.herokuapp.com/api/user/deleteUser/${id}`);
}
