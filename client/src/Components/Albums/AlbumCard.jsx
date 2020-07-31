import React from 'react'
import {useHistory} from 'react-router-dom'

const AlbumCard = (props) => {
    let history = useHistory()

    const redirectToAlbumPage = () => {
        const {album} = props
        if(album.album_id){
            history.push(`/albums/id/${album.album_id}`)
        }else{
            history.push(`/albums/id/${album.id}`)
        }      
    }
    if(props){
        return(
            <div className='album-card'>
                <img 
                    src={props.album.album_img_url} 
                    onClick={redirectToAlbumPage}
                    alt={props.album.title} 
                    width={'200px'} 
                    height={'200px'}
                />
                <h4>{props.album.title}</h4>
                <h5>{props.album.artist}</h5>
                
            </div>
        )
    } 
}



export default AlbumCard