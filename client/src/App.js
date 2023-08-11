import './App.css';
import TopVector from './images/Top Vector.png'
import BottomVector from './images/Bottom Vector.png'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Auth from './pages/Auth/Auth'
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state)=>state.authReducer.authData)
  // console.log(user)
  
  return (
      <div className="App">
        <div className='circles' style={{top: '0%', right: '0'}}><img src={TopVector} alt='TopCircle' className='circles'/></div>
        <div className='circles' style={{bottom: '0%', left: '0'}}><img src={BottomVector} alt='BottomCircle' className='circles'/></div>
          <Routes>
              <Route path='/' element={user? <Home/>: <Auth/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/auth' element={user?<Home/> : <Auth/>}/> 
              <Route path='/profile' element={<Profile/>}/>
          </Routes>
      </div>
  )
}

export default App
