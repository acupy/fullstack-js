import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App.js';
import List from './components/List.js';
import Details from './components/Details.js';

import {
PageHeader
} from 'react-bootstrap';

//      <Route path="about" component={About}/>
//      <Route path="*" component={NoMatch}/>

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={List} />
      <Route path="planet/:planetName" component={Details}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
