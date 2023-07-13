import './App.css';
import TopVector from './images/Top Vector.png'
import BottomVector from './images/Bottom Vector.png'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Auth from './pages/Auth/Auth';

function App() {
  return (
      <div className="App">
        <div className='circles' style={{top: '0%', right: '0'}}><img src={TopVector} alt='TopCircle' className='circles'/></div>
        <div className='circles' style={{bottom: '0%', left: '0'}}><img src={BottomVector} alt='BottomCircle' className='circles'/></div>
          <Routes>
              <Route exact path='/' Component={Home}/>
              <Route path='/profile' Component={Profile}/>
              <Route path='/auth' Component={Auth}/>
          </Routes>
      </div>
  );
}

export default App;
