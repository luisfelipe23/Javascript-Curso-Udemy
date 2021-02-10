import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './Pages/Main';
import LoginMedico from './Pages/Login-Medico';
import LoginPaciente from './Pages/Login-Paciente';

function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}></Route>
                <Route path="/login-medico" component={LoginMedico}></Route>
                <Route path="/login-paciente" component={LoginPaciente}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;