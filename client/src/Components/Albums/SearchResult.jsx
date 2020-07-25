import React from 'react'

const SearchResult = (props) => {
    return(
        <div>
            <img src={props.image} alt='album pic'/>
            <h4>{props.name}</h4>
            <p>{props.releaseDate}</p>
            <p>{props.totalTracks}</p>
        </div>
    )
}


export default SearchResult