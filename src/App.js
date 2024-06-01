import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Home/Home';
import Search from './search/Search';
import Library from './library/Library';
import Playlist from './Playlists/Playlist';
import Favourite from './Favourites/Favourite';

function App() {
  return (
    <>
    <div className=''>
    <Router>
    <Routes>
      <Route path='/' element={<Signup />}  />
      <Route path='/login' element={<Login />}  />
      <Route  path='/home' element={<Home />} />
      <Route  path='/search' element={<Search />}  />
      <Route  path='/library' element={<Library />} />
      <Route  path='/playlist' element={<Playlist />}  />
      <Route  path='/favourites' element={<Favourite />}  />

    </Routes>
  </Router>
    </div>
  

    </>
  );
}

export default App;
