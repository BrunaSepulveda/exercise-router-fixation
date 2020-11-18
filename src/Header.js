import React from 'react';
import {Link} from 'react-router-dom';

const About = () => (
  <header>
      <nav>
          <span><Link to="/">Home</Link></span>
          <span><Link to='/about'>About</Link></span>
          <span><Link to='/users'>Users</Link></span>
      </nav>
  </header>
);

export default About;