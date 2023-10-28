import { useEffect, useState } from 'react';
import './ong-preview.styles.css';
const OngPreview = () => {
    const [ong, setOng] = useState({});
    useEffect(() => {
        const fetchOng = async () => {
            const response = await fetch('https://localhost:7272/api/Ong/ong?id=1');
            const ong = await response.json();
            console.log(ong);
            const {name, ongDescription, address, email, image} = ong.data;
            setOng( {
                titlu: name,
                descriere: ongDescription,
                adresa: address,
                email: email,
                imagine: image.slice(1) //am primit path ul cu un spatiu la inceput
            });
        };
        fetchOng();
      }, []);
      console.log(ong.imagine);
    return (
        <div className='ong-profile-container'>
            <h2 className='ong-profile-title'>{ong.titlu}</h2>
            <div className='ong-profile-img'> <img src={ong.imagine} alt="logo-aluziva"/></div>
            <p className='ong-profile-desc'>{ong.descriere}</p>
            <h3 className='ong-profile-contact'>Contact</h3>
            <p>{ong.adresa}</p>
            <p>{ong.email}</p>
        </div>
    )
}
export default OngPreview;