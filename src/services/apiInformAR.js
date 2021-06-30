import axios from 'axios';

 export const getInformAR = () =>{
     return axios.get('https://backendcompleto-sdc.herokuapp.com/api/inform/getInfAR');
 }

 export const getInformARID =(id) =>{
     return axios.get(`https://backendcompleto-sdc.herokuapp.com/api/inform/${id}`);
 }



 export const createInformAR=(data , idF)=>{
    return axios.post('https://backendcompleto-sdc.herokuapp.com/api/inform/createInfAR', 
      {
        NombreJefeIRA:                          `${data.NombreJefeIRA}`,
        DetalleIAR:                             `${data.DetalleIAR}`,
        UnidadSolicitanteIRA:                   `${data.UnidadSolicitanteIRA}`,
        FacultadSolicitanteIRA:                 `${data.FacultadSolicitanteIRA}`,
        CarreraSolicitanteIRA:                  `${data.CarreraSolicitanteIRA}`,
        FormularioSolitud_idFormularioSolitud:  `${idF}`
      }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
 }

export const updateInformARID =(data,idF,id) =>{
    return axios.post(`https://backendcompleto-sdc.herokuapp.com/api/inform/updateInfAR/${id}`, 
    {
        NombreJefeIRA:                          `${data.NombreJefeIRA}`,
        DetalleIAR:                             `${data.DetalleIAR}`,
        UnidadSolicitanteIRA:                   `${data.UnidadSolicitanteIRA}`,
        FacultadSolicitanteIRA:                 `${data.FacultadSolicitanteIRA}`,
        CarreraSolicitanteIRA:                  `${data.CarreraSolicitanteIRA}`,
        FormularioSolitud_idFormularioSolitud:  `${idF}`
    }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const deleteInformARID =(id) =>{
    return axios.delete(`https://backendcompleto-sdc.herokuapp.com/api/inform/deleteInfAR/${id}`);
}
