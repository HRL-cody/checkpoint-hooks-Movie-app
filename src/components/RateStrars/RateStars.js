import React from "react";

import './RateStars.css'
import ReactStars from "react-rating-stars-component";

const Stars = {
  size: 30,
  value: 1,
  edit: false
};

function RateStars() {
  return (
    <div className="App">

      <ReactStars {...Stars} />
    </div>
  );
}
export default RateStars;