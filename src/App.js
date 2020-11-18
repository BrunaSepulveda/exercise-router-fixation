import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Route exact path="/"><Home /></Route>
      <Route path="/about"><About /></Route>
      <Route path="/users"><Users /></Route>
      </BrowserRouter>
    );
  }
}

export default App;