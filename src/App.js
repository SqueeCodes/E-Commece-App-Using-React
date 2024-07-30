import Nav from './componants/Nav';
import Landing from './componants/Landing'
import Highlights from './componants/Highlights'
import './index.css';
import Featured from './componants/Featured';
import Discounted from './componants/Discounted';


function App() {
  return (
    <div className='App'>
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
    </div>
  )
}

export default App;