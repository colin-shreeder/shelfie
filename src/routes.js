import React from "react";
import { Switch, Route } from "react-router-dom";
import Form from "./Components/Form/Form";
import FormTwo from "./Components/FormTwo/FormTwo"
import Dashboard from "./Components/Dashboard/Dashboard"


export default (
    <Switch>
      <Route component={Form} exact path="/"  />
      <Route component={Dashboard} path="/dashboard" />
      <Route component={FormTwo} path="/edit/:postid"/>
    </Switch>
  );