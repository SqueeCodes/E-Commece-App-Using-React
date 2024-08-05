import Nav from "./componants/Nav";
import "./index.css";
import Home from "./Pages/Home";
import Footer from "./componants/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./Pages/Books";
import { books } from "./data";
import BookInfo from "./Pages/BookInfo";
import Book from "./componants/UI/Book";
import Cart from "./Pages/Cart";
import { useEffect, useState } from "react";

function App(book) {
  const [cart, setCart] = useState([]);

  function addItemToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Route path="/" exact component={Home} />
        <Route path="/Books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => <BookInfo books={books} addItemToCart={addItemToCart} />}
        />
        <Route
          path="/cart"
          render={() => 
            <Cart
              books={books}
              cart={cart}
              changeQuantity={changeQuantity}
              removeItem={removeItem}
            />
          }
        />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
