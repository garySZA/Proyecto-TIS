import './estilos_contenedor_botones.css'

function Barra_Izquierda(){
    return(
        <div className="contenedor-botones-oculto" id="caja-botones">
            <button className="boton-barra"  id ="botonRegistroEmpresa"  >Registrar Empresa</button>
            <button className="boton-barra"  id="botonRegistroSolicitud">Registro de solicitud</button>            
            <button className="boton-barra"  id="botonRegistroUnidadDeGasto">Registrar Unidad de Gasto</button>
            <button className="boton-barra"  id="botonVerEmpresas">Ver Empresas</button>
            <button className="boton-barra"  id="botonHistorialSolicitudes">Historial de Solicitudes</button>
            <button className="boton-barra"  id="botonModificarEstados">Modificar Estados</button>
        </div>
    )
}

export default Barra_Izquierda;