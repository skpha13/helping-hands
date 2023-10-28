import ReactDOM from 'react-dom'
import {Routes, Route} from 'react-router-dom';
import LandingPage from './routes/LandingPage/landing-page.component';
import ONGPage from './routes/ONGPage/ong-page.component';
import UserPage from './routes/UserPage/user-page.component';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(fab, faPlus);

function App() {
  return (
   <Routes>
    <Route path="/" element={<LandingPage/>}>

      
    </Route>
    <Route path='/ong' element={<ONGPage/>}></Route>
     <Route path='utilizator' element={<UserPage/>}>

  </Route>
   </Routes>
  );
}

export default App;
