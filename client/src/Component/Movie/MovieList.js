import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_movie } from '../../JS/Action/ActionMovies'
import MovieCard from './MovieCard'
import NavbarMovie from './NavbarMovie'
import { Link } from 'react-router-dom'
const MovieList = () => {
    const movies=useSelector(state=>(state.MovieReducer.movie))
    const [movie,setMovie]=useState(movies)
    const dispatch=useDispatch()


    
    // useEffect(() => { dispatch(get_movie())
    //     setMovie(movies)
    //     }, [dispatch])
return (
    <div>
                <NavbarMovie movies={movies} setMovie={setMovie}/>
               <Link to="/favorite"><button>favorite liste </button></Link> 
                {movie?.map(Movie =><MovieCard Movie={Movie} key={Movie._id} />)}


    </div>
)
}

export default MovieList