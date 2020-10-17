import React from 'react'
import './MovieList.css'
import MovieCard from '../MovieCard/MovieCard';



function  MovieList  ({movies}) {

    return (
        <div>
            {movies.map((movie, i) => <MovieCard movie={movie} key={i} />)}
        </div>
    )
}
export default MovieList;

