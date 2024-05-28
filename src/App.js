import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Home/Home';

function App() {
  return (
    <>
    <div className=''>
    <Router>
    <Routes>
      <Route path='/' element={<Signup />}  />
      <Route path='/login' element={<Login />}  />
      <Route  path='/home' element={<Home />} />
    </Routes>
  </Router>
    </div>
  

    </>
  );
}

export default App;
