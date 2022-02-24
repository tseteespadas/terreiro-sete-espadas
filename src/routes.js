import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages/home';
import GirasPage from './pages/giras';
import GaleriaPage from './pages/galeria';
import NotFound from './pages/notFound';

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