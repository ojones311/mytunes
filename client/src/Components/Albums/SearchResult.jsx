import React from 'react'
import AddAlbum from  './AddAlbum.jsx'
import '../Styles/Albums/AlbumCard.css'


const SearchResult = ({id, userId, artist, name, image, releaseDate, totalTracks}) => {
    return(
        <div>
            <img src={image} alt='album pic'/>
            <h4 id='album-title'>{name}</h4>
            <h4 id='album-artist'>{artist}</h4>
            <h5 id='album-info'>Release Date: {releaseDate}</h5>
            <h5 id='album-info'>{totalTracks} Tracks</h5>
            <div>
                <AddAlbum id={id} userId={userId} artist={artist} name={name} image={image}/>
            </div>
        </div>
    )
}


export default SearchResult