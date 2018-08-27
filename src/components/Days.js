import React from "react";
import { Switch, Route } from "react-router-dom";
import FullDays from "../containers/FullDays";
import Day from "../containers/Day";

const Days = () => (
  <Switch>
    <Route exact path="/days" component={FullDays} />
    <Route exact path="/days/:number" component={Day} />
  </Switch>
);

export default Days;
