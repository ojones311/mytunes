import React from 'react'
import {useHistory} from 'react-router-dom'

const AlbumCard = ({album}) => {
    let history = useHistory()

    const redirectToAlbumPage = () => {
        if(album.album_id){
            history.push(`/albums/id/${album.album_id}`)
        }else{
            history.push(`/albums/id/${album.id}`)
        }      
    }
    if(album){
        return(
            <div className='album-card'>
                <img 
                    src={album.album_img_url} 
                    onClick={redirectToAlbumPage}
                    alt={album.title} 
                    width={'200px'} 
                    height={'200px'}
                />
                <h4>{album.title}</h4>
                <h5>{album.artist}</h5>
                
            </div>
        )
    } 
}



export default AlbumCard