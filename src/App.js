import logo from './logo-svg.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlus, faCircle } from '@fortawesome/free-solid-svg-icons'
import Feed from './routes/feed.component';
import LandingPage from './routes/LandingPage/landing-page.component';
// import UserPage from './routes/UserPage/user-page.component';
// import ONGPage from './routes/ONGPage/ong-page.component';

library.add(fab, faPlus, faCircle);

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}>

      </Route>

      <Route path="/feed" element={<Feed />} />
      {/* <Route path='utilizator' element={<UserPage />}>

      </Route>
      <Route path='ong' element={<ONGPage />}></Route> */}
    </Routes>
  );
}

export default App;
