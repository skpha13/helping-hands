import './landing-page.styles.css';

import { useNavigate } from "react-router-dom";
const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div className="landing-container">
            <div>
            <h1 className="landing-title">Selecteaza cine esti: </h1>
            <button className="landing-button" onClick={()=>{navigate('/utilizator')}}>Utilizator</button>
            <button className="landing-button" onClick={()=>{navigate('/ong')}}>ONG</button>
            </div>
        </div>
    );
}

export default LandingPage;