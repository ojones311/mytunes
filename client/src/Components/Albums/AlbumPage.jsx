import React, {Component} from 'react'


class AlbumPage extends Component {
    constructor(){
        super()
        this.state = {
            userId: '',
            albumId: '',

        }
    }
    render(){
        return(
            <div>
                <h2>Album Page</h2>
                <p>Where user can comment on the specific user album</p>
            </div>
        )
    }
}


export default AlbumPage