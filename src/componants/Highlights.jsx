import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./UI/Highlights"

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          Why choose <span className="purple">Library</span>
          <div className="highlight__wrapper">
            <Highlight icon={<FontAwesomeIcon icon="bolt" />}
             title="Easy and Quick"
             para="Get access to the book you purchased online instantly."
            />
            <Highlight icon={<FontAwesomeIcon icon="book-open" />}
             title="10,000+ books"
             para="Library has all your favorite categories"
            />
            <Highlight icon={<FontAwesomeIcon icon="tags" />}
             title="Affordable"
             para="get your hands on popular books for as little as 10$"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights