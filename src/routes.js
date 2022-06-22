import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const HomePage = React.lazy(() => import('./pages/home'));
const GirasPage = React.lazy(() => import('./pages/giras'));
const GaleriaPage = React.lazy(() => import('./pages/galeria'));
const Cursos = React.lazy(() => import('./pages/cursos'));
const NotFound = React.lazy(() => import('./pages/notFound'));
const SubscriptionCancel = React.lazy(() => import('./pages/cancelSubscription'));

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
      <Route exact path="/notificacoes/cancelar/:id">
        <SubscriptionCancel />
      </Route>
      <Route exact path="/cursos/:course">
        <Cursos />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;