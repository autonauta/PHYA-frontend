import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// View Components
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Report from "./components/Report";
import Supervisor from "./components/pages/Supervisor";

import "./style.css";

// Functional Components

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/operador" exact component={Report} />
        <Route path="/supervisor" exact component={Supervisor} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
