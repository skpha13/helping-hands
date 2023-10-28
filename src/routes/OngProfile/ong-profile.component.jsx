import './ong-profile.styles.css';
import OngPreview from '../../components/OngPreview/ong-preview.component';
import OngForm from '../../components/OngForm/ong-form.component'
const OngProfile = () => {
    return (
        <div>
            <h1 className='ong-profile-heading'>Preview profil</h1>
            <OngPreview/>
            <h1 className='ong-profile-heading'>Edit profil</h1>
            <OngForm/>
        </div>
    )
}
export default OngProfile;