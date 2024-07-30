import Nav from './componants/Nav';
import Landing from './componants/Landing'
import Highlights from './componants/Highlights'
import './index.css';
import Featured from './componants/Featured';


function App() {
  return (
    <div className='App'>
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
    </div>
  )
}

export default App;