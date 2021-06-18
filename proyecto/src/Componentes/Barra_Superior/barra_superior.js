import './estilo_barra_superior.css';
import logo from './img/UMSS_logo.png'



function Barra_Sup() {
  return (
    <div>
      <header>
        <nav>
            <div className="contenedor-hamburguesa">
              <div className="boton-icono"><i className="fas fa-bars icono-hamburguesa" id="hamburguesa" onClick={() =>{
                document.getElementById('caja-botones').classList.toggle('contenedorS')
                document.getElementById('caja-botones').classList.toggle('contenedor-botones-oculto')
                
              }}></i>
              </div>
            </div>
            <section className="contenedor nav">
                <div className="logo">
                    <img src={logo} alt=""></img>
                </div>
                <div className="enlaces-header">
                    <h1 className="titulo">Sistema de Cotizaciones</h1>
                </div>
                <div className="enlaces-header contenedor-iconos">
                </div>
            </section>
          </nav>
        </header>
        <div className="contenedor-botones-oculto" id="caja-botones">
            <button className="boton-barra"  id ="botonRegistroEmpresa"  >Registrar Empresa</button>
            <button className="boton-barra"  id="botonRegistroSolicitud">Registro de solicitud</button>            
            <button className="boton-barra"  id="botonRegistroUnidadDeGasto">Registrar Unidad de Gasto</button>
            <button className="boton-barra"  id="botonVerEmpresas">Ver Empresas</button>
            <button className="boton-barra"  id="botonHistorialSolicitudes">Historial de Solicitudes</button>
            <button className="boton-barra"  id="botonModificarEstados">Modificar Estados</button>
        </div>
    </div>
  );
}

export default Barra_Sup;

/*<a href="#">Iniciar Sesión<i className="fas fa-sign-in-alt icono-login"></i></a>
<a href="#">Registrarse<i className="fas fa-user-plus icono-login"></i></a> */