import { useEffect, useState } from 'react';
import ButtonPrimary from '../button_primary.component';
import './ong-form.styles.css'

const defaultFormFields = {
    titlu: "Asociatia Aluziva",
    descriere: "Suntem toți aici să învățăm și împreună să facem o schimbare. Susținem comunitățile defavorizate, în mod special mamele și copiii din medii vulnerabile, educația în mediul rural și orice alte cauze care nu pot schimba lumea, dar pot schimba lumea cuiva. Picătură cu picătură se face un ocean. #picaturacupicaturasefaceunocean",
    adresa: "Str. Dimitrie Cantemir nr. 3",
    email: "hello@asociatiaaluziva.ro",
    imagine: "../../assets/aluziva.png",
}

const OngForm = ()=>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const handleChange = (event) => {
        const { name, value, type } = event.target;

        if (type === 'file') {
          const file = event.target.files[0];
          setFormFields({ ...formFields, [name]: file });
        } else {
          setFormFields({ ...formFields, [name]: value });
        }
      };
    // useEffect(() => {
    //     const fetchOng = async () => {
    //         const response = await fetch('https://localhost:7272/api/Ong/ong?id=1');
    //         const ong = await response.json();
    //         console.log(ong);
    //         const {titlu, ongDescription, adress, email, image} = ong.data;
    //         // setFormFields(ong);
    //     };
    //     fetchOng();
    //   }, []);
    return (
        <div>
        <form className='ong-edit-container' action="" method="post">
        <div className='ong-edit-input-container'>
            <label className="ong-edit-label" for="titlu">Titlu:</label>
            <input className="ong-edit-input" type="text" id="titlu" name="titlu" value={formFields.titlu} onChange={handleChange} required/>
        </div>
        
        <div className='ong-edit-input-container'>
        <label className="ong-edit-label" for="descriere">Descriere:</label>
        <textarea id="descriere" name="descriere" rows="4" cols="50" value={formFields.descriere} onChange={handleChange} required></textarea>
        </div>

        <div className='ong-edit-input-container'>
        <label  className="ong-edit-label" for="adresa">Adresa:</label>
        <input className="ong-edit-input" type="text" id="adresa" name="adresa" value={formFields.adresa} onChange={handleChange} required/>
        </div>

        <div className='ong-edit-input-container'>
        <label className="ong-edit-label" for="email">Email:</label>
        <input className="ong-edit-input" type="email" id="email" name="email" value={formFields.email} onChange={handleChange} required/>
        </div>

        <div className='ong-edit-input-container'>
        <label className="ong-edit-label" for="imagine">Încarcă imagine:</label>
        <input className="ong-edit-input" type="file" id="imagine" name="imagine" accept="image/*" required/>
        </div>

        <div className='ong-profile-btn-container'>
        <ButtonPrimary name={"Salveaza"} icon={""} className="ong-edit-btn"/>
        </div>
                
        </form>
        </div>
    )
}

export default OngForm;