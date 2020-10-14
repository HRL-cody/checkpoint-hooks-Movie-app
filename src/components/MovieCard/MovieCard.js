import React from 'react'
import {Card ,ListGroup,ListGroupItem} from 'react-bootstrap';


function MovieCard ({movie}) {
    return (
        <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie.image} />
    <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
        {movie.Discription}
    </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush" >
    <ListGroupItem >{movie.Actors}</ListGroupItem>
    <ListGroupItem >Rating: {movie.rating}</ListGroupItem>
    </ListGroup>
</Card>
        </div>
    )
}
export default MovieCard;