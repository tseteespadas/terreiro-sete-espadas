import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const HomePage = React.lazy(() => import('./pages/home'));
const GirasPage = React.lazy(() => import('./pages/giras'));
const GaleriaPage = React.lazy(() => import('./pages/galeria'));
const NotFound = React.lazy(() => import('./pages/notFound'));

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/giras">
        <GirasPage />
      </Route>
      <Route exact path="/galeria">
        <GaleriaPage />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;