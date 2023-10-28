import { useEffect, useState } from "react";
import ButtonPrimary from "../button_primary.component";
import "./ong-form.styles.css";

const defaultFormFields = {
    titlu: "",
    descriere: "",
    adresa: "",
    email: "",
    imagine: "",
}

const OngForm = () => {
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
    useEffect(() => {
        const fetchOng = async () => {
            const response = await fetch('https://localhost:7272/api/Ong/ong?id=1');
            const ong = await response.json();
            const {name, ongDescription, address, email, image} = ong.data;
            setFormFields({
                titlu: name,
                descriere: ongDescription,
                adresa: address,
                email: email,
                imagine: image.slice(1)
            });
        };
        fetchOng();
      }, []);
    return (
        <div>
        <form className='ong-edit-container' action="" method="post">
        <div className='ong-edit-input-container'>
            <label className="ong-edit-label" >Titlu:</label>
            <input className="ong-edit-input" type="text" id="titlu" name="titlu" value={formFields.titlu} onChange={handleChange} required/>
        </div>
        
        <div className='ong-edit-input-container'>
        <label className="ong-edit-label">Descriere:</label>
        <textarea id="descriere" name="descriere" rows="4" cols="50" value={formFields.descriere} onChange={handleChange} required></textarea>
        </div>

        <div className='ong-edit-input-container'>
        <label  className="ong-edit-label">Adresa:</label>
        <input className="ong-edit-input" type="text" id="adresa" name="adresa" value={formFields.adresa} onChange={handleChange} required/>
        </div>

        <div className='ong-edit-input-container'>
        <label className="ong-edit-label" >Email:</label>
        <input className="ong-edit-input" type="email" id="email" name="email" value={formFields.email} onChange={handleChange} required/>
        </div>

        <div className='ong-edit-input-container'>
        <label className="ong-edit-label">Încarcă imagine:</label>
        <input className="ong-edit-input" type="file" id="imagine" name="imagine" accept="image/*" required/>
        </div>

        <div className='ong-profile-btn-container'>
        <ButtonPrimary name="Salveaza" icon="" className="ong-edit-btn"/>
        </div>
      </form>
    </div>
  );
};

export default OngForm;
