import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
     <Link to="/Login"><button > Login</button></Link> 
     <Link to="/Register">  <button>Register</button></Link>
    </div>
  )
}

export default Home