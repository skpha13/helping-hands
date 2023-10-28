import ReactDOM from 'react-dom'
import LandingPage from './routes/LandingPage/landing-page.component';
import {Routes, Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(fab, faPlus);

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
