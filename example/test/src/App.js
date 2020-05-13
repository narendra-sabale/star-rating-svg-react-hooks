import React, { useState } from 'react';
import StarRating from 'star-rating-svg-react-hooks'

function App() {
  const [rating, setRating] = useState(0)

  return (
    <div>
      <StarRating 
        noOfStars = {5}
        selectedRating = {rating}
        setSelectedRating = {setRating}
        starFillColor = {'red'}
        starEmptyColor = {'yellow'}
        starBorderColor = {'gray'}
        starSpacing = {'10px'}
        isReadOnly = {false}
        width = {"20"}
        height = {"20"}
      />
    </div>
  );
}

export default App;
