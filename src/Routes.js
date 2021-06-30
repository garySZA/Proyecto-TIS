import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


//Views Componets
import Login            from './Componentes/Login/Login';
import Presentation     from './Componentes/Presentation/Presentation';
import Administrador    from './Componentes/administrador/Administrador';
import Jefe             from './Componentes/jefe/Jefe';
import Secretaria       from './Componentes/secretaria/Secretaria';
import Usuario          from './Componentes/usuario/Usuario';
import Home             from './Componentes/Home/Home';
import NewUser          from './Componentes/Registro_de_Nuevos_Usuarios/new_user_registration'
import Empresas         from './Componentes/jefe/componets/Empresas/Empresas';
import Solicitud        from './Componentes/jefe/componets/Solicitudes/Solicitudes';
import UsuarioDB        from './Componentes/jefe/componets/Usuarios/Usuarios';
import UnidadGasto      from './Componentes/jefe/componets/UnidadGasto/UnidadGasto';
import EstadoSolicitud  from './Componentes/jefe/componets/EstadoSolicitudes/EstadoSolicitudes';
import RespuestaEmpresa from './Componentes/jefe/componets/RespuestaEmpresa/RespuestasEmpresa';
import Notificaciones   from  './Componentes/Notificaciones/Notificaciones';




const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/"                             exact component={Home}/>
                <Route path="/Presentation"                 exact component={Presentation}/> 
                <Route path="/Login"                        exact component={Login}/>
                <Route path="/Administrador"                exact component={Administrador}/>
                <Route path="/Jefe/:id"                     exact component={Jefe}/>
                <Route path="/Jefe/:id/Empresas"            exact component={Empresas}/>
                <Route path="/Jefe/:id/Solicitud"           exact component={Solicitud}/>
                <Route path="/Jefe/:id/Usuario"             exact component={UsuarioDB}/>
                <Route path="/Jefe/:id/UnidadGasto"         exact component={UnidadGasto}/>
                <Route path="/Jefe/:id/EstadoSolicitudes"   exact component={EstadoSolicitud}/>
                <Route path="/Jefe/:id/RespuestasEmpresas"  exact component={RespuestaEmpresa}/>
                <Route path="/Secretaria/:id"                   exact component={Secretaria}/>
                <Route path="/Usuario/:id"                  exact component={Usuario}/>
                <Route path="/NewUser"                      exact component={NewUser}/>
                <Route path="/Notificaciones"               exact component={Notificaciones}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;