import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/home-page';
import NotFoundPage from '../pages/not-found-page';

/**
 * @summary List of all authenticated routes.
 */

const AuthRoutes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default AuthRoutes;
