import React,{Component} from 'react'


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
    
    render(){
        return(
            <div>
                <h2>Add albums with a form</h2>
            </div>
        )
    }
}





export default AddAlbum