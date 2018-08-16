import React from "react";
import { Route, Switch } from "react-router-dom";
import CityDetails from "./containers/CityDetails";

export default ({ childProps }) => (
  <Switch>
    <Route
      exact
      path="/citydetials/:id"
      component={CityDetails}
      props={childProps}
    />
  </Switch>
);
