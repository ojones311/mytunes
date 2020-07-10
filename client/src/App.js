import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import NavBar from './Components/Navigation/NavBar.jsx'
import LandingPage from './Components/Home/LandingPage.jsx'
import ProfilePage from './Components/ProfilePage/Profile.jsx'
import UserList from './Components/Users/UserList.jsx'
import AlbumList from './Components/Albums/AlbumList.jsx'
import AlbumPage from './Components/Albums/AlbumPage.jsx'
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

  renderUsersPage = (routeProps) => {
    return <UserList {...routeProps} userId={this.state.userId} />
  }

  renderAlbumListPage = (routeProps) => {
    return <AlbumList {...routeProps} userId={this.state.userId}/>
  }

  renderAlbumPage = (routeProps) => {
    return <AlbumPage {...routeProps} userId={this.state.userId} />
  }

  render(){
    return (
      <div>
        <NavBar />
        <div> 
          <Switch>
            <Route exact path= "/" render={this.renderHomePage}/>
            <Route path="/profile" render={this.renderProfilePage}/>
            <Route path='/users' render={this.renderUsersPage} />
            <Route path='/albums/all' render={this.renderAlbumListPage} />
            <Route path='/albums/user/id' render={this.renderAlbumPage} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
