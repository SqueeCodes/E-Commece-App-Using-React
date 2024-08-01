import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Rating from "../componants/UI/Ratings";
import Price from "../componants/UI/Price";

const BookInfo = ({ books }) => {
  return (
    <div className="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
              <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
              <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src="" alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selecgtted--title"></h2>
                <Rating rating={books.rating} />
                <div className="book__selected--price">
                  <Price originalPrice={50} salePrice={null} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;