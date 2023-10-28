import { Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlus, faCircle, faMagnifyingGlass, faTrash, faPenToSquare, faX } from '@fortawesome/free-solid-svg-icons'
import LandingPage from './routes/LandingPage/landing-page.component';
import Navbar from './routes/navigation/nav.component';
import Feed from './routes/feed.component';
import UserMap from './routes/UserMap/user-map.component';
import OngProfile from './routes/OngProfile/ong-profile.component'
import Dashboard from './routes/dashboard.component';

import './App.css';

library.add(fab, faPlus, faCircle, faMagnifyingGlass, faTrash, faPenToSquare, faX);

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path='utilizator' element={<Navbar links={[{ name: "Feed", path: "feed" }, { name: "Harta", path: "harta" }]} />} >
        <Route path="feed" element={<Feed />} />
        <Route path="harta" element={<UserMap />} />
      </Route>

      <Route path='ong' element={<Navbar links={[{name: "Profil", path: "profil"}, {name: "Dashboard", path:"dashboard"}]} />} >
        <Route path='profil' element={<OngProfile />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Route>

    </Routes >
  );
}

export default App;
