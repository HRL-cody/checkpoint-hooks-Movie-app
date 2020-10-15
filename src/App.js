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
  return (
    <div className="App">
      <RatingStars Rating={rating} setRating={setRating} />
      <Filter setInputSearch={setInputSearch} rating={rating} />
    <MovieList 
    movies ={movies} InputSearch={InputSearch} rating={rating}
    />
    
    <AddMovie  setMovies={setMovies}
    movies={movies}
    />
    </div>
  );
}

export default App;
