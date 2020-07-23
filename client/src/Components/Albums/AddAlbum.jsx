import React,{Component} from 'react'
const qs = require('querystring')

class AddAlbum extends Component {
    constructor(props){
        super(props)
        this.state = {
            userId: props.userId,
            searchBarValue: '',
            searchResults: [],
            submittedSearch: false
        }
    }

    componentDidMount = async () => {
        // this.props.getSpotifyCredentials()
    }
    
    render(){
        return(
            <div>
                <h2>Add albums with a form</h2>
            </div>
        )
    }
}





export default AddAlbum