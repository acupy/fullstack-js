import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App.jsx';
import List from './components/List.jsx';
import Details from './components/Details.jsx';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={List} />
      <Route path="planet/:planetName" component={Details} />
    </Route>
  </Router>,
  document.getElementById('root')
);
