import Nav from './componants/Nav';
import './index.css';
import Home from './Pages/Home';
import Footer from './componants/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Books from './Pages/Books';
import { books } from "./data";



function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/Books" render={() => <Books books={books} />} />
        <Footer />
      </div>
    </Router>

  );
};

export default App;