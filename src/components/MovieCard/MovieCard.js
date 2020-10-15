import React from 'react'
import RatingStars from '../Stars/Stars'
import {Card ,ListGroup,ListGroupItem} from 'react-bootstrap';


function MovieCard ({movie, RateStars}) {
    return (
        
        <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie.image} />
    <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <RatingStars Rating={movie.Rating} />
    <Card.Text>
        {movie.Discription}
    </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush" >
    <ListGroupItem >{movie.Actors}</ListGroupItem>
    <ListGroupItem >Rating: {movie.rating}  </ListGroupItem>
    </ListGroup>
</Card>
        </div>
    )
}
export default MovieCard;