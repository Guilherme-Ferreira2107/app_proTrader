import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import InitialApp from "../pages/initialApp";
import Main from "../pages/main";
import Login from "../pages/user/login";
import Register from "../pages/user/register";
import Recover from "../pages/user/recover";
import Performances from "../pages/performances";
import Historic from "../pages/historic";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={InitialApp} />
        <Route path="/main" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/recover" exact component={Recover} />
        <Route path="/performances" exact component={Performances} />
        <Route path="/historic" exact component={Historic} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
