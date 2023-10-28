import { Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlus, faCircle, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Feed from './routes/feed.component';
import LandingPage from './routes/LandingPage/landing-page.component';
import UserPage from './routes/UserPage/user-page.component';
// import ONGPage from './routes/ONGPage/ong-page.component';
import './App.css';

library.add(fab, faPlus, faCircle, faMagnifyingGlass);

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}>

      </Route>

      <Route path="/feed" element={<Feed />} />
       <Route path='utilizator' element={<UserPage />}>

      </Route>
      {/* <Route path='ong' element={<ONGPage />}></Route>  */}
    </Routes>
  );
}

export default App;
