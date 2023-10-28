import ReactDOM from 'react-dom'
import LandingPage from './routes/LandingPage/landing-page.component';
import {Routes, Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import logo from './logo-svg.svg';
import './App.css';
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function App() {
  return (
   <Routes>
    <Route path="/" element={<LandingPage/>}></Route>
   </Routes>
  );
}

export default App;
