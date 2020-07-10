import React from 'react'
import {Link} from 'react-router-dom'

const AlbumCard = (props) => {

    return(
        <div className='album-card'>
            <img src={props.album.album_img_url} alt={props.album.title} width={'200px'} height={'200px'}/>
            <h4>{props.album.title}</h4>
            <h5>{props.album.artist}</h5>
        </div>
    )
}



export default AlbumCard