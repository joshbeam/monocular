import config from '../config-local.js';
import React from 'react';
import Router from 'react-router';

import App from './components/app';
import Info from './components/info';
import Feed from './components/feed';

let {
  Route,
  DefaultRoute,
  Redirect
} = Router;

let routes = (
    <Route name="app" path="/" handler={App}>
      <DefaultRoute name="feed" handler={Feed} />
      <Route name="info" path="/info" handler={Info} />
    </Route>
);

function run() {
  Router.run(routes, function(Handler) {
    React.render(<Handler />, document.body);
  });
}

run();
