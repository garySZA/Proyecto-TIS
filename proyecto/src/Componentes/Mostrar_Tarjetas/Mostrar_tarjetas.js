import React, {useState, useEffect} from 'react'
import './estilos_mostrar_tarjetas.css';
import Tarjeta from '../Tarjeta/Tarjeta';
import Spinner from '../Spinner/Spinner'


function Mostrar_tarjetas(){
    const url = 'https://backendcompleto-sdc.herokuapp.com/api/registerBusiness/getRegisterBusiness'
    
    const [todos, setTodos] = useState()
    const fetchApi = async () =>{
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON)
    }
 console.log('todos',todos);



    useEffect(() => {
        fetchApi()
    }, [])

    return(
        <div className="tarjetas">
            <div className="contenedor-grid-tarjetas">
                {
                    !todos ? <Spinner />:
                    todos.map(empresa => {
                        return <Tarjeta 
                                    nombre = {empresa.nombreEmpresa}
                                    rubro = {empresa.rubroEmpresa}
                                    telefonoEmpresa = {empresa.telefonoEmpresa}
                                    correoEmpresa = {empresa.correoEmpresa}
                                    nit = {empresa.NITEmpresa}
                                    nombreEncargado = {empresa.NombrePersona}
                                    telefonoEncargado = {empresa.telefonoPersona}
                                    ciEncargado = {empresa.ciPersona}
                                />
                    })
                        
                }


                
                
            </div>  
        </div>
    );
}

export default Mostrar_tarjetas;