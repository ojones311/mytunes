import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import NavBar from './Components/Navigation/NavBar.jsx'

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      user : null,
      isUserLoggedIn: false,
      wasInitialized: false
    }
  }
  render(){
    return (
      <div>
        <h1>Hello World</h1>
        <NavBar />
      </div>
    )
  }
}

export default App;
