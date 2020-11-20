import React from "react";
import { Switch, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import FormTwo from "./Components/FormTwo/FormTwo"


export default (
    <Switch>
      <Route exact path="/" component={Form} />
      <Route path="/savechanges" component={FormTwo} />
    </Switch>
  );