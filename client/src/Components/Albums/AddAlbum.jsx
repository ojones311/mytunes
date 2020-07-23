import React,{Component} from 'react'
import axios from 'axios'

class AddAlbum extends Component {
    constructor(props){
        super(props)
        this.state = {
            userId: props.userId,
            credentials: '',
            searchBarValue: '',
            searchResults: [],
            submittedSearch: false,
            credentialsNeeded: true,
            config: props.config,
            data: props.data,
            searchType: 'album'
        }
    }

    componentDidMount = async () => {
        // this.props.getSpotifyCredentials()
        // await this.updateCredentials()
        // await this.getSpotifyId()
    }

    handleAlbumSearch = async(event) => {
        event.preventDefault()
        if(this.isFormCompleted()){
            console.log('Search pending')
            this.setState({
                submittedSearch: true
            })
            this.getSpotifyId()

            this.clearSearchBar()
        }else{
            console.log('Complete search to continue')
        }
    }
    handleArtistSearch =  async(event) => {
        
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
        const {config, data} = this.state
        // console.log('config =>', config)
        // console.log('data =>', data)
        let credentials = await this.props.getSpotifyCredentials()
        console.log(credentials)
        this.setState({
            credentials: credentials
        })
    }
    getSpotifyId = async () => {
        const {credentials} = this.state
        console.log(credentials)
        try{
            let response = await axios.get('https://api.spotify.com/v1/search', {headers: {Authorization: credentials.token_type + '' + credentials.access_token}})
            console.log('res = >', response) 
        }catch(error){
            console.log('err', error)
        }
    }

    // getAlbumFromSpotify =  async () => {
    //     const {config, data} = this.state
    //     try{
    //         let response = await axios.get(`https://api.spotify.com/v1/albums/${'392p3shh2jkxUxY2VHvlH8'}`, {headers: {Authorization: type + '' +token}})
    //         console.log(response.data)
    //     }catch(error){
    //         console.log('err', error)
    //     }
    // }
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
                        <form onSubmit={this.handleSearch}>
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
                        <form onSubmit={this.handleSearch}>
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