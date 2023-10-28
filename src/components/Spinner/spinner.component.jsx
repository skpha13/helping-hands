import './spinner.styles.css'
import SpinnerImg from '../../assets/loading.png';
const Spinner = () => {
    return (
        <div className='spinner-container'>
            <div className='spinner'>
                <img src={SpinnerImg} alt="spinner"/>
            </div>
        </div>
    )
}

export default Spinner;