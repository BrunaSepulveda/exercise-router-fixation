import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Content from './Content';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Content />
      </BrowserRouter>
    );
  }
}

export default App;