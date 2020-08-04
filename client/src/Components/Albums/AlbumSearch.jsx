import React,{Component} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SearchResult from './SearchResult.jsx'
import '../Styles/Albums/AlbumSearch.css'
import axios from 'axios'



class AlbumSearch extends Component {
    constructor(props){
        super(props)
        this.state = {
            userId: props.userId,
            credentials: null,
            searchBarValue: '',
            searchResults: [],
            submittedSearch: false,
            spotifyId:''
        }
    }

//Fix display data 
    componentDidMount = async () => {
        await this.updateCredentials()
    }

    handleSearch = async(event) => {
        event.preventDefault()
        if(this.isFormCompleted()){
            console.log('Album Search pending')
            this.setState({
                submittedSearch: true
            })
           await this.searchSpotify('album')
        //    await this.getAlbumByAlbumId()
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
            searchBarValue.trim()
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

    searchSpotify = async (type) => {
        const {credentials, searchBarValue} = this.state
        console.log('type',credentials.token_type)
        console.log('access', credentials.access_token)
        try{
            let response = await axios.get(`https://api.spotify.com/v1/search`, {
                params: {
                    q: searchBarValue.trim(),
                    type: type,
                    limit: 10
                },
                headers: {
                    Authorization: credentials.token_type + ' ' + credentials.access_token
                }
            })  
            console.log('res = >', response.data) 
            let results = response.data.albums.items

            this.setState({
                searchResults: results
            })
        }catch(error){
            console.log('err', error)
        }
    }
// have one function that takes in url and pars and returns response.data
    
    render(){
        const {searchBarValue, searchResults} = this.state
        return(
                <div>
                    <h2>Search by artist or album </h2>
                    <div>
                        <Form onSubmit={this.handleSearch}>
                            <Form.Group>
                                <Form.Control size="lg" type="search" placeholder="Search by album name or artist" onChange={this.handleSearchValue} value={searchBarValue} />
                                <Button type='submit'>Search</Button>
                            </Form.Group>     
                        </Form>
                    </div>
                    <div className='search-results'>
                    {searchResults.map((elem) => {
                           return (
                               <SearchResult key={elem.id} id={elem.id} userId={this.state.userId} artist={elem.artists[0].name} name={elem.name} image={elem.images[1].url} releaseDate={elem.release_date} totalTracks={elem.total_tracks}/>
                           )
                        })}
                    </div>
                </div>
            )
    }
}





export default AlbumSearch