import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import NavBar from './Components/Navigation/NavBar.jsx'
import LandingPage from './Components/Home/LandingPage.jsx'
import ProfilePage from './Components/ProfilePage/Profile.jsx'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      userId: null,
      isUserLoggedIn: false,
      wasInitialized: false
    }
  }
   renderHomePage = (routeProps) => {
    return <LandingPage {...routeProps} />
  }

  renderProfilePage = (routeProps) => {
    return <ProfilePage {...routeProps} userId={this.state.userId}/>
  }

  render(){
    return (
      <div>
        <h1>Hello World</h1>
        <NavBar />
        <div> 
          <Switch>
            <Route exact path= "/" render={this.renderHomePage}/>
            <Route path="/profile/:id" render={this.renderProfilePage}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
