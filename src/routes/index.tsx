import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/signin';
import SignUp from '../pages/signup';

import Solicitacoes from '../pages/solicitacoes';
import NovaSolicitacao from '../pages/nova-solicitacao';
import VisualizarSolicitacao from '../pages/visualizar-solicitacao';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/solicitacoes" component={Solicitacoes} isPrivate />
    <Route path="/nova-solicitacao" component={NovaSolicitacao} isPrivate />
    <Route
      path="/visualizar-solicitacao/:id"
      component={VisualizarSolicitacao}
      isPrivate
    />
  </Switch>
);

export default Routes;
