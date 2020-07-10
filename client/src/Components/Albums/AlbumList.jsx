import React,{Component} from 'react'
import AlbumCard from '../Albums/AlbumCard.jsx'
import axios from 'axios'


class AlbumList extends Component {
    constructor(props){
        super(props)
        this.state = {
            userId: props.userId,
            albumList: []
        }
    }
    
    componentDidMount = async() => {
       await this.fetchAlbumList()
    }

    fetchAlbumList = async () => {
        try{
            let response = await axios.get('/albums/all')
            const albums =  response.data.payload
            this.setState({
                albumList: albums
            })
        }catch(error){
            console.log('err', error)
        }
    }
    
    render(){
        const {albumList} = this.state
        return(
            <>
                <div className='album_list-header'>
                    <h2>Album List</h2>
                    <p>Here we list every album in our db</p>
                </div>
                <div className='album_list'>
                    {albumList.map((album) => {
                        return(
                            <AlbumCard key={album.id} album={album}/>
                        )
                    })}
                </div>
            </>
        )
    }
}



export default AlbumList