import React from 'react'
import { useSelector } from 'react-redux'

const Detail = () => {
    const movie=useSelector(state=>(state.MovieReducer.movie))

  return (
    <div>
<p>{movie.Title}</p>
<p>{movie.Descrption}</p>

    </div>
  )
}

export default Detail