import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';

const NotFoundPage = () => <div>404. Not Found</div>;

export default function({ app, history }) {
  const HomePage = dynamic({
    app,
    component: () => import('./pages/home'),
  });
  const CountPage = dynamic({
    app,
    models: () => [
      import('./models/count'),
    ],
    component: () => import('./pages/count'),
  });

  return <Router history={history}>
    <Switch>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/count" component={CountPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </Router>;
}
