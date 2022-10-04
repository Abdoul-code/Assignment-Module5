import React from 'react'
function Movie(props){
    const {title, genre, _id} = props
    return(
        <div>
          <h1>Title: {title}</h1>
          <h1> Genre:{genre}</h1>

        </div>
    )
}
export default Movie