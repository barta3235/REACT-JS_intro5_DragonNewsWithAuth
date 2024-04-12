import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center space-y-2 mb-3'>
            <img className='mx-auto' src={logo} alt="" />
            <p>Journalism without fear or favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;