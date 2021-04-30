import './estilo_barra_superior.css';
import logo from './img/UMSS_logo.png'

function Barra_Sup() {
  return (
    <div>
      <header>
        <nav>
            <section className="contenedor nav">
                <div className="logo">
                    <img src={logo} alt=""></img>
                </div>
                <div className="enlaces-header">
                    <h1 className="titulo">Sistema de Cotizaciones</h1>
                </div>
                <div className="enlaces-header contenedor-iconos">
                    <a href="#">Iniciar Sesión<i class="fas fa-sign-in-alt icono-login"></i></a>
                    <a href="#">Registrarse<i class="fas fa-user-plus icono-login"></i></a>
                </div>
            </section>
          </nav>
        </header>
    </div>
  );
}

export default Barra_Sup;