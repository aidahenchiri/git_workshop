import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { get_movie } from '../JS/Action/ActionMovies'
const Home = () => {
  const dispatch=useDispatch()
  return (
    <div>
     <Link to="/Login"><button > Login</button></Link> 
     <Link to="/Register">  <button>Register</button></Link>
     <Link to="/MovieList"><button onClick={()=>dispatch(get_movie())}>Movie List</button></Link>
    </div>
  )
}

export default Home