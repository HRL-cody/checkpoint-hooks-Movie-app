import React,{useState} from 'react';
import './App.css';
import RateStars from './components/RateStrars/RateStars'
import Filter from './components/Filter/Filter';
import MovieList from './components/MovieList/MovieList';
import {MoviesData} from './components/MovieData/MoviesData';
import AddMovie from './components/AddMovie/AddMovie';

function App() {
const  [movies, setMovies] = useState(MoviesData)
const [InputSearch, setInputSearch] = useState('')

  return (
    <div className="App">
      <RateStars />
      <Filter setInputSearch={setInputSearch} />
    <MovieList 
    movies ={movies} InputSearch={InputSearch}
    
    />
    <AddMovie  setMovies={setMovies}
    movies={movies}
    />
    </div>
  );
}

export default App;
