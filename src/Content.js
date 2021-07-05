import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';

const Content = () => (
  <main>
     <Switch>
         <Route exact path="/"><Home /></Route>
         <Route path="/about"><About /></Route>
         <Route path="/users"><Users /></Route>
     </Switch>
  </main>
);

export default Content;