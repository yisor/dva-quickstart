import React from 'react';
import dynamic from 'dva/dynamic';
import { routerRedux, Route, Switch } from 'dva/router';
import routes from './routes';

const { ConnectedRouter } = routerRedux;

const RouterConfig = ({ history, app }) => {
  return (
    <ConnectedRouter history={history}>
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
    </ConnectedRouter>
  );
}

export default RouterConfig;
