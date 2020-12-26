import React from 'react'
import {useHistory} from 'react-router-dom'
import '../Styles/Albums/AlbumCard.css'
import DeleteAlbum from './DeleteAlbum'


const AlbumCard = ({album, user, fetchUserAlbums}) => {
    let history = useHistory()

    const redirectToAlbumPage = () => {
        if(album.album_id){
            history.push(`/albums/id/${album.album_id}`)
        }else{
            history.push(`/albums/id/${album.id}`)
        }      
    }
    if(user){
        return(
            <div className='album-card'>
                <div className='album-img'>
                    <img 
                        src={album.album_img_url} 
                        onClick={redirectToAlbumPage}
                        alt={album.title} 
                        width={'200px'} 
                        height={'200px'}
                    />
                </div>
                <div className='album-info'>
                    <h4 id='album-title'>{album.title}</h4>
                    <h5 id='album-artist'>{album.artist}</h5>
                </div>
                <DeleteAlbum album={album} fetchUserAlbums={fetchUserAlbums} user={user}/>
            </div>
        )
    }else{
        return(
            <div className='album-card'>
                <div className='album-img'>
                    <img 
                        src={album.album_img_url} 
                        // onClick={redirectToAlbumPage}
                        alt={album.title} 
                        width={'200px'} 
                        height={'200px'}
                    />
                </div>
                <div className='album-info'>
                    <h4 id='album-title'>{album.title}</h4>
                    <h5 id='album-artist'>{album.artist}</h5>
                </div>
            </div>
        )
    }
}



export default AlbumCard