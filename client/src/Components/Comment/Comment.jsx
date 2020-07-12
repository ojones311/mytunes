import React from 'react'


const Comment = (props) => {
    return(
        <div>
            <h4>{props.commenter}</h4>
            <p>{props.body}</p>
        </div>
    )
}



export default Comment