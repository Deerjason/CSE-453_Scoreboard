/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

import {
  CreateProjectile,
  Projectile,
  Leaderboards,
  Settings,
} from '../pageListAsync';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={CreateProjectile} />
        <Route exact path="/projectile/:identity" component={Projectile} />
        <Route exact path="/leaderboards" component={Leaderboards} />
        <Route exact path="/settings" component={Settings} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
