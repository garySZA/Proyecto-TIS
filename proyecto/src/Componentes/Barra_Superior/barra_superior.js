import './estilo_barra_superior.css';
import logo from './img/UMSS_logo.png'
import Barra_Izquierda from './Barra_Izquierda/Contenedor_Botones';

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
        <Barra_Izquierda />
    </div>
  );
}

export default Barra_Sup;

/*<a href="#">Iniciar Sesión<i className="fas fa-sign-in-alt icono-login"></i></a>
<a href="#">Registrarse<i className="fas fa-user-plus icono-login"></i></a> */