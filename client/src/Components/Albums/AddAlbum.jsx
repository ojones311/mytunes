import React,{Component} from 'react'
import axios from 'axios'

class AddAlbum extends Component {
    constructor(props){
        super(props)
        this.state = {
            userId: props.userId,
            credentials: null,
            searchBarValue: '',
            searchResults: [],
            submittedSearch: false,
            credentialsNeeded: true,
            searchType: 'album',
            spotifyId:''
        }
    }

    componentDidMount = async () => {
        await this.updateCredentials()
        // await this.getSpotifyId()
    }

    handleAlbumSearch = async(event) => {
        event.preventDefault()
        if(this.isFormCompleted()){
            console.log('Album Search pending')
            this.setState({
                submittedSearch: true
            })
           await this.getSpotifyId()
           this.clearSearchBar()
        }else{
            console.log('Complete search to continue')
        }
    }

    handleArtistSearch =  async(event) => {
        event.preventDefault()
        if(this.isFormCompleted()){
            console.log('Artist Search pending')
            this.setState({
                submittedSearch: true
            })
           await this.getSpotifyId()

            this.clearSearchBar()
        }else{
            console.log('Complete search to continue')
        }
    }
    handleSearchValue = async (event) => {
        this.setState({
            searchBarValue: event.target.value
        })
    }
    isFormCompleted = () => {
        const {searchBarValue} = this.state
        return(
            searchBarValue
        )
    }

    clearSearchBar = () => {
        console.log('Search cleared')
        this.setState({
            searchBarValue: ''
        })
    }

    updateCredentials = async() => {
        let updatedCredentials = await this.props.getSpotifyCredentials()
        console.log(updatedCredentials)
        this.setState({
            credentials: updatedCredentials
        })
    }

    getSpotifyId = async () => {
        const {credentials, searchBarValue} = this.state
        console.log('type',credentials.token_type)
        console.log('access', credentials.access_token)
        try{
            let response = await axios.get(`https://api.spotify.com/v1/search`, {
                params: {
                    q: searchBarValue,
                    type: 'artist',
                    limit: 1
                },
                headers: {
                    Authorization: credentials.token_type + ' ' + credentials.access_token
                }
            })  
            console.log('res = >', response.data) 
            let id = response.data.artists.items[0].id

            this.setState({
                spotifyId: id
            })
        }catch(error){
            console.log('err', error)
        }
    }

    getAlbumsByArtistId =  async () => {
        const {credentials, spotifyId} = this.state
        try{
            let response = await axios.get(`https://api.spotify.com/v1/artists/${spotifyId}albums`, {   
                headers: {
                    Authorization: credentials.token_type + ' ' + credentials.access_token
                }
            })
            console.log(response.data)
        }catch(error){
            console.log('err', error)
        }
    }

    getAlbumByAlbumId = async () => {
        const {spotifyId} = this.state
        try{
            let  response = await axios.get(`https://api/spotify.com/v1/albums${spotifyId}`)
        }catch(error){
            console.log('err', error)
        }
    }
    searchByArtist = () => {
        this.setState({
            searchType: 'artist'
        })
    }

    searchByAlbum  = () => {
        this.setState({
            searchType: 'album'
        })
    }

    render(){
        const {searchType ,searchBarValue, searchResults} = this.state
        if(searchType === 'album'){
            return(
                <div>
                    <h2>Search by artist or album </h2>
                    <button onClick={this.searchByArtist}>Search by artist</button>
                    <button onClick={this.searchByAlbum}>Search by album name</button>
                    <div>
                        <form onSubmit={this.handleAlbumSearch}>
                            <input id='album-search' type='text' placeholder='Enter album name' size={'50'} onChange={this.handleSearchValue} value={searchBarValue}></input>
                            <button type='submit'>Search</button>
                        </form>
                    </div>
                </div>
            )
        }else if(searchType === 'artist'){
            return(
                <div>
                    <h2>Search by artist or album </h2>
                    <button onClick={this.searchByArtist}>Search by artist</button>
                    <button onClick={this.searchByAlbum}>Search by album name</button>
                    <div>
                        <form onSubmit={this.handleArtistSearch}>
                            <input id='album-search' type='text' placeholder='Enter artist name' size={'50'} onChange={this.handleSearchValue} value={searchBarValue}></input>
                            <button type='submit'>Search</button>
                        </form>
                    </div>
                </div>
            )
        }      
    }
}





export default AddAlbum