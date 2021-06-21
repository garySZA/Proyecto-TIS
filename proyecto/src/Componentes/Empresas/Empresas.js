import React, {useState, useEffect} from 'react'
import './estilos-empresas.css'
import Spinner from '../Spinner/Spinner'
import Estructura from './Estructura'

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
                    return <Estructura empresa = {empresa} />
                })
            }
        </div>
    )
}

export default Empresa;