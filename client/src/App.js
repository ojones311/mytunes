import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import NavBar from './Components/Navigation/NavBar.jsx'
import LandingPage from './Components/Home/LandingPage.jsx'
import ProfilePage from './Components/ProfilePage/Profile.jsx'
import UserList from './Components/Users/UserList.jsx'
import AlbumList from './Components/Albums/AlbumList.jsx'
import AlbumPage from './Components/Albums/AlbumPage.jsx'
import AboutPage from './Components/About/About.jsx'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      userId: 1,
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

  renderUsersPage = (routeProps) => {
    return <UserList {...routeProps} userId={this.state.userId} />
  }

  renderAlbumListPage = (routeProps) => {
    return <AlbumList {...routeProps} userId={this.state.userId}/>
  }

  renderAlbumPage = (routeProps) => {
    return <AlbumPage {...routeProps} userId={this.state.userId} />
  }

  renderAboutPage = (routeProps) => {
    return <AboutPage {...routeProps}/>
  }
  render(){
    return (
      <div>
        <h2>Welcome to Mytunes</h2>
        <NavBar userId={this.state.userId}/>
        <div> 
          <Switch>
            <Route exact path= "/" render={this.renderHomePage}/>
            <Route path="/profile/:id" render={this.renderProfilePage}/>
            <Route path='/users' render={this.renderUsersPage} />
            <Route path='/albums/all' render={this.renderAlbumListPage} />
            <Route path='/albums/:id' render={this.renderAlbumPage} />
            <Route path='/about' render={this.renderAboutPage} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
