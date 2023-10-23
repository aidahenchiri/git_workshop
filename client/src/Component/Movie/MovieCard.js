import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deletemovie, get_byId, get_movie } from '../../JS/Action/ActionMovies';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { favorite } from '../../JS/Action/Action';
import { useState } from 'react';

function MovieCard({Movie}) {
  const user=useSelector((state)=>state.userReducer.user  )
  const [userId,setUserId]=useState(user._id)
  const dispatch=useDispatch()
  const handleDeleteMovie = async (_id) => {
    try {
      await dispatch(deletemovie(_id));
      await dispatch(get_movie());
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  const handleFavorit = async (userId,Movie) => {
    try {
      await dispatch(favorite(userId,Movie));
      
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Movie.PostUrl}/>
      <Card.Body>
        <Card.Title>{Movie.Title}</Card.Title>
        <Card.Text>
        {Movie.Descrption}
        </Card.Text>
        <Card.Text> {Movie.Rate}
        </Card.Text>
        <Card.Text>
        {Movie.Trailer}
        </Card.Text>
        <Link to={`/Details/${Movie._id}`}>  <Button onClick={()=>dispatch(get_byId(Movie._id))} >Go film</Button></Link>  
        <Button variant="primary" onClick={() =>handleDeleteMovie(Movie._id)}>delete</Button>
       <Button variant="primary" onClick={() =>handleFavorit(userId,Movie)}>add to favorite</Button>

      </Card.Body>
    </Card>
  );
}

export default MovieCard;