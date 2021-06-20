import React, {useState} from 'react';
import './estilos_contenedor_botones.css'
import Registro_Empresa from '../../Registro_Empresa/registro_empresa';
import Formulario_ProductosServicios from '../../Solicitud_productos-servicios/Formulario_productos-servicios';
import Registro_Unidad_Gasto from '../../Registro_Unidades_De_Gasto/formulario_registro_unidadesDeGasto';
import Mostrar_tarjetas from '../../Mostrar_Tarjetas/Mostrar_tarjetas';
import Mostrar_tarjetas_solicitudes from '../../Mostrar_Tarjetas_Solicitudes/Mostrar_Tarjetas_Solicitudes';
import Mostrar_Tarjetas_Modificacion_Estados from '../../Modificar_Estado_Solicitudes/Mostrar_Tarjetas_Modificacion_Estados';
import TarjetaInf from '../../Tarjetas-Info/Informacion';

function Barra_Izquierda(){

    const cambio = function(boton) {
        let botones = ["botonModificarEstados", 'botonHistorialSolicitudes', 'botonVerEmpresas', 'botonRegistroUnidadDeGasto', 'botonRegistroEmpresa', 'botonRegistroSolicitud']
        botones.forEach(btn => {
            console.log(boton)
            if(btn == boton){
                document.getElementById(boton).classList.toggle('boton-click')
                console.log("if positivo")
            }else{
                document.getElementById(btn).classList.remove('boton-click')
            }
        })
    }

    //Bloque de estados para los componentes
    const [estadoRegistroEmpresa, setEstadoRegistroEmpresa] = useState(false)
    const [estadoFormularioSolicitud, setFormSolicitud] = useState(false)
    const [estadoUnidadGasto, setUnidadGasto] = useState(false)
    const [estadoVerEmpresas, setVerEmpresas] = useState(false)
    const [estadoHistorialSoli, setHistorialSoli] = useState(false)
    const [estadoModifSoli, setModifSoli] = useState(false)

    const mostrarRegistroEmpresa = () => {
        setEstadoRegistroEmpresa(!estadoRegistroEmpresa)
        setFormSolicitud(false)
        setUnidadGasto(false)
        setVerEmpresas(false)
        setHistorialSoli(false)
        setModifSoli(false)
        cambio("botonRegistroEmpresa")
    }

    const mostrarFormSoli = () => {
        setFormSolicitud(!estadoFormularioSolicitud)
        setEstadoRegistroEmpresa(false)
        setUnidadGasto(false)
        setVerEmpresas(false)
        setHistorialSoli(false)
        setModifSoli(false)
        cambio("botonRegistroSolicitud")
    }

    const mostrarUnidadGasto = () => {
        setUnidadGasto(!estadoUnidadGasto)
        setEstadoRegistroEmpresa(false)
        setFormSolicitud(false)
        setVerEmpresas(false)
        setHistorialSoli(false)
        setModifSoli(false)
        cambio("botonRegistroUnidadDeGasto")
    }

    const mostrarEmpresas = () => {
        setVerEmpresas(!estadoVerEmpresas)
        setEstadoRegistroEmpresa(false)
        setFormSolicitud(false)
        setUnidadGasto(false)
        setHistorialSoli(false)
        setModifSoli(false)
        cambio("botonVerEmpresas")
    }

    const mostrarHistorialSoli = () => {
        setHistorialSoli(!estadoHistorialSoli)
        setVerEmpresas(false)
        setEstadoRegistroEmpresa(false)
        setFormSolicitud(false)
        setUnidadGasto(false)
        setModifSoli(false)
        //cambio de color al dar click
        cambio("botonHistorialSolicitudes")
    }

    const mostrarModifSoli = () => {
        setModifSoli(!estadoModifSoli)
        setVerEmpresas(false)
        setEstadoRegistroEmpresa(false)
        setFormSolicitud(false)
        setUnidadGasto(false)
        setHistorialSoli(false)
        cambio("botonModificarEstados")
    }

    return(
        <> 
        <TarjetaInf />
        <div className="contenedor-botones-oculto" id="caja-botones">
            <button className="boton-barra"  id ="botonRegistroEmpresa" onClick={mostrarRegistroEmpresa}>Registrar Empresa</button>
            <button className="boton-barra"  id="botonRegistroSolicitud" onClick={mostrarFormSoli}>Registro de solicitud</button>            
            <button className="boton-barra"  id="botonRegistroUnidadDeGasto" onClick={mostrarUnidadGasto}>Registrar Unidad de Gasto</button>
            <button className="boton-barra"  id="botonVerEmpresas" onClick={mostrarEmpresas}>Ver Empresas</button>
            <button className="boton-barra"  id="botonHistorialSolicitudes" onClick={mostrarHistorialSoli}>Historial de Solicitudes</button>
            <button className="boton-barra"  id="botonModificarEstados" onClick={mostrarModifSoli}>Modificar Estados</button>
        </div>
            {
                (estadoRegistroEmpresa)?
                <Registro_Empresa />
                :
                ''
            }
            {
                
                (estadoFormularioSolicitud)?
                <Formulario_ProductosServicios />
                :
                ''
            }
            {
                (estadoUnidadGasto)?
                <Registro_Unidad_Gasto />
                :
                ''
            }
            {
                (estadoVerEmpresas)?
                <Mostrar_tarjetas />
                :
                ''
            }
            {
                (estadoHistorialSoli)?
                <Mostrar_tarjetas_solicitudes />
                :
                ''
            }{
                (estadoModifSoli)?
                <Mostrar_Tarjetas_Modificacion_Estados />
                :
                ''
            }
        </>
    )
}

export default Barra_Izquierda;