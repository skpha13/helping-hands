import './ong-preview.styles.css';
import AluzivaImg from '../../assets/aluziva.png'
const OngPreview = () => {
    return (
        <div className='ong-profile-container'>
            <h2 className='ong-profile-title'>Asociatia Aluziva</h2>
            <div className='ong-profile-img'> <img src={AluzivaImg} alt="logo-aluziva"/></div>
            <p className='ong-profile-desc'>Suntem toți aici să învățăm și împreună să facem o schimbare. 
                Susținem comunitățile defavorizate, în mod special mamele și copiii din medii vulnerabile, educația în mediul rural și orice alte cauze care nu pot schimba lumea, dar pot schimba lumea cuiva. 
                Picătură cu picătură se face un ocean. #picaturacupicaturasefaceunocean</p>
            <h3 className='ong-profile-contact'>Contact</h3>
            <p>Str. Dimitrie Cantemir nr. 3</p>
            <p>hello@asociatiaaluziva.ro</p>
        </div>
    )
}
export default OngPreview;