import Nav from './componants/Nav';
import './index.css';
import Home from './Pages/Home';
import Footer from './componants/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Books from './Pages/Books';
import { books } from "./data";
import BookInfo from './Pages/BookInfo';
import Book from './componants/UI/Book';



function App(book) {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/Books" exact render={() => <Books books={books} />} />
        <Route path={`/books/${book.id}`} render={() => <BookInfo books={books} />} />
        <Footer />
      </div>
    </Router>

  );
};

export default App;