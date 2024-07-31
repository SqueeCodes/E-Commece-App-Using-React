import Nav from './componants/Nav';
import './index.css';
import Home from './Pages/Home';
import Footer from './componants/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className='App'>
        <Route />
        <Nav />
        <Home />
        <Footer />
      </div>
    </Router>

  );
};

export default App;