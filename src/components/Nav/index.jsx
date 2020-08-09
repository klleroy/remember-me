import React from 'react';
import './style.css';

const Nav = props => (
  <nav>
    <ul>
      <li className="brand animated lightSpeedIn">
        <a href="/remember-me/">{props.title}</a>
      </li>

      <li id="tf">{props.trueFalse}</li>

      <li id="curScore">Current Score: {props.score}</li>

      <li id="topScore">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;