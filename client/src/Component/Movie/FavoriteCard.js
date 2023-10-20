import React from 'react'
import Card from 'react-bootstrap/Card';

const FavoriteCard = ({favorite}) => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={favorite.PostUrl}/>
      <Card.Body>
        <Card.Title>{favorite.Title}</Card.Title>
        <Card.Text>
        {favorite.Descrption}
        </Card.Text>
        <Card.Text> {favorite.Rate}
        </Card.Text>
        <Card.Text>
        {favorite.Trailer}
        </Card.Text>

      </Card.Body>
    </Card></div>
  )
}

export default FavoriteCard