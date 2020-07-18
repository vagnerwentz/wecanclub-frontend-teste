import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import ListUsers from '../pages/ListUsers';
import Dashboard from '../pages/Dashboard';
import EditUser from '../pages/EditUser';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/list" exact component={ListUsers} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/edit/:id" component={EditUser} />
  </Switch>
);

export default Routes;
