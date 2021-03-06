import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import NavBar from './Components/Navigation/NavBar.jsx'
import LandingPage from './Components/Home/LandingPage.jsx'
import ProfilePage from './Components/ProfilePage/Profile.jsx'
import UserList from './Components/Users/UserList.jsx'
import AlbumList from './Components/Albums/AlbumList.jsx'
import AlbumPage from './Components/Albums/AlbumPage.jsx'
import AlbumSearch from './Components/Albums/AlbumSearch.jsx'
import AboutPage from './Components/About/About.jsx'
import secrets from './secrets.js'
import './App.css';
import axios from 'axios'


const qs = require('querystring')

class App extends Component {
  constructor(){
    super()
    this.state = {
      userId: '',
      isUserLoggedIn: false,
      wasInitialized: false,
      config: secrets.config,
      data: secrets.data
    }
  }

  setUser = (id) => {
    console.log('User clicked')
    this.setState({
        userId: id
    })
    
}

  getSpotifyCredentials = async () => {
    try{
        let response = await axios.post('https://accounts.spotify.com/api/token', qs.stringify(this.state.data), this.state.config)
        console.log('response =>', response.data)

        if(response.status === 200){
            return response.data
        } else {
            return null
        }

    }catch(error){
        console.log('err', error)
    }
    console.log(this.state.data)
}

   renderHomePage = (routeProps) => {
    return <LandingPage {...routeProps} userId={this.state.userId} setUser={this.setUser}/>
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

  renderAlbumSearchPage = (routeProps) => {
    return <AlbumSearch {...routeProps} userId={this.state.userId} getSpotifyCredentials={this.getSpotifyCredentials} config={this.state.config} data={this.state.data}/>
  }
  
  renderAboutPage = (routeProps) => {
    return <AboutPage {...routeProps}/>
  }
  render(){
    return (
      <div className='App'>
        <div className='header'>
        <NavBar userId={this.state.userId}/>
          <h2 id='main-title'>MyTunes</h2>
        </div>
        <div className='App-body'> 
          <Switch>
            <Route exact path= "/" render={this.renderHomePage}/>
            <Route path="/profile/:id" render={this.renderProfilePage}/>
            <Route path='/users' render={this.renderUsersPage} />
            <Route path='/albums/all' render={this.renderAlbumListPage} />
            <Route path='/albums/id/:id' render={this.renderAlbumPage} />
            <Route path='/albums/search_album' render={this.renderAlbumSearchPage}/>
            <Route path='/about' render={this.renderAboutPage} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
