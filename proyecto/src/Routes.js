import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


//Views Componets
import Login         from './Componentes/Login/Login';
import Presentation  from './Componentes/Presentation/Presentation';
import Administrador from './Componentes/administrador/Administrador';
import Jefe          from './Componentes/jefe/Jefe';
import Secretaria    from './Componentes/secretaria/Secretaria';
import Usuario       from './Componentes/usuario/Usuario';
import Home          from './Componentes/Home/Home';
import NewUser       from './Componentes/Registro_de_Nuevos_Usuarios/new_user_registration'

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/"              exact component={Home}/>
                <Route path="/Presentation"  exact component={Presentation}/> 
                <Route path="/Login"         exact component={Login}/>
                <Route path="/Administrador" exact component={Administrador}/>
                <Route path="/Jefe/:id"      exact component={Jefe}/>
                <Route path="/Secretaria"    exact component={Secretaria}/>
                <Route path="/Usuario"       exact component={Usuario}/>
                <Route path="/NewUser"       exact component={NewUser}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;