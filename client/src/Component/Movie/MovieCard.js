import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deletemovie, get_byId, get_movie } from '../../JS/Action/ActionMovies';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function MovieCard({movie}) {
  const dispatch=useDispatch()
  const handleDeleteMovie = async (_id) => {
    try {
      await dispatch(deletemovie(_id));
      await dispatch(get_movie());
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.PostUrl}/>
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>
        {movie.Descrption}
        </Card.Text>
        <Card.Text> {movie.Rate}
        </Card.Text>
        <Card.Text>
        {movie.Trailer}
        </Card.Text>
        <Link to={`/Details/${movie._id}`}>  <Button onClick={()=>dispatch(get_byId(movie._id))} >Go film</Button></Link>  
        <Button variant="primary" onClick={() =>handleDeleteMovie(movie._id)}>delete</Button>

      </Card.Body>
    </Card>
  );
}

export default MovieCard;