import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FontAwesomeIcon key={i} icon={fullStar} style={{ color: '#FFD700' }} />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={emptyStar} style={{ color: '#FFD700' }} />);
    }
  }

  return <div>{stars}</div>;
};

export default StarRating;
