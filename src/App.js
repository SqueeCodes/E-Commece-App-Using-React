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

function App() {
  const [cart, setCart] = useState([]);

  function addItemToCart(book) {
    setCart((prevCart) => {
      const bookExists = prevCart.find((item) => item.id === book.id);
      if (bookExists) {
        return prevCart.map((item) =>
          item.id === book.id ? { ...item, quuantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...book, quantity: 1 }];
    });
  }

  function changeQuantity(book, quantity) {
    setCart((prevCart) =>
      prevCart.map((item) =>
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
    setCart((prevCart) => prevCart.filter((book) => book.id !== item.id));
  }

  function numberOfItems() {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
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
          render={(props) => (
            <BookInfo
              {...props}
              books={books}
              cart={cart}
              addItemToCart={addItemToCart}
            />
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <Cart
              books={books}
              cart={cart}
              changeQuantity={changeQuantity}
              removeItem={removeItem}
            />
          )}
        />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
