import React from 'react'


const Comment = (props) => {
    return(
        <div>
            <h4>{props.commenter}</h4>
            <p>{props.body}</p>
            <button onClick={()=> props.deleteComment(props.id)}>Delete</button>
        </div>
    )
}



export default Comment