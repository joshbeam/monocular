import config from '../config-local.js';
import React from 'react';
import Router from 'react-router';

import App from './components/app';

let {
  Route,
  DefaultRoute,
  Redirect
} = Router;

let routes = (
    <Route name="app" path="/" handler={App}>
    </Route>
);

function run() {
  Router.run(routes, function(Handler) {
    React.render(<Handler />, document.body);
  });
}

run();
