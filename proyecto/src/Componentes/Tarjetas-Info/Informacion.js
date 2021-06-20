import React, {useState, useEffect} from 'react'
import './estilos-info.css'
import Spinner from '../Spinner/Spinner'

function TarjetaInf(){
    const urlEmpresa = 'https://backendcompleto-sdc.herokuapp.com/api/registerBusiness/getRegisterBusiness'
    const [empresas, setEmpresas] = useState()
    const fetchApi = async () => {
        const response = await fetch(urlEmpresa)
        const responseJSON = await response.json()
        setEmpresas(responseJSON)
    }

    const urlSolicitudes = 'https://backendcompleto-sdc.herokuapp.com/api/formReq/getFormReq'
    const [solicitudes, setSolicitudes] = useState()
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
        <div class="tarjetas-info">
        <div class="contenedor-grid-tarjetas-info">
            {
                !empresas? <Spinner />:
                arregloTarjetas.map(tarj => {
                    return <div class="contenedor-info">
                                <div class="cont-info-titulo">
                                    <i class={tarj.icono}></i>
                                    <label class="label-info-titulo">{tarj.titulo}</label>
                                </div>
                                <div class="cont-info-subtitulo">
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