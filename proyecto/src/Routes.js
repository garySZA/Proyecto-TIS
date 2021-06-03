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

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/"              exact component={Presentation}/> 
                <Route path="/Login"         exact component={Login}/>
                <Route path="/Administrador" exact component={Administrador}/>
                <Route path="/Jefe"          exact component={Jefe}/>
                <Route path="/Secretaria"    exact component={Secretaria}/>
                <Route path="/Usuario"       exact component={Usuario}/>
                <Route path="/Home"          exact component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;