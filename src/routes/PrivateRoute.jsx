import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useToken } from "../store";

const PrivateRoute = ({ component: Component, ...rest }) => {
  if (useToken()) {
    return (
      <Route {...rest}>
        <Component />
      </Route>
    );
  }
  return <Redirect to="/entrar" />
};

export default PrivateRoute;
