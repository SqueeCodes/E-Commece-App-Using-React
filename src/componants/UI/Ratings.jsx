import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Ratings = ({ rating = 0 }) => {
  const validRating = Math.max(0, Math.min(rating, 5)); // Ensure rating is between 0 and 5

  return (
    <div className="book__ratings">
      {new Array(Math.floor(validRating)).fill(0).map((_, index) => (
        <FontAwesomeIcon icon="star" key={index} />
      ))}
      {!Number.isInteger(validRating) && <FontAwesomeIcon icon="star-half-alt" />}
      {new Array(5 - Math.ceil(validRating)).fill(0).map((_, index) => (
        <FontAwesomeIcon icon="star" key={`empty-${index}`} className="empty-star" />
      ))}
    </div>
  );
};

export default Ratings;
