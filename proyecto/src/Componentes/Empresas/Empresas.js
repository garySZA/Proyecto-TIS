import React, {useState, useEffect} from 'react'
import './estilos-empresas.css'
import Spinner from '../Spinner/Spinner'

function Empresa(){
    const url = 'https://backendcompleto-sdc.herokuapp.com/api/registerBusiness/getRegisterBusiness'
    const [todos, setTodos] = useState()
    const fetchApi = async () =>{
        const response = await fetch(url)
        const responseJSON = await response.json()
        setTodos(responseJSON)
    }

    useEffect(() => {
        fetchApi()
    }, [])

    return(
        <div className="cont">
            {
                !todos? <Spinner />:
                todos.map(empresa => {
                    return  <div className="contenedor-gral" data-aos="fade-up" data-aos-duration="2500">
                                <section className="contenedor-campos-ver-empresa">
                                    <div className="contenedor-id campos">
                                        <label>ID: </label>
                                        <label>{empresa.idRegistroEmpresa}</label>
                                    </div>
                                    <div className="contenedor-nombre campos">
                                        <label>Empresa:</label>
                                        <label>{empresa.nombreEmpresa}</label>
                                    </div>
                                    <div className="contenedor-telf campos">
                                        <label>Teléfono:</label>
                                        <label>{empresa.telefonoEmpresa}</label>
                                    </div>
                                    <div className="contenedor-enc campos">
                                        <label>Encargado:</label>
                                        <label>{empresa.NombrePersona}</label>
                                    </div>
                                    <div className="contenedor-btn-ver-empresas">
                                        <button className="btn-ver-empresa btn-edit-empr" title="Editar datos de empresa"><i class="fas fa-pencil-alt icono-ver-empresa"></i></button>
                                        <button className="btn-ver-empresa btn-elim-empr" title="Eliminar empresa"><i class="far fa-trash-alt icono-ver-empresa"></i></button>
                                        <button className="btn-ver-empresa btn-ver-empr" title="Ver datos completos de empresa"><i class="far fa-eye icono-ver-empresa"></i></button>
                                    </div>
                                </section>
                            </div>
                })
            }
        </div>
    )
}

export default Empresa;