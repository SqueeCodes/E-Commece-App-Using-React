import Nav from './componants/Nav';
import './index.css';
import Home from './Pages/Home';
import Footer from './componants/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Books from './Pages/Books';
import { books } from "./data";
import BookInfo from './Pages/BookInfo';



function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/Books" exact render={() => <Books books={books} />} />
        <Route path="/books/1" render={() => <BookInfo books={books} />} />
        <Footer />
      </div>
    </Router>

  );
};

export default App;