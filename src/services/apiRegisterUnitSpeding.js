import axios from 'axios';

 export const getRegisterUnitSpeding = () =>{
     return axios.get('https://backendcompleto-sdc.herokuapp.com/api/unitSpending/getRegisterUnit');
 }

 export const getRegisterUnitSpedingID =(id) =>{
     return axios.get(`https://backendcompleto-sdc.herokuapp.com/api/unitSpending/${id}`);
 }



 export const createRegisterUnitSpeding=(data,idF)=>{
    return axios.post('https://backendcompleto-sdc.herokuapp.com/api/unitSpending/createRegisterUnit', 
      {
        nombreFacultad:                              `${data.nombreFacultad}`,
        nombreCarrera:                               `${data.nombreCarrera}`,
        nombreUnidad:                                `${data.nombreUnidad}`,
        presupuesto:                                 `${data.presupuesto}`,
        jefeUnidad:                                  `${data.jefeUnidad}`,
        secretariaUnidad:                            `${data.secretariaUnidad}`,
        telefonoUnidad:                              `${data.telefonoUnidad}`,
        RegistroNuevoUsuario_idRegistroNuevoUsuario: `${idF}`,
      }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
 }

export const updateRegisterUnitSpedingID =(data,idF,id) =>{
    return axios.post(`https://backendcompleto-sdc.herokuapp.com/api/unitSpending/updateRegisterUnit/${id}`, 
    {
        nombreFacultad:                              `${data.nombreFacultad}`,
        nombreCarrera:                               `${data.nombreCarrera}`,
        nombreUnidad:                                `${data.nombreUnidad}`,
        presupuesto:                                 `${data.presupuesto}`,
        jefeUnidad:                                  `${data.jefeUnidad}`,
        secretariaUnidad:                            `${data.secretariaUnidad}`,
        telefonoUnidad:                              `${data.telefonoUnidad}`,
        RegistroNuevoUsuario_idRegistroNuevoUsuario: `${idF}`,
    }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const deleteRegisterUnitSpedingID =(id) =>{
    return axios.delete(`https://backendcompleto-sdc.herokuapp.com/api/unitSpending/deleteRegisterUnit/${id}`);
}
