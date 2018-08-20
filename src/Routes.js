import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Warnings from "./components/Warnings";
import Days from "./components/Days";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/warnings" component={Warnings} />
    <Route path="/days" component={Days} />
  </Switch>
);

export default Main;
