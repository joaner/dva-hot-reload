import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import NormalPage from './pages/normal';

const NotFoundPage = () => <div>404. Not Found</div>;

export default function({ app, history }) {
  const HomePage = dynamic({
    app,
    component: () => import('./pages/normal'),
    // Promise.resolve(<div>Hello Dva.</div>),
  });
  const CountPage = dynamic({
    app,
    /*
    models: () => [
      import('./models/count'),
    ],
    */
    component: () => import('./pages/count'),
  });

  return <Router history={history}>
    <Switch>
      <Route path="/hello" componet={HomePage} />
      <Route path="/count" componet={CountPage} />
      <Route path="/normal" component={NormalPage} />
      <Route path="/" exact={true} component={HomePage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </Router>;
}
