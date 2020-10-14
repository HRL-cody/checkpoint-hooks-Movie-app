import React from 'react'
import './MovieList.css'
import MovieCard from '../MovieCard/MovieCard';





function  MovieList  ({movies,InputSearch}) {
    // .filter(movie => movie.title.toLowerCase().includes(InputSearch))
    return (
        <div>
            {movies.filter(movie =>movie.title.toLowerCase().includes(InputSearch.toLowerCase())).map((movie,i) =>
                <MovieCard
                movie={movie} key={i}
                 />
            )}
        </div>
    )
}
export default MovieList;