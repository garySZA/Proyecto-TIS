import React, {useState, useEffect} from 'react'
import './estilos-info.css'
import Spinner from '../Spinner/Spinner'

function TarjetaInf(){
    const urlEmpresa = 'https://backendcompleto-sdc.herokuapp.com/api/registerBusiness/getRegisterBusiness'
    const [empresas, setEmpresas] = useState(false)
    const fetchApi = async () => {
        const response = await fetch(urlEmpresa)
        const responseJSON = await response.json()
        setEmpresas(responseJSON)
    }

    const urlSolicitudes = 'https://backendcompleto-sdc.herokuapp.com/api/formReq/getFormReq'
    const [solicitudes, setSolicitudes] = useState(false)
    const fetApiSoli = async () => {
        const response = await fetch(urlSolicitudes)
        const responseJSON = await response.json()
        setSolicitudes(responseJSON)
    }

    useEffect(() => {
        fetchApi();
        fetApiSoli()
    }, [])

    let datosEmpresa = {
        icono: "far fa-building icono-info",
        cantidad: empresas,
        titulo: "Empresas"
    }

    let datosSolicitud = {
        icono: "fas fa-file-invoice-dollar icono-info",
        cantidad: solicitudes,
        titulo: "Solicitudes"
    }

    let arregloTarjetas = [datosEmpresa, datosSolicitud]

    return(
        <div className="tarjetas-info">
        <div className="contenedor-grid-tarjetas-info">
            {
                !empresas && !solicitudes? <Spinner />:
                arregloTarjetas.map(tarj => {
                    return <div className="contenedor-info">
                                <div className="cont-info-titulo">
                                    <i className={tarj.icono}></i>
                                    <label className="label-info-titulo">{tarj.titulo}</label>
                                </div>
                                <div className="cont-info-subtitulo">
                                    <p className="label-info-subtitulo">{tarj.cantidad.length}</p>
                                </div>
                            </div>
                })
            }
        </div>
    </div>
    );
}

export default TarjetaInf;