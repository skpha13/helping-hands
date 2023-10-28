import './nav.styles.css'
import LogoSvg from '../../assets/logo/logo-svg.svg'
import { Link, Outlet } from 'react-router-dom'
const Nav = () =>{
    return(
        <>
        <div className='nav-container'>
            <LogoSvg/>
            <ul>
                <Link to='/feed'>Feed</Link>
                <Link to='/harta'>Harta</Link>
            </ul>
            <FontAwesomeIcon icon="fa-solid fa-user" style={{color: "#000000",}} />
        </div>
        <Outlet/>
        </>
    )
}

export default Nav;