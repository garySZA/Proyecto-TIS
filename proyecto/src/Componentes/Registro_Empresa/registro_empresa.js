import './estilos_registro_empresa.css';


function Registro_Empresa() {
  return (
    <div className="contenedor-empresa" id="algo">
        <div className="contenedor-titulo">
            <h2 className="titulo-registro-empresa">
                Registro de Empresa
            </h2>
        </div>
        <div className="contenedor-campos">
            <div className="elementos">
                <div className="contenedor-elementos-subtitulo">
                    <i className="fas fa-building"></i>
                    <label for="nombre-empresa" className="subtitulo">Nombre de empresa:</label>
                </div>
                <input type="text" className="inputs" placeholder="Ingrese nombre aquí"></input>
            </div>
            <div className="elementos">
                <div className="contenedor-elementos-subtitulo">
                    <i className="fas fa-briefcase"></i>
                    <label for="nombre-empresa" className="subtitulo">Rubro de empresa:</label>
                </div>
                <input type="text" className="inputs" placeholder="Ingrese rubro aquí"></input>
            </div>
            <div className="elementos">
                <div className="contenedor-elementos-subtitulo">
                    <i className="fas fa-phone"></i>
                    <label for="nombre-empresa" className="subtitulo">Telefono de empresa:</label>
                </div>
                <input type="text" className="inputs" placeholder="Ingrese teléfono aquí"></input>
            </div>
            <div className="elementos">
                <div className="contenedor-elementos-subtitulo">
                    <i className="fas fa-at"></i>
                    <label className="nombre-empresa" className="subtitulo">Correo electrónico de empresa:</label>
                </div>
                <input type="text" className="inputs" placeholder="Ingrese correo aquí"></input>
            </div>
            <div className="elementos">
                <div className="contenedor-elementos-subtitulo">
                    <i className="fas fa-hashtag"></i>
                    <label for="nombre-empresa" className="subtitulo">NIT de empresa:</label>
                </div>
                <input type="text" className="inputs" placeholder="Ingrese nit aquí"></input>
            </div>
            <div className="elementos">
                <div className="contenedor-elementos-subtitulo">
                    <i className="fas fa-user"></i>
                    <label for="nombre-empresa" className="subtitulo">Nombre de persona encargada de empresa:</label>
                </div>
                <input type="text" className="inputs" placeholder="Ingrese nombre aquí"></input>
            </div>
            <div className="elementos">
                <div className="contenedor-elementos-subtitulo">
                    <i className="fas fa-phone"></i>
                    <label for="nombre-empresa" className="subtitulo">Telefono de persona encargada de empresa:</label>
                </div>
                <input type="text" className="inputs" placeholder="Ingrese teléfono aquí"></input>
            </div>
            <div className="elementos">
                <div className="contenedor-elementos-subtitulo">
                    <i className="fas fa-hashtag"></i>
                    <label for="nombre-empresa" className="subtitulo">CI de persona encargada de empresa:</label>
                </div>
                <input type="text" className="inputs" placeholder="Ingrese ci aquí"></input>
            </div>
            <div className="contenedor-botones">
                <button className="boton-cancelar boton">Cancelar</button>
                <button className="boton-registrar boton">Registrar</button>
            </div>
        </div>
    </div>
  );
}

export default Registro_Empresa;