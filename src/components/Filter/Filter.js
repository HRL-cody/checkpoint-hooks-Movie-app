import React from 'react'
import './Filter.css'



export default function Filter({setInputSearch , rating}) {
    const handleChange = (e) => { 
    setInputSearch(e.target.value);

};
// const Rater = ({rate, testRating, filterByRate}) => {
//     const [value, setValue] = useState (rate)
//     const handleChange = val => {
//     setValue(val);
//     filterByRate(val);
//     };


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
