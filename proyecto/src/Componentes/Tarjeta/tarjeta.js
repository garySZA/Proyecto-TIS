class tarjeta extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div>
                <div class="contenedor-principal-tarjeta">
                    <div class="contenedor-subtitulo-tarjeta subtitulos-tarjeta">
                        <label for="">Datos de Empresa</label>
                    </div>
                    <div>
                        <label for="" class="subtitulos-tarjeta campos-tarjeta">Nombre empresa: <label for="" class="contenido-tarjeta">kingDom</label></label>
                    </div>
                    <label for="" class="subtitulos-tarjeta campos-tarjeta">Rubro: <label for="" class="contenido-tarjeta">Comida rápida</label></label>
                    <label for="" class="subtitulos-tarjeta campos-tarjeta">Telefono: <label for="" class="contenido-tarjeta">4575403</label></label>
                    <label for="" class="subtitulos-tarjeta campos-tarjeta">Correo: <label for="" class="contenido-tarjeta">kingDom@gmail.com</label></label>
                    <label for="" class="subtitulos-tarjeta campos-tarjeta">Nit: <label for="" class="contenido-tarjeta">1010101010</label></label>
                    <div class="contenedor-subtitulo-tarjeta subtitulos-tarjeta">
                        <label for="">Datos de Persona Encargada</label>
                    </div>
                    <label for="" class="subtitulos-tarjeta campos-tarjeta">Nombre: <label for="" class="contenido-tarjeta">Juan Perez</label></label>
                    <label for="" class="subtitulos-tarjeta campos-tarjeta">telefono: <label for="" class="contenido-tarjeta">67573183</label></label>
                    <label for="" class="subtitulos-tarjeta campos-tarjeta">CI: <label for="" class="contenido-tarjeta">14113546</label></label>
                </div>
            </div>
        );
    }
}

export default tarjeta;