import React,{Component} from 'react'
import axios from 'axios'

class AddAlbum extends Component {
    constructor(props){
        super(props)
        this.state = {
            userId: props.userId,
            searchBarValue: '',
            searchResults: [],
            submittedSearch: false,
            credentialsNeeded: true,
            config: props.config,
            data: props.data,
            searchType:''
        }
    }

    componentDidMount = async () => {
        // this.props.getSpotifyCredentials()
    }

    // evaluateCredentials = async() => {
    //     const {config, data} = this.state
    //     console.log('config =>', config)
    //     console.log('data =>', data)
    //     this.props.getSpotifyCredentials()
    // }

    handleSearch = async(event) => {
        event.preventDefault()
        if(this.isFormCompleted()){
            console.log('Search pending')
            this.setState({
                submittedSearch: true
            })
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
    getSpotifyId = async () => {
        try{
            let response = await axios.get() 
        }catch(error){
            console.log('err', error)
        }
    }

    getAlbumFromSpotify =  async (token, type) => {
        try{
            let response = await axios.get(`https://api.spotify.com/v1/albums/${'392p3shh2jkxUxY2VHvlH8'}`, {headers: {Authorization: type + '' +token}})
            console.log(response.data)
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
                    <button onClick={this.searchCriteriaChange}>Search by artist</button>
                    <button onClick={}>Search by album name</button>
                    <div>
                        <form onSubmit={this.handleSearch}>
                            <input id='album-search' type='text' placeholder='Enter album name' size={'50'} onChange={this.handleSearchValue} value={searchBarValue}></input>
                            <button type='submit'>Search</button>
                        </form>
                    </div>
                </div>
            )
        }else if(searchType === 'artist'){

        }      
    }
}





export default AddAlbum