import logo from './logo-svg.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlus, faCircle } from '@fortawesome/free-solid-svg-icons'
import Feed from './routes/feed.component';

library.add(fab, faPlus, faCircle);

function App() {
  return (
   <Routes>
    <Route path="/" element={<LandingPage/>}>
      {/* <Route path='utilizator' element={<UserPage/>}>

      </Route>
      <Route path='ong' element={<ONGPage/>}></Route> */}
    </Route>
   </Routes>
  );
}

export default App;
