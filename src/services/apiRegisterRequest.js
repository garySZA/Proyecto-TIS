import axios from 'axios';

 export const getRegisterRequest = () =>{
     return axios.get('https://backendcompleto-sdc.herokuapp.com/api/formReq/getFormReq');
 }

 export const getRegisterRequestID =(id) =>{
     return axios.get(`https://backendcompleto-sdc.herokuapp.com/api/formReq/${id}`);
 }



 export const createRegisterRequest=(data , idF)=>{
    return axios.post('https://backendcompleto-sdc.herokuapp.com/api/formReq/createFormReq', 
      {
        item:                                       `${data.item}`,
        DetalleSolitud:                             `${data.DetalleSolitud}`,    
        FechaDeSolicitud:                           `${data.FechaDeSolicitud}`,
        responsableSolicitud:                       `${data.responsableSolicitud}`, 
        montoSolicitud:                             `${data.montoSolicitud}`,
        estadoSolicitud:                            `${data.estadoSolicitud}`,
        registroUnidadGasto_idRegistroUnidad:       `${idF}`

      }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
 }

export const updateRegisterRequestID =(data,idF,id) =>{
    return axios.post(`https://backendcompleto-sdc.herokuapp.com/api/formReq/updateFormReq/${id}`, 
    {
        item:                                       `${data.item}`,
        DetalleSolitud:                             `${data.DetalleSolitud}`,    
        FechaDeSolicitud:                           `${data.FechaDeSolicitud}`,
        responsableSolicitud:                       `${data.responsableSolicitud}`, 
        montoSolicitud:                             `${data.montoSolicitud}`,
        estadoSolicitud:                            `${data.estadoSolicitud}`,
        registroUnidadGasto_idRegistroUnidad:       `${idF}`
    }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const deleteRegisterRequestID =(id) =>{
    return axios.delete(`https://backendcompleto-sdc.herokuapp.com/api/formReq/deleteFormReq/${id}`);
}
