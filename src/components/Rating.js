
import React from 'react';

const Rating = ({ rating }) => {
  // determine star rating based on the rating prop
  let stars;
  if (rating >= 4.5) {
    stars = '⭐️⭐️⭐️⭐️⭐️';
  } else if (rating >= 3.5) {
    stars = '⭐️⭐️⭐️⭐️';
  } else if (rating >= 2.5) {
    stars = '⭐️⭐️⭐️';
  } else if (rating >= 1.5) {
    stars = '⭐️⭐️';
  } else {
    stars = '⭐️';
  }

  return <div>{stars}</div>;
};

export default Rating;
