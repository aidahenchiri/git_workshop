import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_movie } from '../../JS/Action/ActionMovies'
import MovieCard from './MovieCard'
import NavbarMovie from './NavbarMovie'
const MovieList = () => {
    const movies=useSelector(state=>(state.MovieReducer.movie))
    const dispatch=useDispatch()
    useEffect(() => {
    dispatch(get_movie())
    }, [dispatch])
    console.log(movies)
return (
    <div>
                <NavbarMovie />
                {movies?.map(movie =><MovieCard movie={movie} key={movie._id} />)}


    </div>
)
}

export default MovieList