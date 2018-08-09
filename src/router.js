import React from 'react';
import dynamic from 'dva/dynamic';
import { Router, Route, Switch } from 'dva/router';

const routes = [
  {
    path: '/',
    component: () => import('./routes/IndexPage'),
  },
  {
    path: '/products',
    component: () => import('./routes/Products'),
  },
];

const RouterConfig = ({ history, app }) => {
  return (
    <Router history={history}>
      <Switch>
        {
          routes.map(({ path, ...dynamics }, key) => {
            return (
              <Route
                key={key}
                path={path}
                exact
                component={(dynamic)({ app, ...dynamics })} />
            );
          })
        }
      </Switch>
    </Router>
  );
}

export default RouterConfig;
