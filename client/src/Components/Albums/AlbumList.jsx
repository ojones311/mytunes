import React,{Component} from 'react'
import AlbumCard from '../Albums/AlbumCard.jsx'
import url from '../../apiURL'
import '../Styles/Albums/AlbumList.css'
import axios from 'axios'


class AlbumList extends Component {
    constructor(props){
        super(props)
        this.state = {
            userId: props.userId,
            albumList: []
        }
    }
    
    componentDidMount = async () => {
       await this.fetchAlbumList()
       await this.getUserList()
    }
    
    getUserList = async () => {
        try{
            let response = await axios.get(`${url}/users/all`)
            const allUsers = response.data.payload
            console.log(allUsers)
            return allUsers
        }catch(error){
            console.log('err', error)
        }
    }

    fetchAlbumList = async () => {
        try{
            let response = await axios.get(`${url}/albums/relations/undeleted`)
            const albums = response.data.payload
           let filteredArr = await this.filterAlbumList(albums)
            this.setState({
                albumList: filteredArr
            })
            console.log('albums',albums)
        }catch(error){
            console.log('err', error)
        }
    }
    filterAlbumList = async (albums) => {
        let ids = {}
        let filteredArr = []
        albums.map((elem,i) => {
            if(!ids[elem.album_id]){
                ids[elem.album_id] = true
                filteredArr.push(elem)
            }
        })
        return filteredArr
    }
    
    render(){
        const {albumList} = this.state
        return(
            <div className='albums-content'>
                <div className='album_list-header'>
                    <h2>Album List</h2>
                </div>
                <div className='album_list'>
                    {albumList.map((album) => {
                        return(
                            <AlbumCard key={album.id} album={album}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}



export default AlbumList