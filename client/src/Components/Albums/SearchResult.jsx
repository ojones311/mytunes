import React from 'react'
import AddAlbum from  './AddAlbum.jsx'
const SearchResult = ({id, userId,artist,name,image, releaseDate, totalTracks}) => {
    return(
        <div>
            <img src={image} alt='album pic'/>
            <h4>{name}</h4>
            <p>Release Date: {releaseDate}</p>
            <p>{totalTracks} Tracks</p>
            <div>
                <AddAlbum id={id} userId={userId} artist={artist} name={name} image={image}/>
            </div>
        </div>
    )
}


export default SearchResult