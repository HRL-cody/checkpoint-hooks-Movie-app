import React from 'react'
import './Filter.css'



export default function Filter({setInputSearch , setFilteredMovies ,movies}) {
    const handleChange = (e) => { 
    setInputSearch(e.target.value);
};
    return (

    <div>
            <form action="input" className="search-bar">
	    <input type="search" name="search" pattern=".*\S.*" required onChange={handleChange}/>
	    <button className="search-btn" type="submit">
		    <span>Search</span>
	        </button>
            
        </form>
    </div>
    )
}
