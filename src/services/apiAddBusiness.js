import axios from 'axios';

 export const getAddBusiness = () =>{
     return axios.get('https://backendcompleto-sdc.herokuapp.com/api/registerBusiness/getRegisterBusiness');
 }

 export const getAddBusinessID =(id) =>{
     return axios.get(`https://backendcompleto-sdc.herokuapp.com/api/registerBusiness/${id}`);
 }



 export const createAddBusiness=(data,idF)=>{
    return axios.post('https://backendcompleto-sdc.herokuapp.com/api/registerBusiness/createRegisterBus', 
      {
        nombreEmpresa:                               `${data.nombreEmpresa}`,
        rubroEmpresa:                                `${data.rubroEmpresa}`,
        telefonoEmpresa:                             `${data.telefonoEmpresa}`,
        correoEmpresa:                               `${data.correoEmpresa}`,
        NITEmpresa:                                  `${data.NITEmpresa}`,
        NombrePersona:                               `${data.NombrePersona}`,
        telefonoPersona:                             `${data.telefonoPersona}`,
        ciPersona:                                   `${data.ciPersona}`,
        RegistroNuevoUsuario_idRegistroNuevoUsuario: `${idF}`
      }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
 }

export const updateAddBusinessID =(data,idF,id) =>{
    return axios.post(`https://backendcompleto-sdc.herokuapp.com/api/registerBusiness/updateRegisterBus/${id}`, 
    {
        nombreEmpresa:                               `${data.nombreEmpresa}`,
        rubroEmpresa:                                `${data.rubroEmpresa}`,
        telefonoEmpresa:                             `${data.telefonoEmpresa}`,
        correoEmpresa:                               `${data.correoEmpresa}`,
        NITEmpresa:                                  `${data.NITEmpresa}`,
        NombrePersona:                               `${data.NombrePersona}`,
        telefonoPersona:                             `${data.telefonoPersona}`,
        ciPersona:                                   `${data.ciPersona}`,
        RegistroNuevoUsuario_idRegistroNuevoUsuario: `${idF}`
    }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const deleteAddBusinessID =(id) =>{
    return axios.delete(`https://backendcompleto-sdc.herokuapp.com/api/registerBusiness/deleteRegisterBus/${id}`);
}
