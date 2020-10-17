import React,{useState} from 'react';
import './App.css';
import Filter from './components/Filter/Filter';
import MovieList from './components/MovieList/MovieList';
import {MoviesData} from './components/MovieData/MoviesData';
import AddMovie from './components/AddMovie/AddMovie';
import RatingStars from './components/Stars/Stars';


function App() {
const  [movies, setMovies] = useState(MoviesData)
const [InputSearch, setInputSearch] = useState('')
const [rating, setRating] = useState(null);
const [filteredMovies, setFilteredMovies] = useState(movies)
const filterMultipleCriteria = (movies, rating, name) => {
    if(rating !== null) {
     setFilteredMovies(movies.filter(movie => movie.Rating === rating))
    }
    else if(name !== ''){
        setFilteredMovies(movies.filter(movie =>movie.title.toLowerCase().includes(InputSearch.toLowerCase()) && movie.Rating === rating
        ))
    }  
    else {
        setFilteredMovies(movies)
    }
}

  return (
    <div className="App">
      <RatingStars Rating={rating} setRating={setRating} filterMovies={filterMultipleCriteria} movies={movies} />
      <Filter setInputSearch={setInputSearch}  />
    <MovieList 
    movies ={filteredMovies} InputSearch={InputSearch}
    />
    
    <AddMovie  setMovies={setMovies}
    movies={movies}
    />
    </div>
  );
}

export default App;
