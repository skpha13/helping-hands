import { Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlus, faCircle, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Feed from './routes/feed.component';
import LandingPage from './routes/LandingPage/landing-page.component';
import Dashboard from './routes/dashboard.component';
import NavbarONG from './components/navbar_ong.component';
import Navbar from './routes/navigation/nav.component';
import UserMap from './routes/UserMap/user-map.component';
// import ONGPage from './routes/ONGPage/ong-page.component';
import './App.css';

library.add(fab, faPlus, faCircle, faMagnifyingGlass);

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path='utilizator' element={<Navbar links={[{ name: "Feed", path: "feed" }, { name: "Harta", path: "harta" }]} />} >
        <Route path="feed" element={<Feed />} />
        <Route path="harta" element={<UserMap />} />
      </Route>

      <Route path='navbarong' element={<NavbarONG />} >
        <Route path='dashboard' element={<Dashboard />} />
      </Route>

      {/* <Route path='ong' element={<ONGPage />}></Route>  */}
    </Routes >
  );
}

export default App;
