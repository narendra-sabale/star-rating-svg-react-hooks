import React, {useState, useMemo} from 'react';
import Star from './star'

export default ({ noOfStars = 5, selectedRating, ...props }) => {
  const [noOfHoveredStars, setNoOfHoveredStars] = useState(null)
 
  const stars = useMemo(() => {
    return Array.from(Array(noOfStars), (_, i) => i+1)
  }, [noOfStars])

  return (
    <div>
      {stars.map((i) => 
        <Star
          key = {i}
          id = {i}
          fill = {i <= (noOfHoveredStars || selectedRating || 0)}
          setNoOfHoveredStars = {setNoOfHoveredStars}
          {...props}
        />
      )}
    </div>
  );
}