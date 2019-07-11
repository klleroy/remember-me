import React, { Component } from 'react';
import FriendCard from './components/FriendCard/index';
import Nav from './components/Nav/index';
import Title from './components/Title/index'
import Wrapper from './components/Wrapper/index';
import Row from './Row';
import Column from './Column';
import friends from './friends.json';
import './App.css';

// Shuffle Friends
shuffleFriends = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

// create Class
class App extends Component {
    // set state
    state = {
        friends,
        currentScore: 0,
        topScore: 0,
        trueFalse: '',
        clicked: []
    }
}

// handle click


// handle score increment


// handle game reset


// handle shuffle


// render screen


// export App
export default App;
