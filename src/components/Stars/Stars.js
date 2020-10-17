import React from "react";
import { FaStar } from "react-icons/fa";
import "./Stars.css";

const RatingStars = ({Rating, setRating, filterMovies, movies}) => {
  return (
    <div className="App">
      <span>
        {[...Array(5)].map((Star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => {setRating(ratingValue); filterMovies(movies, ratingValue)}
                }
              />
              <FaStar
                className="star"
                size={30}
                color={ratingValue <= Rating ? "#ffc107" : "#e4e5e9"}
              />
            </label>
          );
        })}
      </span>
    </div>
  );
};

export default RatingStars;
RatingStars.defaultProps = {
  setRating: () => {},

};
