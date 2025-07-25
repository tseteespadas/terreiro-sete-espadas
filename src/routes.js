import React, { lazy, Suspense } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";

import HomePage from "./pages/home";

const GaleriaPage = lazy(() => import("./pages/galeria"));
const Cursos = lazy(() => import("./pages/cursos"));
const Rituais = lazy(() => import("./pages/rituais"));
const NotFound = lazy(() => import("./pages/notFound"));
const SubscriptionCancel = lazy(() => import("./pages/cancelSubscription"));

const ConfirmAccountPage = lazy(() => import("./pages/confirmAccount"));
const LoginPage = lazy(() => import("./pages/entrar"));
const Dashboard = lazy(() => import("./pages/areaLogada/dashboard"));
const Calendario = lazy(() => import("./pages/areaLogada/calendario"));
const GirasPage = lazy(() => import("./pages/areaLogada/giras"));
const Grupos = lazy(() => import("./pages/areaLogada/grupos"));
const RituaisLogada = lazy(() => import("./pages/areaLogada/rituais"));
const Cobrancas = lazy(() => import("./pages/areaLogada/cobrancas"));
const Usuarios = lazy(() => import("./pages/areaLogada/usuarios"));
const Biblioteca = lazy(() =>
  import("./pages/areaLogada/centrodeconhecimento")
);

import Loader from "./pages/Loader";

const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={Loader()}>
      {/* Main App */}
      <Switch>
        <Route exact path="/">
          <HomePage />
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
        <Route exact path="/rituais/:ritual">
          <Rituais />
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
        <PrivateRoute exact path="/rituais-admin" component={RituaisLogada} />
        <PrivateRoute exact path="/giras" component={GirasPage} />
        <PrivateRoute
          exact
          path="/rituais-admin/:ritual_id"
          component={RituaisLogada}
        />
        <PrivateRoute exact path="/cobrancas" component={Cobrancas} />
        <PrivateRoute exact path="/cobrancas/:group_id" component={Cobrancas} />
        <PrivateRoute exact path="/usuarios" component={Usuarios} />
        <PrivateRoute exact path="/biblioteca" component={Biblioteca} />
        <PrivateRoute
          exact
          path="/biblioteca/:content"
          component={Biblioteca}
        />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
