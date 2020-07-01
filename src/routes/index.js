import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import InitialApp from '../components/pages/initialApp'
import Main from '../components/pages/main'
import Login from '../components/pages/user/login'
import Register from '../components/pages/user/register'
import Recover from '../components/pages/user/recover'
import Calculation from '../components/pages/calculations'
import Performances from '../components/pages/performances'
import Historic from '../components/pages/historic'

class Routes extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={InitialApp} />
                    <Route path="/main" exact component={Main} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/recover" exact component={Recover} />
                    <Route path="/calculations" exact component={Calculation} />
                    <Route path="/performances" exact component={Performances} />
                    <Route path="/historic" exact component={Historic} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;