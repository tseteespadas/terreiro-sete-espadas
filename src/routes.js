import React, { lazy, Suspense } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";

const HomePage = lazy(() => import("./pages/home"));
const GirasPage = lazy(() => import("./pages/giras"));
const GaleriaPage = lazy(() => import("./pages/galeria"));
const Cursos = lazy(() => import("./pages/cursos"));
const NotFound = lazy(() => import("./pages/notFound"));
const SubscriptionCancel = lazy(() => import("./pages/cancelSubscription"));

const ConfirmAccountPage = lazy(() => import("./pages/confirmAccount"));
const LoginPage = lazy(() => import("./pages/entrar"));
const Dashboard = lazy(() => import("./pages/areaLogada/dashboard"));
const Calendario = lazy(() => import("./pages/areaLogada/calendario"));
const Grupos = lazy(() => import("./pages/areaLogada/grupos"));
const Usuarios = lazy(() => import("./pages/areaLogada/usuarios"));

import Loader from "./pages/Loader";

const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={Loader()}>
      {/* Main App */}
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

        <Route exact path="/cadastro/confirmar/:id">
          <ConfirmAccountPage />
        </Route>

        {/* Área Logada */}
        <Route exact path="/entrar">
          <LoginPage />
        </Route>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/calendario" component={Calendario} />
        <PrivateRoute exact path="/grupos" component={Grupos} />
        <PrivateRoute exact path="/grupos/:group_id" component={Grupos} />
        <PrivateRoute exact path="/usuarios" component={Usuarios} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
