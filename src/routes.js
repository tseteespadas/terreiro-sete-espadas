import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Desenvolvimento from './pages/desenvolvimento';
import Teologia from './pages/teologia';
import NotFound from './pages/notFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/desenvolvimento">
        <Desenvolvimento />
      </Route>
      <Route path="/teologia">
        <Teologia />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;