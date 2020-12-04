import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { LOCATIONS } from './constants';

import Nav from './Nav';
import Welcome from './Welcome';
import Secured from './Secured';

const App = () => (
  <BrowserRouter>
    <Nav />
    <Route exact path={LOCATIONS.HOME} component={Welcome} />
    <Route path={LOCATIONS.PRIVATE} component={Secured} />
  </BrowserRouter>
);

export default App;
