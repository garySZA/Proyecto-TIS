import axios from 'axios';

 export const getAnswerBusiness = () =>{
     return axios.get('https://backendcompleto-sdc.herokuapp.com/api/answersBus/getAnswerBus');
 }

 export const getAnswerBusinessID =(id) =>{
     return axios.get(`https://backendcompleto-sdc.herokuapp.com/api/answersBus/${id}`);
 }



 export const createAnswerBusiness=(data , idF)=>{
    return axios.post('https://backendcompleto-sdc.herokuapp.com/api/answersBus/createAnswerBus', 
      {
        NroRE:                                      `${data.NroRE}`,
        CantidadRE:                                 `${data.CantidadRE}`,
        UnidadRE:                                   `${data.UnidadRE}`,
        DetalleRE:                                  `${data.DetalleRE}`,
        UnitarioRE:                                 `${data.UnitarioRE}`,
        TotalRE:                                    `${data.TotalRE}`,
        FormularioSolitud_idFormularioSolitud:      `${idF}`
      }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
 }

export const updateAnswerBusinessID =(data,idF,id) =>{
    return axios.post(`https://backendcompleto-sdc.herokuapp.com/api/answersBus/updateAnswerBus/${id}`, 
    {
        NroRE:                                      `${data.NroRE}`,
        CantidadRE:                                 `${data.CantidadRE}`,
        UnidadRE:                                   `${data.UnidadRE}`,
        DetalleRE:                                  `${data.DetalleRE}`,
        UnitarioRE:                                 `${data.UnitarioRE}`,
        TotalRE:                                    `${data.TotalRE}`,
        FormularioSolitud_idFormularioSolitud:      `${idF}`
    }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const deleteAnswerBusinessID =(id) =>{
    return axios.delete(`https://backendcompleto-sdc.herokuapp.com/api/answersBus/deleteAnswerBus/${id}`);
}
